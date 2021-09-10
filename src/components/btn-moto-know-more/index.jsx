import React, { useEffect, useState, useRef } from 'react'
import Proptypes from 'prop-types';
import { useResize } from '../../hooks'
import { MdDirectionsBike } from 'react-icons/md'
import { Text } from '..'
import { Container, EnterTour, BikeContainer, TextContainer } from './index.styled'

function BtnMotoKnowMoreComponent({ type, bottomDistance, clickHandler }) {

  const [textDistance, setTextDistance ] = useState(null);
  const [ clickEnable, setClickEnable ] = useState(true);
  const textRef = useRef(null);

  const { isMobile } = useResize();

  const getColor = () => {
    switch(type) {
      case 'blue':
        return '#0769a6';
      case 'red':
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

  const goToNextStep = () => {
    // if(!clickEnable) return;
    // setClickEnable(false);

    setTimeout(() => {
      clickHandler();
    }, 1300);
  }

  const color = getColor();

  useEffect(() => {
    const mLeft = isMobile ? 30 : 242;
    setTextDistance(textRef?.current.offsetWidth + mLeft)
  }, [isMobile])

  return (
    <Container distance={bottomDistance}>
      <TextContainer ref={textRef} onClick={goToNextStep}>
        <Text color={color} textTransform="uppercase" letterSpacing="0px" lineHeight="30px" fontSize="16px" fontSizeMobile="14px" fontWeight="400" textId="btn.know-more" />
      </TextContainer>
      <EnterTour color={color} className={`${!clickEnable ? 'leaving' : ''}`}>
        <BikeContainer distance={textDistance} color={color} className={`bike-container right`}>
          <MdDirectionsBike color={color} />
        </BikeContainer>
      </EnterTour>
    </Container>
  )
}

BtnMotoKnowMoreComponent.propTypes = {
  type: Proptypes.oneOf(["red", "blue", "black", "bicycle", "bobike", "catlike", "offroad"]),
  bottomDistance: Proptypes.number,
  leftDistance: Proptypes.number,
}

BtnMotoKnowMoreComponent.defaultProps = {
  type: 'red',
  bottomDistance: 40,
  leftDistance: 0
}

export default BtnMotoKnowMoreComponent
