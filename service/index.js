import http from './http'

class WordPressApi {
  constructor () {
    this.apiBase = `/wp-json`
  }

  page (slug, params = {}) {
    params = { ...{ slug }, ...params, ...{ _embed: true } }

    return http
      .get(`${this.apiBase}/wp/v2/pages`, { params })
      .then(json => json.data.length ? json.data[0] : json.data)
      .then(page => ({ page }))
      .catch(error => ({ error }))
  }

  downloads (params = {}) {
    params = { ...{}, ...params, ...{ _embed: true } }

    return http
      .get(`${this.apiBase}/wp/v2/downloads`, { params })
      .then(json => json.data)
      .then(downloads => ({ downloads }))
      .catch(error => ({ error }))
  }

  services (params = {}) {
    params = { ...{}, ...params, ...{ _embed: true } }

    return http
      .get(`${this.apiBase}/wp/v2/services`, { params })
      .then(json => json.data)
      .then(services => ({ services }))
      .catch(error => ({ error }))
  }
}

export default new WordPressApi()
