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
          <h2>Como construímos nossos fundos de investimentos.</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="4">
          <h3>Análise de Cenário</h3>
          <p>Para a Estruturação de Fundo de Investimento em Direitos Creditórios (FIDC) levamos em consideração questões macroeconômicas, situação econômica financeira dos participantes envolvidos nas operações e ainda verificamos se o perfil dos investidores está de acordo com a relação entre risco e retorno do FIDC.</p>
        </b-col>
        <b-col col md="4">
          <h3>Estruturação do FIDC</h3>
          <p>A estruturação é feita pela descrição do fluxo operacional, formalização adequada das operações e estudo dos prestadores de serviços envolvidos, tais como o Administrador e Custodiante dos FIDCs.</p>
        </b-col>
        <b-col col md="4">
          <h3>Revisão e Monitoramento</h3>
          <p>Todos os FIDCs são monitorados e revisados periodicamente de acordo com o risco de cada operação. Sendo aplicado variados testes descritos nas políticas de gerenciamento de riscos da PURUNÃ Investimentos, mas não se limitando a apenas estes.</p>
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-2">
      <b-row>
        <b-col col md="7" class="column-image left">
          <span :data-bg="`${require('@/assets/images/iStock-931230100.jpg')}`" class="lazyload" />
        </b-col>
        <b-col col md="4">
          <h2>Valores da Organização</h2>
          <li>Integridade</li>
          <li>Responsabilidade</li>
          <li>Simplicidade</li>
          <li>Inconformismo</li>
          <li>Dedicação</li>
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
</style>
