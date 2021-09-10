import React from 'react'
import PropTypes from 'prop-types'

const BlankIcon = React.memo(({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"width="289" height="34.097" viewBox="0 0 289 34.097">
    
    </svg>
  )
})

BlankIcon.propTypes = {
  fill: PropTypes.string
}

BlankIcon.defaultProps = {
  fill: "#FFF"
}

export {BlankIcon}