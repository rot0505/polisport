/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { v4 as uuiv4}  from 'uuid'
import { getImage } from '../../utils'
import { Container, ImageContainer } from './index.styled'
import { ASSETS_FOLDER } from '../../assets'

function ButtonImagesCompositionComponent({images = [], openClick = () => {}}) {

  const [ renderFunction, setRenderfunction ] = useState(null)

  const renderOne = () => {
    return (<ImageContainer key={uuiv4()} className="one" image={`${ASSETS_FOLDER}/images/timeline/${images[0]}`} />) 
    // return (<ImageContainer key={uuiv4()} className="one" image={`/images/timeline/${images[0]}`} />) 
  }

  const renderTwo = () => {
    
    return (
      <>
        <ImageContainer key={uuiv4()} className="two-1" image={getImage(`${ASSETS_FOLDER}/images/timeline/${images[0]}`)} />
        <ImageContainer key={uuiv4()} className="two-2" image={getImage(`${ASSETS_FOLDER}/images/timeline/${images[1]}`)} />
      </>
    )
    
    /*
    return (
      <>
        <ImageContainer key={uuiv4()} className="two-1" image={`/images/timeline/${images[0]}`} />
        <ImageContainer key={uuiv4()} className="two-2" image={`/images/timeline/${images[1]}`} />
      </>
    )
    */
  }

  const renderThree = () => {
    return (
      <>
        <ImageContainer key={uuiv4()} className="three-1" image={getImage(`${ASSETS_FOLDER}/images/timeline/${images[2]}`)} />
        <ImageContainer key={uuiv4()} className="three-2" image={getImage(`${ASSETS_FOLDER}/images/timeline/${images[1]}`)} />
        <ImageContainer key={uuiv4()} className="three-3" image={getImage(`${ASSETS_FOLDER}/images/timeline/${images[0]}`)} />
      </>
    )
    /*
    return (
      <>
        <ImageContainer key={uuiv4()} className="three-1" image={`/images/timeline/${images[2]}`} />
        <ImageContainer key={uuiv4()} className="three-2" image={`/images/timeline/${images[1]}`} />
        <ImageContainer key={uuiv4()} className="three-3" image={`/images/timeline/${images[0]}`} />
      </>
    )
    */
  }
  const renderEmpty = () => {
    return ''
  }

  useEffect(() => {
    if(images.length === 1){
      setRenderfunction(renderOne);
    } else if(images.length === 2){
      setRenderfunction(renderTwo);
    } else if(images.length >= 3) {
      setRenderfunction(renderThree);
    } else {
      setRenderfunction(renderEmpty);
    }
  }, [])
  return (
    <Container key={uuiv4()} onClick={openClick}>
      {renderFunction !== null && renderFunction}
    </Container>
  )
}

export default React.memo(ButtonImagesCompositionComponent)
