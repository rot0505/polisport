import styled from 'styled-components'
import { motion } from 'framer-motion';
import { BgFadeBlack } from '../../assets'

export const Container = styled(motion.div)`
  top: 0;
  position: absolute;
  width: 100%;
  height: ${p => (p.vh * 100)}px;
  padding: 80px 0;
  background: rgba(40, 40, 40, 0.85);
  backdrop-filter: blur(8px); 
  z-index: 10000;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      height: 100%;
      min-height: 400px;
      max-height: 50vh;

      .row {
        height: 100%;
      }
    }
    height: 100vh;
  }

  @media (min-width: 768px) and (max-height: 700px){
    .container {
      min-height: 300px;
      max-height: 40vh !important;
    }
  }
`

export const MotionContainer = styled(motion.div)`
  &.subtitle {
      margin-top: 0px;
  }

  &.mic {
    margin-top: 10px;
  }

  &.description {
    margin-top: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    max-height: 30vh;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
    background: #727272;
    } 
  }

  @media (min-width: 768px) {
    &.subtitle {
      margin-top: 24px;
    }

    &.mic {
      margin-top: 50px;
    }

    &.description {
      overflow-x: hidden;
      overflow-y: auto;
      height: 100%;
      max-height: 30vh;
    }
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
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  
  > div {
    margin-top: 10px;
  }

  @media (max-width: 767px){
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${BgFadeBlack}) repeat-x;
      transform: scaleY(-1);
    }
    
  }

  @media (min-width: 768px){ 
    height: 90px;
    background: url(${BgFadeBlack}) repeat-x;

    > div {
      margin-top: 46px;
    }
  }
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

export const VideoContainer = styled.div`
  width: 68%;
  position: relative;
  background: ${p => p.dark === 'dark' ? '#151515' : 'transparent'};
  margin: 0 auto;
  height: 134px;

  video {
    height: 134px;
    width: 100%;
  }

  

  @media (min-width: 768px){ 
    width: 100%;
    min-width: 400px;
    max-width: 538px;
    height: 100%;
    video {
      width: 100%;
      min-width: 408px;
      max-width: 538px;
      height: 100%;
    }
  }

  
`

export const BtnPlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  border: solid 1px #FFF;

  > svg {
    margin-left: 4px;
  }
`