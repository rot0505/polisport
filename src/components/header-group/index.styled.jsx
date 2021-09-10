import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6px);
    cursor: default;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    cursor: pointer;
  }
`

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: inline-flex;
  height: 60px;
  left: 0;
  width: 100%;
  z-index: 2;
  flex-direction: row;
  padding: 0 20px;
  z-index: 1001;
  pointer-events: none;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`

export const CloseButton = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  top: 14px;
  right: 0;
  height: 30px;
  padding: 0 20px;
  cursor: pointer;
  pointer-events: all;
  z-index: 3;

  > div {
    margin-left: 12px;
  }
`

export const ImgLogo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: auto;
  pointer-events: all;

  @media (min-width: 768px) {
    width: 130px;
  }
`

export const Left = styled.div`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: auto;
    height: 60px;
    align-items: flex-start;
  }
`

export const Center = styled(motion.div)`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;

  pointer-events: all;
`

export const Right = styled.div`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`

export const ButtonMenuContainer = styled.div`
  color: ${p => p.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0;
  cursor: default;
  animation: ${fadeIn} 1s ease forwards .3s;
  pointer-events: all;
  font-weight: 400;

  svg {
    margin-right: 10px;
  }
`
