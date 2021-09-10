import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { IoMenuSharp, CgClose, BsChevronLeft } from 'react-icons/all'
import { FormattedMessage } from 'react-intl'
import { AppActionType } from '../../effects/types'
import { LogoBlue, LogoBicycle, LogoBobike, LogoCatlike, LogoOffroad, LogoBlueMobile, LogoRedMobile, LogoRed, LogoBlack, LogoBlackMobile } from '../../assets'
import { Header, ImgLogo, Left, Right, Center, ButtonMenuContainer, CloseButton } from './index.styled'
import { useResize } from '../../hooks'
import { Text } from '..'

const HeaderComponent = React.memo(({ children, textClose = "timeline.button-close",color, showClose = false, onClickClose = () => {}, colseColor = '0xffffff', showMenu = true }) => {
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
      case "bicycle":
        return "#0065a4";
      case "bobike":
        return "#333e48";
      case "catlike":
        return "#221e1f";
      case "offroad":
        return "#e20a16";
      default:
        return "#FFF";
    }
  }

  const getLogoMobile = () => {
    switch (color) {
      case "red":
        return LogoRedMobile;
      case "blue":
          return LogoBlueMobile;
      case "black":
        return LogoBlackMobile;
      case "bicycle":
        return LogoBicycle;
      case "bobike":
        return LogoBobike;
      case "catlike":
        return LogoCatlike;
      case "offroad":
        return LogoOffroad;
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
      case "bicycle":
        return LogoBicycle;
      case "bobike":
        return LogoBobike;
      case "catlike":
        return LogoCatlike;
      case "offroad":
        return LogoOffroad;
      default:
        return LogoBlue;
    }
  }

  const RedBlueLogoStyle = {
    width: 'auto', 
    height: '60px'
  }

  const bobikeLogoStyle = {
    height: '39px'
  }

  return (
    <Header>
      <Left>
        {isMobile ? 
          <ImgLogo src={getLogoMobile()} alt="Polisport" /> :
          <ImgLogo style={color !== 'bobike' ? RedBlueLogoStyle : bobikeLogoStyle} src={getLogo()} alt="Polisport" />
        }
      </Left>
      <AnimatePresence>
      {!isMenuOpen &&
        <Center key="center" initial={{ opacity: 0 }} animate={{opacity: 1, transition: {duration: .5, delay: .2}}} exit={{opacity: 0, transition: { duration: .35}}} transition={{delay: 0}}>{children}</Center>
      }
      </AnimatePresence>
      
      <Right>
        {isMenuOpen && showCloseButton && (
          <ButtonMenuContainer onClick={toggleMenu} color={isMenuOpen ? "#FFF" : getColor(color)}>
            <CgClose color="#FFF" size={22} /> <FormattedMessage id="close" />
          </ButtonMenuContainer>
        )}
        {(!isMenuOpen && !showClose && showMenu) && 
          <ButtonMenuContainer color={ getColor() } onClick={toggleMenu}>
            <IoMenuSharp/>
            <FormattedMessage id="menu" />
          </ButtonMenuContainer> 
        }
        {showClose &&  
          <CloseButton key="closeButton" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut', delay: .2 }} onClick={onClickClose}>
          <BsChevronLeft
            size={14}
            color={colseColor}
          />
          <Text textTransform="uppercase" color={colseColor} letterSpacing="1.8px" fontSize="14px" fontSizeMobile="14px" fontWeight="400" textId={textClose} />
        </CloseButton>
        }
      </Right>
    </Header>
  )
})

export default HeaderComponent