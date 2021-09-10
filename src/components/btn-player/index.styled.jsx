import styled from 'styled-components'

export const Container = styled.div `
  position: absolute;
  display: flex;
  align-items: center;
  height: 56px;
  bottom: 15px;
  left: 17px;
  color: #FFF;
  pointer-events: none;

  &:hover {
    .text-description {
      opacity: 0;
      transform: translateX(-100px);
    }
  }

  @media (min-width: 768px) {
    left: 80px;
    bottom: 20px;
  }
`

export const BtnPlayPauseContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 30px;
  border: solid 1px transparent;
  pointer-events: all;

  cursor: pointer;

  .btn-play {
    margin-left: 4px;
    transition: all .2s ease-in-out;
  }

  .btn-pause {
    transition: all .2s ease-in-out;
  }

  &:hover {
    .act-hover {
      transform: translate(-50%, -50%) scale(4);
      border-radius: 8px;
      stroke-width: 4px;
    }

    .btn-play {
      color: #FFF !important;
      stroke: #FFF !important;
      opacity: 1;
    }
  }

  .act-hover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transform: translate(-50%, -50%) scale(16);
    transition: all .2s ease-in-out;
    z-index: -1;
    stroke-width: 0px;
    color: ${p => p.bgHover};
    stroke: ${p => p.bgHover};
    opacity: 1;
  }
`

export const ContainerHover = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  border: solid 2px ${p => p.bgHover};

  @media(max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`

export const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
  height: 30px;
  overflow: hidden;
  margin-left: 10px;
  pointer-events: none;
`

export const TextDescription = styled.p`
  color: #929292;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .3px;
  margin: 0;
  padding: 0;
  opacity: 1;
  transform: translateX(0);
  opacity: 0;
  transition: all .2s ease-in-out;

  @media (min-width: 768px) {
    opacity: 1;
    transform: translateX(0);
  }
`
