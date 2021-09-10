import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { IoMenuSharp, CgClose } from 'react-icons/all'
import { FormattedMessage } from 'react-intl'
import { AppActionType } from '../../effects/types'
import { LogoBicycle, LogoBobike, LogoCatlike, LogoOffroad } from '../../assets'
import { Header, ImgLogo, Left, Right, Center, ButtonMenuContainer, CloseButton,Container, ButtonInfo, ExpansiveText, ScrolledDiv  } from './index.styled'
import { useResize } from '../../hooks'
import { Text } from '..'
import { v4 as uuiv4}  from 'uuid'

const HeaderProductComponent = React.memo(({ children, textClose = "timeline.button-close",color, showClose = false, onClickClose = () => {}, showMenu = true,noti,infos,type }) => {
  const isMobile = useResize().isMobile
  const dispatch = useDispatch();

  const isMenuOpen = useSelector(state => state.app.showMainMenu);
  const isTimelineOpen = useSelector(state => state.app.showTimeline);
  const isContactOpen = useSelector(state => state.app.showContact);
  const showCloseButton = useSelector(state => state.app.showCloseButton);
  const [ active1, setActive ] = React.useState(false);

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
      case "bicycle":
        return "#0166A4";
      case "bobike":
        return "#333e48";
      case "catlike":
        return "#221e1f";
      case "offroad":
        return "#e20a16";
    }
  }

  const getLogo = () => {
    switch (color) {
      case "bicycle":
        return LogoBicycle;
      case "bobike":
        return LogoBobike;
      case "catlike":
        return LogoCatlike;
      case "offroad":
        return LogoOffroad;
    }
  }

  const LogoStyle = {
    width: 'auto', 
    height: '60px'
  }

  const bobikeLogoStyle = {
    width: 'auto', 
    height: '39px'
  }

  const catlikeLogoStyle = {
    width: 'auto', 
    height: '48px',
    marginTop: '5px'
  }

  const getLogoStyle = (type) => {

    switch(type) {
      case 'bobike':
        return bobikeLogoStyle;
      case 'catlike':
        return catlikeLogoStyle;
      default:
        return LogoStyle;
    }
  }

  const handlerActive = () => {
    setActive(!active1);
  }
  return (
    <Header>
      <Left>
        {!isMobile &&
          <ImgLogo style={ getLogoStyle(color) } src={getLogo()} alt="Polisport" />
        }
      </Left>
      <AnimatePresence>
      {!isMenuOpen &&
        <Center key="center" initial={{ opacity: 0 }} animate={{opacity: 1, transition: {duration: .5, delay: .2}}} exit={{opacity: 0, transition: { duration: .35}}} transition={{delay: 0}}>{children}</Center>
      }
      {/* <Center key="center1" initial={{ opacity: 0 }} animate={{opacity: 1, transition: {duration: .5, delay: .2}}} exit={{opacity: 0, transition: { duration: .35}}} transition={{delay: 0}}>
      {noti && !isMobile &&
        <ButtonInfo className={"active"} style={{borderColor:color}} colors={'red'}  onClick={handlerActive}>
        <FaInfo size={16} color={color === "bobike"?"black": type === "offroad"?"red": type === "catlike"?"#ff661c":"blue"}/>
      </ButtonInfo>
      }
      </Center> */}
      </AnimatePresence>
      <AnimatePresence>
        { active1 &&
          <ExpansiveText key={uuiv4()}
            style={{backgroundColor:'black'}}
            className={active1 ? 'active': ''}
            initial={!isMobile ?
                    {opacity: 0, x: '-50%', rotateX: -90, transition: { duration: .4}}:
                    {opacity: 0, width: 0, height: 0, x: 0, transition: { duration: .4}}
                  } 
            animate={!isMobile ?
                      {opacity: 1, x: '-50%', rotateX: 0, transition: { duration: .7, ease: 'backOut'}}:
                      {opacity: 1, width: '100vw', height: '100vh', x: 0, transition: { duration: .4, ease: 'easeInOut'}}
                    } 
            exit={!isMobile ? 
                  {opacity: 0, rotateX: -90, transition: { duration: .3, ease: 'easeOut'}}:
                  {opacity: 0, width: 0, height: 0, x: 0, transition: { duration: .2, ease: 'easeOut'}}
              } 
            transition={{delay: 0}}
            >
              <>
                 <Text textId={infos.title}
                  textTransform="uppercase"
                  color="#FFF"
                  fontSize="21px"
                  fontSizeMobile="20px"
                  fontWeight="500"
                  letterSpacing="1.8px"
                  className="title"
              />
              <ScrolledDiv>
                <Text textId={infos.description}
                    color="#aeaeae"
                    fontSize="14px"
                    fontSizeMobile="14px"
                    fontWeight="300"
                    lineHeight="25px"
                    letterSpacing=".6px"
                />
              </ScrolledDiv> 
              </>
             
         
          </ExpansiveText>
        }
      </AnimatePresence>
      
      <Right>
        {isMenuOpen && showCloseButton && (
          <ButtonMenuContainer onClick={toggleMenu} color={isMenuOpen ? "#FFF" : getColor(color)}>
            <CgClose color="#FFF" size={22} /> <FormattedMessage id="close" />
          </ButtonMenuContainer>
        )}
        {(!isMenuOpen && !showClose && showMenu) && <ButtonMenuContainer onClick={toggleMenu}><IoMenuSharp/><FormattedMessage id="menu" /></ButtonMenuContainer> }
        {showClose &&  
          <CloseButton key="closeButton" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut', delay: .2 }} onClick={onClickClose}>
          <CgClose
            size={20}
            color={ getColor() }
          />
        </CloseButton>
        }
      </Right>
    </Header>
  )
})

export default HeaderProductComponent