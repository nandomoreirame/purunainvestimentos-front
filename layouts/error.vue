<template>
  <span v-if="false" />
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'blank',
  props: ['error'], // eslint-disable-line
  mounted () {
    const code = this.error.statusCode || 404
    this.$router.push(`/${code}`)
  }
}
</script>
