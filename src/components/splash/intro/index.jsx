import React, { useRef, useEffect, useState } from 'react'
import { useResize } from '../../../hooks'
import { TextHighLight, EnterTour, TextContainer, BikeContainer } from './index.styled'
import { MdDirectionsBike } from 'react-icons/md'
import { Text } from '../../'

function IntroComponent({nextStep}) {

  const [ textDistance, setTextDistance ] = useState(null);
  const [ clickEnable, setClickEnable ] = useState(true)
  const { isMobile } = useResize();
  const textRef = useRef(null);

  const goToNextStep = () => {
    if(!clickEnable) return;
    setClickEnable(false);

    setTimeout(() => {
      nextStep('sound');
    }, 1100);
  }

  useEffect(() => {
    const mRight = isMobile ? 8 : 20;
    setTextDistance(textRef?.current.offsetWidth + mRight)
  }, [isMobile])
  
  return (
    <React.Fragment>
      <TextHighLight className={`${!clickEnable ? 'leaving' : ''}`}>
        {isMobile ? 
          <Text fontSizeMobile="23px" lineHeight="30px" fontWeight="500" letterSpacing="1.9px" textTransform="uppercase" textId="splash.welcome" />:
          <Text fontSize="28px" fontWeight="500" letterSpacing="3px" textTransform="uppercase" textId="splash.welcome" />
        }
        
        {isMobile ? 
          <Text style={{width: '100%', paddingTop:'20px'}} letterSpacing="1.8px" lineHeight="24px" fontSize="16px" fontWeight="100" textId="splash.description" />:
          <Text style={{width: '530px', paddingTop:'20px'}} letterSpacing=".8px" lineHeight="34px" fontSize="16px" fontWeight="100" textId="splash.description" />
        }
      </TextHighLight>
      <EnterTour onClick={goToNextStep} className={`${!clickEnable ? 'leaving' : ''}`}>
        <TextContainer ref={textRef} className="text-container">
          <Text textTransform="uppercase" letterSpacing=".8px" lineHeight="30px" fontSize="19px" fontSizeMobile="14px" fontWeight="100" textId="splash.enter-tour" />
        </TextContainer>
        {textDistance && 
          <BikeContainer distance={textDistance} className={`bike-container ${!clickEnable ? 'leaving' : ''}`}>
            <MdDirectionsBike color="#FFF"/>
          </BikeContainer>
        }
      </EnterTour>
    </React.Fragment>
  )
}

export default IntroComponent