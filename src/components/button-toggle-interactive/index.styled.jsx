import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 2px
  border: solid 1px red;

  svg {
    transform: rotate(-90deg) scaleY(.9);
    fill: #FFF;
    width: 16px;
  }

  span {
    width: 1px;
    background: #FFF;
    display: inline-block;

    &.first-line {
      height: 8px;
    }

    &.second-line {
      margin-left: 1px;
      height: 4px;
    }
    
  }
`