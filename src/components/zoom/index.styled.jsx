import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 150px;
`

export const Lines = styled.div`
  padding: 4px 0;
  width: 34px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &.inverse {
    flex-direction: column-reverse;
  }

  > div {
    width: 100%;
    height: 1px;
    background: #4b5156;
    &:nth-child(1) { width: 6px; }
    &:nth-child(2) { width: 12px; }
    &:nth-child(3) { width: 26px; }
  }
`

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  width: 30px;
  height: 31px;
  color: #FFF;
  opacity: 1;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    opacity: .5;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  transform-origin: center;
  transform: rotate(90deg);

  svg {
    z-index: 1;
  }

  &:before {
    position: absolute;
    content: '';
    top: 7px;
    left: 7px;
    width: 9px;
    height: 9px;
    background: rgba(144,144,144, .4);
    border-radius: 8px;
  }
`