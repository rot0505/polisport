import React from 'react'
import PropTypes from 'prop-types'
import { Line } from './index.styled'

const CloseIcon = React.memo(({ stroke }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.414" height="21.414" viewBox="0 0 21.414 21.414">
      <g transform="translate(-1822.436 -25.293)">
        <Line className="a" stroke={stroke} x2="28.284" transform="translate(1823.144 26) rotate(45)" />
        <Line className="a" stroke={stroke} x2="28.284" transform="translate(1823.144 46) rotate(-45)" />
      </g>
    </svg>
  )
})

CloseIcon.propTypes = {
  stroke: PropTypes.string
}

CloseIcon.defaultProps = {
  stroke: "#e20a16"
}

export { CloseIcon }