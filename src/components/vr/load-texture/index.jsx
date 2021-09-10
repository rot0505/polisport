import React, { useEffect } from 'react'
import { useLoader, useThree } from 'react-three-fiber';
import { CubeTextureLoader } from 'three';

const VRLoadTexture = React.memo(({ path }) => {
    const addURLPrefix = (x) => `${path}${x}`;

    const textures = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ].map(addURLPrefix)
    const [cubeMapTexture] = useLoader(CubeTextureLoader, [textures]);
    
    const {
      scene
    } = useThree();

    useEffect(() => {
        const previous = scene.background;
        scene.background = cubeMapTexture;
    
        return () => {
          scene.background = previous;
        };
    }, [cubeMapTexture, scene]);

    return null

})

export default VRLoadTexture