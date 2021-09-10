import axios from 'axios'

export const API = axios.create({
  baseURL: process.env.REACT_APP_ENVIRONMENT === 'production' ?
  'https://proj20-backend.herokuapp.com/' :
  'https://proj20-backend.herokuapp.com/',
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
