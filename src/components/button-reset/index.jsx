import React from 'react'
import PropTypes from 'prop-types'
import { Text, ResetIcon } from '../../components'
import { Container, TextContainer } from './index.styled'

function ButtonResetComponent({handleClick, style}) {

  return (
    <Container style={style} onClick={handleClick}>
      <ResetIcon />
      <TextContainer >
        <Text textId="component.button-reset"
              textTransform="uppercase"
              color="#FFF"
              fontSize="14px"
              fontSizeMobile="26px"
              fontWeight="300"
              letterSpacing=".4px"
          />
      </TextContainer>
    </Container>
  )
}

ButtonResetComponent.propTypes = {
  handleClick: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf([null])
  ]) 
}

ButtonResetComponent.defaultProps = {
  handleClick: () => {},
  style: {}
}

export default ButtonResetComponent
