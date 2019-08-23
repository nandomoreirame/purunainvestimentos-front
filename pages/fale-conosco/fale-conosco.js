import { mapState } from 'vuex'
import service from '@/service'

export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PForm: () => import('~/components/Form')
  },
  computed: {
    ...mapState({
      page: ({ wordpress }) => wordpress.pages['fale-conosco']
    })
  },
  async fetch ({ store, error }) {
    const slug = 'fale-conosco'
    const { pages } = store.state.wordpress

    if (!Object.keys(pages[slug]).length) {
      await service.page(slug)
        .then(({ page }) => {
          if (page.length <= 0) {
            return error({ statusCode: 404, message: `Página não encontrada!` })
          }

          store.commit('wordpress/CHANGE_PAGE', { slug, page })
        })
        .catch(err => console.error(err))
    }
  }
}
