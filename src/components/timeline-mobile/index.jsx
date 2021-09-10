/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useResize } from '../../hooks'
import { Gallery, ButtonImagesComposition } from '..'
import { MdDirectionsBike } from 'react-icons/md'
import { Text } from '..'
import { Container, 
        TimelineButtonsContainer, 
        ButtonYear, 
        TimelineScroll,
        EnterTour,
        TextContainer,
        BikeContainer,
        DistanceRight,
        TimelineSplashScreen,
        TimelineFeaturesContainer,
        GalleryContainer,
        TimelineFeaturesButtonComposition,
        HorizontalLine } from './index.styled'
import data from '../../assets/mock-data/timeline.json'

function TimelineMobileComponent() {

  const [textDistance, setTextDistance ] = useState(null);
  const [currentYear, setCurrentYear ] = useState(null);
  const [sobra, setSobra ] = useState(0);
  const { isMobile, width } = useResize();
  const [ bikeDirection, setBikeDirection ] = useState("to-right")
  const textRef = useRef(null);
  const containerButtonRef = useRef(null);
  const [ timelineEnable, setTimelineEnable ] = useState(false);
  const[ showGallery, setShowGallery ] = useState(false);

  const [ xAnimate, setXAnimate ] = useState(0);

  let firstClick = 0;
  let posMouse = 0;

  const onClick = (e) => {
    if((Date.now() - firstClick) > 300) return;
    const mouseMoved = (posMouse - e.clientX) < 0 ? (posMouse - e.clientX) * -1: (posMouse - e.clientX);
    if(mouseMoved > 5) return;
    
    const { id, title, description, images } = e.currentTarget.dataset;

    // If is current button, deactive
    if(id === currentYear?.id ) {
      setCurrentYear(null);
      setBikeDirection("to-right")
      setTextDistance(textRef?.current.offsetWidth + 8)
      return;
    }

    // 20 = padding
    let newDistance = e.currentTarget.offsetLeft - 20;

    textDistance < newDistance ? setBikeDirection("to-right") : setBikeDirection("to-left");

    // remove 10px on turning bike to the left
    if(textDistance > newDistance) newDistance += 10;

    if(currentYear === null) newDistance += 10;

    setTextDistance(newDistance)

    setCurrentYear({
      id: id,
      title: title,
      description: description,
      images: images.length > 0 ? images.split(',') : []
    });
  }

  const handleEnableTimelime = () => {
    console.log("enable timeline")
    setXAnimate(-120);
    setTimelineEnable(true);
  }

  const setDown = (e) => {
    firstClick = Date.now();
    posMouse = e.clientX;
  }

  const closeGallery = () => {
    setShowGallery(false);
  }

  const openGallery = () => {
    setShowGallery(true);
  }

  useEffect(() => {
    const mRight = isMobile ? 8 : 20;
    if(currentYear === null) setTextDistance(textRef?.current.offsetWidth + mRight);

    const limitDrag = (containerButtonRef.current.offsetWidth - width) *-1;
    setSobra(limitDrag);
  }, [isMobile, width])

  return (
    <Container>
      <AnimatePresence>
        {currentYear === null && 
          <TimelineSplashScreen key="splashscreen-description" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5, ease: 'easeInOut', duration: .5}}} exit={{opacity: 0, transition: { duration: .3}}}>
            <Text textTransform="uppercase" letterSpacing="1.8px" lineHeight="28px;" fontSizeMobile="23px" fontWeight="400" textId="timeline.title" />
            <Text className="splashscreen-description" letterSpacing=".9px" fontSizeMobile="15px" fontWeight="100" textId="timeline.description" />
          </TimelineSplashScreen>
        }
      </AnimatePresence>
      <AnimatePresence>
        {currentYear !== null && 
          <React.Fragment>
            {currentYear?.images.length > 0 &&
              <TimelineFeaturesButtonComposition onClick={openGallery}>
                <ButtonImagesComposition key={currentYear?.title} images={currentYear?.images} />
              </TimelineFeaturesButtonComposition>
             }
            <TimelineFeaturesContainer key={currentYear.title} initial={{opacity: 0,x: -25}} animate={{opacity: 1, x: 0, transition: {delay: .2, ease: 'easeInOut', duration: .5}}} exit={{opacity: 0, x: 10, transition: { duration: .25}}}>
              <Text className="active-title" textTransform="uppercase" letterSpacing="1.8px" lineHeight="28px;" fontSizeMobile="23px" fontWeight="400" textId={currentYear.title} />
              <Text className="active-description" letterSpacing=".9px" fontSizeMobile="15px" fontWeight="100" textId={currentYear.description} />
            </TimelineFeaturesContainer>
          </ React.Fragment>
        }
      </AnimatePresence>
      <AnimatePresence>
        {showGallery &&
          <GalleryContainer key="gallery-container" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .2, ease: 'easeInOut', duration: .5}}} exit={{opacity: 0, transition: { duration: .5}}}>
            <Gallery images={currentYear?.images} closeHandler={closeGallery} />
          </GalleryContainer>
        }
      </AnimatePresence>
      <TimelineButtonsContainer>
        <TimelineScroll animate={{x: xAnimate, transition: {duration: .8, ease: 'easeInOut'}}} drag={timelineEnable ? 'x' : false} dragConstraints={{ left: sobra, right: 0 }} ref={containerButtonRef}>
          <EnterTour onClick={() => {!timelineEnable && handleEnableTimelime()}} >
            <TextContainer ref={textRef} className="text-container">
              <Text textTransform="uppercase" letterSpacing=".8px" lineHeight="30px" fontSize="16px" fontWeight="100" textId="timeline.button-title" />
            </TextContainer>
            {textDistance && 
              <BikeContainer distance={textDistance} className={`bike-container ${bikeDirection} ${currentYear !== null ? 'blocked-hover': ''}`}>
                <MdDirectionsBike color="#FFF"/>
              </BikeContainer>
            }
          </EnterTour>
            {data.map(year => {
              let classActive = currentYear?.id === year.id ? 'active': '';
              classActive += !timelineEnable ? ' disabled' : '';
              return(
                <ButtonYear className={classActive}  key={year.id} data-id={year.id} data-title={year.title} data-description={year.description} data-images={year.images} onMouseUp={onClick} onMouseDown={setDown}>
                  <Text className="button-text" textId={year.id} />
                  <HorizontalLine className="horizontal-line" />
                </ButtonYear>
              )
            })}
            <DistanceRight />
        </TimelineScroll>
      </TimelineButtonsContainer>
    </Container>
  )
}

export default React.memo(TimelineMobileComponent)
