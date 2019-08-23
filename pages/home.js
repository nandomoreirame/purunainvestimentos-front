import service from '@/service'

export default {
  layout: 'home',
  components: {
    PSlider: () => import('~/components/Slider.vue'),
    PSection: () => import('~/components/Section.vue'),
    PColorsBars: () => import('~/components/Bars.vue'),
    PMetaTags: () => import('~/components/MetaTags.vue')
  },
  async fetch ({ store, error }) {
    const { banners, pages } = store.state.wordpress
    const slug = 'home'

    if (!banners.length) {
      await service.banners()
        .then(({ banners }) =>
          store.commit('wordpress/CHANGE_BANNERS', banners))
        .catch(err => console.error(err))
    }

    if (!Object.keys(pages[slug]).length) {
      await service.page(slug)
        .then(({ page }) =>
          store.commit('wordpress/CHANGE_PAGE', { slug, page }))
        .catch(err => console.error(err))
    }
  }
}
