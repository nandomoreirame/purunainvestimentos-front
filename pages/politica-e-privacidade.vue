<template>
  <div>
    <p-page-header
      title="Política e privacidade"
      :image="`${require('@/assets/images/iStock-939030682.jpg')}`"
    />

    <b-container>
      <b-row>
        <b-col col md="9" offset-md="2" class="page-politica-e-privacidade">
          <h3 v-if="Object.keys(politics).length && politics.title" class="page-title" v-text="politics.title.rendered" />
          <div v-if="Object.keys(politics).length && politics.content" class="page-content" v-html="politics.content.rendered" />
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
      politics: {}
    }
  },
  async asyncData ({ route, store }) {
    const slug = route.name
    let politics = store.state.wordpress.pages[slug]

    if (!Object.keys(politics).length) {
      await service.page('politica-e-privacidade')
        .then(({ page }) => {
          store.commit('wordpress/CHANGE_PAGE', { slug, page })
          politics = page
        })
        .catch(err => console.log(err))
    }

    return { politics }
  }
}
</script>

<style lang="scss">
// .page-politica-e-privacidade {
//   .content {
//   }
// }
</style>
