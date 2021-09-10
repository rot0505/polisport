import React from 'react'
import { Button, BikeContainer, Line } from './index.styled'
import { Text } from '../../'
import { MdDirectionsBike } from 'react-icons/md'

function ButtonMenuCorporateComponent({ data: {clickId, id, clickHandler, className} }) {
  return (
    <Button className={className} onClick={() => clickHandler(clickId)}>
      <Text textId={`menu-corporate.${id}-title`} className="title" />
      <Text textId={`menu-corporate.${id}-description`} className="description" />
      {className !== 'active' && 
      <BikeContainer className="bike-container">
        <MdDirectionsBike size={22} color="#434343"/>
        <Line className="first" />
        <Line className="second"/>
      </BikeContainer>
      }
    </Button>
  )
}

export default ButtonMenuCorporateComponent
