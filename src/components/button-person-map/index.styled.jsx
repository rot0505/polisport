import styled from 'styled-components'

export const Container = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 1;
  transition: all .3s ease;
  pointer-events: all;

  &:hover {
    opacity: .8;
  }
`