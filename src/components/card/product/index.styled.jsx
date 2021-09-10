import styled from 'styled-components';

const Card = styled.div`
  
  cursor: pointer;

  img{
    max-width: 100%;
    width: 100%;
    height: 180px;
    object-fit: contain;
    margin-top: 70px;
  }

  .text{
    text-align: center;
    font-weight: bold;
    font-family: Barlow;
    color: darkgray;
    font-size: 20px;
    margin-top: 5px
  }
`;

export { Card }
