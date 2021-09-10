import React, { useEffect } from 'react'
import { useResize } from '../../hooks'

const HeightMobile = () => {

  const { height, width } = useResize();

  const style = {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: 999999,
    pointerEvents: 'none'
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--height', document.documentElement.clientHeight + "px");
  }, [height, width])
  return (
    <div style={style} />
  )
}

export default HeightMobile
