import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { AppActionType } from '../../effects/types';
import { PersonMap } from '../icons'
import { Container } from './index.styled'

const ButtonPersonMapComponent = ({ style, name }) => {
  const dispatch = useDispatch();

  const openMap = () => {
    console.log("open map")
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MAP, payload: { show: true, map: name } });
  }

  return (
    <Container style={style} onClick={openMap}>
      <PersonMap />
    </Container>
  )
}

ButtonPersonMapComponent.propTypes = {
  handleClick: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf([null])
  ]) 
}

ButtonPersonMapComponent.defaultProps = {
  handleClick: () => {},
  style: {}
}

export default ButtonPersonMapComponent
