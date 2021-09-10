import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonOpenClose = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  transform: rotate(180deg);
  transition: all .14s ease-in;
  cursor: pointer;

  &:not(.active) {
    transform: rotate(360deg);
  }
`