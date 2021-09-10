import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 130px);
`

export const TimelineButtonsContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 100vw;
  height: 500px;
  pointer-events: none;

  &:after {
    content: '';
    position: absolute;
    width: 100vw;
    height: 1px;
    border-bottom: solid 1px #727272;
    bottom: 10px;
    left: 0;
  }
`
export const TimelineScroll = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: flex-end;
  bottom: 0;
  left: 0;
  width: auto;
  min-width: 100vw;
  overflow-x: auto;
  padding-bottom: 12px;
  pointer-events: all;
`

export const TimelineSplashScreen = styled(motion.div)`
  position: absolute;
  top: 60px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  width: calc(100vw - 70px);
  min-height: 150px;

  .splashscreen-description {
    margin-top: 80px;
  }
`

export const GalleryContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, .9);
  z-index: 10;
`

export const TimelineFeaturesButtonComposition = styled(motion.div)`
  position: absolute;
  top: 0px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  width: calc(100vw - 70px);
  height: 240px;
` 

export const TimelineFeaturesContainer = styled(motion.div)`
  position: absolute;
  bottom: 150px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  width: calc(100vw - 70px);
  height: 120px;
  max-height: 120px;
  overflow-x: hidden;
  overflow-y: auto;
  .active-description {
    margin-top: 20px;
  }
`

export const DistanceRight = styled.div`
  width: 100px;
`

export const ButtonYear = styled.div`
  position: relative;
  padding: 10px 10px;
  margin: 0 16px;
  height: 76px;
  opacity: 1;
  cursor: pointer;
  pointer-events: all;
  transition: all .3s ease-in-out;

  &.disabled {
    opacity: .3;
    pointer-events: none;
  }

  &.active {
    height: 140px;
    /* pointer-events: none; */

    .button-text {
      color: #FFF;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: 1px;
    }

    .horizontal-line {
      height: calc(100% - 112px);
      width: 2px;
      bottom: 55px;
      background: #FFF;
    }
  }

  .button-text {
    text-transform: uppercase;
    color: #727272;
    letter-spacing: .4px;
    font-size: 20px;
    font-weight: 400;
    transition: all .3s ease-in-out;
  }

`
export const HorizontalLine = styled.div`
  position: absolute;
  left: 49%;
  bottom: -8px;
  width: 1px;
  background: #727272;
  height: 12px;
  transition: all .3s ease-in-out;
`

export const EnterTour = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: flex-end;
  height: 50px;
  opacity: 1;
  transition: all .4s ease 1s;
  pointer-events: all;

  @media (min-width: 768px) {
    bottom: 110px;
    padding: 0 150px;
  }

  &:hover {
    .text-container {
      opacity: .5;
    }

    .bike-container {
      &:not(.blocked-hover){
        svg {
          transform: rotate(-15deg);
        }
      }
      
    }
  }
`

export const TextContainer = styled.div`
  width: auto;
  opacity: 1;
  transition: all .3s ease;
  cursor: pointer;
  white-space: nowrap;
`

export const BikeContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 34px;
  height: 30px;
  cursor: pointer;
  transition: all .8s cubic-bezier(0.53, 0.1, 0.15, 1.01);
  transform: ${p => p.distance ? `translateX(${p.distance}px)`: `translateX(100px)`};

  &.to-left {
    svg {
      transition: all .5s ease;
      transform-origin: 50% 50%;
      transform: rotate(0deg) scaleX(-1);
    }
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    transform-origin: 20% 40%;
    transform: rotate(0deg);
    transition: all .3s ease;
  }

  &:after {
    content: '';
    position: absolute;
    width: inherit;
    height: 2px;
    background: #FFF;
    bottom: -2px;
    right: 0;
  }
`