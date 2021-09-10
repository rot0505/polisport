/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { AppActionType } from '../../effects/types'
import { useDispatch, useSelector } from 'react-redux'
import { useResize } from '../../hooks'
import { Header, Footer, Zoom } from '..'



import {
  Container,
  MapWrapper,
  ImageContainer,
  FooterContainer
} from './index.styled'
import { renderMap } from '../../utils';

function MapComponent() {

  const { isMobile, vhMobile, width, height } = useResize();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [sizeMobile, setSizeMobile] = useState(0);
  const [currentScale, setCurrentScale] = useState(1);
  const [currentPos, setCurrentPos] = useState(0);
  const [dragLimits, setDragLimits] = useState({})
  const mapId = useSelector(state => state.app.mapId)
  const floor = useSelector(state => state.app.floor)


  const ref = useRef(null);

  const maxZoomScale = 2;

  const variants = {
    hidden: { opacity: .5 },
    visible: { opacity: 1, transition: { duration: .4 } },
    exit: { opacity: .5, transition: { duration: .4 } }
  }

  const handleCloseMap = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MAP, payload: { show: false, map: null } });
  }

  const upZoom = () => {
    if (currentScale < maxZoomScale) {
      setCurrentScale(currentScale + .2);
    }
  }

  const downZoom = () => {
    if (currentScale > 1) {
      var _zoom = currentScale - .2;
      if (_zoom < 1) _zoom = 1;
      currentScale !== 1 && setCurrentScale(_zoom);
    }
  }

  const setDragContrains = (WrapperSize, ImageSize) => {

    const sobraW = WrapperSize.width - ImageSize.width;
    const sobraH = WrapperSize.height - ImageSize.height;

    if(WrapperSize.width !== ImageSize.width && isMobile) {
      setDragLimits({
        top: (sobraH -200 / 2),
        left: (sobraW - 200 / 2),
        right: -((sobraW + 900) / 2),
        bottom: -(sobraH / 2),
      })
    } else {
      setDragLimits({
        top: (sobraH  / 2),
        left: (sobraW / 2),
        right: -(sobraW / 2),
        bottom: -(sobraH / 2),
      })
    }
  }

  useEffect(() => {
    !loaded && setSizeMobile(vhMobile)
    !isMobile && setSizeMobile(vhMobile)
    setLoaded(true);
  }, [isMobile])

  useEffect(() => {
    if (ref?.current) {
      setTimeout(() => {
        const _image = ref?.current.getBoundingClientRect();
        const _wrapper = ref?.current.parentNode.getBoundingClientRect();

        const imgSvg = ref?.current.querySelector('svg').getBoundingClientRect();

        let ImageSize;

        if(isMobile){
          ImageSize = {
            width: imgSvg.width,
            height: imgSvg.height
          }
        } else {
          ImageSize = {
            width: _image.width,
            height: _image.height
          }
        }

        const WrapperSize = {
          width: _wrapper.width,
          height: _wrapper.height
        };

        setDragContrains(WrapperSize, ImageSize)
      }, 300)
      const newPos = currentPos === 0 ? -0.1 : 0;
      setCurrentPos(newPos);
    }

  }, [currentScale, width, height]);

  const checkDrag = () => {
    let _return = false;
    if(isMobile) {
      currentScale >= 1 ? _return = true : _return =  false
    } else {
      currentScale > 1 ? _return = true : _return = false
    }

    return _return;
    
  }

  return (
    <Container className="eds" variants={variants} initial="hidden" animate="visible" exit="exit" vh={sizeMobile}>
      {loaded && <>
        <Header textClose="map.close" showClose={true} onClickClose={handleCloseMap} />
        <div className="row no-gutters position-relative h-100 pr-4">
          <div className="col-lg-12 d-flex justify-content-end align-items-center">
            <Zoom handleDown={downZoom} handleUp={upZoom} />
          </div>
        </div>
        <MapWrapper>
          <ImageContainer className={currentScale > 1 ? 'scaled' : ''} ref={ref} animate={{ scale: currentScale, x: currentPos, y: currentPos }}
            transition={{ duration: .3, ease: 'easeInOut' }}
            drag={checkDrag()}
            dragConstraints={dragLimits} >
              <div style={{width: '100%', height: '100%', objectFit: 'contain'}}>
                {renderMap(mapId, floor, false)}
              </div>
          </ImageContainer>
        </MapWrapper>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </>}
    </Container>
  )
}

export default MapComponent
