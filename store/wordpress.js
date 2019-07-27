export const state = () => ({
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
  }
}

export const actions = {
  changePage ({ commit }, page = {}) {
    commit('CHANGE_PAGE', page)
  }
}
