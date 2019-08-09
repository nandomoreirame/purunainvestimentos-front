<template>
  <div class="home">
    <p-slider />

    <p-meta-tags
      title="Fundos de investimentos estruturados"
      description="Experiência, competência e resultados que fazem a diferença em longo prazo"
    />

    <p-section class="section-1">
      <b-row>
        <b-col col md="4" offset-md="1" sm="12">
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
        <b-col
          col
          md="6"
          offset-md="1"
          sm="12"
          class="column-image right full-right"
          data-scroll="true"
        >
          <span
            :data-bg="`${require('@/assets/images/iStock-922512798.jpg')}`"
            class="lazyload"
            data-scroll="true"
            data-scroll-speed="0.3"
            data-scroll-direction="horizontal"
          />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-2">
      <b-row>
        <b-col col md="3" sm="12" offset-md="1">
          <p-colors-bars />
        </b-col>
        <b-col col md="8" sm="12">
          <h2>Desintermediação financeira e investimentos arrojados através de FIDC.</h2>

          <b-row>
            <b-col col md="6" sm="12">
              <p>O FIDC é uma forma de eliminar intermediários financeiros de operações de crédito por meio da Securitização de Ativos. Com isso, as empresas podem transformar ativos de baixa liquidez em valores mobiliários e respectivamente ter acesso a linhas de crédito mais vantajosas.</p>
              <p>Pelo lado dos investidores, o FIDC é uma forma de diversificação de investimentos no qual oferece taxa de rentabilidade superior se comparado a muitos outros ativos financeiros e conta com instrumentos de proteção como, por exemplo, alienação fiduciária e subordinação de cotas.</p>
            </b-col>
            <b-col col md="6" sm="12">
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
        <b-col
          col
          md="4"
          class="column-image right"
          data-scroll="true"
        >
          <span
            :data-bg="`${require('@/assets/images/iStock-921987904.jpg')}`"
            class="lazyload"
            data-scroll="true"
            data-scroll-speed="0.65"
          />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-4" data-scroll="true" data-scroll-speed="0.5">
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
          <nuxt-link to="/fale-conosco" class="btn btn-dark">
            <span>Abra um FIDC com a gente</span>
            <svg width="8" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path id="arrow" d="M168.067 20.386l-4.773 5.1a.994.994 0 0 0 0 1.359.872.872 0 0 0 1.271 0l3.502-3.733 3.502 3.733a.872.872 0 0 0 1.272 0 .994.994 0 0 0 0-1.358l-4.774-5.101z" />
              </defs>
              <use fill="#fff" transform="rotate(90 95.067 -67.045)" xlink:href="#arrow" fill-rule="evenodd" />
            </svg>
          </nuxt-link>
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-5">
      <b-row>
        <b-col col md="7" offset-md="1">
          <h2>Classificações de FIDC</h2>
          <h3>Os FIDCs são fundos de investimentos que impulsionam o crescimento do país e atuam nos mais variados segmentos da econômia.</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="3" offset-md="3">
          <ul>
            <li>Fomento Mercantil</li>
            <li>Infraestrutura</li>
            <li>Recebíveis Comerciais</li>
            <li>Crédito Corporativo</li>
            <li>Agronegócio</li>
            <li>Multicarteira Agro, Indústria e Comércio</li>
          </ul>
        </b-col>
        <b-col col md="3">
          <ul>
            <li>Crédito Imobiliário</li>
            <li>Crédito Consignado</li>
            <li>Crédito Pessoal</li>
            <li>Financiamento de Veículos</li>
            <li>Multicarteira Financeiro</li>
          </ul>
        </b-col>
        <b-col col md="3">
          <ul>
            <li>Recuperação <em>(Non Performing Loans)</em></li>
            <li>Poder Público</li>
            <li>Multicarteira (outros)</li>
          </ul>
        </b-col>
      </b-row>
    </p-section>
  </div>
</template>

<script>
export default {
  layout: 'home',
  components: {
    PSlider: () => import('~/components/Slider.vue'),
    PSection: () => import('~/components/Section.vue'),
    PColorsBars: () => import('~/components/Bars.vue'),
    PMetaTags: () => import('~/components/MetaTags.vue')
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.section {
  &.section-2 {
    h2 {
      font-size: 60px;
      line-height: 1.17;
      letter-spacing: -2px;
      margin-bottom: 60px;

      @include media(max-width $sm) {
       font-size: 30px;
      }
    }

    @include media(max-width $md) {
      .col-md-3 {
        height: 280px;
      }
    }

    .bars {
      position: relative;
      top: 100px;

      @include media(max-width $md) {
        top: 0;
      }
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

      @include media(max-width $md) {
        font-size: 42px;
      }

      @include media(max-width $sm) {
        font-size: 38px;
      }
    }

    .btn {
      width: 100%;
      max-width: 250px;
    }
  }

  &.section-5 {
    h2 {
      font-size: 48px;
      font-weight: 800;
      line-height: 1.25;
      letter-spacing: -2px;
      color: #000;
      margin-bottom: 30px;

      @include media(max-width $sm) {
        font-size: 40px;
      }
    }

    h3 {
      font-size: 24px;
      font-weight: 800;
      color: #000;
      line-height: 1.5;
      letter-spacing: -0.8px;
      letter-spacing: initial;
      text-transform: initial;
      margin-bottom: 60px;

      @include media(max-width $sm) {
        font-size: 18px;
        line-height: 1.4;
        margin-bottom: 40px;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      @include media(max-width $sm) {
        padding-left: 10px;
      }

      li {
        font-size: 16px;
        line-height: 2;
        color: #4a4a4a;
        position: relative;
        padding-left: 15px;

        &::before {
          content: '';
          position: absolute;
          top: 14px;
          left: 0;
          display: inline-block;
          width: 5px;
          height: 5px;
          background-color: #007aff;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
