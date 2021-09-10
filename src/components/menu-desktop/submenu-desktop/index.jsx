import React from 'react'
import { withRouter } from 'react-router-dom';
import { Container } from './index.styled'
import { Text } from '../../'

function SubmenuDesktopComponent({className, subdata, history, closeMenu}) {
  const handleClick = (str) => {
    closeMenu();
    history.push(str);
  }
  return (
    <Container className={className}>
      {subdata.map(sub => <div key={sub.text} onClick={() => handleClick(sub.link)}><Text className="sub-text" textId={sub.text} /></div>)}
    </Container>
  )
}

export default withRouter(SubmenuDesktopComponent)
