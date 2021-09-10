import React, { useState } from 'react';
import { HeaderProduct, Header, MotoProgress, FooterProduct, Products } from '../../components';
import { useResize } from '../../hooks'
import { useParams } from 'react-router';

const ProductsGroup = () => {
    const isMobile = useResize().isMobile
    const { type } = useParams();
    const [motoDistance, setMotodistance] = useState(0);
    return(
        <React.Fragment>
            {!isMobile && <HeaderProduct color={ type } showClose={true} /> }
            { isMobile && <Header color={ type } />}

            <Products category={ type } setMotodistance={setMotodistance} />

            { !isMobile && 
            <>
                <MotoProgress leftDistance={motoDistance} type={ type } bottomDistance={40} />
                <FooterProduct className="inverse" paddingTop="6px" /> 
            </>}
            
        </React.Fragment>
    );
}

export default React.memo(ProductsGroup);
