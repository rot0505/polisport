import React from 'react'
import { Splash } from '../../components'

function SplashPage() {
  return (
    <div className={`background-dark absolute vh-100`} style={{width: '100%', maxWidth: '1920px'}}>
      <Splash redirectPath="/polisport/polisport-plastics"/>
    </div>
  )
}

export default SplashPage;
