import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TextHighLight = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media (min-width: 768px) and (max-height: 700px){
    margin-bottom: 30px;
  }
`

export const WrapperMotion = styled(motion.div)``
export const ContainerIcon = styled.div`
  margin: 0 auto;
  width: 240px;
  height: 160px;
  padding-top: 16px;
`

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`
export const WrapperImage = styled(motion.div)``
export const ImageContainer = styled.img`
  &.flip {
    transform-origin: center;
    transform: scaleX(-1);
  }
  &.marged {
    margin: 6px 30px 0 30px;
  }
`

