import { mapState } from 'vuex'
import service from '@/service'

const slug = 'sobre-nos'

// const paragraphs = `<p>A PURUNÃ Investimentos é uma gestora de fundos de investimentos, mais especificamente a gestão de Fundos de Investimentos em Direitos Creditórios (FIDC).</p>
// <p>A nossa proposta de negócio é ser um elo por meio da Securitização de Ativos entre empresas que necessitam de capital e investidores que buscam oportunidades de investimento.</p>
// <p>A nossa equipe é composta por um time de profissionais com experiência, grande conhecimento operacional e técnico do mercado financeiro e de capitais e livres de qualquer conflito de interesses.</p>`

export default {
  components: {
    PHeader: () => import('~/components/Header.vue'),
    PFooter: () => import('~/components/Footer.vue'),
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PSection: () => import('~/components/Section.vue'),
    PBoxCta: () => import('~/components/BoxCta.vue'),
    PColorsBars: () => import('~/components/Bars.vue')
  },
  computed: {
    ...mapState({
      page: ({ wordpress }) => wordpress.pages[slug]
    })
  },
  async fetch ({ store }) {
    const { pages } = store.state.wordpress

    if (!Object.keys(pages[slug]).length) {
      await service.page(slug)
        .then(({ page }) =>
          store.commit('wordpress/CHANGE_PAGE', { slug, page }))
        .catch(err => console.error(err))
    }
  }
}
