<script src="./fale-conosco.js"></script>

<template>
  <div>
    <p-header />

    <p-page-header
      :title="`Fale conosco`"
      :page="page"
    />

    <b-container>
      <b-row>
        <b-col cols="12" md="10" offset-md="1">
          <client-only placeholder="Aguarde, carregando...">
            <p-form />
          </client-only>
        </b-col>
      </b-row>
    </b-container>

    <p-footer />
  </div>
</template>
