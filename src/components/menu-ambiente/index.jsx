import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { IoTriangleSharp } from 'react-icons/io5';
import menuData from '../../assets/mock-data/menu-ambiente.json'
import { PersonIcon } from '../../components/icons'
import { Text } from '../'
import { Container, ContainerSubMenu, ContainerIcon, Menu, MenuButton, Footer } from './index.styled'

function MenuAmbienteComponent({ style = {}, visited, mapId }) {
  const [ showSubmenu, setShowSubmenu ] = useState(false);
  const [ active, setActive ] = useState(null);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const visited2 = menuData.find(x => x.mapId === mapId)
    if(visited2) setActive(visited2.title)
  }, [mapId, visited])

  const handleMenu = (route) => {
    setShowSubmenu(false);
    history.push(route)
  }

  const getPersonClass = (active, compair) => {
    if(active) {
      return "active";
    } else {
      const isVisited = visited.includes(compair);
      return isVisited ? 'visited': '';
    }
  }

  return (
    <Container style={style} onClick={() => setShowSubmenu(!showSubmenu) }>
      <Footer>
        <Text
            style={{marginLeft: '10px'}}
            fontSize="18px"
            fontSizeMobile="18px"
            textTransform='uppercase'
            fontWeight="500"
            textId={active}
            letterSpacing="2px"
            className="text"
        />
        <ContainerIcon className={showSubmenu ? 'active': ''}>
          <IoTriangleSharp size={14} fill="#FFF"/>
        </ContainerIcon>
      </Footer>
      <AnimatePresence>
      { showSubmenu &&
        <ContainerSubMenu
          key="menu-footer"
          initial={{height: 0, opacity: 0}} 
          animate={{height: 'auto',  opacity: 1}} 
          exit={{height: 0, opacity: 0}}
          transition={{
            ease: 'easeOut',
          duration: .4
        }}
        >
          <Menu>
            {menuData.length > 0 && menuData.filter(x => x.env === params.model).map(button => {
                let activeClass = ''
                activeClass += button.title === active ? 'active' : '';

                const stylePerson = getPersonClass(button.title === active, button.mapId);

                console.log("button.title", button.title)

                return (
                  <MenuButton className={`${activeClass} ${stylePerson}`} key={button.title} onClick={() => handleMenu(button.route)}>
                    <PersonIcon />
                    <Text
                      style={{marginLeft: '10px'}}
                      fontSize="16px"
                      fontSizeMobile="16px"
                      textTransform="uppercase"
                      fontWeight="400"
                      color="#bfbfbf"
                      textId={button.title}
                      letterSpacing="1px"
                    />
                  </MenuButton>
                  )
                })}
          </Menu>
        </ContainerSubMenu>
        }
      </AnimatePresence>
    </Container>
  )
}

export default React.memo(MenuAmbienteComponent)
