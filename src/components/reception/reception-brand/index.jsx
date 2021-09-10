import React from 'react'
import { motion } from 'framer-motion'
import { useResize } from '../../../hooks'
import { TextHighLight, ContainerLogo, WrapperMotion, Wrapper, WrapperImage, ImageContainer } from './index.styled'
import { Text } from '../../'

function ReceptionBrandComponent({data}) {

  const { isMobile } = useResize();
  const { logo, title, description } = data;

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
    <motion.div key={title} {...motionProps}>
      <ContainerLogo>
        <Wrapper>
           <WrapperImage initial={{scale: .9, opacity: .2}} animate={{scale: 1, opacity: 1}} transition={{delay: .2, duration: .7}}><ImageContainer src={logo} /></WrapperImage>
        </Wrapper>
      </ContainerLogo>
      <TextHighLight>
        <WrapperMotion className="lala" initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{delay: .1, ease: 'easeOut', duration: .5}}>
          {isMobile ? 
            <Text fontSizeMobile="19px" color="#F2F2F2" lineHeight="26px" fontWeight="500" letterSpacing="1.9px" textTransform="uppercase" textId={title} />:
            <Text fontSize="20px" color="#F2F2F2" fontWeight="500" letterSpacing="1.8px" textTransform="uppercase" textId={title} />
          }
        </WrapperMotion>
        <WrapperMotion initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{delay: .3, ease: 'easeOut', duration: .7}}>
          {isMobile ? 
            <Text style={{maxWidth: '270px', textAlign: 'center', marginTop: '20px'}} letterSpacing="1.1px" lineHeight="20px" fontSizeMobile="12px" fontWeight="100" textId={description} />:
            <Text letterSpacing=".9px" lineHeight="20px" fontSize="12px" fontWeight="100" textId={description} />
          }
        </WrapperMotion>
      </TextHighLight>
    </motion.div>
  )
}

export default ReceptionBrandComponent;