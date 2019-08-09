import pkg from './package'

export const isProduction = process.env.NODE_ENV === 'production'

// export const apiBaseUrl = `${isProduction ? 'https://painel' : 'http://dev'}.purunainvestimentos.com.br`
export const apiBaseUrl = `https://painel.purunainvestimentos.com.br`
export const siteBaseUrl = `${isProduction ? pkg.homepage : 'http://localhost:3000'}`

export const title = `Purunã Investimentos`
export const description = pkg.description

export const theme = {
  color: '#007aff'
}

export const api = {
  formContact: '/contact-form-7/v1/contact-forms/[form_id]/feedback'
}

export default {
  isProduction,
  apiBaseUrl,
  siteBaseUrl,
  title,
  description,
  theme,
  api
}
