import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: var(--height);
  /* height: 100vh; */
  /* height: 100%; */
  background: url(${p => p.bg}), #1a1a1b;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`

export const MenuContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 50px;
  width: 100%;
  overflow-y: none;
  overflow-x: auto;

  padding: 0 80px 0 80px !important;

  > div {
    @media (max-width: 767px){
      display: inline-flex;
      justify-content: flex-start;
    }
  }
`

export const SpotsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: var(--height);
  top:0;
  left:0;
  z-index: 1;
  pointer-events: none;
`

export const SpotContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: all;
`

