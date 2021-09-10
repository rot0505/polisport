import React, { useState, useEffect } from 'react'
import { ThreeModel, Header, MotoProgress, Footer } from '../../components'
import { useHistory, useParams } from 'react-router'
import { AppActionType } from '../../effects/types'

const Products3D = () => {

  const { id } = useParams();
  const history = useHistory();
  const [progress, setProgress] = useState(0);
  console.log(progress);
  
  const handleClose = () => {
    history.push('/products/bicycle')
  }

  useEffect(() => {

    var t = document.getElementById("product-container");
    var n = t.scrollHeight - t.offsetHeight;

    t.addEventListener("scroll", (function () {
      setProgress(t.scrollTop / n * 100)
    }
    ));
  })

  return (
    <React.Fragment>
      <div className="container-fluid" id="product-container" style={{ overflow: "auto" }}>
        <Header color="blue" showClose={true} onClickClose={handleClose} closeColor="#000000"/>
        <div className="row mt-5">
          <ThreeModel id={ id }/>
        </div>
        <Footer className="inverse" />
      </div>
      {/* leftDistance percent */}
      <MotoProgress leftDistance={progress} type="blue" bottomDistance={40} />
    </React.Fragment>
  )
}

export default React.memo(Products3D)