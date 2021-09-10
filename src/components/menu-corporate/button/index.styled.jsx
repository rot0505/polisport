import styled from 'styled-components';

export const Button = styled.div`
  position: relative;
  background: rgba(0,0,0, .8);
  height: 150px;
  padding: 0 30px;
  margin: 0 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: all;
  cursor: pointer;
  transform-origin: right;
  transition: all .3s ease;

  .title {
    color: #FFF;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: .8px;
  }

  .description {
    color: #d9d9d9 ;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .7px;
    margin: 6px 0 4px 0;
  }

  &:hover {
    @media (min-width: 768px) {
      height: 170px;
      padding: 0 50px;

      .bike-container {
        svg {
          transform: rotate(-30deg);
          fill: #bfbfbf;
        }
      }
      .first {
        width: 10px;
        right: 32px;
      }

      .second {
        width: 20px;
        right: 34px;
      }
    }
  }

  &.active {
    height: 170px;
    padding: 0 50px;
    background: #FFF;

    .title {
      font-weight: 500;
    }

    .title, .description {
      color: #303030;
    }
  }
`

export const BikeContainer = styled.div`
  position: absolute;
  width: 0px;
  height: 30px;
  right: 30px;
  bottom: 10px;
  cursor: pointer;

  svg {
    position: absolute;
    right: 10px;
    top: 10px;

    transform-origin: 20% 40%;
    transform: rotate(0deg);
    transition: all .3s ease;
  }
`

export const Line = styled.div`
  position: absolute;
  width: 0px;
  height: 1px;
  background: #bfbfbf;
  transition: all .15s ease-in;

  &.first {
    width: 0px;
    bottom: 10px;
    right: 50px;
  }

  &.second {
    width: 0px;
    right: 60px;
    bottom: 5px;
  }
`