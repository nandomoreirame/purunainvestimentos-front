<template>
  <footer>
    <p-box-info />
    <b-container class="footer">
      <b-row class="footer-top">
        <b-col col md="3" offset-md="4">
          <nuxt-link to="/politica-e-privacidade">Política e privacidade</nuxt-link>  •  <nuxt-link to="/termos-de-uso">Termos de uso</nuxt-link>
        </b-col>
        <b-col col md="5">
          <p>©2019 Purunã Investimentos . Todos os direitos reservados.</p>
        </b-col>
      </b-row>
      <b-row v-if="options.general_footer_text" class="footer-base">
        <p v-html="options.general_footer_text" />
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    PBoxInfo: () => import('~/components/BoxInfo.vue')
  },
  computed: {
    ...mapState({
      options: ({ wordpress }) => wordpress.options
    })
  }
}
</script>

<style lang="scss">
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.footer {
  .footer-top {
    padding: 0 0 60px 0;

    a, p {
      font-size: 14px;
      line-height: 1.71;
    }

    a {
      color: #4a90e2;
    }

    p {
      color: #979ea6;
    }
  }

  .col-md-5 p {
    text-align: right;
  }

  .footer-base {
    padding-bottom: 40px;

    @include media(max-width $sm) {
      text-align: center;
      padding-left: 15px;
      padding-right: 15px;
    }

    p {
      font-size: 16px;
      opacity: .75;

      @include media(max-width $sm) {
        font-size: 12px;
      }
    }
  }
}
</style>
