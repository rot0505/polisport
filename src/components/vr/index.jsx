/* eslint-disable react-hooks/exhaustive-deps */

import * as THREE from 'three'
import React, { useRef } from 'react'
import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
import { VRButton } from 'three/examples/jsm/webxr/VRButton'
import { useHistory } from 'react-router'
import { Html } from '@react-three/drei'
import { IntlProvider } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import VRMain from './main'
import VRControls from './controls'
import VRHotspot from './hotspot'
import VRVideo from './video'
import { FOV } from './controls'


import { LoadingPage } from '../../pages'
import { messages } from '../../app'



const VRComponent = ({
    vr = false, panorama, hotspots = [], model, initialPosition = [0, 0, 0], rotate, videoPath = null, videoFirst = false,
    setProgress = () => { }, muted, isCubed = true, redirectTo, setVideoProgress = () => { }, setPlayingYet = () => { },
    setIsLoaded = () => {}, showVideo
}) => {
    // eslint-disable-next-line no-unused-vars
    const isLoadingPage = useSelector(state => state.app.loading);
    const locale = useSelector(state => state.app.locale);
    const dispatch = useDispatch();
    const videoRef = useRef();
    const history = useHistory()
    const [loaded, setLoaded] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    // eslint-disable-next-line no-unused-vars
    const [videoPlaying, setVideoPlaying] = React.useState(false)
    const [duration, setDuration] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);
    const camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.1, 1500);

    const createVRCanvas = ({ gl }) => {
        if (!document.getElementById("VRButton")) document.body.appendChild(VRButton.createButton(gl))
        if (gl.xr?.enabled !== true) gl.xr.enabled = true;
        setTimeout(() => { if (document.getElementById("VRButton")) document.getElementById("VRButton").click(); }, 500)
    }

    if (window.controls) { if (window.controls.autoRotate !== rotate) { window.controls.autoRotate = rotate; camera.updateProjectionMatrix() } }

    React.useEffect(() => { if (vr === false && window.gl?.xr?.enabled === true) { window.gl.xr.enabled = false; window.location.reload() } }, [vr])

    React.useEffect(() => { camera.position.set(...initialPosition) }, [camera])
    React.useEffect(() => { camera.position.set(...initialPosition) }, [initialPosition])
    React.useEffect(() => { loaded && setLoaded(false); !loading && setLoading(true) }, [panorama])
    React.useEffect(() => { const t = setTimeout(() => loading && setLoading(false), 3000); return () => clearTimeout(t) }, [panorama])

    const setProgressVideo = () => {
        let currentTime = videoRef?.current?.currentTime
        let perc = (currentTime / duration * 100).toFixed(2);
        setProgress(perc)
        setVideoProgress(perc)
    }

    React.useEffect(() => {
        setProgressVideo()
    }, [currentTime])

    React.useEffect(() => {
        setIsLoaded(loaded)
    }, [loaded])

    React.useEffect(() => {
        console.log('videoPath', videoPath)
    }, [])

    return (
        <Suspense fallback={<LoadingPage redirect={false} dispatch={dispatch} />}>
            {<LoadingPage redirect={false} className={loaded === false ? "visible" : "not-visible"}/>}
            <div>
                <video
                    muted={true}
                    ref={videoRef}
                    crossOrigin="anonymous"
                    style={{ display: "none" }}
                    onEnded={() => {
                        setCurrentTime(0)
                        setProgressVideo(0)
                        setVideoPlaying(false)
                        redirectTo && history.push(redirectTo)
                        setPlayingYet(false)
                    }}
                    preload="metadata"
                    onLoadedMetadata={(event) => {
                        videoFirst && setVideoPlaying(true)
                        setDuration(event?.target?.duration)
                        videoFirst && setPlayingYet(true)
                    }}
                    onTimeUpdate={(event) => {
                        setCurrentTime(event?.target?.currentTime)
                    }}
                    // muted={true}
                    autoPlay={true}
                    playsInline={true}
                    onCanPlayThrough={(event) => {
                        if (videoRef.current.baseURI.includes("drone")) {
                            var playedPromise = videoRef.current.play();
                            if (playedPromise) {
                                playedPromise.catch((e) => {
                                    console.log(e)
                                    if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
                                        console.log(e.name);
                                    }
                                }).then(() => {
                                    // if (videoRef.current.baseURI.includes("drone")) {
                                    //     videoRef.current.play();
                                    // } else {
                                    //     videoRef.current.pause();
                                    // }
                                    videoRef.current.play();
                                });
                            }
                        } else {
                            videoRef.current.pause();
                        }
                    }}
                >
                    {(videoPath !== '' && videoPath !== undefined && videoPath !== null) && (<source src={videoPath} />)}
                </video>
                {vr && (
                    <VRCanvas onCreated={createVRCanvas} camera={camera} pixelRatio={window.devicePixelRatio}>
                        <VRControls initialPosition={initialPosition} />
                        <VRMain path={panorama} />
                        <DefaultXRControllers />
                    </VRCanvas>
                )} 
                {!vr && (
                    <Canvas camera={camera} pixelRatio={window.devicePixelRatio} colorManagement={false} style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: 'all',
                        zIndex: 1
                    }} invalidateFrameloop={false}>
                            <IntlProvider locale={locale} messages={messages[locale]}>
                                <Suspense fallback={<Html position={[300,500,-1000]} zIndexRange={[100,0]} style={{ width: "100vw", height: "100vh", zIndex: 9999}}><LoadingPage dispatch={dispatch} redirect={false} /></Html>}>
                                    <VRControls />
                                    {(loaded && showVideo === false) && hotspots?.filter(x => x.geometry === 'square').map((hotspot, i) => (<VRHotspot dispatch={dispatch} square history={history} hotspot={hotspot} key={i} showVideo={() => {setVideoPlaying(true);  setPlayingYet(true);}} />))}
                                    {(loaded && showVideo === false) && hotspots?.filter(x => x.geometry !== 'square').map((hotspot, i) => (<VRHotspot dispatch={dispatch} circle history={history} hotspot={hotspot} key={i} showVideo={() => {setVideoPlaying(true);  setPlayingYet(true);}} />))}
                                    <VRMain path={panorama} visible={isCubed === true && showVideo === false} setLoaded={(condition) => setLoaded(condition)} />
                                    <VRVideo map={videoPath} video={videoRef} loaded={loaded} setLoaded={setLoaded} visible={showVideo === true} muted={muted} />
                                </Suspense>
                            </IntlProvider>
                    </Canvas>
                )}
            </div>
        </Suspense>
    )
}
export default React.memo(VRComponent)