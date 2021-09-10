import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import productsData from "../../assets/mock-data/menu-product.json";
import { getImage } from "../../utils";
import { useHistory } from 'react-router-dom'
import { Text } from '..'
import { useResize } from '../../hooks'
import { FooterBicycle, FooterBobike, FooterCatlike, FooterOffroad } from '../../assets'

import {
    ProductContainer,
    ProductImage,
    ImageContainer,
    MobileFooter
} from './index.styled';

const Products = (props) => {
    const history = useHistory();
    let products = [];
    const isMobile = useResize().isMobile;
    const category = props.category;

    if (productsData.hasOwnProperty(`${category}`)) {
        products = productsData[category];
    }

    const goToDetailPage = (id) => {
        history.push(`/products/${category}/${id}`);
    }

    const getFooter = () => {
        switch (category) {
            case "bicycle":
                return FooterBicycle;
            case "bobike":
                return FooterBobike;
            case "catlike":
                return FooterCatlike;
            case "offroad":
                return FooterOffroad;
            default:
                return FooterBicycle;
        }
    }

    useEffect(() => {
        const containerElement = document.getElementById('product-container');
        const totalScrollHeight = containerElement.scrollHeight - containerElement.offsetHeight;

        containerElement.addEventListener("scroll", () => {
            props.setMotodistance(containerElement.scrollTop / totalScrollHeight * 100);
        });
    });

    return (
        <ProductContainer id="product-container">
            <div className="row">
                {products.map(product =>
                    <div className="col-6 col-md-4 col-lg-3 text-center mt-4 cursor-pointer" key={product.id} onClick={() => goToDetailPage(product.id)}>
                        <ImageContainer>
                            <ProductImage src={getImage(product.image)} alt={product.title} />
                        </ImageContainer>
                        <Text fontFamily="Barlow, Semibold" fontWeight="500" color="#BFBFBF" fontSize="24px" lineHeight="29px" letterSpacing="1.2px" textId={product.title} />
                    </div>
                )}
                {isMobile &&
                <div className="col-12">
                    <MobileFooter>
                        <img src={getFooter()} width="50" />
                    </MobileFooter>
                </div>
                }
            </div>
        </ProductContainer>
    );
}

Products.propTypes = {
    category: PropTypes.string
}

export default React.memo(Products);