import React from 'react'
import { Container } from './index.styled'
import { Text } from '../../'

function SubmenuMobileComponent(props) {

  const handleClick = (str) => {
    props.closeMenu();
    props.history.push(str);
  }
  return (
    <Container className={props.className}>
      {props.subdata.map(sub => <div key={sub.text} onClick={() => handleClick(sub.link)}><Text className="sub-text" textId={sub.text} /></div>)}
    </Container>
  )
}

export default SubmenuMobileComponent
