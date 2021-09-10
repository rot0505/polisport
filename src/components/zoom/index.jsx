import React from 'react'
import PropTypes from 'prop-types'
import { RiSearch2Line } from 'react-icons/all'
import { Container, Lines, Menu, Button, SearchContainer } from './index.styled'

function ZoomComponent({handleUp, handleDown, style}) {
  return (
    <Container style={style}>
      <Lines><div /><div /><div /></Lines>
        <Menu>
          <Button onClick={handleUp}> + </Button>
          <SearchContainer>
            <RiSearch2Line color="#c5cacd" />
          </SearchContainer>
          <Button onClick={handleDown}> - </Button>
        </Menu>
      <Lines className="inverse"><div /><div /><div /></Lines>
    </Container>
  )
}

ZoomComponent.propTypes = {
  handleUp: PropTypes.func,
  handleDown: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf([null])
  ]) 
}

export default ZoomComponent

