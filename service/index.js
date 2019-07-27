import http from './http'

class WordPressApi {
  constructor () {
    this.apiBase = `/wp-json`
  }

  pages (params = { }) {
    params = { ...{ }, ...params }

    return http
      .get(`${this.apiBase}/wp/v2/pages`, { params })
      // .then(json => { console.log('pages', json.data); return json })
      .then(json => json.data)
      .then(pages => ({ pages }))
      .catch(error => ({ error }))
  }

  page (slug, params = { }) {
    params = { ...{ slug }, ...params }

    return http
      .get(`${this.apiBase}/wp/v2/pages`, { params })
      // .then(json => { console.log('page', json.data[0]); return json })
      .then(json => json.data[0])
      .then(page => ({ page }))
      .catch(error => ({ error }))
  }
}

export default new WordPressApi()
