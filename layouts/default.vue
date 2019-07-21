<template>
  <div>
    <p-header />
    <main id="main-page">
      <nuxt />
      <p-box-info />
    </main>
    <p-footer />
  </div>
</template>

<script>
export default {
  components: {
    PHeader: () => import('~/components/Header.vue'),
    PBoxInfo: () => import('~/components/BoxInfo.vue'),
    PFooter: () => import('~/components/Footer.vue')
  }
}
</script>
