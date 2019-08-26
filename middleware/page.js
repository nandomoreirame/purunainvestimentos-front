export default function ({ store, route }) {
  store.commit('UPDATE_PAGE', route.name)
}
