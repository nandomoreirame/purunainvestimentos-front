<template>
  <p-section class="box-info">
    <b-row>
      <b-col cols="12" md="4">
        <div v-if="options.contact_links" class="contact-links" v-html="options.contact_links" />
        <h3>Siga-nos</h3>
        <div class="social">
          <p-icon-instagram />
          <p-icon-linkedin />
        </div>
      </b-col>
      <b-col cols="12" md="8" class="col-right">
        <b-row>
          <b-col cols="12" md="5" offset-md="1">
            <div v-if="options.contact_address" v-html="options.contact_address" />
            <h3>Contato</h3>
            <p v-if="options.contact_email || options.contact_phone">
              <a v-if="options.contact_email" :href="`mailto:${options.contact_email}`" v-text="options.contact_email" />
              <br />
              <a v-if="options.contact_phone" :href="`tel:${options.contact_phone.replace(/[^0-9]/g, '')}`" v-text="options.contact_phone" />
            </p>
          </b-col>
          <b-col v-if="options.contact_email_work" cols="12" md="6">
            <h3>Trabalhe conosco</h3>
            <p><a :href="`mailto:${options.contact_email_work}`" v-text="options.contact_email_work" /></p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </p-section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    PSection: () => import('~/components/Section.vue'),
    PIconInstagram: () => import('~/components/svg/Instagram.vue'),
    PIconLinkedin: () => import('~/components/svg/Linkedin.vue')
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

.section.box-info {
  margin-bottom: 100px;

  .contact-links a {
    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      margin-right: 4px;
      position: relative;
      top: -2px;
      width: 12px;
      height: 12px;
      background: url("~assets/images/external-link.svg") no-repeat 50%;
    }
  }

  .social {
    svg path {
      fill: #fff;
      &:first-child {
        fill: #cfcfcf;
      }
    }

    a:hover {
      svg path {
        fill: #fff;
        &:first-child {
          fill: #007aff;
        }
      }
    }
  }

  .col-md-4,
  .col-right {
    padding-top: 200px;
    padding-bottom: 100px;

    @include media(max-width $md) {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }

  .col-md-4 {
    @include media(max-width $md) { text-align: center; }

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

    @include media(max-width $md) { text-align: center; }

    .col-md-5 > div { margin-bottom: 30px; }

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

    p { font-size: 16px; }
  }
}
</style>
