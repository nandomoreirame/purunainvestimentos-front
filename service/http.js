import axios from 'axios'
import { api } from '../site.config'

const http = axios.create({
  baseURL: api.baseUrl,
  headers: {}
})

export default http
