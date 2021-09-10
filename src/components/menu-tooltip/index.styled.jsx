import styled, {keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const fadeIn = keyframes`
  0% {
    clip-path: polygon(0 0, 1px 0%, 1px 100%, 0 100%);
    opacity: 0;
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    opacity: 1;
  }

`

export const Container = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 64px;
  transform: translateY(-50%);
  
  
  

  &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -6px;
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-right: 4px solid #e9eff0;
      border-bottom: 4px solid transparent;
  }
`

export const Menu = styled.ul`
  padding: 0;
  clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%);
  padding: 0px 16px 0px 14px;
  margin: 0;
  list-style: none;
  background: #e9eff0;
  animation: ${fadeIn} .3s ease-in-out forwards;
  cursor: default;
`

export const ButtonMenu = styled.li`
  white-space: nowrap;
  
  > div {
    color: #737578;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      color: #494a4b;
    }
  }
`