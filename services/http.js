import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'

const http = axios.create({
  baseURL: `${isProduction ? 'https://painel' : 'http://dev'}.purunainvestimentos.com.br`,
  headers: {}
})

export default http
