import axios from 'axios'
import { apiBaseUrl } from '../site.config'

const http = axios.create({
  baseURL: apiBaseUrl,
  headers: {}
})

export default http
