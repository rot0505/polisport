import React, { useEffect, useState } from 'react'
import Proptypes from 'prop-types';
import { useResize } from '../../hooks'
import { MdDirectionsBike } from 'react-icons/md'
import { Container, EnterTour, BikeContainer } from './index.styled'

function MotoProgressComponent({type, bottomDistance, leftDistance}) {

  const minBikeDistance = 50;

  const { width } = useResize();
  const [distance, setDistance] = useState(minBikeDistance);

  const getColor = () => {
    switch(type) {
      case 'blue':
        return '#0769a6';
      case 'red':
        return '#e20a16';
      case 'red-white':
          return '#e20a16';
      case 'black':
        return '#434343';
      case "bicycle":
        return "#0166A4";
      case "bobike":
        return "#333e48";
      case "catlike":
        return "#221e1f";
      case "offroad":
        return "#e20a16";
      default:
        return '#434343'
    }
  }

  const color = getColor();

  useEffect(() => {
    const fracao = ((window.innerWidth - minBikeDistance) / 100);
    const newPosition = minBikeDistance + (fracao * leftDistance) - 36;
    setDistance(newPosition);
  }, [width, leftDistance])

  return (
    <Container distance={bottomDistance}>
      <EnterTour color={color} distance={distance}>
        <BikeContainer distance={distance} color={color} className={`bike-container right`}>
          <MdDirectionsBike color={type === 'red-white' ? '#FFF': color} />
        </BikeContainer>
      </EnterTour>
    </Container>
  )
}

MotoProgressComponent.propTypes = {
  type: Proptypes.oneOf(["red", "blue", "black", "bicycle", "bobike", "catlike", "offroad", "red-white"]),
  bottomDistance: Proptypes.number,
  leftDistance: Proptypes.number,
}

MotoProgressComponent.defaultProps = {
  type: 'red',
  bottomDistance: 40,
  leftDistance: 0
}

export default MotoProgressComponent
