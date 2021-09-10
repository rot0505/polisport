import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom';
import dados from '../../assets/mock-data/menu-corporate.json'
import { ButtonMenuCorporate } from '..'
import { Container } from './index.styled'

function MenuCorporateComponent({history, id}) {

  const [ currentId, setCurrentId ] = useState(id)

  const clickHandler = (route) => {
    history.push(route);
  }

  useEffect(() => {
    setCurrentId(id);
  }, [id])

  return (
    <Container>
      {dados.length > 0 && 
        dados.map((button, index) => {
          const activeClass = index === currentId ? 'active': '';
          const data = { clickId: index, id: button.id, clickHandler: () => clickHandler(button.route), className: activeClass }
          return <ButtonMenuCorporate key={button.id} data={data} />
        })
      }
    </Container>
  )
}

export default withRouter(MenuCorporateComponent)
