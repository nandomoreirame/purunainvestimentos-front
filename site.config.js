import pkg from './package'

export const isProduction = process.env.NODE_ENV === 'production'

export const apiBaseUrl = `${isProduction ? 'https://painel' : 'http://dev'}.purunainvestimentos.com.br`
// export const apiBaseUrl = `https://painel.purunainvestimentos.com.br`
export const siteBaseUrl = `${isProduction ? pkg.homepage : 'http://localhost:3000'}`

export const title = `Purunã Investimentos`
export const description = pkg.description

export const theme = {
  color: '#007aff'
}

export const api = {
  baseUrl: apiBaseUrl,
  endPoints: {
    pages: '/wp/v2/pages',
    banners: '/wp/v2/banners',
    services: '/wp/v2/services',
    downloads: '/wp/v2/downloads',
    contact: '/contact/v1/send'
  }
}

export default {
  isProduction,
  siteBaseUrl,
  api,
  title,
  description,
  theme
}
