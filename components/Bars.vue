<template>
  <div class="bars" data-scroll="true">
    <span
      v-for="(item, i) in items"
      :key="i"
      :style="item"
      class="bar"
      data-scroll="true"
      :data-scroll-speed="i + 1"
    />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [
        {
          top: '70px',
          left: '165px',
          width: '110px',
          height: '14px',
          borderRadius: '10px'
        },
        {
          top: '30px',
          left: '20px',
          width: '210px',
          height: '14px',
          borderRadius: '10px'
        },
        {
          top: '120px',
          left: '0px',
          width: '280px',
          height: '14px',
          borderRadius: '10px'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bars {
  position: absolute;
  pointer-events: none;
  left: -60px;
  z-index: -1;

  .bar {
    background-color: #9b9b9b;
    border-radius: 10px;
    display: inline-block;
    position: absolute;
    transform: rotate(50deg);

    &:nth-child(1),
    &:nth-child(3) {
      background-color: #007aff;
    }
  }
}
</style>
