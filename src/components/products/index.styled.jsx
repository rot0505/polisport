import styled from 'styled-components'

export const ProductContainer = styled.div`
  padding: 60px 3rem;
  overflow: auto;
  height: 100%;

  @media (min-width: 768px) {
    padding: 60px 4rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 180px;
`;

export const ImageContainer = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    height: 240px;
  }
`;

export const ProductTitle = styled.div`
  font-weight: bold;
  font-family: "Barlow";
  color: darkgray;
  font-size: 21px;
  font-style: italic;
`;

export const MobileFooter = styled.div`
  margin-top: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  
  img {
    width: 27.83px;
    height: 18.88px;
  }
`