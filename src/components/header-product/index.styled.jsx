import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion';
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6px);
    cursor: default;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    cursor: pointer;
  }
`

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: inline-flex;
  height: 60px;
  left: 0;
  width: 100%;
  z-index: 2;
  flex-direction: row;
  padding: 0 20px;
  z-index: 1001;
  pointer-events: none;
  background-color: white;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`

export const CloseButton = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  top: 14px;
  right: 0;
  height: 30px;
  padding: 0 20px;
  cursor: pointer;
  pointer-events: all;
  z-index: 3;

  > div {
    margin-left: 12px;
  }
`

export const ImgLogo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: auto;
  pointer-events: all;

  @media (min-width: 768px) {
    width: 130px;
  }
`

export const Left = styled.div`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: auto;
    height: 60px;
    align-items: flex-start;
  }
`

export const Center = styled(motion.div)`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: inline-block;
  pointer-events: all;
`

export const Right = styled.div`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`

export const ButtonMenuContainer = styled.div`
  color: #FFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0;
  cursor: default;
  animation: ${fadeIn} 1s ease forwards .3s;
  pointer-events: all;
  font-weight: 400;

  svg {
    margin-right: 10px;
  }
`

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
  justify-content: center;
  width: 50px;
  height: 50px;
  perspective: 1000;

  @media (max-width: 767px) {
    position: absolute;
    top: 80px;
    left: 20px;
    z-index: 99;
  }
`

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
  left: 50%;
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
    background: rgba(40,40,40);
  } 

  @media (max-height: 767px){
    max-height: calc(var(--height) / 2.5);
  }

  @media (min-width: 768px) and (max-height: 700px){
    max-height: 300px;
  }
`