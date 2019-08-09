<template>
  <div v-if="Object.keys(page).length">
    <p-page-header
      v-if="page.title"
      :title="page.title.rendered"
      :page="page"
    />
    <b-container>
      <b-row>
        <b-col col md="9" offset-md="2" class="page-politica-e-privacidade">
          <h3 v-if="page.title" class="page-title" v-text="page.title.rendered" />
          <div v-if="page.content" class="page-content" v-html="page.content.rendered" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import service from '@/service'

const slug = 'politica-e-privacidade'

const errorMessage = { statusCode: 404, message: `Página não encontrada!` }

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
  }
}
</script>
