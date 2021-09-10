import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 10px;
  left: calc(100% + -20px);
  padding-left: 100px;
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;

  @media (min-width: 768px) and (max-height: 700px){
    bottom: -8px;
  }

  &.reverse {
    bottom: initial;
    top: -4px;
  }
`
