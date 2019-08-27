<template>
  <div class="page-header">
    <p-meta-tags
      :title="pageTitle(page, title)"
      :description="pageDescription(page, description)"
      :url="url"
    />
    <b-container>
      <b-row align-v="center">
        <b-col
          col
          cols="12"
          md="5"
          sm="12"
          offset-md="1"
        >
          <h1 v-if="title" class="title" v-html="title" />
          <div v-if="showdescription && Object.keys(page).length && page.excerpt" class="description" v-html="page.excerpt.rendered" />
          <div v-else class="description" />
          <p-colors-bars
            :items="[
              { top: '-240px', left: '570px', width: '320px', height: '15px', borderRadius: '10px' },
              { top: '30px', left: '510px', width: '500px', height: '25px', borderRadius: '20px' },
              { top: '-220px', left: '420px', width: '500px', height: '40px', borderRadius: '30px' }
            ]"
          />
        </b-col>
        <b-col
          col
          cols="12"
          md="6"
          sm="12"
          class="column-image right full-right"
        >
          <span v-if="image || Object.keys(page).length > 0" :style="{ backgroundImage: `url(${pageImage(page, image)})` }" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const striptags = require('striptags')

export default {
  components: {
    PColorsBars: () => import('~/components/Bars.vue'),
    PMetaTags: () => import('~/components/MetaTags.vue')
  },
  props: {
    url: { type: String, default: process.env.baseUrl },
    title: { type: String, default: '' },
    showdescription: { type: Boolean, default: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    page: { type: Object, default: () => ({}) }
  },
  mounted () {
    (function () {
      const { TimelineMax, Back } = require('gsap/all')
      const pageTitle = document.querySelector('.page-header .title')
      const pageDescription = document.querySelector('.page-header .description')
      const bar01 = document.querySelectorAll('.page-header .bars .bar01')
      const bar02 = document.querySelectorAll('.page-header .bars .bar02')
      const bar03 = document.querySelectorAll('.page-header .bars .bar03')
      const timeline = new TimelineMax()

      timeline
        .to(pageTitle, 0.6, { y: -50, opacity: 1, ease: Back.easeOut }, 0.5)
        .to(pageDescription, 0.6, { y: -50, opacity: 1, ease: Back.easeOut }, 0.75)
        .to(bar01, 0.4, { y: -40, opacity: 0.9, ease: Back.easeOut }, 0.4)
        .to(bar02, 0.7, { y: -40, opacity: 0.9, ease: Back.easeOut }, 0.6)
        .to(bar03, 1, { y: -40, opacity: 0.9, ease: Back.easeOut }, 0.8)
    })()
  },
  methods: {
    pageTitle: (page, title) => {
      if (Object.keys(page).length && page.title) {
        return striptags(page.title.rendered)
      }

      return striptags(title) || ''
    },
    pageDescription: (page, description) => {
      if (Object.keys(page).length && page.excerpt) {
        return striptags(page.excerpt.rendered)
      }

      return striptags(description) || ''
    },
    pageImage: (page, image) => {
      if (Object.keys(page).length && page._embedded && page._embedded['wp:featuredmedia']) {
        return page._embedded['wp:featuredmedia']['0'].source_url
      }

      if (image) {
        return image
      }

      return require(`@/assets/images/error.png`)
    }
  }
}
</script>

<style lang="scss">
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.page-header {
  padding-top: 130px;
  margin-bottom: 120px;
  background-color: #f8f8f8;
  width: 100vw;

  .bars {
    z-index: 10;

    .bar { opacity: 0; }
  }

  @include media(max-width $md) {
    padding-top: 80px;

    .row { width: 100vw; }
  }

  .title {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.17;
    color: #000;
    margin-bottom: 40px;
    opacity: 0;

    @include media(max-width $md) { font-size: 32px; }
  }

  .description {
    font-size: 16px;
    margin-bottom: 40px;
    opacity: 0;
  }

  &,
  .column-image,
  .column-image span {
    min-height: calc(100vh - 130px);

    @include media(max-width $md) { min-height: calc(60vh - 130px); }
  }

  .column-image span {
    @include media(max-width $md) {
      width: 100vw;
      position: relative;
      right: -15px;
      left: -15px;
    }
  }
}
</style>
