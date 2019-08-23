<template>
  <a v-if="link" :href="link" class="linkedin" target="_blank">
    <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 0C7.837 0 0 7.837 0 17.5S7.837 35 17.5 35 35 27.163 35 17.5 27.163 0 17.5 0zM8.153 26.455h4.262V13.633H8.153v12.822zm2.13-14.573h-.027c-1.43 0-2.355-.985-2.355-2.215 0-1.259.953-2.216 2.411-2.216 1.458 0 2.355.957 2.383 2.216 0 1.23-.925 2.215-2.411 2.215zm17.5 14.573H23.52v-6.86c0-1.724-.617-2.9-2.159-2.9-1.177 0-1.878.794-2.187 1.56-.112.273-.14.656-.14 1.04v7.16h-4.262s.056-11.62 0-12.822h4.262v1.815c.567-.874 1.58-2.116 3.841-2.116 2.804 0 4.907 1.832 4.907 5.77v7.353z" fill="#CFCFCF" fill-rule="evenodd" />
    </svg>
  </a>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      link: ({ wordpress }) => wordpress.options.contact_linkedin
    })
  }
}
</script>
