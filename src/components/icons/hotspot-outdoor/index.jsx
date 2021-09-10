import React from 'react'
import { SVG } from './index.styled'

const HotspotOutdoorIcon = ({ arrowFill = "#1d3739", fill = "#fff", opacity = "0.6"}) => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 180 180">
      <ellipse id="Ellipse_218" className="circle-opacity" data-name="Ellipse 218" cx="90" cy="90" rx="90" ry="90" fill="#fff" opacity="0.2"/>
      <circle id="Ellipse_219"  data-name="Ellipse 219" cx="55" cy="55" r="55" transform="translate(35 35)" fill={fill} opacity={opacity}/>
      <path id="Path_4318" data-name="Path 4318" d="M0,23.556,23.557,0,47.113,23.556" transform="translate(65.5 78.152)" fill="none" stroke={arrowFill} strokeWidth="4"/>
    </SVG>
  )
}

export {HotspotOutdoorIcon}