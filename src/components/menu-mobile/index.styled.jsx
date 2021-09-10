import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Menu = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #151515;
  background-position: center;
  background-size: cover;
  z-index: 1000;
`
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px 0px;
  display: flex;
  align-items: center;
`
export const MainMenu = styled(motion.ul)`
  display: inline-block;
  width: auto;
  list-style: none;
  padding: 0 30px;
`
export const ButtonWrapper = styled.div`
  display: block;
  transition: all .3s ease;

  &.active {
    margin-bottom: 20px;
  }
`

export const Button = styled.li`
  position: relative;
  display: inline-block;
  width: auto;
  height: 40px;
  margin-bottom: 36px;

  .main-text {
    font-weight: bold;
    text-transform: uppercase;
    color: #FFF;
    font-size: 23px;
    letter-spacing: 7px;
    white-space: nowrap;
    cursor: pointer;
  }

  .sub-text {
    font-weight: 500;
    text-transform: uppercase;
    color: #666666;
    font-size: 12px;
    letter-spacing: .8px;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s ease;
    margin-right: 48px;

    &:hover {
      color: #9b9b9b;
    }
  }
`

export const Div3Lines = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 54px - 100%);
  height: 34px;
  margin-left: 12px;
  opacity: .5;
  top: 0;
  left: calc(100% + 10px);
  transition: all .3s ease;
  color: #FFF;

  span {
    min-width: 14px;
    margin-right: 10px;
    font-size: 32px;
    font-weight: 100;
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #FFF;
  padding-left: 10px;
  margin-top: 5px;
`
