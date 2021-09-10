import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  cursor: pointer;

  &:hover {
    .big-circle {
      width: 40px;
      height: 40px;
      border: solid 1px rgba(226, 10, 22, 1);


      &:after {
        width: 16px;
        height: 16px;
      }

      &.video {
        &:after {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`

export const BigCircle = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background: rgba(226, 10, 22, .20);
  border: solid 1px white;
  border-radius: 32px;
  transform-origin: center;
  transition: all .17s ease-out;

  

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 20px;
    transform-origin: center;
    transition: all .17s ease-out;
    background: rgba(226, 10, 22, 1);
  }

  &.video {
    width: 32px;
    height: 32px;
    &:after {
      width: 18px;
      height: 18px;
    }
  }
`
export const ArrowContainer = styled.div`
  position: absolute;
  svg {
    margin-left: 2px;
    margin-bottom: 2px;
  }
`