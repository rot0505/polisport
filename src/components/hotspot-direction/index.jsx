
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ButtonToggleInteractive } from '..'
import { Container, BigCircle, CircleWhite, ButtonToggleInteractiveContainer } from './index.styled'

const HotSpotDirectionComponent = ({direction, handleClick, style}) => {

  const [ isHover, setIsHover ] = useState(false);

  function getDirection() {
    
    switch(direction){
      case "left":
        return 0;
      case "right":
        return 180;
      case "top":
          return 90;
      case "bottom":
          return -90;
      default: 
        return 0;
    }
  }

  return (
    <Container style={style} 
                angle={getDirection()} 
                onClick={handleClick}
                onMouseLeave={() => setIsHover(false)}
                onMouseOver={() => setIsHover(true)}>
      <CircleWhite className="circle-white"/>
      <ButtonToggleInteractiveContainer angle={getDirection()} >
        <ButtonToggleInteractive mode={isHover ? "normal" : "sharp"} />
      </ButtonToggleInteractiveContainer>
      <BigCircle className="big-circle" />
    </Container>
  )
}

HotSpotDirectionComponent.propTypes = {
  direction: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  handleClick: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf([null])
  ]) 
}

HotSpotDirectionComponent.defaultProps = {
  direction: "left",
  handleClick: () => {},
  style: {}
}

export default HotSpotDirectionComponent
