<template>
  <div>
    <p-page-header
      title="Fundos de Investimentos para o setor produtivo do Brasil"
      :image="`${require('@/assets/images/iStock-627199152.jpg')}`"
    />

    <b-container>
      <b-row>
        <b-col col md="9" offset-md="2">
          <h3>Downloads...</h3>
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
