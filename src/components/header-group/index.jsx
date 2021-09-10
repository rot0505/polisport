import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { AppActionType } from '../../effects/types'
import { LogoBlue, LogoBlueMobile, LogoRedMobile, LogoRed, LogoBlack, LogoBlackMobile } from '../../assets'
import { Header, ImgLogo, Left, Right, Center, ButtonMenuContainer, CloseButton } from './index.styled'
import { useResize } from '../../hooks'
import { Text } from '..'
import { IoMenuSharp, CgClose, BsChevronLeft } from 'react-icons/all'

const HeaderGroupComponent = React.memo(({ children, color = "blue", showClose = false, onClickClose = () => {} }) => {
  const isMobile = useResize().isMobile
  const dispatch = useDispatch();

  const isMenuOpen = useSelector(state => state.app.showMainMenu);
  const isTimelineOpen = useSelector(state => state.app.showTimeline);
  const isContactOpen = useSelector(state => state.app.showContact);
  const showCloseButton = useSelector(state => state.app.showCloseButton);


  const toggleMenu = () => {
    if(isTimelineOpen) {
      console.log("fecha a timeline")
      dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_TIMELINE, payload: false });
    } else if(isContactOpen) {
      console.log("fecha o contato")
      dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_CONTACT, payload: false });
    } else {
      console.log("fecha o menu")
      dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MENU, payload: !isMenuOpen });
    }
  }

  const getColor = () => {
    switch (color) {
      case "blue":
        return "#0166A4";
      case "red":
        return "#E20A16";
      case "black":
        return "#434343";
      default:
        return "#FFF";
    }
  }

  const getLogoMobile = () => {
    switch (color) {
      case "red":
        return LogoRedMobile;
      case "blue":
          return LogoRedMobile;
      case "black":
        return LogoBlackMobile;
      default:
        return LogoBlueMobile;
    }
  }

  const getLogo = () => {
    switch (color) {
      case "red":
        return LogoRed;
      case "blue":
        return LogoBlue;
      case "black":
        return LogoBlack;
      default:
        return LogoBlue;
    }
  }

  const RedBlueLogoStyle = {
    width: 'auto', 
    height: '60px'
  }

  return (
    <Header>
      <Left>
        {isMobile ? 
          <ImgLogo src={getLogoMobile()} alt="Polisport" /> :
          <ImgLogo style={color !== 'black' ? RedBlueLogoStyle : null} src={getLogo()} alt="Polisport" />
        }
      </Left>
      <AnimatePresence>
      {!isMenuOpen &&
        <Center key="centered" initial={{ opacity: 0 }} animate={{opacity: 1, transition: {duration: .5, delay: .2}}} exit={{opacity: 0, transition: { duration: .35}}} transition={{delay: 0}}>{children}</Center>
      }
      </AnimatePresence>
      
      <Right>
        {isMenuOpen && showCloseButton && (
          <ButtonMenuContainer onClick={toggleMenu} color={isMenuOpen ? "#FFF" : getColor(color)}>
            <CgClose color="#FFF" size={22} /> CLOSE
          </ButtonMenuContainer>
        )}
        {!isMenuOpen && !showClose && <ButtonMenuContainer onClick={toggleMenu} color={isMenuOpen ? "#FFF" : getColor(color)}><IoMenuSharp color={isMenuOpen ? "#FFF" : getColor(color)} size={22} /> MENU</ButtonMenuContainer> }
        {showClose &&  
          <CloseButton key="closeButton" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut', delay: .2 }} onClick={onClickClose}>
          <BsChevronLeft
            size={14}
            color="#FFFFFF"
          />
          <Text textTransform="uppercase" letterSpacing="1.8px" fontSize="14px" fontSizeMobile="14px" fontWeight="400" textId="timeline.button-close" />
        </CloseButton>
        }
      </Right>
    </Header>
  )
})

export default HeaderGroupComponent