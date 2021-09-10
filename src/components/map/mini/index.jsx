import React from 'react'
import { useDispatch } from 'react-redux'
import { AppActionType } from '../../../effects/types';
import { renderMap } from '../../../utils';
import { Container, ContainerSVGMini } from './index.styled'

function MapMiniComponent({ name, floor }) {
  const dispatch = useDispatch();

  const openMap = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MAP, payload: { show: true, map: name, floor: floor } });
  }
  
  return (
    <Container onClick={openMap}>
      <ContainerSVGMini>
        {renderMap(name, floor, true)}
      </ContainerSVGMini>
    </Container>
  )
}

export default MapMiniComponent;
