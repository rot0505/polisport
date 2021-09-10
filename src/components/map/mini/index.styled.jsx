import styled, { keyframes } from 'styled-components'
import { BgMiniMap, MaskMiniMap } from '../../../assets'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  mask-image: url(${MaskMiniMap});
  background: url(${BgMiniMap}) no-repeat;
  overflow: hidden;
  pointer-events: all;
  opacity: 0;
  animation: ${fadeIn} .5s forwards .3s;
  cursor: pointer;
`

export const ContainerSVGMini = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
  svg{
    width: 100%;
    height: 100%;
    transition: all .1s ease;
  }
`