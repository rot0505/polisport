import React from 'react'
import { motion } from 'framer-motion'
import { IconTravelSpot } from '../../../assets'
import { useResize } from '../../../hooks'
import { TextHighLight, ContainerIcon, Wrapper, ImageContainer, WrapperMotion, WrapperImage } from './index.styled'
import { Text } from '../../'

function SpotStepComponent() {

  const { isMobile } = useResize();

  const animationVariants = {
    initial: {
      opacity: 0,
      x: -110,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: .4, ease: 'easeOut'}
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { delay: 0, duration: .3, ease: 'easeIn'}
    }
  }

  const motionProps = {
    variants: animationVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit"
  }

  return (
    <motion.div key="spot" {...motionProps}>
      <ContainerIcon>
      <Wrapper>
          <WrapperImage initial={{scale: .9, opacity: .2}} animate={{scale: [1, 1], opacity: [.6, .8]}} transition={{delay: .2, duration: .7, repeat: Infinity, repeatType: 'mirror'}}><ImageContainer src={IconTravelSpot} /></WrapperImage>
        </Wrapper>
      </ContainerIcon>
      <TextHighLight>
      <WrapperMotion initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{delay: .1, ease: 'easeOut', duration: .5}}>
        {isMobile ? 
          <Text fontSizeMobile="19px" color="#F2F2F2" lineHeight="26px" fontWeight="500" letterSpacing="1.9px" textTransform="uppercase" textId="splash.spot-title" />:
          <Text fontSize="25px" color="#F2F2F2" fontWeight="500" letterSpacing="1.8px" textTransform="uppercase" textId="splash.spot-title" />
        }
      </WrapperMotion>
      <WrapperMotion initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{delay: .3, ease: 'easeOut', duration: .7}}>
        {isMobile ? 
          <Text style={{maxWidth: '270px', textAlign: 'center', marginTop: '12px'}} letterSpacing="1.1px" lineHeight="16px" fontSizeMobile="12px" fontWeight="100" textId="splash.spot-description" />:
          <Text letterSpacing=".9px" lineHeight="34px" fontSize="16px" fontWeight="100" textId="splash.spot-description" />
        }
      </WrapperMotion>
      </TextHighLight>
    </motion.div>
  )
}

export default SpotStepComponent;