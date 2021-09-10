import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  cursor: pointer;

  @media (min-width: 768px) {
  &:hover {
      svg {
        opacity: .9 !important;
      }

      .text-container {
        > div {
          opacity: 1;
          transform: translateX(2px);
        }
      }
    }
  }

  svg {
    opacity: 1;
    transform-origin: center;
    transform: scale(.9);
    animation: ${fadeIn} .5s ease forwards;
    transition: all .3s ease;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  width: 300px;
  height: 28px;
  overflow: hidden;
  pointer-events: none;

  @media (min-width: 768px) {
    > div {
      opacity: 0;
      transform: translateX(-200px);
      transition: all .3s ease;
    }
  }
`
