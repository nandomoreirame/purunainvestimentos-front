<template>
  <div>
    <p-page-header
      :title="`Termos <br /> de uso`"
      :image="`${require('@/assets/images/iStock-1072035844.jpg')}`"
    />

    <b-container>
      <b-row>
        <b-col col md="9" offset-md="2" class="page-politica-e-privacidade">
          <h3 v-if="Object.keys(terms).length && terms.title" class="page-title" v-text="terms.title.rendered" />
          <div v-if="Object.keys(terms).length && terms.content" class="page-content" v-html="terms.content.rendered" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import service from '@/service'

export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue')
  },
  data () {
    return {
      terms: {}
    }
  },
  async asyncData ({ route, store }) {
    const slug = route.name
    let terms = store.state.wordpress.pages[slug]

    if (!Object.keys(terms).length) {
      await service.page('termos-e-condicoes-de-uso')
        .then(({ page }) => {
          store.commit('wordpress/CHANGE_PAGE', { slug, page })
          terms = page
        })
        .catch(err => console.log(err))
    }

    return { terms }
  }
}
</script>
