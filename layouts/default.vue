<template>
  <div>
    <p-header />
    <main id="main-page">
      <nuxt />
    </main>
    <p-footer />
  </div>
</template>

<script>
import PHeader from '~/components/Header.vue'
import PFooter from '~/components/Footer.vue'

export default {
  components: {
    PHeader,
    PFooter
  }
}
</script>

<style lang="sass">
body
  font-family: 'Sarabun', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 1rem
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
</style>
