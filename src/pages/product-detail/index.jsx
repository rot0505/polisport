import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import "@google/model-viewer";
import { CgClose } from 'react-icons/all'
import { Text } from '../../components'
import { useResize } from '../../hooks'
import { getVideo, getModel } from '../../utils'

import productsData from "../../assets/mock-data/menu-product.json";
import { HeaderProduct, Header, FooterProduct, InfosProduct, BtnPlayer, BtnMotoKnowMore } from '../../components';
import { ModelViewerRotate } from '../../assets'
import {
    ModelContainer,
    ProductTitle,
    BtnPlayerWrapper,
    VideoContainer
} from './index.styled';

const colors = {
    bibycle: '#0065a4'
}

const ProductDetail = () => {
    const { isMobile, width, height } = useResize();
    const history = useHistory();
    const { type, id } = useParams();
    const [watchDemoActived, setWatchDemoActived] = useState(false);
    const offset = isMobile ? 200 : 250;
    const [modelHeight, setModelHeight] = useState(window.innerHeight - offset);

    const product = productsData[type].find(product => product.id == id);

    const getColor = () => {
        switch (type) {
            case "bicycle":
                return "blue";
            case "bobike":
                return "gray";
            case "catlike":
              return "black";
            case "offroad":
                return "red";
            default:
                return "blue";
        }
    }

        // const togglePoster = document.querySelector('#toggle-poster');
        // togglePoster.setAttribute('poster', `../../assets/bicyles/t500.jpg`);

    useEffect(() => {
        setModelHeight(window.innerHeight - offset);
    }, [width, height])

    const backToList = () => {
        history.push(`/products/${type}`);
    }

    return (
        <React.Fragment>
            {!isMobile &&
                <HeaderProduct color={ type } showClose={true} onClickClose={() => backToList()}>
                    { product.description &&
                        <InfosProduct
                            infos={{
                                title: `${product.title}`,
                                description: `${product.description}`
                            }}
                            type={ getColor() }
                        />
                    }
                </HeaderProduct>
            }
            {isMobile &&
                <Header color={type}>
                    { product.description &&
                        <InfosProduct
                            infos={{
                                title: `${product.title}`,
                                description: `${product.description}`
                            }}
                            type={ getColor() }
                        />
                    }
                </Header>
            }

            <ModelContainer height={modelHeight}>
                <model-viewer
                    id="reveal"
                    reveal="auto"
                    loading="eager"
                    camera-controls
                    auto-rotate
                    scale="0.5 0.5 0.5"
                    poster={require(`../../assets/images/${product.image}`).default}
                    src={ getModel(product.model)}
                    alt={product.title}
                    exposure={product.exposure}
                    // shadow-intensity="1"
                    environment-image="neutral"
                    auto
                >
                </model-viewer>
            </ModelContainer>

            {product.video &&
                <BtnPlayerWrapper>
                    {!watchDemoActived &&
                        <BtnPlayer type={ type } clickHandler={() => setWatchDemoActived(true)} />
                    }
                    {watchDemoActived &&
                        <VideoContainer className="">
                            <div className="float-right cursor-pointer" onClick={() => setWatchDemoActived(false)}>
                                <CgClose color={colors[type]} size={18} />
                            </div>
                            <video
                                className="fullscreen-bg__video"
                                controls={true}
                                autoPlay={true}
                                loop={true}
                                width="100%"
                                height="auto">
                                <source type="video/mp4" src={ getVideo(product.video )} />
                            </video>
                        </VideoContainer>
                    }
                </BtnPlayerWrapper>
            }

            <ProductTitle>
                {!isMobile &&
                    <img alt="Model viewer rotate" src={ModelViewerRotate} />
                }
                <br />
                <Text textAlign="center" fontWeight="500" fontFamily="Barlow, Semibold" color="#BFBFBF" fontSize="42px" letterSpacing="2.1px" lineHeight="50px" textId={product.title} />
            </ProductTitle>

            <FooterProduct className="inverse" paddingTop="6px" color={ type } />
            <div className="row" style={{ position: 'absolute', width: '100%', bottom: 0 }}>
                <div className="col-lg-12 col-12 position-relative">
                    <BtnMotoKnowMore type={ type } clickHandler={() => window.open(`${product.knowMore}`, '_blank')} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(ProductDetail);