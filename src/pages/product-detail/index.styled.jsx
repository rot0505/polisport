import styled, { keyframes } from 'styled-components'

export const HeaderProduct = styled.div`
  text-align: center;
`;

export const ModelContainer = styled.div`
  width: 100%;
  padding-top: 65px;
  model-viewer {
    width: 100%;
    height: ${ p => p.height }px;
    --poster-color: transparent;
  }
`;

export const ProductTitle = styled.div`
  text-align: center;
`;

export const BtnPlayerWrapper = styled.div`
  position: absolute;

  @media (min-width: 768px) {
    bottom: 90px;
  }

  @media (max-width: 768px) {
    top: 200px;
  }
`;

export const VideoContainer = styled.div`
  width: 350px;
  position: relative;
  bottom: 15px;
  left: 15px;

  .fullscreen-bg__video {
    border-right: 1px solid grey;
  }

  @media(max-width: 767px) {
    position: fixed;
    background-color: #000;
    opacity: 0.95;
    width: 100%;
    height: 100%;
    left: 0px !important;
    overflow: hidden;
    margin-bottom: -15px;
    z-index: 99999;
    display: flex;

    div {
      position: absolute;
      top: 15px;
      right: 5px;
    }

    .fullscreen-bg__video {
      width: 100%;
      height: auto;
    }

    .cursor-pointer {
      color: white;
    }
  }
`;