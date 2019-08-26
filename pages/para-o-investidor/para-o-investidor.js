import { mapState } from 'vuex'
import service from '@/service'

const slug = 'para-o-investidor'

export default {
  components: {
    PHeader: () => import('~/components/Header.vue'),
    PFooter: () => import('~/components/Footer.vue'),
    PBoxCta: () => import('~/components/BoxCta.vue'),
    PSection: () => import('~/components/Section.vue'),
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PColorsBars: () => import('~/components/Bars.vue')
  },
  computed: {
    ...mapState({
      page: ({ wordpress }) => wordpress.pages[slug],
      downloads: ({ wordpress }) => wordpress.downloads
    })
  },
  async fetch ({ store, error }) {
    const { pages, downloads } = store.state.wordpress

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

    if (!downloads.length) {
      await service.downloads()
        .then(({ downloads }) =>
          store.commit('wordpress/CHANGE_DOWNLOADS', downloads))
        .catch(err => console.error(err))
    }
  }
}
