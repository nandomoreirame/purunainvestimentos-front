export const state = () => ({
  banners: [],
  downloads: [],
  services: [],
  pages: {
    'servicos': {},
    'sobre-nos': {},
    'para-o-investidor': {},
    'fale-conosco': {},
    'termos-de-uso': {},
    'politica-e-privacidade': {}
  }
})

export const mutations = {
  'CHANGE_PAGE' (state, { slug, page }) {
    state.pages[slug] = page
  },

  'CHANGE_BANNERS' (state, payload) {
    state.banners = payload
  },

  'CHANGE_DOWNLOADS' (state, payload) {
    state.downloads = payload
  },

  'CHANGE_SERVICES' (state, payload) {
    state.services = payload
  }
}

export const actions = {
  changePage ({ commit }, page = {}) {
    commit('CHANGE_PAGE', page)
  }
}
