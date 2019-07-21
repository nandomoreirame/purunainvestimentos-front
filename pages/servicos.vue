<template>
  <div>
    <p-page-header
      title="Transformamos crédito em oportunidades de investimentos"
      :image="`${require('@/assets/images/iStock-1070699338.jpg')}`"
    />
  </div>
</template>

<script>
export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue')
  }
}
</script>

<style lang="scss" scoped>
</style>
