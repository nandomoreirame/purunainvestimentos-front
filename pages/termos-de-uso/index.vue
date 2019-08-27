<script src="./termos-de-uso.js"></script>

<template>
  <div v-if="Object.keys(page).length">
    <p-header />

    <p-page-header
      v-if="page.title"
      :title="page.title.rendered"
      :showdescription="false"
      :page="page"
    />

    <b-container>
      <b-row>
        <b-col col cols="12" md="9" offset-md="2" class="page-politica-e-privacidade">
          <h3 v-if="page.title" class="page-title" v-text="page.title.rendered" />
          <div v-if="page.content" class="page-content" v-html="page.content.rendered" />
        </b-col>
      </b-row>
    </b-container>

    <p-footer />
  </div>
</template>
