<template>
  <footer class="footer">
    <b-container>
      <b-row class="footer-top">
        <b-col col md="3" offset-md="4">
          <nuxt-link to="/politica-e-privacidade">Política e privacidade</nuxt-link>  •  <nuxt-link to="/termos-de-uso">Termos de uso</nuxt-link>
        </b-col>
        <b-col col md="5">
          <p>©2019 Purunã Investimentos . Todos os direitos reservados.</p>
        </b-col>
      </b-row>
      <b-row class="footer-base">
        <p>A PURUNÃ investimentos Gestora de Recursos LTDA não comercializa e nem distribui cotas de fundos de investimentos em qualquer outro ativo financeiro. Os fundos de investimento não contam com garantia do administrador do fundo, do gestor de carteira, de qualquer mecanismos de seguro, ou, ainda do Fundo Garantidor de Crédito - FGC. A rentabilidade obtida não representa garantia de rentabilidade futura. É recomendada a leitura cuidadosa do prospecto e regulamento do fundo de investimento pelo investidor ao aplicar seus recursos.</p>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
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
