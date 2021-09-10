import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuiv4}  from 'uuid'
import { useResize } from '../../hooks'
import { FaInfo } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion';
import { Text } from '..'
import { Container, ButtonInfo, ExpansiveText, ScrolledDiv } from './index.styled'

const buttonTypeBlue = {
  bgColor: '#FFF',
  borderColor: '#0166a4',
  iColor: '#0166a4',
  iHoverColor: '#FFF',
  activeColor: '#212121',
  activeIconColor: '#0166a4'
}

const buttonTypeRed = {
  bgColor: '#FFF',
  borderColor: '#e20a16',
  iColor: '#e20a16',
  iHoverColor: '#FFF',
  activeColor: '#212121',
  activeIconColor: '#e20a16'
}

const buttonTypeBlack = {
  bgColor: '#FFF',
  borderColor: '#2f2f2f',
  iColor: '#2f2f2f',
  iHoverColor: '#FFF',
  activeColor: '#212121',
  activeIconColor: '#7c7c7c'
}

const buttonTypeGray = {
  bgColor: '#FFF',
  borderColor: '#333e48',
  iColor: '#333e48',
  iHoverColor: '#FFF',
  activeColor: '#212121',
  activeIconColor: '#7c7c7c'
}

const buttonTypeNone = {
  bgColor: '#FFF',
  borderColor: '#FFF',
  iColor: '#2f2f2f',
  iHoverColor: '#0166a4',
  activeColor: '#212121',
  activeIconColor: '#e20a16'
}

const InfosComponent = ({style, infos, type}) => {

  const [ active, setActive ] = useState(false);
  const { isMobile } = useResize();

  const getColors = () => {
    switch(type) {
      case 'red': 
        return buttonTypeRed;
      case 'blue':
        return buttonTypeBlue;
      case 'black':
        return buttonTypeBlack;
      case 'gray':
        return buttonTypeGray;
      default:
        return buttonTypeNone;
    }
  }

  const handlerActive = () => {
    setActive(!active);
  }

  return (
    <Container className={active ? 'active': ''} style={style} marginTop= { isMobile ? "-5px" : "10px" }>
      <ButtonInfo className={active && "active"} colors={getColors()} onClick={handlerActive}>
        <FaInfo size={16} />
      </ButtonInfo>
      <AnimatePresence>
        { active && 
          <ExpansiveText key={uuiv4()}
                        className={active ? 'active': ''}
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
          </ExpansiveText>
        }
      </AnimatePresence>
    </Container>
  )
}

InfosComponent.propTypes = {
  type: PropTypes.oneOf(['red', 'black', 'blue', 'gray', 'none']),
  handleClick: PropTypes.func,
  infos: PropTypes.object,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf([null])
  ]) 
}

InfosComponent.defaultProps = {
  type: 'none',
  handleClick: () => {},
  style: {}
}

export default InfosComponent
