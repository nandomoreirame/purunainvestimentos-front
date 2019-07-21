<template>
  <div class="home">
    <p-hero />

    <p-section class="section-1">
      <b-row>
        <b-col col md="4" offset-md="1">
          <h2>Experiência, competência e resultados que fazem a diferença em longo prazo.</h2>
          <div>
            <h3>Fundos de investimentos estruturados</h3>
            <p>Somos uma gestora especializada na estruturação e gestão de Fundos de Investimentos em Direitos Creditórios (FIDC).</p>
          </div>
          <div>
            <h3>Securitização de ativos</h3>
            <p>Temos como proposta de negócio ser um elo entre empresas que necessitam de crédito e investidores que buscam oportunidades de investimentos por meio da Securitização de Ativos.</p>
          </div>
        </b-col>
        <b-col col md="6" offset-md="1" class="column-image full-right">
          <span :style="{ backgroundImage: `url(${require('@/assets/images/iStock-922512798.jpg')})` }" />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-2">
      <b-row>
        <b-col col md="3" offset-md="1">
          <div class="arrows">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </b-col>
        <b-col col md="8">
          <h2>Desintermediação financeira e investimentos arrojados através de FIDC.</h2>

          <b-row>
            <b-col col md="6">
              <p>O FIDC é uma forma de eliminar intermediários financeiros de operações de crédito por meio da Securitização de Ativos. Com isso, as empresas podem transformar ativos de baixa liquidez em valores mobiliários e respectivamente ter acesso a linhas de crédito mais vantajosas.</p>
              <p>Pelo lado dos investidores, o FIDC é uma forma de diversificação de investimentos no qual oferece taxa de rentabilidade superior se comparado a muitos outros ativos financeiros e conta com instrumentos de proteção como, por exemplo, alienação fiduciária e subordinação de cotas.</p>
            </b-col>
            <b-col col md="6">
              <p>O FIDC também é uma forma de planejamento tributário. Portanto muitas operações financeiras que são tributadas em ISS, IR, CSLL e IOF são isentas se feitas por meio destes fundos, ou seja, os custos diminuem e tanto as empresas como os investidores são beneficiados.</p>
              <p>Logo, a Securitização de Ativos por meio de FIDC alinha os objetivos de investidores na alocação de seus recursos financeiros e empresas que necessitam de fontes de financiamento de suas operações.</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-3">
      <b-row>
        <b-col col md="7" offset-md="1">
          <h2>Experiência, competência e resultados que fazem a diferença em longo prazo.</h2>
          <p>A PURUNÃ Investimentos tem como premissas básicas de sua cultura de trabalho a priorização da gestão de riscos e o seu aperfeiçoamento constante. Para que assim, a gestora tenha anulado ou minimizado todos os riscos envolvidos nas operações e os investidores estejam confortáveis em explorar as oportunidades de investimentos.</p>
        </b-col>
        <b-col col md="4" class="column-image">
          <span :style="{ backgroundImage: `url(${require('@/assets/images/iStock-921987904.jpg')})` }" />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-4">
      <b-row>
        <b-col col md="10" offset-md="1">
          <h2>Faça sua empresa crescer, conheça as formas e usos dos FIDCs</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="5" offset-md="1">
          <p>O FIDC é uma forma securitização de ativos muito utilizada pelas empresas como instrumento de planejamento estrutural de suas finanças na qual, por exemplo, fornece robustez na necessidade de capital de giro.</p>
        </b-col>
        <b-col col md="5">
          <p>Há ainda empresas que utilizam o FIDC como ferramenta principal para a execução de suas operações, por exemplo: financeiras, subadquirintes de recebíveis de cartão de crédito, empresas de recuperação de recebíveis, sociedades de fomento mercantil etc.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="10" offset-md="1">
          <b-button variant="dark">Cases de empresas</b-button>
        </b-col>
      </b-row>
    </p-section>
  </div>
</template>

<script>
import PHero from '~/components/Hero.vue'
import PSection from '~/components/Section.vue'

export default {
  layout: 'home',
  components: {
    PHero,
    PSection
  }
}
</script>

<style lang="scss">
.section {
  &.section-2 {
    h2 {
      font-size: 60px;
      line-height: 1.17;
      letter-spacing: -2px;
      margin-bottom: 60px;
    }
  }

  &.section-3 {
    h2 {
      margin-bottom: 100px;
    }
  }

  &.section-4 {
    background-color: #007aff;
    padding-top: 100px;
    padding-bottom: 100px;

    h2,
    h3,
    p {
      color: #fff;
    }

    h2 {
      font-size: 60px;
      line-height: 1.17;
      margin-bottom: 60px;
    }
  }
}
</style>
