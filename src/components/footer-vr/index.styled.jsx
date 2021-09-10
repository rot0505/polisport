import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLOR } from '../../assets/constants/constants'

const StyledDiv =  styled.div`
  width: 100vw;
  padding-top: 5px;
  padding-bottom: 1em;
  height: 40px;
  padding-left: 25px;
  padding-right: 25px;
  background: transparent;
  pointer-events: all;
  z-index: 1;

  &.dark {
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 6px;
    background: #FFF;
    background: #1a1a1b;
  }


  p {
    color: #BBC3C3;
    margin-top: none;
    margin-bottom: none;
    margin-bottom: 0;
  }
  img {
    height: 30px;
    width: auto;
  }

  @media (max-width: 767px){
    padding-left: 25px;
    padding-right: 25px;
  }

  @media (min-width: 768px){
    height: 40px;
  }

  @media (min-width: 768px) and (max-height: 700px){
    margin: 10px 0 0px 0;
    height: 40px;
  }

  &.inverse {
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 6px;
    background: #FFF;
    
    p, div {
      color: #929292;
    }
  }
`;

const StyledButton = styled.div`
  position: relative;
  display: flex;
  height: 25px;
  width: 50px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${p => p.active ? COLOR.secondary : '#FFF' };

  p {
    padding: 5px;
    color: ${p => p.active ? COLOR.secondary : '#FFF' };
    font-size: 14px;
  }

  &.inverse {
    color: rgba(146,146,146,1) !important;

    p {
      color: rgba(146,146,146,1) !important;
    }

    svg {
      fill: rgba(146,146,146,1) !important;
    }
  }

  &:hover {
    &:not(.inverse){
      fill: rgba(255,255,255,.8);
      color: rgba(255,255,255,.8);

      svg {
        fill: rgba(255,255,255,.8);
      };
      > p {
        color: rgba(255,255,255,.8);
      };
    }
    .inverse {
      fill: rgba(146,146,146,.8);
      color: rgba(146,146,146,.8);

      svg {
        fill: rgba(146,146,146,.8);
      };
      > p {
        color: rgba(146,146,146,.8);
      };
    }
  }
`;

export const ContainerSubMenu = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 14px;
  overflow: hidden;
  transform-origin: bottom;
  z-index: 2;
`

export const Copyright = styled(motion.div)`
  @media (max-width: 767px){
    position: relative;
    height: 40px;
    top: -10px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 30px;
  }
  
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  justify-content: center;
  list-style: none;
  background: rgba(21, 21, 21, .9);
  padding-left: 0;
  cursor: default;
`
export const MenuButton = styled.li`
  margin-bottom: 14px;
  cursor: pointer;
  color: rgba(255,255,255, .8);
  transition: all .3s ease;
  z-index:9999;

  &:hover {
    color: rgba(255,255,255, 1);
  }
  
  &:first-child{
    margin-top: 10px;
    margin-bottom: 8px;
  }
`

export { StyledDiv, StyledButton }
