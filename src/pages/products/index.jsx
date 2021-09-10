import React, { useState, useEffect,useRef } from 'react'
import { CardProduct, Header, MotoProgress, Footer } from '../../components'
import { getImage } from '../../utils'
import { useHistory } from 'react-router'
import imageBicyles from '../../assets/mock-data/image-bicycle.json'
import { Container } from "./index.styled";

const ProductsPage = () => {

  const history = useHistory();
  const [progress, setProgress] = useState(0);

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(goingUp, currentScrollY);
  };

  useEffect(() => {

    const containerElement = document.getElementById('product-container');
        const totalScrollHeight = containerElement.scrollHeight - containerElement.offsetHeight;

        containerElement.addEventListener("scroll", () => {
          setProgress(containerElement.scrollTop / totalScrollHeight * 100);
        });
  })

  const handleClick = (str) => {
    history.push("../products3D/"+ str);
  }

  return (
    <React.Fragment>
      <Container id="product-container" onScroll={onScroll}>
        <div className="container-fluid">
          <Header color="blue" showClose={true} />
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="row">
                {imageBicyles.map(image => {
                  return <div className="col-lg-3  col-6" key={image.id} onClick={ () => handleClick(image.id) }>
                    <CardProduct image={getImage(`products/${image.img}`)} title={image.txt} />
                  </div>
                })}
              </div>
            </div>
          </div>
          <Footer className="inverse" />
        </div>
        {/* leftDistance percent */}
        <MotoProgress leftDistance={progress} type="blue" bottomDistance={40} />
      </Container>
    </React.Fragment>
  )
}

export default React.memo(ProductsPage)