/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useResize } from '../../hooks'
import { Gallery, ButtonImagesComposition, Mic } from '..'
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
        GroupActive,
        TimelineFeaturesButtonComposition,
        GalleryContainer,
        HorizontalLine,
        MotionContainer } from './index.styled'
import data from '../../assets/mock-data/timeline.json'
import { ASSETS_FOLDER } from '../../assets'
import { useSelector } from 'react-redux'

function TimelineDesktopComponent({typeOfClick = "mouse-position"}) {

  const [ textDistance, setTextDistance ] = useState(null);
  const [ currentYear, setCurrentYear ] = React.useState(null);
  const [ sobra, setSobra ] = useState(0);
  const { isMobile, width } = useResize();
  const [ bikeDirection, setBikeDirection ] = useState("to-right")
  const [ timelineEnable, setTimelineEnable ] = useState(false);
  const [ showGallery, setShowGallery ] = useState(false);
  const [ xAnimate, setXAnimate ] = useState(0);
  const [ currentOffset, setCurrentOffset] = useState(0);
  const [ timelineStyle, setTimelineStyle ] = useState({});
  const [ activeSide, setActiveSide ] = useState(null);

  const textRef = useRef(null);
  const containerButtonRef = useRef(null);

  const audioRef = useRef(null);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ audioUrl, setIsPlayingsetAudioUrl ] = useState('');

  let firstClick = 0;
  let posMouse = 0;

  const locale = useSelector(state => state.app.locale);
  const folderAudio = locale === "es" ? "ESP" : "ENG"
  
  const onClick = (e) => {
    console.log("audioRef", audioRef)
    
    if((Date.now() - firstClick) > 300) {
      // console.log("barrado pelo return", (Date.now() - firstClick))
      return;
    }
    const mouseMoved = (posMouse - e.clientX) < 0 ? (posMouse - e.clientX) * -1: (posMouse - e.clientX);
    console.log("mouseMoved", mouseMoved)
    if(mouseMoved > 5) return;

    const { id, title, description, images, group, audio } = e.currentTarget.dataset;

    setIsPlayingsetAudioUrl(`${ASSETS_FOLDER}/audio/${folderAudio}/${audio}${folderAudio}.mp3`) 
    //setIsPlayingsetAudioUrl(`/audio/${folderAudio}/${audio}${folderAudio}.mp3`) 
    setCurrentOffset(0);

    // If is current button, deactive
    if(id === currentYear?.id ) {
      console.log('If is current button')
      // setCurrentYear(null);
      // setBikeDirection("to-right")
      // setCurrentOffset(0);
      // setTextDistance(textRef?.current.offsetWidth + 8)
      return;
    }

    // 136 = padding
    let newDistance = e.currentTarget.offsetLeft - 136;

    if(typeOfClick === 'mouse-position') {
      const clickMiddleLeft = e.clientX < (window.innerWidth / 2);

      if(clickMiddleLeft) {
        const posLeft = (-200 + e.currentTarget.offsetLeft) * -1;
        setXAnimate(posLeft);
        setActiveSide('right');
        console.log('clickMiddleLeft')
      } else {
        const vwPadding = (window.innerWidth - 500);
        const posLeft = (-vwPadding + e.currentTarget.offsetLeft) * -1;
        setCurrentOffset(e.currentTarget.offsetLeft);
        setXAnimate(posLeft);
        setActiveSide('left');
      }
    } else if(typeOfClick === 'group-posititon') {
      // Active timeline to left position, 200 = margin to left
      if(group === 'left-group') {
        const posLeft = (-200 + e.currentTarget.offsetLeft) * -1;
        setXAnimate(posLeft);
        setActiveSide('right');
      }

      if(group === 'right-group') {
        const vwPadding = (window.innerWidth - 500);
        const posLeft = (-vwPadding + e.currentTarget.offsetLeft) * -1;
        setCurrentOffset(e.currentTarget.offsetLeft);
        setXAnimate(posLeft);
        setActiveSide('left');
      }
    }

    textDistance < newDistance ? setBikeDirection("to-right") : setBikeDirection("to-left");
    // remove 10px on turning bike to the left
    if(textDistance > newDistance) {
      newDistance += 10;
    } else {
      newDistance -= 4;
    }

    if(currentYear === null) newDistance += 10;

    setTextDistance(newDistance)

    setCurrentYear({
      id: id,
      title: title,
      description: description,
      images: images.length > 0 ? images.split(',') : []
    });
  }

  const setDown = (e) => {
    firstClick = Date.now();
    console.log('setDown')
    posMouse = e.clientX;
  }

  const handleEnableTimelime = () => {
    setXAnimate(-270);
    setTimelineEnable(true);
  }

  const closeGallery = () => {
    setShowGallery(false);
  }

  const openGallery = () => {
    setShowGallery(true);
  }

  useEffect(() => {
    if(!timelineEnable && currentYear === null) setTimelineStyle({cursor: 'default'})

    if(timelineEnable && currentYear === null) setTimelineStyle({})

    if(timelineEnable && currentYear !== null) setTimelineStyle({cursor: 'default'})
  }, [currentYear, timelineEnable])

  useEffect(() => {
    const mRight = isMobile ? 8 : 20;
    if(currentYear === null) setTextDistance(textRef?.current.offsetWidth + mRight);

    const limitDrag = (containerButtonRef.current.offsetWidth - width) *-1;
    setSobra(limitDrag);

    // Reposition of the active right (if active)
    if(currentOffset !== 0) {
      const vwPadding = (window.innerWidth - 500);
      const posLeft = (-vwPadding + currentOffset) * -1;
      setXAnimate(posLeft);
    }
  }, [isMobile, width])

  useEffect(() => {
    setIsPlaying(false)
  }, [audioUrl])

  return (
    <Container>
      <audio id="act-audio" src={audioUrl} ref={audioRef} />
      <AnimatePresence>
        {currentYear === null &&
          <TimelineSplashScreen key="splashscreen-description" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5, ease: 'easeInOut', duration: .5}}} exit={{opacity: 0, transition: { duration: .3}}}>
            <Text textTransform="uppercase" letterSpacing="3.2px" fontSize="40px" fontWeight="500" textId="timeline.title" />
            <Text className="splashscreen-description" letterSpacing=".9px" lineHeight="30px" fontSize="15px" fontWeight="100" textId="timeline.description" />
          </TimelineSplashScreen>
        }
      </AnimatePresence>
      <AnimatePresence>
        {currentYear !== null &&
          <React.Fragment key="timeline-features">
            {currentYear?.images.length > 0 &&
              <TimelineFeaturesButtonComposition className={`${activeSide}`} onClick={openGallery}>
                <ButtonImagesComposition key={currentYear?.title} images={currentYear?.images} />
              </TimelineFeaturesButtonComposition>
             }
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
        <TimelineScroll style={timelineStyle} animate={{x: xAnimate, transition: {duration: .8, ease: 'easeInOut'}}} drag={timelineEnable && currentYear === null ? 'x' : false} dragConstraints={{ left: sobra, right: 0 }} ref={containerButtonRef} className={timelineEnable ? 'enabled' : 'disabled'}>
          <EnterTour onClick={() => {!timelineEnable && currentYear === null && handleEnableTimelime()}} className={!timelineEnable && currentYear === null  ? 'enabled' : 'disabled'}>
            <TextContainer ref={textRef} className="text-container">
              <Text textTransform="uppercase" letterSpacing=".8px" lineHeight="30px" fontSize="16px" fontWeight="100" textId="timeline.button-title" />
            </TextContainer>
            {textDistance &&
              <BikeContainer distance={textDistance} className={`bike-container ${bikeDirection} ${currentYear !== null ? 'blocked-hover': ''}`}>
                <MdDirectionsBike color="#FFF"/>
              </BikeContainer>
            }
          </EnterTour>
            {data.map((year, index) => {
              let classActive = currentYear?.id === year.id ? 'active': '';
              classActive += !timelineEnable && currentYear?.id !== year.id ? ' disabled' : '';
              classActive += timelineEnable && currentYear?.id !== null ? ' timeline-enabled' : '';
              const group = index < parseInt(data.length / 2) ? 'left-group' : 'right-group';
              return(
                /*style={{cursor: currentYear !== null ? 'pointer' : 'grab' }}*/
                <ButtonYear style={{cursor: currentYear !== null ? 'pointer' : 'grab' }} className={classActive} key={year.id} data-group={group} data-id={year.id} data-audio={year.audio} data-title={year.title} data-description={year.description} data-images={year.images} onMouseUp={onClick} onMouseDown={setDown}>
                  <Text className="button-text" textId={year.id} />
                  <HorizontalLine className="horizontal-line" />
                  <AnimatePresence>
                    { currentYear?.id === year.id &&
                      <GroupActive key={year.title} initial={{opacity: 0,x: -25}} animate={{opacity: 1, x: 0, transition: {delay: .2, ease: 'easeInOut', duration: .5}}} exit={{opacity: 0, x: 10, transition: { duration: .25}}}>
                        <Text className="active-title" textTransform="uppercase" letterSpacing="1.6px" lineHeight="28px;" fontSize="15px" fontWeight="700" textId={currentYear.title} />
                        <MotionContainer className="mic">
                          <Mic clickHandler={() => {
                            console.log('Mic', audioRef)
                            isPlaying ? audioRef.current.pause() : audioRef.current.play()
                            setIsPlaying(!isPlaying)
                          }}/>
                        </MotionContainer>
                        <Text className="active-description" letterSpacing=".9px" lineHeight="28px;" fontSize="15px" fontWeight="100" textId={currentYear.description} />
                      </GroupActive>
                    }
                  </AnimatePresence>
                </ButtonYear>
              )
            })}
            <DistanceRight />
        </TimelineScroll>
      </TimelineButtonsContainer>
    </Container>
  )
}

export default TimelineDesktopComponent
