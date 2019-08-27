import { api } from '../site.config'
import http from './http'

class WordPressApi {
  constructor () {
    this.apiBase = `/wp-json`
    this.endPoints = api.endPoints
    this.defaultParams = {
      _embed: true
    }
  }

  options (slug, params = {}) {
    params = { ...{ slug }, ...this.defaultParams, ...params }
    return http
      .get(`${this.apiBase}${this.endPoints.options}`, { params })
      .then(json => json.data)
      .then(options => ({ options }))
      .catch(error => ({ error }))
  }

  page (slug, params = {}) {
    params = { ...{ slug }, ...this.defaultParams, ...params }

    return http
      .get(`${this.apiBase}${this.endPoints.pages}`, { params })
      .then(json => json.data.length ? json.data[0] : json.data)
      .then(page => ({ page }))
      .catch(error => ({ error }))
  }

  banners (params = {}) {
    params = { ...{}, ...this.defaultParams, ...params }

    return http
      .get(`${this.apiBase}${this.endPoints.banners}`, { params })
      .then(json => json.data)
      .then(banners => ({ banners }))
      .catch(error => ({ error }))
  }

  downloads (params = {}) {
    params = { ...{}, ...this.defaultParams, ...params }

    return http
      .get(`${this.apiBase}${this.endPoints.downloads}`, { params })
      .then(json => json.data)
      .then(downloads => ({ downloads }))
      .catch(error => ({ error }))
  }

  services (params = {}) {
    params = { ...{}, ...this.defaultParams, ...params }

    return http
      .get(`${this.apiBase}${this.endPoints.services}`, { params })
      .then(json => json.data)
      .then(services => ({ services }))
      .catch(error => ({ error }))
  }

  contact (params = {}) {
    params = { ...{}, ...params }

    return http
      .post(`${this.apiBase}${this.endPoints.contact}`, params)
      .then(json => { console.log(json); return json })
      .then(json => json.data)
      .then(contact => ({ contact }))
      .catch(contact => ({ contact }))
  }
}

export default new WordPressApi()
