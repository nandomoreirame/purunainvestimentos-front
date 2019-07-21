<template>
  <div class="bars">
    <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
      <g :stroke-width="strokeWidth" fill="none" fill-rule="evenodd">
        <path
          d="M177.678 277a4.329 4.329 0 0 1-3.383-1.627L2.947 60.06c-1.487-1.88-1.193-4.612.675-6.118 1.851-1.47 4.593-1.2 6.081.679L181.06 269.934c1.479 1.87 1.185 4.612-.684 6.117a4.294 4.294 0 0 1-2.698.949"
          stroke="#007AFF"
          fill="#007AFF"
        />
        <path
          d="M135.18 157a4.28 4.28 0 0 1-3.37-1.63L14.954 9.085a4.384 4.384 0 0 1 .657-6.126c1.84-1.5 4.581-1.212 6.077.662l116.864 146.294c1.486 1.865 1.193 4.61-.666 6.126a4.268 4.268 0 0 1-2.706.959"
          stroke="#9B9B9B"
          fill="#9B9B9B"
        />
        <path
          d="M193.661 165.5a4.32 4.32 0 0 1-3.347-1.586l-61.32-74.783a4.37 4.37 0 0 1 .581-6.135 4.322 4.322 0 0 1 6.106.592l61.328 74.783a4.371 4.371 0 0 1-.59 6.135 4.296 4.296 0 0 1-2.758.994"
          stroke="#007AFF"
          fill="#007AFF"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '200'
    },
    height: {
      type: String,
      default: '279'
    },
    strokeWidth: {
      type: String,
      default: '4'
    }
  }
}
</script>

<style lang="scss">
</style>
