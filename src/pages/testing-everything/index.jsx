import React from 'react'
import { useDispatch } from 'react-redux'
import { BgImageVR } from '../../assets'
import { AppActionType } from '../../effects/types'
import { CardProduct, 
        InteractiveButtons, 
        MenuCorporate, 
        MenuInteractiveButtons,
        ButtonNavitationPanorama,
        ButtonReset,
        MenuAmbiente,
        MapMini,
        Infos,
        HotSpot,
        Zoom,
        BtnPlayer,
        BtnMotoKnowMore,
        ButtonPersonMap,
        HotSpotDirection
        } from '../../components'
import { ImageAssetsButtonPanorama } from '../../assets'

const TestingEverythingPage = () => {

  const dispatch = useDispatch();

  const openReception = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_RECEPTION, payload: true });
  }

  const openMap = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_MAP, payload: true });
  }

  const openHelp = () => {
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_HELP, payload: true });
  }

  const openVideo = () => {
    const data= {
      open: true,
      data:  {
        title: "video-entry.title",
        subtitle: "video-entry.subtitle",
        description: "video-entry.description"
      }
    }
    dispatch({ type: AppActionType.UPDATE_OPEN_CLOSE_VIDEO, payload: data });
  }

  const renderCardProduct = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>CARD PRODUCT</h1>

        <div className="row">
          <div className="col-lg-3  col-6">
            <CardProduct image="https://1699653810.rsc.cdn77.org/temp/1588259413_bef67992ca11d84544a30812befcbd0e.jpg" title="SHERCO SE-R,SEF-R - ENDURO PLASTIC KIT OEM COLOR - 2017-21 MODELS" />
          </div>
        </div>

      </div>
    </div>
  )

  const renderReception = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>Open close Reception / player</h1>
        <div className="row" style={{height: '200px'}}>
          <div className="col-lg-3 col-3">
            <div className="btn btn-success mt-4 mb-4" onClick={openReception}>Open Reception</div>
          </div>
          <div className="col-lg-3 col-3">
            <div className="btn btn-success mt-4 mb-4 ml-3" onClick={openMap}>Open Map</div>
          </div>
          <div className="col-lg-3 col-3">
            <div className="btn btn-success mt-4 mb-4 ml-3" onClick={openVideo}>Open Video</div>
          </div>
          <div className="col-lg-3 col-3">
            <div className="btn btn-success mt-4 mb-4 ml-3" onClick={openHelp}>Open Help</div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3 col-3">
             <BtnPlayer type="red" clickHandler={() => console.log("click red")}/>
          </div>
          <div className="col-lg-3 col-3">
             <BtnPlayer type="blue" clickHandler={() => console.log("click blue")}/>
          </div>
          <div className="col-lg-3 col-3">
             <BtnPlayer type="black" clickHandler={() => console.log("click black")}/>
          </div>
        </div>

      </div>
    </div>
  )

  const renderKnowMore = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1 style={{marginBottom: '40px'}}>Button KnowMore</h1>
        <div className="row" style={{height: '50px'}}>
           <div className="col-lg-12 col-12 position-relative">
             <BtnMotoKnowMore type="red" clickHandler={() => console.log("click red")}/>
          </div>
        </div>
        <div className="row" style={{height: '50px'}}>
          <div className="col-lg-12 col-12 position-relative">
             <BtnMotoKnowMore type="blue" clickHandler={() => console.log("click blue")}/>
          </div>
        </div>
        <div className="row" style={{height: '50px'}}>
          <div className="col-lg-12 col-12 position-relative">
             <BtnMotoKnowMore type="black" clickHandler={() => console.log("click black")}/>
          </div>
        </div>

      </div>
    </div>
  )

  const renderInteractiveButtons = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>Interactive Buttons</h1>
        <div className="row" style={{ background: "#000 "}}>
          <div className="col-lg-4">
            <InteractiveButtons />
          </div>
          <div className="col-lg-6">
            <MenuAmbiente />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <h1>Interactive Buttons Mobile / Button Reset</h1>
        <div className="row" style={{ background: "#000"}}>
          <div className="col-lg-4 p-1">
            <MenuInteractiveButtons />
          </div>
          <div className="offset-lg-1 col-lg-4 p-1">
            <ButtonReset handleClick={() => console.log("reset")} />
            <ButtonPersonMap />
          </div>
        </div>
      </div>
    </div>
  )

  const renderMenuCorporate = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>Menu Corporate</h1>
        <div className="row" style={{ background: `url(${BgImageVR}) no-repeat center bottom`}}>
          <div className="col-lg-12">
            <MenuCorporate />
          </div>
        </div>
      </div>
    </div>
  )

  const renderComponetZoom = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>Component Zoom</h1>
        <div className="row" style={{ background: `linear-gradient(rgba(14,36,48,.8), rgba(14,36,48,.8)), url(${BgImageVR}) no-repeat center bottom`, height: '400px', position: 'relative'}}>
          <div className="col-lg-12 d-flex justify-content-end align-items-center">
            <Zoom handleDown={() => {console.log("down")}} handleUp={() => {console.log("up")}}/>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMiniMap = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>Mini Map</h1>
        <div className="row" style={{ background: `url(${BgImageVR}) no-repeat center bottom`, height: '300px'}}>
          <div className="col-lg-12 relative">
            <div className="position-absolute" style={{bottom: '20px', right: '20px'}} onClick={openMap}>
              <MapMini />
            </div>
          </div>
        </div>

      </div>
    </div>
  )

  const renderMenuToolTip = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>Menu Tooltip / Hotspot blue</h1>
        <div className="row" style={{ background: `url(${BgImageVR}) no-repeat center bottom`, height: '300px'}}>
          <div className="col-12 col-md-3 relative">
            <div className="position-absolute" style={{top: '50px', left: '50%'}}>
              <HotSpotDirection direction="top" handleClick={() => console.log("bottom")} />
            </div>
          </div>
          <div className="col-12 col-md-3 relative">
            <div className="position-absolute" style={{top: '50px', left: '50%'}}>
              <HotSpotDirection direction="right" handleClick={() => console.log("top")}/>
            </div>
          </div>
          <div className="col-12 col-md-3 relative">
            <div className="position-absolute" style={{top: '50px', left: '50%'}}>
              <HotSpotDirection direction="bottom" handleClick={() => console.log("right")} />
            </div>
          </div>
          <div className="col-12 col-md-3 relative">
            <div className="position-absolute" style={{top: '50px', left: '50%'}}>
              <HotSpotDirection direction="left" handleClick={() => console.log("left")} />
            </div>
          </div>
          <div className="col-12 col-md-6 relative">
            <div className="position-absolute" style={{top: '50px', left: '50%'}}>
              <HotSpot />
            </div>
          </div>
          <div className="col-12 col-md-6 relative">
            <div className="position-absolute" style={{top: '50px', left: '50%'}}>
              <HotSpot type="video" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )

  const renderExpansiveBox = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12">
        <h1>Expansive Box </h1>
        <div className="row" style={{ height: '700px', border: 'solid 1px #e6e6e6'}}>
          <div className="col-lg-4 pt-4 d-flex justify-content-center">
            <Infos type="blue" infos={{title: "infos.product-1.title", description: "infos.product-1.description"}}/>
          </div>
          <div className="col-lg-4 pt-4  d-flex justify-content-center">
            <Infos type="red" infos={{title: "infos.product-1.title", description: "infos.product-1.description"}}/>
          </div>
          <div className="col-lg-4 pt-4  d-flex justify-content-center">
            <Infos type="black" infos={{title: "infos.product-1.title", description: "infos.product-1.description"}}/>
          </div>
        </div>
      </div>
    </div>
  )

  const renderButtonsPanorama = (
    <div className="row mt-3 mb-3">
      <div className="col-md-12 relative" style={{height: "200px", border: "solid 1px gray"}}>
        <h1>Buttons panorama</h1>
        <div className="row" style={{height: '140px'}}>
          <div className="col-lg-12">
            <ButtonNavitationPanorama style={{marginLeft: '20px'}} handleClick={() => console.log("click prev")} direction="left" image={ImageAssetsButtonPanorama}/>
            <ButtonNavitationPanorama style={{marginRight: '20px'}} handleClick={() => console.log("click next")}  direction="right" image={ImageAssetsButtonPanorama}/>
          </div>
        </div>

      </div>
    </div>
  )

  return (
    <div  style={{height: '100vh', overflowY: 'auto'}}>
      <div className="container">
        { renderExpansiveBox }
      </div>
      <div className="container-fluid">
        {renderKnowMore}
      </div>
      <div className="container">
        { renderReception }
      </div>
      <div className="container">
        {renderCardProduct}
        {renderInteractiveButtons}
      </div>
      <div className="container">
        {renderComponetZoom}
      </div>
      <div className="container">
        {renderMenuToolTip}
      </div>
      <div className="container-fluid">
        {renderButtonsPanorama}
      </div>
      <div className="container-fluid">
        {renderMenuCorporate}
      </div>
      <div className="container-fluid">
        {renderMiniMap}
      </div>
  </div>
  )
}

export default React.memo(TestingEverythingPage)
