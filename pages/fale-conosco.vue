<template>
  <div>
    <p-page-header
      title="Fale conosco"
      :image="`${require('@/assets/images/iStock-937239290.jpg')}`"
    />

    <b-container>
      <b-row>
        <b-col col md="9" offset-md="2">
          <h3>Form de contato...</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue')
  }
}
</script>
