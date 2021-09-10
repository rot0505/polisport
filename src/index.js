import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './effects/store'
import App from './app'
import { GlobalStyle } from './assets/globalStyle'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>, 
document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
