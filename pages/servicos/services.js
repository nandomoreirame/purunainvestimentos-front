import { mapState } from 'vuex'
import service from '@/service'

const slug = 'servicos'

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
      services: ({ wordpress }) => wordpress.services
    })
  },
  asyncData () {
    if (!process.server) {
      setTimeout(() => window.scrollTo(0, 0), 1000)
    }

    return {}
  },
  async fetch ({ store, error }) {
    const slug = 'servicos'
    const { pages, services } = store.state.wordpress

    if (!Object.keys(pages[slug]).length && !services.length) {
      await service.page(slug)
        .then(({ page }) => {
          if (page.length <= 0) {
            return error({ statusCode: 404, message: `Página não encontrada!` })
          }

          store.commit('wordpress/CHANGE_PAGE', { slug, page })

          return service.services()
            .then(({ services }) =>
              store.commit('wordpress/CHANGE_SERVICES', services))
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }
  },
  methods: {
    toggleService (index) {
      const { TweenMax, TimelineMax, Back } = require('gsap/all')
      const navItems = document.querySelectorAll('.service-nav-item')
      const images = document.querySelectorAll('.service-image')
      const texts = document.querySelectorAll('.service-text > div')

      navItems.forEach((item, k) => item.classList.remove('active'))
      images.forEach((image, k) => TweenMax.set(image, { opacity: 0 }))
      texts.forEach((text, k) => TweenMax.set(text, { y: 0, opacity: 0 }))

      const timeline = new TimelineMax()
      const image = images[index]
      const text = texts[index]
      const navItem = navItems[index]

      navItem.classList.add('active')

      timeline
        .to(image, 0.7, { opacity: 1 }, 0.1)
        .to(text, 1, { y: -15, opacity: 1, ease: Back.easeOut }, 0.2)
    }
  }
}
