<template>
  <div>
    <p-page-header
      v-if="page.excerpt"
      :title="page.title.rendered"
      :description="page.excerpt.rendered"
      :page="page"
    />

    <p-section v-if="page.about_como_construimos" class="section-1">
      <b-row>
        <b-col col md="3" offset-md="1">
          <p-colors-bars />
        </b-col>
        <b-col col md="7">
          <h2 v-text="page.about_como_construimos" />
        </b-col>
      </b-row>
      <b-row>
        <b-col v-if="page.about_analise_fundamentos" col md="4" v-html="page.about_analise_fundamentos" />
        <b-col v-if="page.about_estruturacao_fidc" col md="4" v-html="page.about_estruturacao_fidc" />
        <b-col v-if="page.about_revisao_monitoramento" col md="4" v-html="page.about_revisao_monitoramento" />
      </b-row>
    </p-section>

    <p-section class="section-2">
      <b-row>
        <b-col col md="7" class="column-image left" offset-md="1">
          <span
            :data-bg="`${require('@/assets/images/iStock-931230100.jpg')}`"
            class="lazyload"
          />
        </b-col>
        <b-col col md="4">
          <h2>Valores da Organização</h2>
          <ul>
            <li>Integridade</li>
            <li>Responsabilidade</li>
            <li>Simplicidade</li>
            <li>Inconformismo</li>
            <li>Dedicação</li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="2" offset-md="10">
          <p-colors-bars />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-3">
      <b-row>
        <b-col col md="4" offset-md="1">
          <h2>A nossa missão</h2>
          <p>Encontrar e viabilizar as melhores investimentos e instrumentos financeiros para agentes deficitários (empresas) e agentes superavitários (investidores) de recursos financeiros.</p>
        </b-col>
        <b-col col md="6" class="column-image right">
          <span
            :data-bg="`${require('@/assets/images/iStock-952625346.jpg')}`"
            class="lazyload"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="2" offset-md="1">
          <p-colors-bars />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-4">
      <b-row>
        <b-col col md="5" offset-md="1">
          <h3>Ricardo Krauss Rodrigues</h3>
          <h4>Diretor - Fundador</h4>
          <p>Atuou por quase 10 na administração, custódia e gestão de fundos de investimentos em direitos creditórios (FIDC) em uma das principais instituições financeiras deste segmento. Sendo que participou da estruturação, definição dos fluxos operacionais e monitoramento dos fundos. Além de ter tido passagens pela área de Tesouraria e Registro e Liquidação de Ativos.</p>
          <p>Possui graduação em Administração, MBA em Mercado Financeiro e de Capitais pela FGV, possui a Certificação de Gestores ANBIMA (CGA) e é autorização pela CVM como Administrador de Carteiras de Valores Mobiliários.</p>
        </b-col>
        <b-col col md="1" />
        <b-col col md="5" class="column-image right">
          <span
            :data-bg="`${require('@/assets/images/iStock-1043539212.jpg')}`"
            class="lazyload"
          />
        </b-col>
      </b-row>
    </p-section>

    <p-box-cta />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import service from '@/service'

const slug = 'sobre-nos'

// const paragraphs = `<p>A PURUNÃ Investimentos é uma gestora de fundos de investimentos, mais especificamente a gestão de Fundos de Investimentos em Direitos Creditórios (FIDC).</p>
// <p>A nossa proposta de negócio é ser um elo por meio da Securitização de Ativos entre empresas que necessitam de capital e investidores que buscam oportunidades de investimento.</p>
// <p>A nossa equipe é composta por um time de profissionais com experiência, grande conhecimento operacional e técnico do mercado financeiro e de capitais e livres de qualquer conflito de interesses.</p>`

export default {
  components: {
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
  async fetch ({ params, store, error }) {
    const { pages } = store.state.wordpress

    if (!Object.keys(pages[slug]).length) {
      await service.page(slug)
        .then(({ page }) =>
          store.commit('wordpress/CHANGE_PAGE', { slug, page }))
        .catch(err => console.error(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &.section-2,
  &.section-3 {
    padding-bottom: 200px;
  }

  &.section-1 {
    h2 {
      margin-bottom: 120px;
    }
  }

  &.section-2 {
    h2 {
      font-size: 48px;
      margin-top: 40px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 40px;

      li {
        // opacity: 0;
        // transform: translateY(60px);
        transition: opacity .6s cubic-bezier(.215,.61,.355,1), transform .6s cubic-bezier(.215,.61,.355,1);
      }

      &.is-inview {
        li {
          transform: none;
          opacity: 1;

          &:nth-child(1) { transition-delay: .1s; }
          &:nth-child(2) { transition-delay: .2s; }
          &:nth-child(3) { transition-delay: .3s; }
          &:nth-child(4) { transition-delay: .4s; }
          &:nth-child(5) { transition-delay: .5s; }
        }
      }
    }

    li, p {
      font-size: 16px;
      line-height: 2;
      color: #4a4a4a;
    }
  }

  &.section-3 {
    text-align: right;

    .column-image.right,
    .column-image.right span {
      min-height: 420px;
    }
  }

  &.section-4 {
    h3 {
      font-size: 18px;
      font-weight: 800;
      line-height: 1.33;
      letter-spacing: 1.5px;
      margin-bottom: 5px;
    }

    h4 {
      font-size: 14px;
      font-weight: 600;
      line-height: 2;
      color: #979ea6;
      margin: 0 0 60px;
    }

    p:last-child {
      margin-bottom: 60px;
    }

    .column-image.right,
    .column-image.right span {
      min-height: 593px;
    }
  }
}
</style>
