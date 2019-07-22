import axios from 'axios'

const http = axios.create({
  baseURL: `https://painel.purunainvestimentos.com.br`,
  headers: {}
})

export default http
