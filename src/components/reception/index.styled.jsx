import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  top: 0;
  position: absolute;
  width: 100%;
  height: ${p => (p.vh * 100)}px;
  /* height: 100vh; */
  background: rgba(40, 40, 40, 0.85);
  backdrop-filter: blur(8px); 
  z-index: 10000;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const MotionContainer = styled(motion.div)``

export const ContentContainer = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  &.centered {
    @media (max-width: 767px) {
      height: 100vh;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const TextHighLight = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
  transition: all .4s ease 1s;

  @media (max-width: 767px) {
    height: ${p => (p.vh * 50)}px;
  }

  @media (min-width: 768px) {
    padding: 0 150px;
  }
`
export const FooterContainer = styled.div`
  z-index: 1001;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const TextContainer = styled.div`
  margin-top: 90px;
  cursor: pointer;

  @media (min-width: 768px){ 
    margin-top: 50px;
  }

  @media (min-width: 768px) and (max-height: 700px){
    margin-top: 20px;
  }

`