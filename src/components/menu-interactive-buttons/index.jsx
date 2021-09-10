/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { InteractiveButtons, ButtonToggleInteractive } from '..'
import { Container, MobileContainer, ButtonOpenClose } from './index.styled';

function MenuInteractiveButtonsComponent({open = true}) {

  const [ isOpen, setIsOpen ] = useState(false);

  const togleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    open && setIsOpen(false);
  }, [])

  return (
    <Container>
        <MobileContainer>
            <InteractiveButtons showAllMenu={isOpen} simulateMobile={true} />
         <ButtonOpenClose className={isOpen ? 'active' : ''} onClick={togleMenu}>
           <ButtonToggleInteractive />
         </ButtonOpenClose>
        </MobileContainer>
    </Container>
  )
}

export default React.memo(MenuInteractiveButtonsComponent)
