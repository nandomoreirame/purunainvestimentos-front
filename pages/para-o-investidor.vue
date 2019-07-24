<template>
  <div>
    <p-page-header
      title="Fundos de Investimentos para o setor produtivo do Brasil"
      :image="`${require('@/assets/images/iStock-627199152.jpg')}`"
    />

    <p-section class="section-2">
      <b-row>
        <b-col col md="2" offset-md="1">
          <p-colors-bars />
        </b-col>
        <b-col col md="9">
          <h2>Informações importantes para nossos investidores</h2>

          <b-row class="downloads">
            <b-col v-for="(downloadItem, i) in downloadItems" :key="i" col md="4" class="downloads-item">
              <a :href="`/downloads/${downloadItem.file}`" target="_blank">
                {{ downloadItem.title }}
                <span>
                  Download
                  <svg width="7" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path id="a" d="M91.41 6l-4.774 5.1a.994.994 0 0 0 0 1.359.872.872 0 0 0 1.272 0l3.501-3.733 3.502 3.734a.872.872 0 0 0 1.272-.001.994.994 0 0 0 0-1.358L91.41 6z" />
                    </defs>
                    <use fill="#FFF" transform="rotate(90 49.41 -36.431)" xlink:href="#a" fill-rule="evenodd" />
                  </svg>
                </span>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </p-section>

    <p-box-cta />
  </div>
</template>

<script>
export default {
  components: {
    PBoxCta: () => import('~/components/BoxCta.vue'),
    PSection: () => import('~/components/Section.vue'),
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PColorsBars: () => import('~/components/Bars.vue')
  },
  data () {
    return {
      downloadItems: []
    }
  },
  asyncData () {
    return {
      downloadItems: [
        { title: 'Código de Conduta e Ética', file: 'codigo-de-conduta-e-etica.pdf' },
        { title: 'Formulário de Referência', file: 'formulario-de-referencia.pdf' },
        { title: 'Manual de Procedimentos Internos', file: 'manual-de-procedimentos-internos.pdf' },
        { title: 'Política de Exercício de Direito de Voto', file: 'politica-de-exercicio-de-direito-de-voto.pdf' },
        { title: 'Política de Gestão de Riscos', file: 'politica-de-gestao-de-riscos.pdf' },
        { title: 'Política de Investimentos Pessoais', file: 'politica-de-investimentos-pessoais.pdf' },
        { title: 'Política de Rateio e Divisão de Ordens', file: 'politica-de-rateio-e-divisao-de-ordens.pdf' }
      ]
    }
  }
}
</script>

<style lang="scss">
.downloads {
  &-item {
    a {
      width: 100%;
      display: block;
      min-height: 200px;
      transition: background-color .12s ease-in-out, color .12s ease-in-out;
      padding: 40px;
      font-size: 22px;
      font-weight: 800;
      line-height: 1.09;
      color: #000;

      span {
        display: block;
        margin-top: 40px;
        opacity: 0;
        transition: opacity .12s ease-in-out;
        font-size: 12px;
        font-weight: 800;
        line-height: 1.67;
        color: inherit;
        text-transform: uppercase;

        svg {
          display: inline-block;
          vertical-align: middle;
          margin-left: 40px;
        }
      }

      &:hover,
      &:focus {
        background-color: #007aff;
        text-decoration: none;
        color: #fff;

        span { opacity: 1; }
      }
    }
  }
}
</style>
