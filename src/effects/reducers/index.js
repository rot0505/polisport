import { combineReducers } from 'redux'
import appReducer from './app'

export const rootReducers = combineReducers({
  app: appReducer
})
