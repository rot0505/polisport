import { lazy } from 'react'
import LoadingPage from './loading'
import SplashPage from './splash'
import PolisportPage from './polisport'
import TestingEverythingPage from './testing-everything'
import PolisportGroupPage from './polisport-group'
import ProductDetail from './product-detail';
export { LoadingPage, SplashPage, TestingEverythingPage, PolisportPage, PolisportGroupPage, ProductDetail }

export const VRPage = lazy(() => import('./vr'))
export const ProductsGroup = lazy(() => import('./products-group'))