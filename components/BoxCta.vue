<template>
  <p-section class="box-cta">
    <b-row>
      <b-col col md="6" offset-md="4">
        <h2>Quer Investir ou estruturar um Fundo de Investimento?</h2>
        <nuxt-link to="/fale-conosco" class="btn btn-primary" role="button">
          <span>Fale conosco</span>
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
</template>

<script>
export default {
  components: {
    PSection: () => import('~/components/Section.vue')
  }
}
</script>

<style lang="scss" scoped>
.section.box-cta {
  background-color: #1c1c1c;
  padding-top: 150px;
  padding-bottom: 150px;

  h2 {
    font-size: 60px;
    font-weight: 800;
    line-height: 1.17;
    letter-spacing: -2px;
    color: #fff;
  }

  .btn.btn-primary {
    width: 100%;
    max-width: 180px;
  }
}
</style>
