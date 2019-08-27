export const state = () => ({
  pageLoading: false,
  page: 'index'
})

export const mutations = {
  'CHANGE_PAGE_LOADING' (state, payload) {
    state.pageLoading = !!payload
  },

  'UPDATE_PAGE' (state, payload) {
    state.page = payload
  }
}

export const actions = {
  togglePageLoading ({ commit }, isloading = false) {
    commit('CHANGE_PAGE_LOADING', isloading)
  }
}
