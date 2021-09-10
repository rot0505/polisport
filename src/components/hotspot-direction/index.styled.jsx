import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  
  cursor: pointer;

  &:hover {
    .big-circle {
      transform: scale(1.2);
      background: rgba(12, 108, 168, 1);
    }

    .circle-white {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, .8);
    }
  }
`

export const CircleWhite = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 30px;
  transition: all .17s ease-out;
  background: rgba(255, 255, 255, .4);
`

export const BigCircle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background: rgba(12, 108, 168, .80);
  
  border-radius: 32px;
  transform-origin: center;
  transition: all .17s ease-out;
  transform: scale(1);
`

export const ButtonToggleInteractiveContainer = styled.div`
  position: absolute;
  transition: all .17s ease-out;
  transform-origin: 52% 50%;
  transform: scale(.9) rotate(${p => p.angle}deg);
  z-index: 1;
`
