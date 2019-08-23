import { mapState } from 'vuex'
import service from '@/service'

const slug = 'termos-de-uso'

const errorMessage = {
  statusCode: 404,
  message: `Página não encontrada!`
}

export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue')
  },
  computed: {
    ...mapState({
      page: ({ wordpress }) => wordpress.pages[slug]
    })
  },
  async fetch ({ params, store, error }) {
    const { pages } = store.state.wordpress

    if (!(slug in pages)) {
      return error(errorMessage)
    }

    if (!Object.keys(pages[slug]).length) {
      await service.page(slug)
        .then(({ page }) => {
          if (page.length <= 0) {
            return error(errorMessage)
          }

          store.commit('wordpress/CHANGE_PAGE', { slug, page })
        })
        .catch(err => console.error(err))
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // })
  }
}
