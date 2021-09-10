import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: 40px;
  cursor: pointer;

  > :first-child {
    opacity: 1;
    transition: .3s all ease;
  }

  &:hover {
    > :first-child {
      opacity: .9;
    }
  }
`

export const TextContainer = styled.div`
  box-sizing: border-box;
  margin-left: 10px;
  
`