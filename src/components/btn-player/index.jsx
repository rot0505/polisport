/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useResize } from '../../hooks'
import { Container, BtnPlayPauseContainer, ContainerHover, DescriptionContainer, TextDescription } from './index.styled'
import { ImPlay3, ImRadioChecked2 as BgHover } from 'react-icons/all'

const BtnPlayerComponent = React.memo(({type, clickHandler, style}) => {
  const intl = useIntl();
  const [ isHover, setIsHover ] = useState(true);

  const isMobile = useResize().isMobile;

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
  
  const getTitle = () => {
    return intl.formatMessage({ id: "btn.watch-demo"});
  }

  const handleClick = () => {
    clickHandler();
  }

  useEffect(() => {
    if(isMobile){
      !isHover && setIsHover(true);
    } 
  }, [isMobile])

  return (
    <Container style={style}>
      <BtnPlayPauseContainer className="bordered" bgHover={getColor()}>
        <ImPlay3 color={getColor()} className="btn-play" size={28} />
        <ContainerHover onClick={handleClick} bgHover={getColor()}>
          <BgHover className="act-hover" />
        </ContainerHover>
      </BtnPlayPauseContainer>
      <DescriptionContainer>
          <TextDescription className="text-description">{getTitle()}</TextDescription>
      </DescriptionContainer>
    </Container>
  )
})

BtnPlayerComponent.propTypes = {
  type: Proptypes.oneOf(["red", "blue", "black", "bicycle", "bobike", "catlike", "offroad"]),
  clickHandler: Proptypes.func,
  style: Proptypes.oneOfType([
    Proptypes.object,
    Proptypes.instanceOf([null])
  ]) 
}

BtnPlayerComponent.defaultProps = {
  type: 'red',
  clickHandler: () => { console.log("Click") },
  style: {}
}

export default BtnPlayerComponent