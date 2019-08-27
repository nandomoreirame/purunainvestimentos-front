import { mapState } from 'vuex'
import service from '@/service'

export default {
  components: {
    PHeader: () => import('~/components/Header.vue'),
    PFooter: () => import('~/components/Footer.vue'),
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PForm: () => import('~/components/Form')
  },
  computed: {
    ...mapState({
      page: ({ wordpress }) => wordpress.pages['fale-conosco']
    })
  },
  asyncData () {
    if (!process.server) {
      setTimeout(() => window.scrollTo(0, 0), 1000)
    }

    return {}
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
