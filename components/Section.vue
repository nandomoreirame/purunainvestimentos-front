<template>
  <section class="section">
    <b-container>
      <slot />
    </b-container>
  </section>
</template>

<style lang="scss">
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.section {
  margin-bottom: 150px;

  @include media(max-width $md) {
    margin-bottom: 60px;
    text-align: center;

    .row { width: 100vw; }
  }

  h2 {
    font-size: 46px;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: -2px;
    color: #000;
    margin-bottom: 50px;

    @include media(max-width $md) {
      font-size: 36px;
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 800;
    line-height: 1.71;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #000;
    margin-bottom: 25px;

    @include media(max-width $md) {
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 16px;

    @include media(max-width $sm) {
      font-size: 14px;
    }
  }
}
</style>
