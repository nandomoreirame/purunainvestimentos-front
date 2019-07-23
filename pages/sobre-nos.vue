<template>
  <div>
    <p-page-header
      title="Conhecimento, Diligência e Independência"
      :description="paragraphs"
      :image="`${require('@/assets/images/iStock-934662002.jpg')}`"
    />

    <p-section class="section-1">
      <b-row>
        <b-col col md="3" offset-md="1">
          <p-svg-bars />
        </b-col>
        <b-col col md="7">
          <h2 data-scroll="true" data-scroll-speed="1">Como construímos nossos fundos de investimentos.</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="4">
          <h3 data-scroll="true" data-scroll-speed="1">Análise de Cenário</h3>
          <p data-scroll="true" data-scroll-speed="2">Para a Estruturação de Fundo de Investimento em Direitos Creditórios (FIDC) levamos em consideração questões macroeconômicas, situação econômica financeira dos participantes envolvidos nas operações e ainda verificamos se o perfil dos investidores está de acordo com a relação entre risco e retorno do FIDC.</p>
        </b-col>
        <b-col col md="4">
          <h3 data-scroll="true" data-scroll-speed="1">Estruturação do FIDC</h3>
          <p data-scroll="true" data-scroll-speed="2">A estruturação é feita pela descrição do fluxo operacional, formalização adequada das operações e estudo dos prestadores de serviços envolvidos, tais como o Administrador e Custodiante dos FIDCs.</p>
        </b-col>
        <b-col col md="4">
          <h3>Revisão e Monitoramento</h3>
          <p>Todos os FIDCs são monitorados e revisados periodicamente de acordo com o risco de cada operação. Sendo aplicado variados testes descritos nas políticas de gerenciamento de riscos da PURUNÃ Investimentos, mas não se limitando a apenas estes.</p>
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-2">
      <b-row>
        <b-col col md="7" class="column-image left" offset-md="1">
          <span :data-bg="`${require('@/assets/images/iStock-931230100.jpg')}`" class="lazyload" />
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
    </p-section>

    <p-section class="section-3">
      <b-row>
        <b-col col md="4" offset-md="1">
          <h2>A nossa missão</h2>
          <p>Encontrar e viabilizar as melhores investimentos e instrumentos financeiros para agentes deficitários (empresas) e agentes superavitários (investidores) de recursos financeiros.</p>
        </b-col>
        <b-col col md="6" class="column-image right">
          <span :data-bg="`${require('@/assets/images/iStock-952625346.jpg')}`" class="lazyload" />
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
          <span :data-bg="`${require('@/assets/images/iStock-1043539212.jpg')}`" class="lazyload" />
        </b-col>
      </b-row>
    </p-section>

    <p-box-cta />
  </div>
</template>

<script>
const paragraphs = `<p>A PURUNÃ Investimentos é uma gestora de fundos de investimentos, mais especificamente a gestão de Fundos de Investimentos em Direitos Creditórios (FIDC).</p>
<p>A nossa proposta de negócio é ser um elo por meio da Securitização de Ativos entre empresas que necessitam de capital e investidores que buscam oportunidades de investimento.</p>
<p>A nossa equipe é composta por um time de profissionais com experiência, grande conhecimento operacional e técnico do mercado financeiro e de capitais e livres de qualquer conflito de interesses.</p>`

export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PSection: () => import('~/components/Section.vue'),
    PBoxCta: () => import('~/components/BoxCta.vue'),
    PSvgBars: () => import('~/components/svg/Bars.vue')
  },
  data () {
    return {
      paragraphs
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &.section-2 {
    h2 {
      font-size: 48px;
      margin-top: 40px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 40px;
    }

    li, p {
      font-size: 16px;
      line-height: 2;
      color: #4a4a4a;
    }
  }

  &.section-3 {
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
