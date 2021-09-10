import React from 'react'
import PropTypes from 'prop-types'
import { useIntl} from 'react-intl'
import { TextStyled } from './index.styled'
import { FONT } from '../../assets'

const TextComponent = React.memo(({ 
  color, fontFamily, fontSize, textTransform, 
  className, textId, fontSizeMobile, typeDescription, style, lineHeight,
  fontWeight, letterSpacing, titleWithoutTranslate = false
}) => {
  const intl = useIntl()
  let text = textId;

  if((textId !== null && textId !== "") && titleWithoutTranslate === false){
    text = intl.formatMessage({ id: textId})
  }
  return (
    <TextStyled
        className={className}
        color={color} 
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontSizeMobile={fontSizeMobile}
        textTransform={textTransform}
        typeDescription={typeDescription}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        style={style}
        dangerouslySetInnerHTML={{
          __html: text
        }}
    />
  )
})

TextComponent.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.any,
  fontSize: PropTypes.any,
  textTransform: PropTypes.any,
  className: PropTypes.string,
  textId: PropTypes.string,
  lineHeight: PropTypes.string,
  fontSizeMobbile: PropTypes.any,
  typeDescription: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: PropTypes.string,
}

TextComponent.defaultProps = {
  color: "#FFF",
  fontFamily: "'Barlow', sans-serif",
  fontSize: FONT.sm1,
  fontSizeMobile: FONT.sm2,
  textTransform: "normal",
  className: "",
  textId: "",
  lineHeight: "",
  typeDescription: "",
  fontWeight: "",
  letterSpacing: "",
}

export default TextComponent