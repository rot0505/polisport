import styled from 'styled-components'

export const TextHighLight = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  min-height: 100px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
  transition: all .4s ease 1s;

  @media (min-width: 768px) {
    padding: 0 150px;
  }

  &.leaving {
    opacity: 0;
  }
`

export const EnterTour = styled.div`
  position: absolute;
  padding: 0 30px;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50px;
  border-bottom: solid 1px rgba(255,255,255, .3); 
  left: 0;
  opacity: 1;
  bottom: 70px;
  transition: all .4s ease 1s;

  @media (min-width: 768px) {
    bottom: 110px;
    padding: 0 150px;
  }

  &.leaving {
    opacity: 0;
  }

  &:hover {
    .text-container {
      opacity: .5;
    }

    .bike-container {
      svg {
        transform: rotate(-15deg);
      }
    }
  }
`

export const TextContainer = styled.div`
  width: auto;
  opacity: 1;
  transition: all .3s ease;
  cursor: pointer;
`

export const BikeContainer = styled.div`
  width: 34px;
  position: absolute;
  height: 30px;
  cursor: pointer;
  transform: ${p => p.distance ? `translateX(${p.distance}px)`: `translateX(100px)`};

  &.leaving {
    transition: all 1.2s ease-in;
    transform: translateX(100vw);
    width: 100px;

    svg {
      transform: rotate(0deg) !important;
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