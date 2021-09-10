import React, { useEffect } from 'react'
import { BackSide, ShaderLib, UniformsUtils } from 'three';
import * as THREE from 'three'

const VRMain = React.memo(({ path, visible, setLoaded }) => {
    const [envMap, setEnvMap] = React.useState(null)
    const debugXYZ = true

    useEffect(() => { }, [visible])
    useEffect(() => {
        setEnvMap(new THREE.CubeTextureLoader().load([`${path}px.jpeg`, `${path}nx.jpeg`, `${path}py.jpeg`, `${path}ny.jpeg`, `${path}pz.jpeg`, `${path}nz.jpeg`], (texture) => {
            setLoaded(true)
        })) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path])

    return (
        <mesh onClick={(e) => debugXYZ && console.log('canvas', [e.point.x.toFixed(0), e.point.y.toFixed(0), e.point.z.toFixed(0)])}>
            <boxBufferGeometry args={[10000, 10000, 10000]} />
            <shaderMaterial
                fragmentShader={ShaderLib.cube.fragmentShader}
                vertexShader={ShaderLib.cube.vertexShader}
                uniforms={UniformsUtils.clone(ShaderLib.cube.uniforms)}
                uniforms-envMap-value={envMap}
                envMap={envMap}
                side={BackSide}
                visible={visible}
            />
        </mesh>
    )

})

export default VRMain