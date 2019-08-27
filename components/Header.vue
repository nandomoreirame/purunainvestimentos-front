<template>
  <header :class="`header fixed ${white ? 'white' : 'dark'}`">
    <p-alert-bar />
    <b-navbar toggleable="lg" :type="`${white ? 'dark' : 'light'}`">
      <b-container>
        <nuxt-link to="/" class="navbar-brand">
          <PLogoLight v-if="white" />
          <PLogoDark v-else />
        </nuxt-link>

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
    PAlertBar: () => import('~/components/AlertBar.vue'),
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
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.header {
  &.fixed {
    position: absolute;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;

    &.dark {
      @include media(max-width $lg) {
        position: relative;
        background-color: #f8f8f8;
        padding-bottom: 20px;
      }
    }
  }

  .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
  }

  // .navbar.navbar-light {
  //   .navbar-toggler-icon {
  //     background-image: url("~assets/images/menu.svg");
  //   }
  // }

  &.white {
    .navbar.navbar-dark {
      .navbar-nav .nav-link { color: #fff; }

      .navbar-toggler {
        border: none;
        outline: none;
        box-shadow: none;
      }

      @include media(max-width $lg) {
        .navbar-collapse { background-color: #000; }

        .navbar-toggler {
          color: rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  &.dark {
    .navbar.navbar-light {
      .navbar-nav .nav-link {
        .navbar-toggler {
          border: none;
          outline: none;
          box-shadow: none;
        }
      }

      @include media(max-width $lg) {
        // .navbar-nav .nav-link { color: #fff; }
        .navbar-collapse { background-color: #fff; }

        .navbar-toggler {
          color: rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  .navbar {
    background: transparent;
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;

    @include media(max-width $lg) {
      .navbar-toggler { z-index: 1000; }

      .navbar-collapse {
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        display: flex;
        z-index: 100;
      }

      .navbar-nav {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        width: 100%;
      }
    }

    .navbar-nav .nav-link {
      font-size: 15px;
      padding: 25px 5px;
      margin-left: 25px;
      position: relative;
      overflow: hidden;
      transition: opacity .3s ease-in-out, color .3s ease-in-out;

      @include media(max-width $lg) {
        text-align: center;
        font-size: 22px;
      }

      &:not(:last-child) { margin-right: 20px; }
      &:last-child { margin-right: 0; }

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
        // transform: translate3d(0, 100%, 0);
        // opacity: 0;
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

        &::before { background-color: #007aff; }
      }

      &:not(.nuxt-link-exact-active):hover {
        opacity: 0.6;

        &::before { background-color: #9b9b9b; }
      }
    }
  }
}
</style>
