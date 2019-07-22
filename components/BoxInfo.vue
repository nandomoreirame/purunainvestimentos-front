<template>
  <p-section class="box-info">
    <b-row>
      <b-col col md="4" offset-md="1">
        <h3>Acesse os sites</h3>
        <ul>
          <li>
            <a href="http://cvm.gov.br" target="_blank">
              <p-icon-external-link />
              <span>cvm.gov.br</span>
            </a>
          </li>
          <li>
            <a href="http://comoinvestir.anbima.com.br" target="_blank">
              <p-icon-external-link />
              <span>comoinvestir.anbima.com.br</span>
            </a>
          </li>
        </ul>

        <h3>Siga-nos</h3>
        <a href="#"><p-icon-instagram /></a>
        <a href="#"><p-icon-linkedin /></a>
      </b-col>
      <b-col col md="7" class="col-right">
        <b-row>
          <b-col col md="5" offset-md="1">
            <h3>Escritório</h3>
            <p>R. Francisco Rocha, 198 <br />Batel, Curitiba - PR, <br />80420-130</p>
            <h3>Contato</h3>
            <p><a href="mailto:contato@purunainvestimentos.com.br">contato@purunainvestimentos.com.br</a><br /><a href="tel:+5541998007611">+55 41 9 9800 7611</a></p>
          </b-col>
          <b-col col md="6">
            <h3>Trabalhe conosco</h3>
            <p><a href="mailto:carreiras@purunainvestimentos.com.br">carreiras@purunainvestimentos.com.br</a></p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </p-section>
</template>

<script>
export default {
  components: {
    PSection: () => import('~/components/Section.vue'),
    PIconExternalLink: () => import('~/components/svg/ExternalLink.vue'),
    PIconInstagram: () => import('~/components/svg/Instagram.vue'),
    PIconLinkedin: () => import('~/components/svg/Linkedin.vue')
  }
}
</script>

<style lang="scss">
.section.box-info {
  margin-bottom: 100px;

  .col-md-4,
  .col-right {
    padding-top: 200px;
    padding-bottom: 100px;
  }

  .col-md-4 {
    h3 {
      font-family: Sarabun;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.8px;
      color: #000;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 40px;
    }

    ul a {
      font-size: 18px;
      line-height: 1.56;
      color: #007aff;
    }
  }

  .col-right {
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 200vh;
      height: 100%;
      background-color: #f3f3f3;
      pointer-events: none;
      z-index: -1;
    }

    h3 {
      font-size: 11px;
      font-weight: 800;
      line-height: 1.82;
      letter-spacing: 1px;
      color: #000;
    }

    p {
      font-size: 16px;
    }
  }
}
</style>
