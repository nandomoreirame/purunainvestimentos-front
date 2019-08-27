<style lang="scss" src="./errors.scss" scoped></style>

<template>
  <b-container class="error-page" fluid>
    <b-row align-v="center">
      <b-col
        col
        md="5"
        offset-md="1"
        sm="12"
      >
        <h1>404</h1>
        <p><strong>Oops!</strong> esta tela não existe.</p>
        <nuxt-link to="/"  class="btn btn-primary">
          <span>Voltar ao menu</span>
          <svg width="8" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path d="M154.067365 20.3859223l-4.773854 5.1006337c-.357639.38212-.357639.9761224 0 1.3582424.328908.351422.880424.3696735 1.231846.0407659.013803-.0129193.027183-.0262843.040117-.0400738l3.501891-3.7334505 3.501891 3.7334505c.32929.3510639.880825.3687152 1.231889.0394253a.87113465.87113465 0 0 0 .040074-.0401174c.357639-.38212.357639-.9761224 0-1.3582424l-4.773854-5.1006337z" id="a"/>
            </defs>
            <use fill="#FFF" transform="rotate(90 88.067365 -60.045079)" xlink:href="#a" fill-rule="evenodd"/>
          </svg>
        </nuxt-link>
      </b-col>
      <b-col
        col
        md="6"
        sm="12"
        class="column-image right full-right"
      >
        <span :style="`background-image: url(${require('@/assets/images/error.png')})`" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'blank'
}
</script>
