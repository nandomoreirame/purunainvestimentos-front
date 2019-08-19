<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data () {
    return { loading: false }
  },
  methods: {
    start () {
      console.warn('[loading start]')
      this.loading = true
    },
    finish () {
      console.warn('[loading finish]')
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  text-align: center;
  padding-top: 20px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
}
</style>
