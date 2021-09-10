
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 30px;
  align-items: center;
  /* justify-content: flex-end; */
`

export const InteractiveButtonsList = styled(motion.ul)`
  position: relative;
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  margin-bottom: 0;
  margin-right: 0px;
`

export const ItemUnlisted = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  > svg {
    transition: all .1s ease;
    path {
      transition: all .1s ease;
    }
  }

  &:hover {
    > svg {
      stroke: #e20a16;
      fill: #e20a16;
      path {
        fill: #e20a16;
      }
    }
  }
`

export const Item = styled.li`
  margin-left: 16px;
  margin-right: 16px;
  cursor: pointer;

  > svg {
    transition: all .1s ease;
    path {
      transition: all .1s ease;
    }
  }

  &:hover {
    > svg {
      stroke: #e20a16;
      fill: #e20a16;
      path {
        fill: #e20a16;
      }
    }
  }
`
export const ContainerSocialMedia = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: -12px;
  overflow: hidden;
  transform-origin: bottom;
`

export const MenuSocialMedia = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44px;
  justify-content: center;
  list-style: none;
  background: #151515;
  padding-left: 0;
  cursor: default;
`
export const ButtonSocialMedia = styled.li`
  margin-bottom: 14px;
  cursor: pointer;
  &:first-child{
    margin-top: 10px;
    margin-bottom: 8px;
  }

  > svg {
    
    &.linkedin { transform: scale(.7);}
    &.facebook { transform: scale(.7);}
    &.envelop { transform: scale(.9); }
    
    transition: all .1s ease;
    path {
      transition: all .1s ease;
    }
  }

  &:hover {
    > svg {
      stroke: #FFF;
      fill: #FFF;
      path {
        fill: #FFF;
      }
    }
  }
`