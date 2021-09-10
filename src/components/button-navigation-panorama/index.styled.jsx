import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: ${p => p.direction === 'right'? 0 : 'initial'};
  left: ${p => p.direction === 'left'? 0 : 'initial'};
  box-sizing: border-box;
  width: 202px;
  height: 130px;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    .image {
      &:after {
        background: rgba(0,0,0,.3);
      }
    }
    .circle {
      background: #FFFFFF;
    }
    .arrow {
      &.right {
        right: -54px;
      }

      &.left {
        left: -53px;
      }
    }

    .text {
      opacity: 0;

      &.right {
        left: 60px;
      }

      &.left {
        right: 60px;
      }
    }
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  width: 182px;
  height: 100%;
  background-image: url(${p => p.background});
  background-size: cover;
  transition: all .3s ease;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    width: 182px;
    height: 100%;
    background: rgba(0,0,0,.5);
    transition: all .3s ease;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`
export const BtnCircle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #151515;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;
  transition: all .1s ease;

  &.right {
    left: 0;
  }

  &.left {
    right: 0;
  }
`

export const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 8px;
  transition: all .3s ease;

  &.right {
    right: 13px;
  }

  &.left {
    right: initial;
    left: 13px;
    svg {
      transform: scale(-1);
    }
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  opacity: 1;
  transition: all .3s ease;

  &.right {
    left: 28px;
  }

  &.left {
    right: 28px;
  }
`