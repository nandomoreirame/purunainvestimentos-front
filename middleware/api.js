import service from '@/service'

export default function ({ store, redirect }) {
  const { options } = store.state.wordpress

  if (!Object.keys(options).length) {
    service.options()
      .then(({ options }) =>
        store.commit('wordpress/CHANGE_OPTIONS_THEME', options))
      .catch(err => console.error(err))
  }
}
