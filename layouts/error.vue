<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Página não encontrada</h1>
    <h1 v-else>Um erro ocorreu</h1>
    <nuxt-link to="/">Pagina inicial</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'], // eslint-disable-line
  layout: 'blank'
}
</script>
