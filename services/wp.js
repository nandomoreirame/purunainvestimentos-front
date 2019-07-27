import http from './http'

class WordPressApi extends http {
  constructor () {
    super()
    this.apiBase = `/wp-json`
  }

  pages (params = { }) {
    params = { ...{ }, ...params }

    return this
      .get(`${this.apiBase}/wp/v2/pages`, { params })
      .then(json => json.data)
      .then(pages => ({ pages }))
      .catch(error => ({ error }))
  }

  page (slug, params = { }) {
    params = { ...{ slug }, ...params }

    return this
      .get(`${this.apiBase}/wp/v2/pages`, { params })
      .then(json => json.data)
      .then(page => ({ page }))
      .catch(error => ({ error }))
  }

  posts (params = { }) {
    params = { ...{ page: 1, per_page: 5 }, ...params }

    return this
      .get(`${this.apiBase}/wp/v2/posts`, { params })
      .then(json => json.data)
      .then(posts => ({ posts }))
      .catch(error => ({ error }))
  }

  post (slug, params = { }) {
    params = { ...{ slug }, ...params }

    return this
      .get(`${this.apiBase}/wp/v2/posts`, { params })
      .then(json => json.data)
      .then(post => ({ post }))
      .catch(error => ({ error }))
  }

  categories (params = { }) {
    params = { ...{ }, ...params }

    return this
      .get(`${this.apiBase}/wp/v2/categories`, { params })
      .then(json => json.data)
      .then(categories => ({ categories }))
      .catch(error => ({ error }))
  }

  tags (params = { }) {
    params = { ...{ }, ...params }

    return this
      .get(`${this.apiBase}/wp/v2/tags`, { params })
      .then(json => json.data)
      .then(tags => ({ tags }))
      .catch(error => ({ error }))
  }

  comments (params = { }) {
    params = { ...{ }, ...params }

    return this
      .get(`${this.apiBase}/wp/v2/comments`, { params })
      .then(json => json.data)
      .then(comments => ({ comments }))
      .catch(error => ({ error }))
  }
}

export default new WordPressApi()
