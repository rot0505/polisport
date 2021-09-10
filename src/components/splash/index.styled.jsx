import styled from 'styled-components'
import { motion } from 'framer-motion';
import { ImageBgCompSplash } from '../../assets'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${p => (p.vh * 100)}px;
  /* height: 100vh; */
  background: #151515;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const MotionContainer = styled(motion.div)`
  @media (min-width: 768px){
    position: absolute;
    bottom: 120px;
  }
`

export const ContentContainer = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  &.centered {
    cursor: pointer;
    @media (max-width: 767px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 768px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
    }
  }
`

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &.bg-composition {
    &:before {
      content:'';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:linear-gradient( rgba(0, 0, 0, 0.95) 100%, rgba(0, 0, 0, 0.95)100%),url(${ImageBgCompSplash});
      background-position: center;
      background-size: cover;
      z-index: 0;
    }
  }
`

export const FooterContainer = styled.div`
  z-index: 1001;
  position: absolute;
  bottom: 0;
  left: 0;
`