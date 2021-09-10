import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TextHighLight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media (min-width: 768px) and (max-height: 700px){
    margin-bottom: 30px;
  }
`
export const ContainerIcon = styled.div`
  margin: 0 auto;
  width: 240px;
  height: 160px;
`

export const WrapperMotion = styled(motion.div)``

export const WrapperImage = styled(motion.div)`
  position: absolute;

  &.hand {
    bottom: 0px;
    left: 64%;
  }
`

export const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
`

export const ImageContainer = styled.img``

