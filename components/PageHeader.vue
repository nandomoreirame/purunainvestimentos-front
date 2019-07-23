<template>
  <div class="page-header">
    <b-container>
      <b-row align-v="center">
        <b-col col md="5" offset-md="1">
          <h1 v-if="title" class="title" v-html="title" />
          <div class="description" v-html="description" />
        </b-col>
        <b-col col md="6" class="column-image right full-right">
          <span v-if="image" class="lazyload" :data-bg="image" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
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
    }
  },
  mounted () {
    (function () {
      const { TweenMax, TimelineMax, Back } = require('gsap/all')
      const pageHeader = document.querySelectorAll('.page-header')
      const pageTitle = document.querySelector('.page-header .title')
      const pageDescription = document.querySelector('.page-header .description')
      const timeline = new TimelineMax()

      TweenMax.set(pageHeader, { opacity: 0 })

      timeline
        .to(pageHeader, 0.7, { opacity: 1 }, 0)
        .to(pageTitle, 0.6, { y: -50, opacity: 1, ease: Back.easeOut }, 0.5)
        .to(pageDescription, 0.6, { y: -50, opacity: 1, ease: Back.easeOut }, 0.75)
    })()
  }
}
</script>

<style lang="scss">
.page-header {
  padding-top: 120px;
  margin-bottom: 120px;
  background-color: #f8f8f8;
  width: 100vw;
  opacity: 0;

  .title {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.17;
    color: #000;
    margin-bottom: 40px;
    opacity: 0;
  }

  .description {
    font-size: 16px;
    margin-bottom: 40px;
    opacity: 0;
  }

  &,
  .column-image {
    min-height: calc(100vh - 120px);
  }
}
</style>
