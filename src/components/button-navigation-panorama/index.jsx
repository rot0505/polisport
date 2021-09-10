import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRightIcon } from '../../components/icons'
import { Text } from '../../components'
import { Container, Wrapper, TextContainer, ImageContainer, BtnCircle, ArrowContainer } from './index.styled'

function ButtonNavitationPanoramaComponent({direction, handleClick, image, style}) {

  return (
    <Container style={style} direction={direction} onClick={handleClick}>
      <Wrapper>
        <BtnCircle className={`circle ${direction}`}>
          <ArrowContainer className={`arrow ${direction}`}>
            {direction === 'right' && 
              <>
                <ArrowRightIcon fill="#151515" />
                <ArrowRightIcon />
              </>
            }
            {direction === 'left' && 
              <>
                <ArrowRightIcon />
                <ArrowRightIcon fill="#151515" />
              </>
            }
          </ArrowContainer>
        </BtnCircle>
        <ImageContainer background={image} className={`image ${direction}`}>
          <TextContainer className={`text ${direction}`} >
            <Text 
                textId={direction === 'right' ? 
                                      'panorama.button-view-next':
                                      'panorama.button-view-prev'
                                    }
                textTransform="uppercase"
                color="#FFF"
                fontSize="14px"
                fontSizeMobile="14px"
                fontWeight="300"
                letterSpacing="1.2px"
            />
          </TextContainer>
        </ImageContainer>
      </Wrapper>
    </Container>
  )
}

ButtonNavitationPanoramaComponent.propTypes = {
  direction: PropTypes.oneOf(["right", "left"]),
  handleClick: PropTypes.func,
  image: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.instanceOf([null])
  ]) 
}

ButtonNavitationPanoramaComponent.defaultProps = {
  direction: 'right',
  handleClick: () => {},
  style: {}
}

export default ButtonNavitationPanoramaComponent
