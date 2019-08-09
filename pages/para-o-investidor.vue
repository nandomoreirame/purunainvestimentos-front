<template>
  <div>
    <p-page-header
      title="Fundos de Investimentos para o setor produtivo do Brasil"
      :page="page"
    />

    <p-section class="section-2 downloads">
      <b-row>
        <b-col col md="2" offset-md="1">
          <p-colors-bars />
        </b-col>
        <b-col col md="9">
          <h2>Informações importantes para nossos investidores</h2>

          <b-row>
            <b-col v-for="(item, i) in downloads" :key="i" col md="4" class="downloads-item">
              <a :href="item.download_file" target="_blank">
                {{ item.title.rendered }}
                <span>
                  Download
                  <svg width="7" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path id="a" d="M91.41 6l-4.774 5.1a.994.994 0 0 0 0 1.359.872.872 0 0 0 1.272 0l3.501-3.733 3.502 3.734a.872.872 0 0 0 1.272-.001.994.994 0 0 0 0-1.358L91.41 6z" />
                    </defs>
                    <use fill="#FFF" transform="rotate(90 49.41 -36.431)" xlink:href="#a" fill-rule="evenodd" />
                  </svg>
                </span>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </p-section>

    <p-box-cta />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import service from '@/service'

const slug = 'para-o-investidor'

export default {
  components: {
    PBoxCta: () => import('~/components/BoxCta.vue'),
    PSection: () => import('~/components/Section.vue'),
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PColorsBars: () => import('~/components/Bars.vue')
  },
  computed: {
    ...mapState({
      page: ({ wordpress }) => wordpress.pages[slug],
      downloads: ({ wordpress }) => wordpress.downloads
    })
  },
  async fetch ({ store, error }) {
    const { pages, downloads } = store.state.wordpress

    if (!Object.keys(pages[slug]).length) {
      await service.page(slug)
        .then(({ page }) => {
          if (page.length <= 0) {
            return error({ statusCode: 404, message: `Página não encontrada!` })
          }

          store.commit('wordpress/CHANGE_PAGE', { slug, page })
        })
        .catch(err => console.error(err))
    }

    if (!downloads.length) {
      await service.downloads()
        .then(({ downloads }) =>
          store.commit('wordpress/CHANGE_DOWNLOADS', downloads))
        .catch(err => console.error(err))
    }
  }
}
</script>

<style lang="scss">
.section.section-2 {
  &.downloads {
    h2 {
      font-size: 48px;
      line-height: 1.25;
      letter-spacing: -2px;
      margin-bottom: 40px;
    }
  }

  .downloads {
    &-item {
      a {
        width: 100%;
        display: block;
        min-height: 200px;
        transition: background-color .15s ease-in-out, color .15s ease-in-out;
        padding: 40px;
        font-size: 22px;
        font-weight: 800;
        line-height: 1.09;
        color: #000;
        position: relative;
        margin-bottom: 30px;
        margin-top: 30px;

        &::before {
          content: '';
          width: 100%;
          height: 1px;
          display: block;
          background-color: #007aff;
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          transition: all .15s ease-in-out;
          z-index: -1;
        }

        span {
          display: block;
          margin-top: 40px;
          opacity: 0;
          transition: opacity .15s ease-in-out;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.67;
          color: inherit;
          text-transform: uppercase;

          svg {
            display: inline-block;
            vertical-align: middle;
            margin-left: 40px;
          }
        }

        &:hover,
        &:focus {
          // background-color: #007aff;
          text-decoration: none;
          color: #fff;

          &::before {
            height: 100%;
          }

          span { opacity: 1; }
        }
      }
    }
  }
}
</style>
