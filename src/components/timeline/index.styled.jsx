import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 130px);
`

export const MotionContainer = styled(motion.div)``

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

  cursor: grab;

  &:active {
    cursor: grabbing !important;
  }

  &:not(.disabled) {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
    
    .timeline-enabled {
      cursor: grab;

      &:active {
        cursor: grabbing !important;
      }
    }
  }
`

export const TimelineSplashScreen = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 280px; 
  width: 800px;
  min-height: 150px;

  .splashscreen-description {
    margin-top: 20px;
  }
`

export const DistanceRight = styled.div`
  width: 400px;
`

export const ButtonYear = styled.div`
  position: relative;
  padding: 10px 10px;
  margin: 0 16px;
  height: 56px;
  pointer-events: all;
  user-select: none;
  transition: all .3s ease-in-out;

  &.disabled {
    opacity: .3;
    pointer-events: none;
  }

  

  &.active {
    height: 390px;

    .button-text {
      color: #FFF;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: 1px;
    }

    .horizontal-line {
      height: calc(100% - 92px);
      width: 2px;
      bottom: 30px;
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

export const TimelineFeaturesButtonComposition = styled(motion.div)`
  position: absolute;
  top: 40%; 
  transform: translateY(-50%);
  width: 40vw;
  height: 500px;
  z-index: 1;

  @media (min-width: 768px) and (max-height: 700px){
    height: 300px;
  }

  &.left {
    left: 100px;
  }

  &.right {
    right: 200px;
    @media (min-width: 768px) and (max-height: 700px){
      right: 100px;
    }
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

export const GroupActive = styled(motion.div)`
  position: absolute;
  top: 6px;
  left: 96px;
  width: 380px;
  height: 250px;
  padding-top: 10px;

  .active-title {
    margin-bottom: 20px;
  }

  .active-description {
    max-height: 230px;
    overflow-x: hidden;
    padding-right: 20px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
    background: #727272;
    } 
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
  display: flex;
  align-items: flex-end;
  height: 50px;
  opacity: 1;
  transition: all .4s ease 1s;
  pointer-events: all;
  bottom: 110px;
  padding: 0 150px;

  &.disabled {
    cursor: default;
    .text-container {
      opacity: .5;
      cursor: default;
    }
    .bike-container {
      cursor: default;
    }
  }

  &:hover {
    &:not(.disabled){
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
      transform-origin: 50% 40%;
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