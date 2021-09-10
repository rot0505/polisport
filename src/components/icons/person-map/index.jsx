import React from 'react'
import PropTypes from 'prop-types'

const PersonMap = React.memo(({ fill , stroke }) => {
  return (
    
    <svg xmlns="http://www.w3.org/2000/svg" width="40.042" height="40.042" viewBox="0 0 40.042 40.042">
      <g transform="translate(-20 -69)">
        <circle fill={fill} cx="20.021" cy="20.021" r="20.021" transform="translate(20 69)"/>
        <g transform="translate(32.184 79.842)">
          <ellipse style={{fill:'#bfbfbf', opacity:'0.6'}} cx="7.837" cy="1.73" rx="7.837" ry="1.73" transform="translate(0 14.898)"/>
          <ellipse style={{fill:'#0166a4'}} cx="2.545" cy="0.509" rx="2.545" ry="0.509" transform="translate(5.293 16.119)"/>
          <path fill={stroke} d="M2.515,13.842A1.381,1.381,0,0,1,1.5,13.423a1.382,1.382,0,0,1-.418-1.014V9.895a1.36,1.36,0,0,1-.771-.5A1.378,1.378,0,0,1,0,8.516V5.678A1.952,1.952,0,0,1,.365,4.515a1.98,1.98,0,0,1,.959-.73A2.3,2.3,0,0,1,.866,2.379,2.289,2.289,0,0,1,1.568.7,2.289,2.289,0,0,1,3.244,0,2.29,2.29,0,0,1,4.921.7a2.289,2.289,0,0,1,.7,1.677,2.3,2.3,0,0,1-.46,1.405,1.983,1.983,0,0,1,.96.73,1.952,1.952,0,0,1,.365,1.162V8.516a1.384,1.384,0,0,1-.311.879,1.36,1.36,0,0,1-.771.5v2.515a1.432,1.432,0,0,1-1.433,1.433Z" transform="translate(4.593)"/>
        </g>
      </g>
    </svg>
  )
})

PersonMap.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

PersonMap.defaultProps = {
  fill: "#FFF",
  stroke: "#666"
}

export {PersonMap}