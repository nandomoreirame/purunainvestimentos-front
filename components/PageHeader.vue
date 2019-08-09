<template>
  <div class="page-header">
    <p-meta-tags :title="title" :description="description" :url="url" />
    <b-container>
      <b-row align-v="center">
        <b-col col md="5" sm="12" offset-md="1">
          <h1 v-if="title" class="title" v-html="title" />
          <div class="description" v-html="description" />
          <p-colors-bars
            :items="[
              { top: '0px', left: '600px', width: '320px', height: '15px', borderRadius: '10px' },
              { top: '110px', left: '320px', width: '500px', height: '25px', borderRadius: '20px' },
              { top: '-120px', left: '260px', width: '500px', height: '50px', borderRadius: '30px' }
            ]"
          />
        </b-col>
        <b-col col md="6" sm="12" class="column-image right full-right">
          <span v-if="image || Object.keys(page).length > 0" :style="{ backgroundImage: `url(${featuredMedia(page, image)})` }" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    PColorsBars: () => import('~/components/Bars.vue'),
    PMetaTags: () => import('~/components/MetaTags.vue')
  },
  props: {
    url: {
      type: String,
      default: process.env.baseUrl
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    page: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    (function () {
      const { TimelineMax, Back } = require('gsap/all')
      const pageTitle = document.querySelector('.page-header .title')
      const pageDescription = document.querySelector('.page-header .description')
      const timeline = new TimelineMax()

      timeline
        .to(pageTitle, 0.6, { y: -50, opacity: 1, ease: Back.easeOut }, 0.5)
        .to(pageDescription, 0.6, { y: -50, opacity: 1, ease: Back.easeOut }, 0.75)
    })()
  },
  methods: {
    featuredMedia: (page, image) => {
      if (Object.keys(page).length && page._embedded) {
        return page._embedded['wp:featuredmedia']['0'].source_url
      }

      return image
    }
  }
}
</script>

<style lang="scss">
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.page-header {
  padding-top: 120px;
  margin-bottom: 120px;
  background-color: #f8f8f8;
  width: 100vw;

  @include media(max-width $md) {
    padding-top: 180px;

    .row {
      display: block;
      width: 100%;
    }
  }

  .title {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.17;
    color: #000;
    margin-bottom: 40px;
    opacity: 0;

    @include media(max-width $md) {
      font-size: 36px;
    }
  }

  .description {
    font-size: 16px;
    margin-bottom: 40px;
    opacity: 0;
  }

  &,
  .column-image,
  .column-image span {
    min-height: calc(100vh - 120px);

    @include media(max-width $md) {
      min-height: calc(60vh - 120px);
    }
  }
}
</style>
