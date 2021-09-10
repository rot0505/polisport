import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion';
import { MenuTooltip } from '..'
import { IoMdPlay } from 'react-icons/io'
import { Container, BigCircle, ArrowContainer } from './index.styled'

const HotSpotComponent = ({type, handleClick, style, submenu}) => {
  const [ showMenu, setShowMenu ] = useState(false);

  // const submenu = [{title: 'menu-tooltip.polisport-bicycle', link: '/polisport'},
  //                  {title: 'menu-tooltip.polisport-offroad', link: '/polisport-offroad'},
  //                  {title: 'menu-tooltip.bobike', link: '/bobike'}]

  return (
    <Container style={style} 
              onMouseOver={() => {type === 'submenu' && setShowMenu(true)}}
              onMouseLeave={() => {type === 'submenu' && setShowMenu(false)}}
              type={type}
              >
      <BigCircle className={`big-circle ${type === 'video' ? 'video' : ''}`} />
      {type === 'video' &&
        <ArrowContainer>
          <IoMdPlay color="#FFF" size={8}/>
        </ArrowContainer>
       }
      <AnimatePresence>
        {type === 'submenu' && showMenu &&
          <MenuTooltip key="menu-tooltip" submenu={submenu}  />
        }
      </AnimatePresence>
    </Container>
  )
}

HotSpotComponent.propTypes = {
  type: PropTypes.oneOf(['submenu', 'video', '']),
  handleClick: PropTypes.func,
  submenu: PropTypes.array,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf([null])
  ]) 
}

HotSpotComponent.defaultProps = {
  type: '',
  handleClick: () => {},
  submenu: [],
  style: {}
}

export default HotSpotComponent
