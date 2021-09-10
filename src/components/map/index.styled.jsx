import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  top: 0;
  position: absolute;
  width: 100%;
  height: ${p => (p.vh * 100)}px;
  /* height: 100vh; */
  background: rgba(40, 40, 40, 0.85);
  background-image: radial-gradient(rgba(1, 102, 164, 0.3), 
                                    rgba(0, 22, 106, 0.3));
  backdrop-filter: blur(8px); 
  z-index: 10000;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const MapWrapper = styled.div`
  position: absolute;
  top: 78px;
  bottom: 40px;
  left: 50px;
  right: 80px;
  z-index: 1;
  width: auto;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
`

export const FooterContainer = styled.div`
  z-index: 1001;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* background: url('https://www.placecage.com/1920/1080');
  background-repeat: no-repeat; */

  img {
    pointer-events: none;
  }

  &.scaled {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }
`