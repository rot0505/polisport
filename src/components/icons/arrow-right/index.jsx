import React from 'react'

const ArrowRightIcon = React.memo(({fill = '#FFF'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="13.875" 
        height="6.945" 
        viewBox="0 0 13.875 6.945">
        <path fill={fill} d="M-7.375-2.375a.334.334,0,0,1-.062-.391A.342.342,0,0,1-7.094-3h2.219v-9.625A.331.331,0,0,1-4.5-13h1a.331.331,0,0,1,.375.375V-3H-.906a.342.342,0,0,1,.344.234.334.334,0,0,1-.062.391L-3.75.75a.313.313,0,0,1-.5,0Z" 
        transform="translate(13 -0.527) rotate(-90)"/>
    </svg>
  )
})

export {ArrowRightIcon}