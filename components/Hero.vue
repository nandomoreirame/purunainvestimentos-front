<template>
  <div class="hero" :style="{ backgroundImage: `url(${require('@/assets/images/iStock-953577456.jpg')})` }">
    <b-container class="inner">
      <h1>Somos uma gestora de fundos especializada em Investimentos Alternativos.</h1>
    </b-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  position: relative;
  margin-bottom: 150px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: #000;
    opacity: .5;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .inner {
    position: relative;
    z-index: 10;
  }

  h1 {
    margin: 0;
    font-size: 60px;
    font-weight: 600;
    line-height: 1.17;
    color: #fff;
  }
}
</style>
