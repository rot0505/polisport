import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { useHistory } from 'react-router'
import { Menu, Wrapper, MainMenu, Button, ButtonWrapper, Div3Lines, Line } from './index.styled'
import { AppActionType } from '../../effects/types'
import { Text, SubmenuDesktop, TimelineDesktop, Contact } from '..'
import mainMenu from '../../assets/mock-data/menu-main.json'

function MenuDesktopComponent() {

  const dispatch = useDispatch();
  const history = useHistory();
  const isTimelineOpen = useSelector(state => state.app.showTimeline);
  const isContactOpen = useSelector(state => state.app.showContact);

  // console.log("isTimelineOpen", isTimelineOpen)

  const handleClickMenu = (item) => {
    console.log(item);
    switch (item) {
      case 'timeline':
        openShowTimeline();
        break;
      case 'contacts':
        openShowContact();
        break;
      case 'corporate':
        history.push('/polisport/polisport-plastics')
        closeMenu();
        break;
      default:
        return closeMenu();
    }
  }

  const openShowTimeline = () => {
    // console.log("abre a timeline")
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_TIMELINE, payload: !isTimelineOpen });
  }

  const openShowContact = () => {
    console.log("abre o contato")
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_CONTACT, payload: !isContactOpen });
  }

  const closeMenu = () => {
    console.log("closeMenu");
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MENU, payload: false });
  }

  const variants = {
    hidden: { x: '-102vw', opacity: .5 },
    visible: { x: 0, opacity: 1, transition: { duration: .7 } },
    exit: { x: '-102vw', opacity: .5, transition: { duration: .7 } }
  }

  return (
    <Menu variants={variants} initial="hidden" animate="visible" exit="exit" className="menu">
      <Wrapper>
        <AnimatePresence>
          {isTimelineOpen &&
            <motion.div key="timeline" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0, transition: { delay: .5, ease: 'easeInOut', duration: .5 } }} exit={{ opacity: 0, transition: { duration: .3 } }} transition={{ delay: 0 }} style={{ position: 'absolute' }}>
              <TimelineDesktop />
            </motion.div>}
        </AnimatePresence>
        <AnimatePresence>
          {isContactOpen &&
            <motion.div key="timeline" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0, transition: { delay: .5, ease: 'easeInOut', duration: .5 } }} exit={{ opacity: 0, transition: { duration: .3 } }} transition={{ delay: 0 }} style={{ position: 'absolute' }}>
              <Contact />
            </motion.div>}
        </AnimatePresence>
        <AnimatePresence>
          {!isTimelineOpen && !isContactOpen &&
            <MainMenu key="mainmenu" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .5 } }} exit={{ opacity: 0, transition: { duration: .3 } }} transition={{ delay: 0 }}>
              {mainMenu.map(btn => {
                const category = btn.id.substr(btn.id.indexOf('.') + 1, btn.id.length).toLowerCase();
                console.log("category", category)
                return (
                  <ButtonWrapper key={btn.id}>
                    <Button onClick={btn.submenu === undefined ? () => handleClickMenu(category) : null}>
                      <Text className="main-text" textId={btn.id} />
                      <Text className="hover-text" textId={btn.id} />
                      {btn.submenu !== undefined && <>
                        <Div3Lines className={`div-lines ${category === 'showroom' ? 'reverse' : ''}`}>
                          <Line className="line-1" />
                          <Line className="line-2" />
                          <Line className="line-3" />
                        </Div3Lines>
                        <SubmenuDesktop className={`submenu ${category === 'showroom' ? 'reverse' : ''}`} closeMenu={closeMenu} subdata={btn.submenu} />
                      </>}
                    </Button>
                  </ButtonWrapper>
                )
              })}
            </MainMenu>
          }
        </AnimatePresence>
      </Wrapper>
    </Menu>
  )
}

export default MenuDesktopComponent;
