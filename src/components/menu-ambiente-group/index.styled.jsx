import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  min-width: 370px;
  height: 25px;
  align-items: center;
  cursor: pointer;
  color: #FFF;

  &:hover {
    fill: rgba(255,255,255,.8);
    color: rgba(255,255,255,.8);

    svg {
      fill: rgba(255,255,255,.8);
    };
    > p {
      color: rgba(255,255,255,.8);
    };
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: scaleY(.85);
    transition: all .3s ease;
    margin: 0;
  }
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  transform-origin: 50% 54%;
  transform: rotate(0deg);
  transition: all .15s ease-in;
  margin-left: 19px;

  &.active {
    transform: rotate(180deg);
  }
`

export const ContainerSubMenu = styled(motion.div)`
  position: absolute;
  min-width: 370px;
  bottom: 30px;
  left: 0;
  overflow: hidden;
  transform-origin: bottom;
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
  background: rgba(0, 0, 0, .9);
  padding: 46px 20px 36px 20px;
  margin: 0;
  cursor: default;
`

export const MenuButton = styled.li`
  display: inline-flex;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 13px;
  cursor: pointer;
  transition: all .3s ease;

  div {
    color: rgba(255,255,255, .8);
    transition: all .3s ease;
  }

  &:hover {
    div {
      color: rgba(255,255,255, 1);
    }
  }

  svg {
      path {
        fill: #0e0e0f;
      }
  }

  &.active {
    svg {
      path {
        fill: #FFF !important;
      }
    }
  }

  &.visited {
    svg {
      path {
        fill: #929292 !important;
      }
    }
  }

  svg {
    transform: scale(.96);
  }

  &:hover {
    color: rgba(255,255,255, 1);
  }
`
