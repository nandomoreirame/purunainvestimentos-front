import axios from 'axios'
import { api, isProduction } from '../site.config'

const http = axios.create({
  baseURL: api.baseUrl,
  headers: {}
})

http.interceptors.request.use(config => {
  // if (!isProduction) {
  //   console.info(`http request`, config.url)
  // }

  return config
}, function (error) {
  if (!isProduction) {
    console.error(`http request error`, error)
  }

  return Promise.reject(error)
})

http.interceptors.response.use(response => {
  // if (!isProduction) {
  //   console.info(`http response`, response.data)
  // }

  return response
}, function (error) {
  if (!isProduction) {
    console.error(`http response error`, error)
  }

  return Promise.reject(error)
})

export default http
