import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  width: 100%;
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
  z-index: 3;

  > div {
    margin-left: 12px;
  }
`

export const WrapperImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100vh - 150px);
  white-space: nowrap;
  overflow: hidden;
  svg {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: calc(100vh - 50px);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 440px;
  overflow: hidden;
`;

export const Images = styled(motion.div)`
  position: absolute;
`;

export const Image = styled(motion.div)`
  display: inline-block;
  width: 240px;
  height: 240px;
  margin-right: 10px;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  &.active {
    position: relative;
    z-index: 1;
    &:after {
      opacity: 1;
    }
  }

  &.deactive {
    position: relative;
    z-index: 0;
  }
`;
