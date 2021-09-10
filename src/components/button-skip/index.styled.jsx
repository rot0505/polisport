import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px 8px;
  opacity: .8;
  transition: all .3s ease;
  pointer-events: all;
  z-index: 2;

  &:hover { 
    opacity: 1;
  }
`