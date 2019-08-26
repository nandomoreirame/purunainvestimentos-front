<template>
  <transition name="loading">
    <div v-if="isLoading" :class="`loading-page loading-page--${ isLoading ? `in` : `out` }`">
      <svg width="75" height="140" viewBox="0 0 75 140" xmlns="http://www.w3.org/2000/svg">
        <rect
          y="10"
          width="15"
          height="120"
          rx="6"
          fill="#007aff"
        >
          <animate
            attributeName="height"
            begin="0.5s"
            dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            begin="0.5s"
            dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="30"
          y="10"
          width="15"
          height="120"
          rx="6"
          fill="#9b9b9b"
        >
          <animate
            attributeName="height"
            begin="0.25s"
            dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            begin="0.25s"
            dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="60"
          width="15"
          height="140"
          rx="6"
          fill="#007aff"
        >
          <animate
            attributeName="height"
            begin="0s"
            dur="1s"
            values="120;110;100;90;80;70;60;50;40;140;120"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            begin="0s"
            dur="1s"
            values="10;15;20;25;30;35;40;45;50;0;10"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isLoading: ({ pageLoading }) => pageLoading
    })
  },
  methods: {
    ...mapActions({
      togglePageLoading: 'togglePageLoading'
    }),
    start () {
      this.togglePageLoading(true)
    },
    finish () {
      setTimeout(() => this.togglePageLoading(false), 1000)
    }
  }
}
</script>

<style lang="scss">
.loading {
  &-page {
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

    svg {
      transform: rotate(-45deg);
    }
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.25s ease;
  }

  &-enter,
  &-leave-active {
    opacity: 0;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
}
</style>
