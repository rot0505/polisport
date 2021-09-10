import React from 'react';
import { connect, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { Text, InteractiveButtons, MenuAmbienteGroup as MenuAmbiente } from '../'
import { messages } from '../../app'
// import { useIntl } from 'react-intl'
import { useResize } from '../../hooks'
import { StyledDiv, StyledButton, ContainerSubMenu, Menu, MenuButton, Copyright } from './index.styled';
import { IoEarthOutline } from 'react-icons/io5';

import { updateLanguage } from './../../effects/actions'
import { LINK } from '../../assets';
const FooterGroupComponent = ({ active = "menu-ambiente-group.bobike", updateShowLanguage = () => console.log(""), locale, showLanguage, paddingTop, className = '', updateLanguage }) => {

  const isMenuOpen = useSelector(state => state.app.showMainMenu);

  const [ showSubmenu, setShowSubmenu ] = React.useState(false)
  const { isMobile } = useResize();

  const arLanguages = Object.keys(messages);

  const handleMenuLanguage = (language) => {
    setShowSubmenu(false);
    updateShowLanguage();
    updateLanguage(language?.message || "en");
  }

  const renderCopyright = () => {
    return (
      <Copyright
          key="render-copy" 
          initial={{ opacity: 0}} 
          animate={{ opacity: 1}} 
          exit={{ opacity: 0}} onClick={() => window.open(LINK.termsAndCondition, '_blank')}>
        <Text
          style={{marginLeft: '10px', cursor: "pointer"}}
          fontSize="13px"
          fontSizeMobile="12px"
          fontWeight="300"
          color="#FFF"
          textId="footer.terms-and-conditions"
          letterSpacing="0.4px"
        />
      </Copyright>
    )
  }

  // const renderMidia = () => {
  //   return <Midia />
  // }
  // const intl = useIntl();
  return (
    <StyledDiv paddingTop={paddingTop} className={className}>
      <div className="row no-gutters">
        <div className="col-2 col-md-1">
          <StyledButton className={className} active={showLanguage} onClick={() => setShowSubmenu(!showSubmenu) }>
            <IoEarthOutline size={22} fill="#FFF"/>
            <p>{String(locale).toLocaleUpperCase()}</p>
            <AnimatePresence>
            { showSubmenu &&
              <ContainerSubMenu
              key="contain-submenu" 
              initial={{height: 0, opacity: 0}} 
              animate={{height: 'auto',  opacity: 1}} 
              exit={{height: 0, opacity: 0}}
              transition={{
                ease: 'easeOut',
                duration: .4
              }}
              >
                <Menu>
                  {arLanguages.length > 0 && arLanguages.filter(message => message !== locale).map(message => (
                        <MenuButton key={message} onClick={() => handleMenuLanguage({message})}>{message.toUpperCase()}</MenuButton>
                      ))}
                </Menu>
              </ContainerSubMenu>
              }
            </AnimatePresence>
          </StyledButton>
        </div>
        <div className="col-9 col-md-3">
          {!isMobile && renderCopyright()}
          <AnimatePresence>
            {isMobile && isMenuOpen && renderCopyright()}
          </AnimatePresence>
        </div>
        <div className="col-9 col-md-4 d-flex justify-content-center">
          <MenuAmbiente active={active} />
        </div>
        <div className="col-1 col-md-4 d-flex justify-content-end">
          <AnimatePresence>
            {/* {isMobile && isMenuOpen && renderMidia()} */}
            {!isMobile && <InteractiveButtons key="interactive-btn" />}
          </AnimatePresence>
        </div>
      </div>
    </StyledDiv>
  )
};

const mapStateToProps = ({ app }) => {
  const { locale } = app
  return { locale }
}

export default connect(mapStateToProps, {
  updateLanguage
})(React.memo(FooterGroupComponent))