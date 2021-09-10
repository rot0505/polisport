import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ImageBgCompSplash } from '../../assets'

export const Menu = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient( rgba(0, 0, 0, 0.95) 100%, rgba(0, 0, 0, 0.95)100%),url(${ImageBgCompSplash}), linear-gradient( rgba(0,0,0, 1) 100%, rgba(0, 0, 0, 1)100%);
  background-position: center;
  background-size: cover;
  z-index: 1000;
`
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
export const MainMenu = styled(motion.ul)`
  /* min-width: 340px; */
  display: inline-block;
  width: auto;
  list-style: none;
  padding-left: 170px;
`
export const ButtonWrapper = styled.div`
  display: block;
`

export const Button = styled.li`
  position: relative;
  display: inline-block;
  width: auto;
  height: 56px;

  @media (min-width: 768px) and (max-height: 700px){
    height: 30px;
  }

  &:hover {
    .hover-text {
      width: 100%;
    }

    .submenu {
      opacity: 1;
      visibility: visible;
      left: calc(100% + 120px);
    }

    .div-lines {
      width: 180px;
      opacity: 1;

      .line-1{ width: 30px }
      .line-2{ width: 58px }
      .line-3{ width: 116px }
    }
  }

  .main-text {
    font-weight: 700;
    text-transform: uppercase;
    color: #666666;
    font-size: 36px;
    letter-spacing: 6px;
    white-space: nowrap;
    cursor: pointer;

    @media (min-width: 768px) and (max-height: 700px){
      font-size: 30px;
    }
  }

  .sub-text {
    font-weight: 500;
    text-transform: uppercase;
    color: #666666;
    font-size: 20px;
    letter-spacing: 1px;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s ease;
    margin-top: 12px;

    &:hover {
      color: #9b9b9b;
    }
  }

  .hover-text {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 0;
    font-weight: 700;
    text-transform: uppercase;
    color: #FFF;
    font-size: 36px;
    letter-spacing: 6px;
    white-space: nowrap;
    transition: all .3s ease-in;
    cursor: pointer;

    @media (min-width: 768px) and (max-height: 700px){
      font-size: 30px;
    }
  }

  margin-bottom: 38px;
`

export const Div3Lines = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 60px;
  height: 104px;
  bottom: 14px;
  opacity: .5;
  left: 100%;
  padding: 10px 0 14px 10px;
  transition: all .3s ease;

  @media (min-width: 768px) and (max-height: 700px){
    height: 106px;
    bottom: -8px;
  }

  &.reverse {
    flex-direction: column-reverse;
    bottom: initial;
    top: 14px;
  }
`

export const Line = styled.div`
  width: 50%;
  height: 1px;
  background: #FFF;
  transition: all .3s ease;

  &.line-1{ width: 0px }
  &.line-2{ width: 0px }
  &.line-3{ width: 30px }
`
