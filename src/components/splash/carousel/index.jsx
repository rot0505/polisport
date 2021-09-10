import React from 'react'
import { Text } from '../../'
import { useResize } from '../../../hooks'
import { Container, BulletsContainer, Bullet, TextContainer } from './index.styled';

function CarouselBulletsComponent({steps, currentStep, nextStep, bulletsColor}) {

  const { isMobile } = useResize();

  const handleChangeStep = () => {
    const currentIndice = steps.findIndex(idx => idx === currentStep);
    if(currentIndice < steps.length -1) {
      nextStep(steps[currentIndice + 1])
    } else {
      nextStep('finish')
    }
  }

  const colors = {
    activeColor: bulletsColor?.active === undefined ? '#595959' : bulletsColor?.active,
    normalColor: bulletsColor?.normal === undefined ? '#303030' : bulletsColor?.normal
  }

  return (
    <Container>
      <BulletsContainer onClick={handleChangeStep}>
        {steps.length > 0 && steps.map((step) => {
          let active = step === currentStep;
          return <Bullet key={step} colors={colors} className={active ? 'active': ''} />
        })}
      </BulletsContainer>
      <TextContainer onClick={handleChangeStep}>
        { isMobile ? 
          <Text fontSizeMobile="12.1px" color="#666666" lineHeight="30px" fontWeight="100" letterSpacing="1px" textTransform="uppercase" textId="splash.tap-to-continue" /> :
          <Text fontSize="12px" color="#666666" lineHeight="12px" fontWeight="100" letterSpacing="1.9px" textTransform="uppercase" textId="splash.click-to-continue" />
        }
      </TextContainer>
    </Container>
  )
}

export default CarouselBulletsComponent;
