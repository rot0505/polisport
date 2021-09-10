import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { AnimatePresence } from 'framer-motion'
import { useResize } from './hooks'
import { MenuDesktop, MenuMobile, Reception, Map, VideoEntry, Help, HeightMobile } from './components'
import { LoadingPage, SplashPage, TestingEverythingPage, VRPage, ProductsGroup, PolisportPage, PolisportGroupPage,ProductDetail } from './pages'
import { en, es } from './assets/translations'
import 'video-react/dist/video-react.css'; // import css

const whyDidYouRender = require('@welldone-software/why-did-you-render')
whyDidYouRender(React, { trackAllPureComponents: false, logOnDifferentValues: true })

export const messages = { en, es }

const App = ({ locale, showMainMenu, showReception, showMap, showVideo, loading, showHelp }) => {

  const { isMobile } = useResize();
  return (
    <React.Suspense fallback={<LoadingPage redirect={false} />}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <HeightMobile />
          <AnimatePresence>
            {!isMobile && showMainMenu && <MenuDesktop key="menu-desktop" />}
            {showVideo.open && <VideoEntry key="video-entry" />}
            {showReception && <Reception key="reception" />}
            {showMap && <Map key="map" />}
            {isMobile && showMainMenu && <MenuMobile />}
            {showHelp && <Help />}
          </AnimatePresence>
          <Switch>
            <Route exact component={VRPage} path="/vr/:model/:pano" useChat={true} />
            <Route exact component={LoadingPage} path="/" />
            <Route exact component={SplashPage} path="/splash" />
            <Route exact component={TestingEverythingPage} path="/testing-everything" />
            
            <Route exact component={ProductsGroup} path="/products/:type" />
            <Route exact component={ProductDetail} path="/products/:type/:id" />
            {/*<Route exact component={ProductsPage} path="/products/:id" />
            <Route exact component={ProductDetailPage} path="/productdetail/:id?/:image?/:type?/" />*/}
            <Route exact component={PolisportPage} path="/polisport/:id" />
            <Route exact component={PolisportPage} path="/corporate/:id" />
            <Route exact component={PolisportGroupPage} path="/polisport-group/:id" />
          </Switch>
        </Router>
      </IntlProvider>
    </React.Suspense>
  )
}

const mapStateToProps = ({ app }) => {
  const { locale, showMainMenu, showReception, showMap, showVideo, loading, showHelp } = app
  return { locale, showMainMenu, showReception, showMap, showVideo, loading, showHelp }
}
export default connect(mapStateToProps, null)(React.memo(App))
