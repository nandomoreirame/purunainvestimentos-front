import service from '@/service'

export default {
  layout: 'default',
  components: {
    PHeader: () => import('~/components/Header.vue'),
    PFooter: () => import('~/components/Footer.vue'),
    PSlider: () => import('~/components/Slider.vue'),
    PSection: () => import('~/components/Section.vue'),
    PColorsBars: () => import('~/components/Bars.vue'),
    PMetaTags: () => import('~/components/MetaTags.vue')
  },
  asyncData () {
    if (!process.server) {
      setTimeout(() => window.scrollTo(0, 0), 1000)
    }

    return {}
  },
  async fetch ({ store }) {
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
