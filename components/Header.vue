<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" sticky>
      <b-container>
        <b-navbar-brand href="/">
          <p-logo />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Sobre nós</b-nav-item>
            <b-nav-item href="#">Serviços</b-nav-item>
            <b-nav-item href="#">Para o investidor</b-nav-item>
            <b-nav-item href="#">Fale conosco</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import PLogo from '~/components/Logo.vue'

export default {
  components: {
    PLogo
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  .navbar {
    background: transparent;
    box-shadow: none;
  }
}
</style>
