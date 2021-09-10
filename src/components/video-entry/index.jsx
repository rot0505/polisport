/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { AppActionType } from '../../effects/types'
import { useDispatch, useSelector } from 'react-redux'
import { useResize } from '../../hooks'
import { Text,
        Header,
        Mic,
        BtnMotoKnowMore,
        FooterPage as Footer} from '..'

import { Container, FooterContainer, MotionContainer, VideoContainer } from './index.styled'
import { ASSETS_FOLDER } from '../../assets'

function VideoEntryComponent() {

  const { isMobile, vhMobile } = useResize();
  const [ loaded, setLoaded ] = useState(false);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.app.showVideo?.data);
  const locale = useSelector(state => state.app.locale);
  const audioRef = useRef(null);

  const { title, subtitle, description, video, knowMore, audio, image } = data;
  // usage:
  // data {
  //   title,
  //   subtitle,
  //   description
  // }

  const [sizeMobile, setSizeMobile ] = useState(0);

  const variants = {
    hidden: { x: '0', opacity: .5},
    visible: { x: 0, opacity: 1, transition: { duration: .4 }},
    exit: { x: '0', opacity: .5, transition: { duration: .2 }}
  }

  const handleCloseVideo = () => {

    const data = {
      open: false,
      data: {
        title: '',
        subtitle: '',
        description: ''
      }
    }
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_VIDEO, payload: data });
  }

  useEffect(() => {
    console.log('data-video-entry', data)
    !loaded && setSizeMobile(vhMobile)
    !isMobile && setSizeMobile(vhMobile)
    setLoaded(true);
  }, [isMobile])

  const folder = locale === "es" ? "ESP" : "ENG"
  const audioUrl = `${ASSETS_FOLDER}/audio/${folder}/${audio}${folder}.mp3` 
  const videoUrl = `${ASSETS_FOLDER}/videos/hotspots/${video}`
  const imageUrl = `${ASSETS_FOLDER}/images/${image}`
  // const audioUrl = `/audio/${folder}/${audio}${folder}.mp3` 
  // const videoUrl = `/videos/hotspots/${video}`
  // const imageUrl = `/images/${image}`

  return (
      <Container className="eds" variants={variants} initial="hidden" animate="visible" exit="exit" vh={sizeMobile}>
      {loaded && <>
        <Header showClose={true} onClickClose={handleCloseVideo} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-0">
                 {audio &&
                    (<audio id="act-audio" ref={audioRef} autoplay>
                      <source src={audioUrl} type="audio/mp3" />
                    </audio>)
                  }
                <Text fontSize="32px" fontSizeMobile="18px" lineHeight="30px" fontWeight="500" letterSpacing="2.6px" textTransform="uppercase" textId={title} />
                {subtitle &&
                  <MotionContainer className="subtitle">
                    <Text fontSize="19px" fontSizeMobile="14px" lineHeight="30px" fontWeight="300" letterSpacing="1.8px" textTransform="uppercase" textId={subtitle} />
                  </MotionContainer>
                }
                {audio && <MotionContainer className="mic">
                  <Mic clickHandler={() => {
                    isPlaying ? audioRef.current.pause() : audioRef.current.play()
                    setIsPlaying(!isPlaying)
                  }}/>
                </MotionContainer>
                }
                {description &&
                  <MotionContainer className="description">
                    <Text fontSize="13px" fontSizeMobile="13px" lineHeight="24px" fontWeight="300" letterSpacing="1.8px"  textId={description} />
                  </MotionContainer>
                }
            </div>
            <div className="col-12 col-md-6 mb-3">
              {video && (
                <VideoContainer background="dark">
                  <video
                    crossOrigin="anonymous"
                    playsInline={true}
                    controls={true}
                  >
                    <source src={videoUrl} />
                  </video>
                </VideoContainer>
              )}
               {image && (
                 <VideoContainer style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'center'}} />
               )}
            </div>
          </div>
        </div>
        {knowMore && (<BtnMotoKnowMore type="gray" bottomDistance={isMobile ? 50: 90 } clickHandler={() => window.open(knowMore, '_blank')} />)}
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </>}
      </Container>
  )
}

export default VideoEntryComponent
