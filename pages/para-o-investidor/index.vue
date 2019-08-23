<script src="./para-o-investidor.js"></script>
<style lang="scss" src="./para-o-investidor.scss"></style>

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
