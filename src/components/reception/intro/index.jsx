import React from 'react'
import { LogoCarrousselBobike,
        LogoCarrousselCemoto,
        LogoCarrousselCatlike,
        LogoCarrousselCosmo,
        LogoCarrousselPolisport,
        LogoCarrousselPolisportBlack,
        LogoCarrousselPolisportBlue,
        LogoCarrousselPolisportRed,
        LogoCarrousselDieffe } from '../../../assets'

import { GridContainer, GridLogos, Logo } from './index.styled'

function IntroReceptionComponent() {

  const arLogos = [ LogoCarrousselPolisportBlue,
                    LogoCarrousselPolisportRed,
                    LogoCarrousselPolisportBlack,
                    LogoCarrousselBobike,
                    LogoCarrousselDieffe,
                    LogoCarrousselCosmo,
                    LogoCarrousselCatlike,
                    LogoCarrousselCemoto,
                    LogoCarrousselPolisport]
  
  return (
    <React.Fragment>
      <GridContainer>
        <GridLogos>
          {arLogos.map(logo => <Logo key={logo} background={logo} />)}
        </GridLogos>
      </GridContainer>
    </React.Fragment>
  )
}

export default IntroReceptionComponent