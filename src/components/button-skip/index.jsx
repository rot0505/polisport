import React from 'react'
import Proptypes from 'prop-types';
import { MdKeyboardArrowRight } from 'react-icons/all'
import { Text } from '..'
import { Container } from './index.styled'

function ButtonSkipComponent({clickHandler}) {
  return ( 
    <Container onClick={clickHandler}>
      <Text textTransform="uppercase" letterSpacing=".8px" lineHeight="30px" fontSize="19px" fontSizeMobile="14px" fontWeight="400" textId="skip.title" />
      <MdKeyboardArrowRight size={30} color="#FFF" />
    </Container>
  )
}

ButtonSkipComponent.propTypes = {
  clickHandler: Proptypes.func
}

ButtonSkipComponent.defaultProps = {
  clickHandler: () => { console.log("Click") }
}

export default ButtonSkipComponent;
