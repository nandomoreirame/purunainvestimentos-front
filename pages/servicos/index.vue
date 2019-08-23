<script src="./services.js"></script>
<style lang="scss" src="./services.scss"></style>

<template>
  <div class="page-services">
    <p-page-header
      title="Transformamos crédito em oportunidades de investimentos"
      :page="page"
    />

    <p-section class="section-1">
      <b-row>
        <b-col col md="4" offset-md="1">
          <nav class="service-nav">
            <a
              v-for="(service, i) in services"
              :key="service.id"
              :href="`#service${service.id}`"
              :class="`service-nav-item ${ i === 0 ? 'active' : ''}`"
              @click.prevent="toggleService(i)"
            >
              <svg width="19" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path id="a" d="M17.653 5H4.483L7.36 2.116A.998.998 0 0 0 5.95.705L.652 6l5.295 5.295A.997.997 0 0 0 7.36 9.884L4.483 7h13.17a1 1 0 0 0 0-2z" />
                </defs>
                <use fill="#007AFF" transform="matrix(-1 0 0 1 19.307 0)" xlink:href="#a" fill-rule="evenodd" />
              </svg>
              {{ service.title.rendered }} <small>Selecionar</small>
            </a>
          </nav>
        </b-col>
        <b-col col md="6" offset-md="1" class="column-image right full-right">
          <span
            v-for="(service, i) in services"
            :key="i"
            :data-bg="`${service._embedded['wp:featuredmedia']['0'].source_url}`"
            class="service-image lazyload"
          />
          <div class="black-block">
            <b-row>
              <b-col col md="4">
                <h3>Detalhes do serviço</h3>
              </b-col>
              <b-col col md="7">
                <div class="service-text">
                  <div
                    v-for="service in services"
                    :id="`service${service.id}`"
                    :key="service.id"
                    v-html="service.content.rendered"
                  />
                </div>
              </b-col>
            </b-row>
          </div>
          <p-colors-bars />
        </b-col>
      </b-row>
    </p-section>

    <p-box-cta />
  </div>
</template>
