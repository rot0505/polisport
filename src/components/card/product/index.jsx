import React from 'react'
import { Text } from '../..'
import { Card } from './index.styled'

const CardProductComponent = React.memo(({image = "", title = ""}) => {
  const titleTransform = `${String(title).slice(0,36)}${(title.length >= 36 ? '...' : '')}`
  return (
    <Card className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Text titleWithoutTranslate={false} textId={titleTransform} color="#BFBFBF" className="text" />
          </div>
        </div>
      </div>
    </Card>
  )
})
export default CardProductComponent