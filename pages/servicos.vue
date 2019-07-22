<template>
  <div>
    <p-page-header
      title="Transformamos crédito em oportunidades de investimentos"
      :image="`${require('@/assets/images/iStock-1070699338.jpg')}`"
    />

    <p-section class="section-1">
      <b-row>
        <b-col col md="4" offset-md="1">
          <h2>
            <svg width="19" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path id="a" d="M17.653 5H4.483L7.36 2.116A.998.998 0 0 0 5.95.705L.652 6l5.295 5.295A.997.997 0 0 0 7.36 9.884L4.483 7h13.17a1 1 0 0 0 0-2z" />
              </defs>
              <use fill="#007AFF" transform="matrix(-1 0 0 1 19.307 0)" xlink:href="#a" fill-rule="evenodd" />
            </svg>
            Gestão de Fundos de Investimentos
          </h2>
          <span>Selecionar</span>
        </b-col>
        <b-col col md="6" offset-md="1" class="column-image right full-right">
          <span :data-bg="`${require('@/assets/images/iStock-508221156.jpg')}`" class="lazyload" />
          <div class="black-block">
            <b-row>
              <b-col col md="4">
                <h3>Detalhes do serviço</h3>
              </b-col>
              <b-col col md="7">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut accumsan metus. Suspendisse tortor sit amet tortor pharetra, eget fermentum dui accumsan.</p>
              </b-col>
            </b-row>
          </div>
          <p-svg-bars />
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
    PSvgBars: () => import('~/components/Bars.vue')
  }
}
</script>

<style lang="scss" scoped>
.section-1 {
  padding-bottom: 150px;

  h2 {
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: -0.8px;
    margin: 0;
  }

  .bars {
    position: relative;
    left: -130px;
    z-index: 100;
    top: -40px;
  }
}

.black-block {
  padding: 40px 30px;
  background-color: #1c1c1c;
  min-width: 650px;
  min-height: 260px;
  color: #fff;
  margin-top: 300px;
  margin-left: 100px;
  position: relative;
  top: 100px;

  h3 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1.33;
    letter-spacing: -1.6px;
    color: #fff;
    text-transform: initial;
  }

  p {
    font-size: 15px;
    line-height: 1.73;
    color: #fff;
  }
}
</style>
