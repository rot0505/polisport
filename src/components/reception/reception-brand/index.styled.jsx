import styled from 'styled-components'
import { motion } from 'framer-motion'

export const TextHighLight = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  margin-bottom: 14px;

  max-width: 440px;
  text-align: center;

  @media (max-width: 767px) {
    text-align: left !important;
    width: 100%;

    > div {
      text-align: left !important;
    }
  }

  @media (min-width: 768px) {
    /* text-align: left !important; */
    margin-bottom: 100px;
    > div {
      margin-top: 10px;
      &:first-child {
        margin-top: 20px;
      }
      
      /* text-align: left !important; */
    }
  }

  @media (min-width: 768px) and (max-height: 700px){
    margin-bottom: 30px;
  }
`

export const WrapperMotion = styled(motion.div)`
  opacity: .5;
  @media (max-width: 767px) {
    width: 100%;
    text-align: left !important;

    > div {
      text-align: left !important;
    }
  }
`

export const ContainerLogo = styled.div`
  margin: 0 auto;
  width: 240px;
  height: 160px;
  padding-top: 16px;

  @media (min-width: 768px) {
    height: initial;
  }
`

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`
export const WrapperImage = styled(motion.div)``
export const ImageContainer = styled.img`
  &.marged {
    margin: 6px 30px 0 30px;
  }
`

