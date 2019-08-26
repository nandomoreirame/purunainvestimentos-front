<script src="./about.js"></script>
<style lang="scss" src="./about.scss" scoped></style>

<template>
  <div>
    <p-header />

    <p-page-header
      v-if="page.excerpt"
      :title="page.title.rendered"
      :description="page.excerpt.rendered"
      :page="page"
    />

    <p-section v-if="page.about_como_construimos" class="section-1">
      <b-row>
        <b-col col md="3" offset-md="1">
          <p-colors-bars />
        </b-col>
        <b-col col md="7">
          <h2 v-text="page.about_como_construimos" />
        </b-col>
      </b-row>
      <b-row>
        <b-col v-if="page.about_analise_fundamentos" col md="4" v-html="page.about_analise_fundamentos" />
        <b-col v-if="page.about_estruturacao_fidc" col md="4" v-html="page.about_estruturacao_fidc" />
        <b-col v-if="page.about_revisao_monitoramento" col md="4" v-html="page.about_revisao_monitoramento" />
      </b-row>
    </p-section>

    <p-section class="section-2">
      <b-row>
        <b-col col md="7" class="column-image left" offset-md="1">
          <span
            :data-bg="`${require('@/assets/images/iStock-931230100.jpg')}`"
            class="lazyload"
          />
        </b-col>
        <b-col col md="4">
          <h2>Valores da Organização</h2>
          <ul>
            <li>Integridade</li>
            <li>Responsabilidade</li>
            <li>Simplicidade</li>
            <li>Inconformismo</li>
            <li>Dedicação</li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="2" offset-md="10">
          <p-colors-bars />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-3">
      <b-row>
        <b-col col md="4" offset-md="1">
          <h2>A nossa missão</h2>
          <p>Encontrar e viabilizar as melhores investimentos e instrumentos financeiros para agentes deficitários (empresas) e agentes superavitários (investidores) de recursos financeiros.</p>
        </b-col>
        <b-col col md="6" class="column-image right">
          <span
            :data-bg="`${require('@/assets/images/iStock-952625346.jpg')}`"
            class="lazyload"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="2" offset-md="1">
          <p-colors-bars />
        </b-col>
      </b-row>
    </p-section>

    <p-section class="section-4">
      <b-row>
        <b-col col md="5" offset-md="1">
          <h3>Ricardo Krauss Rodrigues</h3>
          <h4>Diretor - Fundador</h4>
          <p>Atuou por quase 10 na administração, custódia e gestão de fundos de investimentos em direitos creditórios (FIDC) em uma das principais instituições financeiras deste segmento. Sendo que participou da estruturação, definição dos fluxos operacionais e monitoramento dos fundos. Além de ter tido passagens pela área de Tesouraria e Registro e Liquidação de Ativos.</p>
          <p>Possui graduação em Administração, MBA em Mercado Financeiro e de Capitais pela FGV, possui a Certificação de Gestores ANBIMA (CGA) e é autorização pela CVM como Administrador de Carteiras de Valores Mobiliários.</p>
        </b-col>
        <b-col col md="1" />
        <b-col col md="5" class="column-image right">
          <span
            :data-bg="`${require('@/assets/images/iStock-1043539212.jpg')}`"
            class="lazyload"
          />
        </b-col>
      </b-row>
    </p-section>

    <p-box-cta />

    <p-footer />
  </div>
</template>
