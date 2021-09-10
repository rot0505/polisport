import styled, { keyframes } from 'styled-components'

const pulse = (random) => keyframes`
  0% {
    height: 5px;
  }

  50% {
    height: ${random}px
  }

  100% {
    height: 5px;
  }
`

const fadeOf = (random) => keyframes`
  0% {
    height: ${random}px;
  }

  100% {
    height: 5px;
  }

`

export const Container = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: ${p => p.background};
  cursor: pointer;
`

export const Line = styled.div`
  width: 2px;
  height: 5px;
  background: #FFF;
  transition: all .3s ease;

  &.playing {
    animation: ${p => pulse(p.randHeight)} ${p => p.randTime}s ease-in-out infinite;
  }

  &.mute {
    animation: ${p => fadeOf(p.randHeight)} 1s ease-in-out forwards;
  }
`