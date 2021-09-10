import styled, { keyframes } from 'styled-components';
import { Logo } from '../../assets'

const showLogo = keyframes`
  0% {
    clip-path: circle(1% at 80% 70%);
  }
  38% {
    clip-path: circle(91% at 40% 150%);
  }
  64% {
    clip-path: circle(71% at 60% 80%);
  }
  65%{
    clip-path: circle(71% at 60% 80%);
    opacity: 1;
  }
  70%{
    clip-path: circle(71% at 60% 80%);
    opacity: 0;
  }
  76%{
    clip-path: circle(71% at 60% 80%);
    opacity: 1;
  }
  80{
    clip-path: circle(71% at 60% 80%);
    opacity: 0;
  }
  82%{
    clip-path: circle(71% at 60% 80%);
    opacity: .6;
  }
  84% {
    clip-path: circle(71% at 60% 80%);
    opacity: 0;
  }
  100% {
    clip-path: circle(71% at 60% 80%);
    opacity: 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 20;
  pointer-events: none;
  touch-action: none;
`

export const BoxCenter = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`
export const LogoContainer = styled.div`
  width: 53px;
  height: 36px;
  background: url(${Logo}) no-repeat;
`

export const LoadingTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 4px;
  margin-top: 30px;
  margin-bottom: 0;
`

export const WaitText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  color: #BFBFBF;
  letter-spacing: .6px;
  margin-top: 6px;
`

export const LogoAnimated = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  clip-path: circle(0% at 50% 50%);
  animation: ${showLogo} 3s linear infinite;
`