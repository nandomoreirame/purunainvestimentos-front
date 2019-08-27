<template>
  <div class="alert-bar">
    <p>A Purunã Investimentos Gestora de Recursos LTDA está em fase de credenciamento junto à Comissão de Valores Mobiliários (CVM).</p>
  </div>
</template>

<script>
export default {
  name: 'AlertBar'
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/variables";
@import "~assets/sass/mixins";

.alert-bar {
  background-color: #979ea6;
  min-height: 50px;
  padding: 15px;
  text-align: center;

  @include media(max-width $md) {
    margin-bottom: 20px;
  }

  p {
    color: #fff;
    margin: 0;
  }
}
</style>
