import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: ${p => p.distance}px;
  width: 100%;
  border-bottom: solid 1px #d4d4d4;
`

export const EnterTour = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 50px;
  opacity: 1;
  transition: all .8s cubic-bezier(0.53, 0.1, 0.15, 1.01);
  pointer-events: all;

  &:after {
    content: '';
    position: absolute;
    width: ${p => (p.distance + 30)}px;
    height: 1px;
    background: ${p => p.color};
    bottom: -1px;
    left: 0;
    transition: all .8s cubic-bezier(0.53, 0.1, 0.15, 1.01);
  }

  &.leaving {
    transition: all 1.5s ease-in;
    transform: translateX(100vw);
    width: 100px;

    svg {
      transform: rotate(0deg) !important;
    }
  }
`

export const BikeContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 34px;
  height: 30px;
  transition: all .8s cubic-bezier(0.53, 0.1, 0.15, 1.01);
  transform: ${p => p.distance ? `translateX(${p.distance}px)`: `translateX(100px)`};

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    transform-origin: 20% 40%;
    transform: rotate(0deg);
    transition: all .3s ease;
  }

  &:hover {
    cursor: pointer;
      svg {
        transform: rotate(-15deg);
      }
  }

  &:after {
    content: '';
    position: absolute;
    width: 34px;
    height: 1px;
    background: ${p => p.color};
    bottom: -1px;
    right: 0;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  bottom: -3px;
  left: 20px;
  width: auto;
  transition: all .3s ease;
  opacity: 0;
  animation: ${fadeIn} .5s ease forwards .6s;
  z-index: 1;

  > div {
    position: relative;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    left: 242px;
  }

  
`