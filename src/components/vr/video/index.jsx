import * as THREE from 'three'
import React, { useEffect } from 'react'

const VRVideo = React.memo(({ map, video, visible = false, muted }) => {
    
    useEffect(() =>{
        console.log('VRVideo', map, video)
        if (map !== "" && map !== undefined && video && video.hasOwnProperty("current")){ 
            if(video?.current?.muted) video.current.muted = false
            if (window.audioRef){ 
                //window.audioRef.volume = visible ? 0 : 0.4
            }
        }

        // if(video.current !== null)
        //     video.current.muted = !visible
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible])
    if(map !== "" && map !== undefined){
        if(video){
            const texture = new THREE.VideoTexture(video?.current)
            texture.magFilter = THREE.LinearFilter
            texture.minFilter = THREE.LinearFilter
            texture.mapping = true
            const geometry = new THREE.SphereBufferGeometry(500, 60, 40);
            const debugXYZ = false
            if (video && video.hasOwnProperty("current")) {
            video.current.play();
            video.current.muted = true
            video.current.volume = 1
                return (
                    <mesh
                        geometry={geometry} 
                        position={[0, 0, 0]} 
                        scale={[1, 1, -1]} 
                        onPointerMove={(e) => debugXYZ && console.log('canvas', [e.point.x.toFixed(0), e.point.y.toFixed(0), e.point.z.toFixed(0)])}
                    >
                        <meshBasicMaterial
                            visible={visible}
                            map={texture}
                            side={THREE.BackSide}
                            opacity={1}
                            transparent={false} 
                            precision='highp' 
                            needsUpdate={false}
                        />
                    </mesh>
                );
            } else return <mesh />;
        }
        return <mesh />
    }
    return <mesh />
})

export default VRVideo