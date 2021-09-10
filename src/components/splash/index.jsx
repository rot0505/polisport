/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { AppActionType } from '../../effects/types'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { useHistory } from 'react-router'
import { useResize } from '../../hooks'
import { Intro, CarouselBullet, Header, Footer, SoundStep, BrandStep, ProductsStep, SpotStep } from '..'
import { Container, Background, MotionContainer, ContentContainer, FooterContainer } from './index.styled'

function SplashComponent({redirectPath = '/polisport/polisport-plastics', modal = false, startAt = "intro" }) {
  const dispatch = useDispatch();
  const { isMobile, vhMobile } = useResize();
  const [ loaded, setLoaded ] = useState(false);
  const history = useHistory();

  const internalSteps = ['sound', 'brand', 'products', 'spot'];

  const [ step, setStep ] = useState(startAt);
  const [sizeMobile, setSizeMobile ] = useState(window.innerHeight * 0.01);
  const fadeMotion = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }}

  const changeStep = (newStep) => {
    if(newStep !== 'finish'){
      setStep(newStep);
    } else {
      if(modal) {
        handleCloseHelp();
      } else {
        history.replace(redirectPath);
      }
    }
  }

  const handleChangeStep = () => {
    const currentIndice = internalSteps.findIndex(idx => idx === step);
    if(currentIndice < step.length -1) {
      changeStep(internalSteps[currentIndice + 1])
    } else {
      changeStep('finish')
    }
  }

  const handleCloseHelp = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_HELP, payload: false });
  }

  const getStepComponent = () => {
    switch(step){
      case "intro":
        return <Intro nextStep={changeStep} />
      case "sound":
        return <SoundStep key="sound" />;
      case "brand":
        return <BrandStep key="brand"/>;
      case "products":
        return <ProductsStep key="product" />;
      case "spot":
        return <SpotStep key="spot" />;
      default: 
        return '';
    }
  }

  useEffect(() => {
    !loaded && setSizeMobile(vhMobile)
    !isMobile && setSizeMobile(vhMobile)
    setLoaded(true);
  }, [isMobile])
  
  return (
    <Container className={step === 'intro' ? "bg-composition": ''} vh={sizeMobile}>
      { !modal ? <Header /> : <Header showClose={true} onClickClose={handleCloseHelp} />}
      
      <ContentContainer className={step !== 'intro' ? "centered": ''} onClick={step !== 'intro' ? () => handleChangeStep(): () => {}}>
        {step === 'intro' && getStepComponent()}
        <AnimatePresence exitBeforeEnter>
           { step !== 'intro' && getStepComponent()}
        </AnimatePresence>
        <AnimatePresence>
          {step !== 'intro' && 
            <MotionContainer key="CarouselBullet" {...fadeMotion}>
              <CarouselBullet  steps={internalSteps} currentStep={step} nextStep={changeStep} />
            </MotionContainer>
          }
        </AnimatePresence>
      </ContentContainer>
      <AnimatePresence>
        {step === 'intro' && 
          <Background key="background" {...fadeMotion} className="bg-composition"/>
        }
      </AnimatePresence>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  )
}

export default SplashComponent
