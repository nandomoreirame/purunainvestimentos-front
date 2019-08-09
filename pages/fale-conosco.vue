<template>
  <div>
    <p-page-header
      :title="`Fale <br /> conosco`"
      :page="page"
    />

    <b-container>
      <b-row>
        <b-col col md="10" offset-md="1">
          <p-form />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import service from '@/service'

export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PForm: () => import('~/components/Form.vue')
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
</script>
