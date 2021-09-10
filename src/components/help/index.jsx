import React from 'react'
import { Splash } from '..'
import { Container } from './index.styled'

const variants = {
  hidden: { x: '-102vw', opacity: .5},
  visible: { x: 0, opacity: 1, transition: { duration: .7 }},
  exit: { x: '-102vw', opacity: .5, transition: { duration: .7 }}
}

function HelpComponent() {
  return (
    <Container variants={variants} initial="hidden" animate="visible" exit="exit">
      <Splash startAt="sound" redirectPath="/polisport/polisport-plastics" modal={true}/>
    </Container>
  )
}

export default HelpComponent;