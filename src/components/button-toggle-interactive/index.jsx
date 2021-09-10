/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { IoTriangleSharp, IoTriangleOutline } from 'react-icons/all'
import { Container } from './index.styled'

function ButtonToggleInteractiveComponent({mode}) {

  const [ modeIcon, setModeIcon ] = useState(mode);

  useEffect(() => {
    setModeIcon(mode);
  }, [mode])
  return (
    <Container>
      {modeIcon === 'normal' ? 
      <IoTriangleSharp /> : 
      <IoTriangleOutline color="white" />
      }
      
      <span className="first-line"></span>
      <span className="second-line"></span>
    </Container>
  )
}

ButtonToggleInteractiveComponent.propTypes = {
  mode: PropTypes.oneOf(["normal", "sharp"])
}

ButtonToggleInteractiveComponent.defaultProps = {
  mode: "normal"
}

export default ButtonToggleInteractiveComponent
