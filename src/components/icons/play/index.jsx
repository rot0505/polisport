import React from 'react'
import PropTypes from 'prop-types'

const PlayIcon = React.memo(({ fill , stroke }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
      <g id="sound" transform="translate(1)">
        <rect id="Rectangle_642" data-name="Rectangle 642" width="20" height="20" fill={fill} opacity="0"/>
        <line id="Line_51" data-name="Line 51" y1="7" transform="translate(20 13)" fill="none" stroke={stroke} stroke-width="2"/>
        <line id="Line_52" data-name="Line 52" y1="15" transform="translate(15 5)" fill="none" stroke={stroke} stroke-width="2"/>
        <line id="Line_53" data-name="Line 53" y1="6" transform="translate(10.001 14)" fill="none" stroke={stroke} stroke-width="2"/>
        <line id="Line_54" data-name="Line 54" y1="20" transform="translate(5)" fill="none" stroke={stroke} stroke-width="2"/>
        <line id="Line_55" data-name="Line 55" y1="11" transform="translate(0 9)" fill="none" stroke={stroke} stroke-width="2"/>
      </g>
    </svg>
  )
})

PlayIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

PlayIcon.defaultProps = {
  fill: "#FFF",
  stroke: "#f2f2f2"
}

export {PlayIcon}