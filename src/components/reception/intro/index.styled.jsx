import styled from 'styled-components'

export const GridContainer = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
  transition: all .4s ease 1s;

  @media (min-width: 768px) {
    padding: 0 150px;
  }

  &.leaving {
    opacity: 0;
  }
`

export const GridLogos = styled.div`
  width: 100vw;  
  margin-top: 70px;
  margin-left: -20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row dense;
  row-gap: 50px;
  column-gap: 20px;

  @media (min-width: 768px) and (max-height: 700px){
    width: 94vw;
    margin-top: 40px;
    row-gap: 20px;
    column-gap: 20px;
  }

  > div {
    /* width: 33%; */
  }
`

export const Logo = styled.div`
  width: 200px;  
  height: 78px;
  display: flex;
  background: url(${p => p.background});
  background-repeat: no-repeat;
  background-position: center center;
`
