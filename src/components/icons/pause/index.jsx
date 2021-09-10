import React from 'react'
import PropTypes from 'prop-types'

const PauseIcon = React.memo(({ stroke }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="1" viewBox="0 0 22 1">
      <g id="Group_799" data-name="Group 799" transform="translate(-1864 -1074)">
        <line id="Line_136" data-name="Line 136" y1="1" transform="translate(1885 1074)" fill="none" stroke={stroke} strokeWidth="2"/>
        <line id="Line_137" data-name="Line 137" y1="1" transform="translate(1880 1074)" fill="none" stroke={stroke} strokeWidth="2"/>
        <line id="Line_138" data-name="Line 138" y1="1" transform="translate(1875.001 1074)" fill="none" stroke={stroke} strokeWidth="2"/>
        <line id="Line_139" data-name="Line 139" y1="1" transform="translate(1870 1074)" fill="none" stroke={stroke} strokeWidth="2"/>
        <line id="Line_140" data-name="Line 140" y1="1" transform="translate(1865 1074)" fill="none" stroke={stroke} strokeWidth="2"/>
      </g>
    </svg>

  )
})

PauseIcon.propTypes = {
  stroke: PropTypes.string
}

PauseIcon.defaultProps = {
  stroke: "#FFF"
}

export {PauseIcon}