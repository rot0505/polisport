import React from 'react'
import { Html } from '@react-three/drei'
import { HotSpot, HotSpotDirection } from '../..'
import { AppActionType } from '../../../effects/types'
const infos = require('./../../../assets/mock-data/information.json')

const VRHotspot = React.memo(({
    history, hotspot, locale, dispatch, showVideo
}) => {

    const [hovered, setHover] = React.useState(false)
    const onOverHotspot = (() => hotspot.hover && setHover(false))
    const onOutHotspot = (() => hotspot.hover && setHover(false))
    const onClickHotspot = (() => {
        hotspot.to && history && history.push(hotspot.to, history.location.pathname)
    })
    const scale = hovered ? hotspot.hoverSize : (hotspot.size ?? [-50, 50])
    const position = hotspot.position ?? [0, 0, 0]
    const rotation = hotspot.rotation ?? [0, 0, 0]

    if (hovered) {
        document.getElementsByTagName('body')[0].className = "pointesr"
    } else {
        document.getElementsByTagName('body')[0].className = ""
    }

    const openVideo = () => {
        console.log('openVideo', hotspot)
        let info = infos.find(x => x.id === hotspot.infoId)

        if (info) {
            const data = {
                open: true,
                data: {
                    title: info.title,
                    subtitle: info.subtitle,
                    description: info.description,
                    audio: info.audio,
                    video: info.video,
                    knowMore: info.knowMore,
                    image: info.image
                }
            }
            dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_VIDEO, payload: data });
        }
    }

    const openReception = () => {
        dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_RECEPTION, payload: true });
    }

    return (
        <mesh
            key={hotspot.name}
            onPointerOver={onOverHotspot}
            onPointerOut={onOutHotspot}
            className={`canvas-hover`}
            position={position}
            rotation={rotation}
            scale={scale}
        >
            <Html scaleFactor={hotspot.scale || 975} zIndexRange={!hovered ? [1, 0] : [1, 0]} center={true}>
                {(hotspot.type === "panorama-spot") && (
                    <div
                        className={`info-icon ${hovered ? 'hovered' : ''}`}
                        onClick={() => {
                            onClickHotspot()
                            hotspot.hover && setHover(!hovered)
                        }}
                        onPointerOver={(e) => { !hovered && setHover(true) }}
                        onPointerOut={(e) => { hovered && setHover(false) }}
                    >
                        <HotSpotDirection direction="top" handleClick={() => console.log("bottom")} />
                    </div>
                )}

                {(hotspot.type === "info") && (
                    <div
                        className={`info-icon ${hovered ? 'hovered' : ''}`}
                        onClick={() => {
                            //onClickHotspot()
                            hotspot.hover && setHover(!hovered)
                            openVideo()
                        }}
                        onPointerOver={(e) => { !hovered && setHover(true) }}
                        onPointerOut={(e) => { hovered && setHover(false) }}
                    >
                        <HotSpot />
                    </div>
                )}

                {(hotspot.type === "we-are-global") && (
                    <div
                        className={`info-icon ${hovered ? 'hovered' : ''}`}
                        onClick={() => {
                            //onClickHotspot()
                            hotspot.hover && setHover(!hovered)
                            openReception()
                        }}
                        onPointerOver={(e) => { !hovered && setHover(true) }}
                        onPointerOut={(e) => { hovered && setHover(false) }}
                    >
                        <HotSpot />
                    </div>
                )}

                {(hotspot.type === "video") && (
                    <div
                        className={`info-icon ${hovered ? 'hovered' : ''}`}
                        onClick={() => {
                            console.log('click video')
                            //onClickHotspot()
                            hotspot.hover && setHover(!hovered)
                            showVideo()
                        }}
                        onPointerOver={(e) => { !hovered && setHover(true) }}
                        onPointerOut={(e) => { hovered && setHover(false) }}
                    >
                        <HotSpot type="video" />
                    </div>
                )}
            </Html>
        </mesh>
    )

})

export default VRHotspot