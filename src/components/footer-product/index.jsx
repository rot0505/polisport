import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { AppActionType } from '../../effects/types'
import { useHistory } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { v4 as uuiv4 } from 'uuid'
import { useParams } from "react-router"

import { Text, MenuAmbiente } from '../'
import { messages } from '../../app'
import { useResize } from '../../hooks'
import { StyledDiv, StyledButton, ContainerSubMenu, Menu, MenuButton, Copyright, Pagination, HelpSharp } from './index.styled';
import { IoEarthOutline, IoStatsChart, IoHelpSharp } from 'react-icons/io5'
import { updateLanguage } from './../../effects/actions'
import { LINK, BicyclePrevious, BicycleNext, BobikePrevious, BobikeNext, CatlikePrevious, CatlikeNext, OffroadPrevious, OffroadNext } from '../../assets'

const FooterProductComponent = ({ updateShowLanguage = () => { console.log("") }, locale, showLanguage, paddingTop, className = '', updateLanguage, showVr = false, showEnviroment = true, paginationHandler = () => { } }) => {

  const history = useHistory();
  // const isMenuOpen = useSelector(state => state.app.showMainMenu);
  const { type, id } = useParams();
  const dispatch = useDispatch();

  const [showSubmenu, setShowSubmenu] = React.useState(false)
  const { isMobile } = useResize();

  const arLanguages = Object.keys(messages);

  const handleMenuLanguage = (language) => {
    setShowSubmenu(false);
    updateShowLanguage();
    updateLanguage(language?.message || "en");
  }

  const onClickHelp = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_HELP, payload: true });
  }

  const getPreviousImage = () => {
    switch (type) {
      case "bicycle":
        return BicyclePrevious;
      case "bobike":
        return BobikePrevious;
      case "catlike":
        return CatlikePrevious;
      case "offroad":
        return OffroadPrevious;
      default:
        return BicyclePrevious;
    }
  }

  const getNextImage = () => {
    switch (type) {
      case "bicycle":
        return BicycleNext;
      case "bobike":
        return BobikeNext;
      case "catlike":
        return CatlikeNext;
      case "offroad":
        return OffroadNext;
      default:
        return BicycleNext;
    }
  }

  const getColor = () => {
    switch (type) {
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

  const handlePagination = (e) => {
    var newPage;
    if (e === "previous") {
      newPage = (parseInt(id) - 1 > 0) ? (parseInt(id) - 1) : 10;
    }

    if (e === "next") {
      newPage = (parseInt(id) + 1 < 11) ? (parseInt(id) + 1) : 1;
    }
    history.push(`/products/${type}/${newPage}`);
  }

  const renderCopyright = () => {
    return (
      <Copyright
        key={uuiv4()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} onClick={() => window.open(LINK.termsAndCondition, '_blank')}>
        <Text
          style={{ marginLeft: '10px', cursor: "pointer" }}
          fontSize="14px"
          color="#929292"
          textId="footer.terms-and-conditions"
          letterSpacing="0.14px"
          lineHeight="18px"
        />
        <Text
          style={{ marginLeft: '10px', cursor: "pointer" }}
          fontSize="12px"
          color="#929292"
          textId="footer.copyright"
          lineHeight="18px"
        />
      </Copyright>
    )
  }

  return (
    <StyledDiv paddingTop={paddingTop} className={className}>
      <div className="row no-gutters">
        <div className="col-2 col-md-1">
          <StyledButton className={className} active={showLanguage} onClick={() => setShowSubmenu(!showSubmenu)}>
            {!isMobile &&
              <>
                <IoEarthOutline size={20} fill="#FFF" />
                <p>{String(locale).toLocaleUpperCase()}</p>
              </>
            }
            <AnimatePresence>
              {showSubmenu &&
                <ContainerSubMenu
                  key="cont-submenu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    ease: 'easeOut',
                    duration: .4
                  }}
                >
                  <Menu>
                    {arLanguages.length > 0 && arLanguages.filter(message => message !== locale).map(message => (
                      <MenuButton key={message} onClick={() => handleMenuLanguage({ message })}>{message.toUpperCase()}</MenuButton>
                    ))}
                  </Menu>
                </ContainerSubMenu>
              }
            </AnimatePresence>
          </StyledButton>
        </div>
        <div className="col-8 col-md-4">
          {isMobile &&
            <Pagination color={ getColor() }>
              <img src={ getPreviousImage() } onClick={() => handlePagination("previous")} />
              <span className="currentPage">{id}</span>
              <span>/</span>
              <span className="totalPage">10</span>
              <img src={ getNextImage() } onClick={() => handlePagination("next")} />
            </Pagination>
          }
          {!isMobile && renderCopyright()}
          {/* <AnimatePresence>
            {isMobile && isMenuOpen && renderCopyright()}
          </AnimatePresence> */}
        </div>

        <div className="col-2 col-md-7 d-flex justify-content-end">
          <AnimatePresence>
            {!isMobile && showVr && showEnviroment && <MenuAmbiente key="m-amb-ente" style={{ marginRight: 'auto' }} />}
            {!isMobile &&
              <div className="d-flex align-items-center">
                <HelpSharp hoverColor={ getColor() }>
                  <IoHelpSharp size="22" className="ml-4 cursor-pointer" onClick={() => onClickHelp()} />
                </HelpSharp>
              </div>
            }
            {isMobile &&
              <div className="d-flex align-items-center">
                <IoStatsChart size="22" className="ml-4 cursor-pointer" />
              </div>
            }
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
})(React.memo(FooterProductComponent))