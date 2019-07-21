<template>
  <div class="page-header">
    <b-container>
      <b-row align-v="center">
        <b-col col md="5" offset-md="1">
          <h1 v-if="title" class="title" v-html="title" />
          <div v-if="description" class="description" v-html="description" />
        </b-col>
        <b-col col md="6" class="column-image full-right">
          <span v-if="image" :style="{ backgroundImage: `url(${image})` }" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.page-header {
  padding-top: 120px;
  margin-bottom: 120px;
  background-color: #f8f8f8;

  .title {
    font-size: 56px;
    font-weight: 800;
    line-height: 1.17;
    color: #000;
    margin-bottom: 40px;
  }

  .description {
    font-size: 16px;
    margin-bottom: 40px;
  }

  &,
  .column-image {
    min-height: 690px;
  }
}
</style>
