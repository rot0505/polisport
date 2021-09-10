import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 130px;

  @media (min-width: 768px){
    height: auto;
  }
`

export const BulletsContainer = styled.ul`
  /* width: 130px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

export const Bullet = styled.li`
  width: 14px;
  height: 14px;
  margin: 0 14px;
  transform-origin: center;
  border-radius: 10px;
  background: ${p => p.colors.normalColor};
  transform: scale(.4);
  transition: all .3s cubic-bezier(0.46, 0.13, 0.4, 1.46);
  &.active {
    background: ${p => p.colors.activeColor};
    transform: scale(1);
  }
`

export const TextContainer = styled.div`
  margin-top: 90px;
  cursor: pointer;

  @media (min-width: 768px){ 
    margin-top: 14px;
  }

`

