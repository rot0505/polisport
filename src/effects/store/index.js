import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducers } from './../reducers'
import rootSaga from './../sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const persistConfig = {
  timeout: 0,
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)
export { store, persistor }
