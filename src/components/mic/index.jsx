import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from 'react-icons/fa'
import { Text } from '..'
import { Container, TextContainer } from './index.styled'

const MicComponent = ({clickHandler}) => {

  const [ isMute, setIsMute ] = useState(false);

  const handleClick = () => {
    setIsMute(!isMute);
    clickHandler();
  }

  return (
    <Container onClick={handleClick}>
      {!isMute ? <FaMicrophoneAlt size={20} color="#FFF" />:
                <FaMicrophoneAltSlash size={20} color="#FFF" /> 
      }
      <TextContainer className="text-container">
        <Text fontSize="13px" color="#BFBFBF" fontSizeMobile="13px" lineHeight="30px" fontWeight="300" letterSpacing="1px" textTransform="uppercase" textId={isMute ? "video-entry.mic-stop":"video-entry.mic-play"} />
      </TextContainer>
    </Container>
  )
}

MicComponent.propTypes = {
  clickHandler: PropTypes.func
}

export default MicComponent;
