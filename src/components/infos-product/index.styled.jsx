import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const showMobile = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  perspective: 1000;
  // justify-content: flex-end
  @media (max-width: 767px) {
    position: absolute;
    top: 80px;
    left: 20px;
    z-index: 99;
    justify-content: flex-start
  }
  @media screen 
  and (min-device-width: 768px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    justify-content: flex-end
}
`
export const VideoContainer = styled.div`
  width: 80%;
  position: relative;
  background: ${p => p.dark === 'dark' ? '#151515' : 'transparent'};
  margin: 0 auto;
  height: 250px;

  video {
    height: 100%;
    width: 100%;
  }`
export const ButtonInfo = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: ${p => p.colors.bgColor};
  cursor: pointer;
  transform-origin: center;
  transform: scale(.8);
  transition: all .2s ease;
  border: solid 2px ${p => p.colors.borderColor};

  &.active {
    background: ${p => p.colors.activeColor};
    border: solid 2px ${p => p.colors.activeColor};
    svg {color: #FFF;}

    @media (max-width: 767px) {
      z-index: 1;
    }
  }

  &:hover {
    transform: scale(1);
    &:not(.active){
      background: ${p => p.colors.borderColor};

      svg { 
        color: ${p => p.colors.iHoverColor};
        transform: scale(.75);
      }
    }

    &.active {
      background: ${p => p.colors.activeColor};

      svg { color: ${p => p.colors.activeIconColor};transform: scale(.75);}
    }
  }

  svg {
    color: ${p => p.colors.iColor};
    transform-origin: center;
    transform: scale(1);
    transition: all .2s ease;
  }
`

export const ExpansiveText = styled(motion.div)`
  position: absolute;
  top: 60px;
  left: 95%;
  transform: translateX(-50%);
  width: 520px;
  min-height: 200px;
  background: #151515;
  padding: 38px 40px 40px 40px;
  transform-origin: top;

  @media (max-width: 767px){
    top: -80px;
    left: -20px;
    padding-top: 160px;
  }

  .title {
    margin-bottom: 12px;
    @media (max-width: 767px){
      opacity: 0;
      animation: ${showMobile} .7s ease forwards .2s;
    }
  }
`

export const ScrolledDiv = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 10px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${p => p.scrollbarColor}};
  } 

  @media (max-height: 767px){
    max-height: calc(var(--height) / 2.5);
  }

  @media (min-width: 768px) and (max-height: 700px){
    max-height: 300px;
  }
`