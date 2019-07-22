<template>
  <div>
    <p-page-header
      title="Fale conosco"
      :image="`${require('@/assets/images/iStock-937239290.jpg')}`"
    />

    <b-container>
      <b-row>
        <b-col col md="10" offset-md="1">
          <p-form />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PForm: () => import('~/components/Form.vue')
  }
}
</script>
