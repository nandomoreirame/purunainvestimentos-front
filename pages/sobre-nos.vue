<template>
  <div>
    <p-page-header
      title="Conhecimento, Diligência e Independência"
      :description="paragraphs"
      :image="`${require('@/assets/images/iStock-934662002.jpg')}`"
    />
  </div>
</template>

<script>
import PPageHeader from '~/components/PageHeader.vue'

const paragraphs = `<p>A PURUNÃ Investimentos é uma gestora de fundos de investimentos, mais especificamente a gestão de Fundos de Investimentos em Direitos Creditórios (FIDC).</p>
<p>A nossa proposta de negócio é ser um elo por meio da Securitização de Ativos entre empresas que necessitam de capital e investidores que buscam oportunidades de investimento.</p>
<p>A nossa equipe é composta por um time de profissionais com experiência, grande conhecimento operacional e técnico do mercado financeiro e de capitais e livres de qualquer conflito de interesses.</p>`

export default {
  components: {
    PPageHeader
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
