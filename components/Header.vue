<template>
  <header :class="`header fixed ${white ? 'white' : 'dark'}`">
    <b-navbar toggleable="lg" :type="`${white ? 'dark' : 'white'}`">
      <b-container>
        <b-navbar-brand href="/">
          <PLogoLight v-if="white" />
          <PLogoDark v-else />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            <nuxt-link to="/sobre-nos" class="nav-link">Sobre nós</nuxt-link>
            <nuxt-link to="/servicos" class="nav-link">Serviços</nuxt-link>
            <nuxt-link to="/para-o-investidor" class="nav-link">Para o investidor</nuxt-link>
            <nuxt-link to="/fale-conosco" class="nav-link">Fale conosco</nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  components: {
    PLogoDark: () => import('~/components/svg/LogoDark.vue'),
    PLogoLight: () => import('~/components/svg/LogoLight.vue')
  },
  props: {
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.header {
  &.fixed {
    position: absolute;
    z-index: 10000;
    top: 0;
    right: 0;
    left: 0;
  }

  &.white {
    .navbar.navbar-dark .navbar-nav .nav-link {
      color: #fff;
    }
  }

  &.dark {
    .navbar.navbar-white .navbar-nav .nav-link {
      color: #000;
    }
  }

  .navbar {
    background: transparent;
    box-shadow: none;
    padding-top: 2rem;
    padding-bottom: 2rem;

    // &.navbar-dark

    .navbar-nav .nav-link {
      font-size: 15px;
      padding: 15px 5px;
      margin-left: 25px;
      position: relative;
      overflow: hidden;
      transition: opacity .3s ease-in-out, color .3s ease-in-out;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &:last-child {
        margin-right: 0;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 3px;
        background-color: transparent;
        transition: opacity .3s ease-in-out, transform .3s ease-in-out;
        left: 0;
        transform: translate3d(0, 100%, 0);
        opacity: 0;
      }

      &:hover,
      &.active.nuxt-link-exact-active {
        position: relative;

        &::before {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }

      &.active.nuxt-link-exact-active {
        pointer-events: none;

        &::before {
          background-color: #007aff;
        }
      }

      &:not(.nuxt-link-exact-active):hover {
        opacity: 0.6;

        &::before {
          background-color: #9b9b9b;
        }
      }
    }
  }
}
</style>
