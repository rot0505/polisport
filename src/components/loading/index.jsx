/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { store } from './../../effects/store'
import { AppActionType } from '../../effects/types';
import { Container, BoxCenter, LogoAnimated, LogoContainer, LoadingTitle, WaitText } from './index.styled'
import { messages } from './../../app'

function LoadingComponent({forceLogoOnly = false, dispatch}) {
  const locale = store.getState().app.locale

  const message = messages[locale]

  useEffect(() => {
    console.log("add loading")
      dispatch && dispatch({ type: AppActionType.UPDATE_LOADING, payload: true });
    return () => {
      console.log("remove loading")
      dispatch && dispatch({ type: AppActionType.UPDATE_LOADING, payload: false });
    }
  },[])
  return (
      <Container className="findloading">
        <BoxCenter>
          <LogoAnimated>
            <LogoContainer />
          </LogoAnimated>
          {!forceLogoOnly && 
            <>
              <LoadingTitle>{message && message['loading']}</LoadingTitle>
              <WaitText>{message && message['please-wait']}</WaitText>
            </>
          }
        </BoxCenter>
      </Container>
  )
}

export default LoadingComponent
