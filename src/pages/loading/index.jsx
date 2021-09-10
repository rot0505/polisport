/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef} from 'react'
import { useHistory } from 'react-router'
import { Loading } from '../../components'

const LoadingPage = ({ className = "", forceLogoOnly, redirect = true, redirectPath = '/splash', dispatch }) => {
  const history = useHistory();
  const ref = useRef(null);
  const redirectEffect = () => { redirect && setTimeout(() => { history.replace(redirectPath) }, 4500) }
  React.useEffect(redirectEffect, [])
  React.useEffect(() => {
    let _parent = ref?.current.parentNode.parentNode;
    if(_parent.nodeName === "DIV") {
      _parent.classList.add('force-translate-0');
    }
  }, [])
  return (
    <div ref={ref} className={`background-dark absolute vh-100 z-index-20 no-touch ${className}`} style={{width: '100%', maxWidth: '1920px'}}>
      <Loading 
        forceLogoOnly={forceLogoOnly}
        dispatch={dispatch}
      />
    </div>
  )
}

export default React.memo(LoadingPage)
