import service from '@/service'

export default function ({ store }) {
  const { commit } = store
  const { wordpress } = store.state

  if (!Object.keys(wordpress.options).length) {
    service.options()
      .then(({ options }) => commit('wordpress/CHANGE_OPTIONS_THEME', options))
      .catch(err => console.error(err))
  }
}
