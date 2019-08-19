export const state = () => ({
  pageLoading: false
})

export const mutations = {
  'CHANGE_PAGE_LOADING' (state, payload) {
    state.pageLoading = !!payload
  }
}

export const actions = {
  togglePageLoading ({ commit }, isloading = false) {
    commit('CHANGE_PAGE_LOADING', isloading)
  }
}
