import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { v4 as uuiv4 } from 'uuid'
import { connect, useDispatch } from 'react-redux';
import {  useResize } from '../../hooks'
import { VR, FooterVR as Footer, MotoProgress, ButtonSkip, Header, MapMini, Infos, ButtonPersonMap } from './../../components'
import { updateCurrentAct, setVisited } from './../../effects/actions'
import { ASSETS_FOLDER } from '../../assets';
import { Container, PersonMapContainer } from './index.styled'
import { AppActionType } from '../../effects/types';
import { LoadingPage } from '..';
const enviroments = require('./../../assets/mock-data/enviroment.json')

function usePrevious(value) { const ref = React.useRef(); React.useEffect(() => { ref.current = value }); return ref.current; }

const VRPage = ({ updateCurrentAct, loading, setVisited }) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const model = params.model ?? 'lobby'
  const pano = params.pano ?? 1
  const [currentModel, setCurrentModel] = useState()
  const [currentPanorama, setCurrentPanorama] = useState()
  const [info, setInfo] = useState(null);
  const [vr, setVR] = useState(false)
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = React.useState(false)
  const { isMobile } = useResize()

  const searchModel = (id) => (enviroments && enviroments[0]?.model?.find((x) => x.id === id))
  const searchPanorama = (model, pano) => (model?.panoramas?.find((x) => String(x.id) === String(pano)))
  
  const mapId = currentPanorama?.mapId
  const floor = currentPanorama?.floor

  const openMap = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MAP, payload: { show: true, map: mapId, floor: floor } });
  }

  useEffect(() => {
    const _model = searchModel(model)
    setCurrentModel(_model)
    setCurrentPanorama(searchPanorama(_model, pano))

  }, [pano, model])

  const path = (currentPanorama && currentModel && enviroments) && `${ASSETS_FOLDER}/${enviroments[0].folder}/${currentModel.id}/${currentPanorama.name}/` 
  //const path = (currentPanorama && currentModel && enviroments) && `/${enviroments[0].folder}/${currentModel.id}/${currentPanorama.name}/`
  const videoPath = (currentPanorama && currentModel && enviroments) && `${ASSETS_FOLDER}/videos/${currentPanorama.videoName}`
  //const videoPath = (currentPanorama && currentModel && enviroments) && `/videos/${currentPanorama.videoName}`
  const prevPath = usePrevious(path)
  
  const getInfoPerson = () => {
    setInfo(
        <Infos key={uuiv4()} infos={{
          title: "infos.polisport-plastics.title",
          description: "infos.polisport-plastics.description"
        }} />
    )
  }

  useEffect(() => {
    getInfoPerson();
  }, [])

 
  useEffect(() => {
    // console.log("map", mapId)
    // console.log("floor", floor)
    if(mapId !== undefined && mapId !== null) setVisited(mapId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapId])

  return (
    <React.Suspense fallback={<LoadingPage redirect={false} />}>
      <Container>
        <Header color="blue" showMenu={!(playing)}>
          {(!loading && model !== "drone")}
        </Header>
        {(playing) && (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <ButtonSkip clickHandler={() => {
                  // if(model !== "drone")   setPlaying(false)
                  setPlaying(false)
                  currentPanorama?.redirectTo && history.push(currentPanorama?.redirectTo)
                  window.location.reload()
                }} />
              </div>
            </div>
          </div>
        )}
        <VR
          vr={vr}
          setVR={setVR}
          key={path}
          rotate={false}
          namePanorama={currentPanorama?.name}
          panorama={path}
          previewPanorama={null}
          prevPath={prevPath}
          model={currentModel}
          hotspots={currentPanorama?.hotspots}
          initialPosition={currentPanorama?.initialPosition}
          videoPath={videoPath}
          videoFirst={currentPanorama?.videoFirst}
          isCubed={currentPanorama?.isCubed}
          redirectTo={currentPanorama?.redirectTo}
          showVideo={playing}
          setVideoProgress={(pro) => {
            setProgress(pro)
          }}
          setPlayingYet={(condition) => {
            setPlaying(condition)
          }}
          setIsLoaded={(loaded) => {
            setLoaded(loaded)
          }}
        />
        {!(playing) && (
          <React.Fragment>
            <div className="position-absolute" style={{ bottom: '40px', right: '20px', zIndex: 1 }} onClick={openMap}>
              {(!isMobile && !loading && loaded) &&
                <MapMini name={mapId} floor={floor} />
              }
            </div>
            {(isMobile && !loading && loaded) &&
              <PersonMapContainer>
                <ButtonPersonMap name={mapId} handleClick={() => console.log("Map lindo")} />
              </PersonMapContainer>
            }
          </React.Fragment>
        )}

        {(playing) && (<MotoProgress leftDistance={Number(progress)} type="red-white" bottomDistance={40} />)}
        <Footer className="dark" showVr showEnviroment={playing === false} mapId={mapId} />
      </Container>
    </React.Suspense>
  )
}

const mapStateToProps = ({ app }) => {
  const { loading } = app
  return { loading }
}

export default connect(mapStateToProps, {
  updateCurrentAct,
  setVisited
})(React.memo(VRPage))
