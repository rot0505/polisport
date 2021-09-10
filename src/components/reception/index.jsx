/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AppActionType } from '../../effects/types'
import { useDispatch, useSelector } from 'react-redux'
import { useResize } from '../../hooks'
import { IntroReception, 
        Text, 
        CarouselBullet, 
        Header, 
        Footer, 
        ReceptionBrand,
        Mic} from '..'
        
import { LogoCarrousselPolisportBlue,
         LogoCarrousselBobike,
         LogoCarrousselCatlike,
         LogoCarrousselCemoto,
         LogoCarrousselCosmo,
         LogoCarrousselDieffe,
         LogoCarrousselPolisport,
         LogoCarrousselPolisportBlack,
         LogoCarrousselPolisportRed,
         ASSETS_FOLDER } from '../../assets'

import { Container, 
          MotionContainer, 
          ContentContainer, 
          FooterContainer,
          TextContainer,
          TextHighLight } from './index.styled'

function ReceptionComponent() {

  const { isMobile, vhMobile } = useResize();
  const [ loaded, setLoaded ] = useState(false);
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const locale = useSelector(state => state.app.locale);
  const folderAudio = locale === "es" ? "ESP" : "ENG"

  const internalSteps = ['polisport-blue', 
                        'polisport-red',
                        'polisport-black',
                        'bobike', 
                        'dieffe', 
                        'cosmo', 
                        'catlike', 
                        'cemoto', 
                        'polisport'];

  const [ step, setStep ] = useState('intro');
  // const [sizeMobile, setSizeMobile ] = useState(window.innerHeight * 0.01);
  const [sizeMobile, setSizeMobile ] = useState(0);
  const fadeMotion = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }}

  const changeStep = () => {
    switch(step){
      case 'intro':
        setStep("polisport-blue");
        break;
      case 'polisport-blue':
        setStep("polisport-red");
        break;
      case 'polisport-red':
        setStep("polisport-black");
        break;
      case 'polisport-black':
        setStep("bobike");
        break;
      case 'bobike':
        setStep("dieffe");
        break;
      case 'dieffe':
        setStep("cosmo");
        break;
      case 'cosmo':
        setStep("catlike");
        break;
      case 'catlike':
        setStep("cemoto");
        break;
      case 'cemoto':
        setStep("polisport");
        break;
      case 'polisport':
          console.log("terminou")
          break;
      default: 
        return;
    }
  }

  const getStepComponent = () => {
    switch(step){
      case "intro":
        return <IntroReception nextStep={changeStep} />
      case "polisport-blue":
        return <ReceptionBrand key="polisport-blue" data={{
                                  logo: LogoCarrousselPolisportBlue,
                                  title: "reception.polisport-blue.title",
                                  description: "reception.polisport-blue.description"
                                }}  />;
      case "polisport-red":
        return <ReceptionBrand key="polisport-red" data={{
                                logo: LogoCarrousselPolisportRed,
                                title: "reception.polisport-red.title",
                                description: "reception.polisport-red.description"
                              }} />;
      case "polisport-black":
        return <ReceptionBrand key="polisport-black" data={{
                                logo: LogoCarrousselPolisportBlack,
                                title: "reception.polisport-black.title",
                                description: "reception.polisport-black.description"
                              }} />;
      case "bobike":
        return <ReceptionBrand key="bobike" data={{
                                logo: LogoCarrousselBobike,
                                title: "reception.polisport-bobike.title",
                                description: "reception.polisport-bobike.description"
                              }}  />;
      case "dieffe":
        return <ReceptionBrand key="dieffe" data={{
                                logo: LogoCarrousselDieffe,
                                title: "reception.polisport-dieffe.title",
                                description: "reception.polisport-dieffe.description"
                              }}  />;
      case "cosmo":
        return <ReceptionBrand key="cosmo" data={{
                                logo: LogoCarrousselCosmo,
                                title: "reception.polisport-cosmo.title",
                                description: "reception.polisport-cosmo.description"
                              }}  />;
      case "catlike":
        return <ReceptionBrand key="catlike" data={{
                                logo: LogoCarrousselCatlike,
                                title: "reception.polisport-catlike.title",
                                description: "reception.polisport-catlike.description"
                              }}  />;
      case "cemoto":
        return <ReceptionBrand key="cemoto" data={{
                                logo: LogoCarrousselCemoto,
                                title: "reception.polisport-cemoto.title",
                                description: "reception.polisport-cemoto.description"
                              }}  />;
      case "polisport":
        return <ReceptionBrand key="polisport" data={{
                                logo: LogoCarrousselPolisport,
                                title: "reception.polisport-polisport.title",
                                description: "reception.polisport-polisport.description"
                              }}  />;
      default: 
        return '';
    }
  }

  const variants = {
    hidden: { x: '-102vw', opacity: .5},
    visible: { x: 0, opacity: 1, transition: { duration: .7 }},
    exit: { x: '-102vw', opacity: .5, transition: { duration: .7 }}
  }

  const handleCloseReception = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_RECEPTION, payload: false });
  }

  useEffect(() => {
    !loaded && setSizeMobile(vhMobile)
    !isMobile && setSizeMobile(vhMobile)
    setLoaded(true);
  }, [isMobile])
  
  // <source src={`/audio/${folderAudio}/${'034'}${folderAudio}.mp3`} type="audio/mp3" /> 
  return (
      <Container className="eds" variants={variants} initial="hidden" animate="visible" exit="exit" vh={sizeMobile}>
        <audio id="act-audio" ref={audioRef}>
          <source src={`${ASSETS_FOLDER}/audio/${folderAudio}/${'034'}${folderAudio}.mp3`} type="audio/mp3" /> 
        </audio>
      {loaded && <>
        <Header showClose={true} onClickClose={handleCloseReception} />
        <ContentContainer className="centered">
          { isMobile && step === 'intro' &&
          <TextHighLight vh={sizeMobile}>
            {isMobile ? 
              <Text fontSizeMobile="23px" lineHeight="30px" fontWeight="500" letterSpacing="1.9px" textTransform="uppercase" textId="hotspot.title.we-are-global" />:
              <Text fontSize="32px" fontWeight="500" letterSpacing="2.4px" textTransform="uppercase" textId="hotspot.title.we-are-global" />
            }
            <MotionContainer className="mic">
              <Mic clickHandler={() => {
                isPlaying ? audioRef.current.pause() : audioRef.current.play()
                setIsPlaying(!isPlaying)
              }}/>
            </MotionContainer>
            {isMobile ? 
              <Text style={{width: '100%', paddingTop:'20px'}} letterSpacing="1.8px" lineHeight="24px" fontSize="16px" fontWeight="100" textId="hotspot.description.we-are-global" />:
              <Text style={{width: '520px', paddingTop:'14px'}} letterSpacing="1.1px" lineHeight="26px" fontSize="12px" fontWeight="100" textId="hotspot.description.we-are-global" />
            }
          </TextHighLight>
          }
          { !isMobile  && 
          <TextHighLight vh={sizeMobile}>
            {isMobile ? 
              <Text fontSizeMobile="23px" lineHeight="30px" fontWeight="500" letterSpacing="1.9px" textTransform="uppercase" textId="hotspot.title.we-are-global" />:
              <Text fontSize="32px" fontWeight="500" letterSpacing="2.4px" textTransform="uppercase" textId="hotspot.title.we-are-global" />
            }
            <MotionContainer className="mic">
              <Mic clickHandler={() => {
                isPlaying ? audioRef.current.pause() : audioRef.current.play()
                setIsPlaying(!isPlaying)
              }}/>
            </MotionContainer>
            {isMobile ? 
              <Text style={{width: '100%', paddingTop:'20px'}} letterSpacing="1.8px" lineHeight="24px" fontSize="16px" fontWeight="100" textId="hotspot.description.we-are-global" />:
              <Text style={{width: '520px', paddingTop:'14px'}} letterSpacing="1.1px" lineHeight="26px" fontSize="12px" fontWeight="100" textId="hotspot.description.we-are-global" />
            }
          </TextHighLight>
          }
          {step === 'intro' && loaded && !isMobile && getStepComponent()}
          <AnimatePresence exitBeforeEnter>
            { step !== 'intro' && getStepComponent()}
          </AnimatePresence>
          <AnimatePresence>
            {step !== 'intro' && !isMobile && 
              <MotionContainer key="CarouselBullet" {...fadeMotion}>
                <CarouselBullet bulletsColor={{active: '#bfbfbf', normal: '#585858'}} steps={internalSteps} currentStep={step} nextStep={changeStep} />
              </MotionContainer>
            }
          </AnimatePresence>
          <TextContainer onClick={() => changeStep()}>
            { isMobile && 
              <Text fontSizeMobile="12.1px" color="#666666" lineHeight="30px" fontWeight="100" letterSpacing="1px" textTransform="uppercase" textId="splash.tap-to-continue" />
              
            }
            { !isMobile && step === 'intro' &&
              <Text fontSize="12px" color="#666666" lineHeight="12px" fontWeight="100" letterSpacing="1.9px" textTransform="uppercase" textId="splash.click-to-continue" />
            }
          </TextContainer>
        </ContentContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        </>}
      </Container>
  )
}

export default ReceptionComponent
