import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --height: 100px;
  }
  html, body {
    font-family: 'Barlow', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
  }

  * {
  scroll-behavior: smooth;
  }

  html {
    height: var(--height) !important;
    overflow: hidden !important;
  }
  body {
    height: 100%;
      max-height: var(--height) !important;
      overflow: hidden !important;
  }

  #root {
      height: var(--height) !important;
      max-height: var(--height) !important;
      overflow: hidden !important;
  }
  *::-webkit-scrollbar { width: 1px; height: 1px } *::-webkit-scrollbar-track { background: transparent } *::-webkit-scrollbar-thumb { background: transparent }
  * { scrollbar-color: transparent; scrollbar-width: thin; }

  div {
    box-sizing: border-box;
  }
  
  .fullscreen{ 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .background-dark {
    background: #151515;
  }

  .no-touch{
    pointer-events: none;
    touch-action: none;
  }

  .z-index-20 {
    z-index: 20;
  }

  .force-translate-0 {
    transform: translate3d(0,0,0) !important;
  }

  .cursor-pointer {
    cursor: pointer;
  }

`
export const FooterContainer = styled.div`
  z-index: 1001;
  position: absolute;
  bottom: -10px;
  left: 0;
`

export const ContentContainer = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  &.centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: inline-flex;
  height: 60px;
  left: 0;
  width: 100%;
  z-index: 2;
  flex-direction: row;
  padding: 0 20px;
  z-index: 1001;
  pointer-events: none;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`