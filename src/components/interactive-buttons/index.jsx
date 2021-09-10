import React from 'react'
import { useDispatch } from 'react-redux'
import { AppActionType } from '../../effects/types'
import { AnimatePresence } from 'framer-motion'
import { useResize } from '../../hooks'
import { Midia } from '..'
import { ExpandFullsizeIcon, LinkedinIcon, FacebookIcon, EnvelopIcon, CollapseFullsizeIcon, ShareIcon, VRIcon, HelpIcon } from '../icons'
import { Container, InteractiveButtonsList, Item, ItemUnlisted, ContainerSocialMedia, MenuSocialMedia, ButtonSocialMedia } from './index.styled'

const InteractiveButtonsComponent = React.memo(({ showAllMenu = true, simulateMobile = false,
  showVr = false, showFullsize = true, showShare = true, showHelp = true, showPlay = true,
  onClickVR = () => { }
}) => {

  const dispatch = useDispatch();
  const [ fullScreen, setFullScreen ] = React.useState(false)
  const [ showMuted, setShowMuted ] = React.useState(false)
  const [ showSocialMedia, setShowSocialMedia ] = React.useState(false);

  const { isMobile } = useResize();

  const activeFullScreen = () => {
    setFullScreen(!fullScreen)
    const el = document.documentElement;
    if(fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    } else {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) { /* Safari */
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) { /* IE11 */
        el.msRequestFullscreen();
      }
    }
  }

  const onClickFullsize = () => {
    activeFullScreen()
  }
  const onClickPlay = () => {
    setShowMuted(false)
  }

  const onClickShare = () => {
    setShowSocialMedia(() => !showSocialMedia)
  }

  const onClickHelp = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_HELP, payload: true });
  }

  const onClickFacebook = () => {
    setShowSocialMedia(() => !showSocialMedia)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')
  }

  const onClickEnvelop = () => {
    setShowSocialMedia(() => !showSocialMedia)
    window.location.href = `mailto:?subject=Polisport&body=${window.location.href}`;
  }

  const onClickLinkedin = () => {
    setShowSocialMedia(() => !showSocialMedia)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')
  }

  // const onClickPause = () => {
  //   setShowMuted(true)
  // }
  
  return (
    <Container>
      <AnimatePresence>
      { showAllMenu &&
      <InteractiveButtonsList key="InteractiveButtonsList" className="row" initial={{opacity: 0, x: isMobile || simulateMobile ? 40: 0 }} animate={{opacity: 1, x: 0, transition: { ease: 'easeInOut', duration: .3}}} exit={{opacity: 0, x: 30, transition: { duration: .2}}} >
        {showVr && (
          <Item onClick={() => onClickVR()}>
            <VRIcon />
          </Item>
        )}
        {showFullsize && (
          <Item onClick={() => onClickFullsize()}>
            {fullScreen ? <CollapseFullsizeIcon /> : <ExpandFullsizeIcon />}
          </Item>)}
        {showShare && (
          <Item className="position-relative" onClick={() => onClickShare()}>
            <ShareIcon />
            <AnimatePresence>
            { showSocialMedia &&
              <ContainerSocialMedia 
              key="container-social-media"
              initial={{height: 0, opacity: 0}} 
              animate={{height: 'auto',  opacity: 1}} 
              exit={{height: 0, opacity: 0}}
              transition={{
                ease: 'easeOut',
                duration: .4
              }}
              >
                <MenuSocialMedia>
                  <ButtonSocialMedia onClick={() => onClickLinkedin()}><LinkedinIcon className="linkedin" /></ButtonSocialMedia>
                  <ButtonSocialMedia onClick={() => onClickFacebook()}><FacebookIcon className="facebook" /></ButtonSocialMedia>
                  <ButtonSocialMedia onClick={() => onClickEnvelop()}><EnvelopIcon className="envelop" /></ButtonSocialMedia>
                </MenuSocialMedia>
              </ContainerSocialMedia>
              }
            </AnimatePresence>
          </Item>
        )}
        {showHelp && (
          <Item onClick={() => onClickHelp()}>
            <HelpIcon />
          </Item>)}
      </InteractiveButtonsList>
      }
      </AnimatePresence>
      {(showPlay && showMuted === true) && (
          <ItemUnlisted onClick={() => onClickPlay()}>
            <Midia playing={showMuted}/>
          </ItemUnlisted>
        )}
        {/* {(showPlay && showMuted === false) && (
          <ItemUnlisted onClick={() => onClickPause()}>
            <Midia playing={showMuted}/>
          </ItemUnlisted>
        )} */}
    </Container>
  )
})

export default InteractiveButtonsComponent