<template>
  <div class="bars">
    <div v-for="(item, i) in items" :key="i" :class="`bar bar0${i + 1}`">
      <span :style="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    velocity: {
      type: Number,
      default: 1
    },
    items: {
      type: Array,
      default: () => [
        { top: '70px', left: '165px', width: '110px', height: '14px', borderRadius: '10px' },
        { top: '30px', left: '20px', width: '210px', height: '14px', borderRadius: '10px' },
        { top: '120px', left: '0px', width: '280px', height: '14px', borderRadius: '10px' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.bars {
  position: absolute;
  pointer-events: none;
  left: -60px;
  z-index: 1;

  @include media(max-width $sm) {
    left: 0;
  }

  .bar {
    // opacity: 0;
    // transform: translate3d(0, 60px, 0);
    transition: opacity .6s cubic-bezier(.215,.61,.355,1),
      transform .6s cubic-bezier(.215,.61,.355,1);

    &:nth-child(1),
    &:nth-child(3) {
      span { background-color: rgba(#007aff, .75); }
    }

    span {
      background-color: rgba(#9b9b9b, .75);
      border-radius: 10px;
      display: inline-block;
      position: absolute;
      transform: rotate(50deg);
    }
  }

  // &.is-inview {
  //   .bar {
  //     transform: translate3d(0, 0, 0);
  //     opacity: 1;

  //     &:nth-child(1) { transition-delay: .2s; }
  //     &:nth-child(2) { transition-delay: .4s; }
  //     &:nth-child(3) { transition-delay: .6s; }
  //   }
  // }
}
</style>
