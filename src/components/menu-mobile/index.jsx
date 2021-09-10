import React, { useState } from 'react'
import { Menu, Wrapper, MainMenu, Button, ButtonWrapper, Div3Lines, Line } from './index.styled'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { AppActionType } from '../../effects/types'
import { Text, SubmenuMobile, Contact, TimelineMobile } from '..'
import mainMenu from '../../assets/mock-data/menu-main.json'

function MenuMobileComponent() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [ active, setActive ] = useState(null);
  const isTimelineOpen = useSelector(state => state.app.showTimeline);
  const isContactOpen = useSelector(state => state.app.showContact);

  const handleClickMenu = (item) => {
    console.log(item);
    switch (item) {
      case 'timeline':
        openShowTimeline();
        break;
        case 'contacts':
          openShowContact();
          break;
      default: 
        return closeMenu();
    }
  }

  const openShowTimeline = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_TIMELINE, payload: !isTimelineOpen });
  }

  const openShowContact = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_CONTACT, payload: !isContactOpen });
  }

  const closeMenu = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MENU, payload: false });
  }

  const togleMenu = (category) => {
    active !== category ? setActive(category) : setActive(null);
  }

  const variants = {
    hidden: { x: '-102vw', opacity: .5},
    visible: { x: 0, opacity: 1, transition: { duration: 1 }},
    exit: { x: '-102vw', opacity: .5, transition: { duration: 1 }}
  }

  return (
    <Menu variants={variants} initial="hidden" animate="visible" exit="exit" className="menu">
      <Wrapper>
        <AnimatePresence>
          {isTimelineOpen && 
            <motion.div key="timeline" initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0, transition: {delay: .5, ease: 'easeInOut', duration: .5}}} exit={{opacity: 0, transition: { duration: .3}}} transition={{delay: 0}} style={{position: 'absolute'}}>
              <TimelineMobile />
            </motion.div>}
        </AnimatePresence>
        <AnimatePresence>
          {isContactOpen && 
            <motion.div key="contact" initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0, transition: {delay: .5, ease: 'easeInOut', duration: .5}}} exit={{opacity: 0, transition: { duration: .3}}} transition={{delay: 0}} style={{position: 'absolute'}}>
              <Contact />
            </motion.div>}
        </AnimatePresence>
        <AnimatePresence>
        {!isTimelineOpen && !isContactOpen &&
          <MainMenu key="mainmenumobile" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: .5}}} exit={{opacity: 0, transition: { duration: .3}}} transition={{delay: 0}}>
            {mainMenu.map(btn => { 
              const category = btn.id.substr(btn.id.indexOf('.') + 1, btn.id.length).toLowerCase();
              return (
                <ButtonWrapper key={btn.id} className={category === active ? 'active' : ''}>
                  <Button onClick={btn.submenu === undefined ? () => handleClickMenu(category) : () =>  togleMenu(category)}>
                    <Text className="main-text" textId={btn.id} />
                    {btn.submenu !== undefined && <>
                    <Div3Lines className="div-lines">
                      <span>{category === active ? '-' : '+'}</span><Line className="line-1" />
                    </Div3Lines> 
                    {category === active && <SubmenuMobile className="submenu" subdata={btn.submenu} history={ history } closeMenu={ closeMenu }/> }
                    </>}
                  </Button>
                </ButtonWrapper>
              )
            } )}
          </MainMenu>
        }
        </AnimatePresence>
      </Wrapper>
    </Menu>
  )
}

export default MenuMobileComponent;
