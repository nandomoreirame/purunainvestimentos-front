<template>
  <main id="main-page" :class="`page--${page}`">
    <transition name="page">
      <nuxt />
    </transition>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',
  scrollToTop: true,
  computed: {
    ...mapState({
      page: ({ page }) => page
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>
