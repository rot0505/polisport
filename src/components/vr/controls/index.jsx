import React from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// export const FOV = window.visualViewport.width < 600 ? 90 : 60
export const FOV = window.visualViewport.width < 600 ? 100 : 70
const SPEED = window.visualViewport.width < 600 ? -0.5 : -0.2
extend({ OrbitControls })

const VRControls = () => {
    const mounted = React.useRef()
    const orbitRef = React.useRef()
    const { gl, camera } = useThree()
    useFrame(() => {
        orbitRef.current && orbitRef.current.update()
    })

    if (orbitRef.current && mounted.current !== true) {
        window.controls = orbitRef.current;
        window.camera = camera;
        window.gl = gl;
        camera.fov = FOV;
        gl.setSize(window.innerWidth, window.innerHeight, false);
        mounted.current = true;
        camera.updateProjectionMatrix();
    }

    return (<orbitControls
        ref={orbitRef}
        args={[camera, gl.domElement]}
        // maxPolarAngle={2}
        // minPolarAngle={1}
        minDistance={FOV}
        maxDistance={FOV}
        enableKeys={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        dampingFactor={0.06}
        // autoRotate={false}
        autoRotate={true}
        rotateSpeed={SPEED}
    />)
}

export default VRControls