<template>
  <section class="section">
    <b-container>
      <slot />
    </b-container>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.section {
  margin-bottom: 150px;

  h2 {
    font-size: 46px;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: -2px;
    color: #000;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 14px;
    font-weight: 800;
    line-height: 1.71;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #000;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
  }
}
</style>
