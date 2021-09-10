import styled, { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% {
    opacity: .2;
  }

  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  position: absolute;
  width: 155px;
  height: 155px;
  /* background: linear-gradient(rgba(1,102,164, 0), rgba(1,102,164, .5)), url(${props => props.image}); */
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0;
  top: 50%;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1200px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 768px) and (max-height: 700px){
    width: 250px;
    height: 250px;
    }

  &.one {
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${fadeIn} 1s ease forwards;
  }

  &.two-1{
    transform: translate(30%, -50%) rotate(-20deg);
    animation: ${fadeIn} 1s ease forwards;
    z-index: 2;
  }

  &.two-2{
    transform: translate(60%, -50%) rotate(20deg);
    animation: ${fadeIn} 1s ease forwards .1s;
  }

  &.three-1{
    transform: translate(20%, -50%) rotate(-20deg);
    animation: ${fadeIn} 1s ease forwards;
    z-index: 2;
  }

  &.three-2{
    transform: translate(50%, -50%) rotate(0deg);
    animation: ${fadeIn} 1s ease forwards .15s;
    z-index: 1;
  }

  &.three-3{
    transform: translate(70%, -50%) rotate(20deg);
    animation: ${fadeIn} 1s ease forwards .2s; 
  }
`