import React from 'react'
import { SVG } from './index.styled'

const HotspotInfoIcon = ({ fill = "rgba(255,255,255,0.8)"}) => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 50 50">
      <g id="Group_506" data-name="Group 506" transform="translate(-1149 -469)">
        <g id="Group_377" data-name="Group 377" transform="translate(-182.149 -251.149)">
          <circle id="Ellipse_120" data-name="Ellipse 120" cx="6.5" cy="6.5" r="6.5" transform="translate(1348.149 737.149)" fill="#fff"/>
          <g id="Ellipse_121" data-name="Ellipse 121" transform="translate(1340.149 729.149)" fill="none" stroke="#fff" strokeWidth="1">
            <circle cx="14.5" cy="14.5" r="14.5" stroke="none"/>
            <circle cx="14.5" cy="14.5" r="14" fill="none"/>
          </g>
          <g className="circle-animation" id="Ellipse_122" data-name="Ellipse 122" transform="translate(1331.149 720.149)" fill="none" stroke="#fff" strokeWidth="1" opacity="1">
            <circle cx="23.5" cy="23.5" r="23.5" stroke="none"/>
            <circle cx="23.5" cy="23.5" r="23" fill="none"/>
          </g>
        </g>
      </g>
    </SVG>
  )
}

export {HotspotInfoIcon}