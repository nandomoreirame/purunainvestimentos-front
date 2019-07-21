import http from './http'

class WordPressApi {
  constructor () {
    this.apiBase = `/wp-json`
  }

  posts () {
    return http.get(`${this.apiBase}/wp/v2/posts`, {
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }
}

export default new WordPressApi()
