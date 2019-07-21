<template>
  <div>
    <p-header white />
    <main id="main-page">
      <nuxt />
      <p-box-info />
    </main>
    <p-footer />
  </div>
</template>

<script>
import PHeader from '~/components/Header.vue'
import PBoxInfo from '~/components/BoxInfo.vue'
import PFooter from '~/components/Footer.vue'

export default {
  components: {
    PHeader,
    PBoxInfo,
    PFooter
  }
}
</script>
