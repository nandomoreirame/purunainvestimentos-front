<template>
  <div>
    <p-page-header
      title="Transformamos crédito em oportunidades de investimentos"
      :image="`${require('@/assets/images/iStock-1070699338.jpg')}`"
    />

    <p-section class="section-1">
      <b-row>
        <b-col col md="4" offset-md="1">
          <nav class="service-nav">
            <a href="#" class="service-nav-item active" @click="toggleService(0)">
              <svg width="19" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path id="a" d="M17.653 5H4.483L7.36 2.116A.998.998 0 0 0 5.95.705L.652 6l5.295 5.295A.997.997 0 0 0 7.36 9.884L4.483 7h13.17a1 1 0 0 0 0-2z" />
                </defs>
                <use fill="#007AFF" transform="matrix(-1 0 0 1 19.307 0)" xlink:href="#a" fill-rule="evenodd" />
              </svg>
              Gestão de Fundos de Investimentos <small>Selecionar</small>
            </a>
            <a href="#" class="service-nav-item" @click="toggleService(1)">
              <svg width="19" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path id="a" d="M17.653 5H4.483L7.36 2.116A.998.998 0 0 0 5.95.705L.652 6l5.295 5.295A.997.997 0 0 0 7.36 9.884L4.483 7h13.17a1 1 0 0 0 0-2z" />
                </defs>
                <use fill="#007AFF" transform="matrix(-1 0 0 1 19.307 0)" xlink:href="#a" fill-rule="evenodd" />
              </svg>
              Securitização de Ativos <small>Selecionar</small>
            </a>
          </nav>
        </b-col>
        <b-col col md="6" offset-md="1" class="column-image right full-right">
          <span
            :data-bg="`${require('@/assets/images/iStock-508221156.jpg')}`"
            class="service-image lazyload"
            data-scroll="true"
            data-scroll-speed="-0.3"
            data-scroll-direction="horizontal"
          />
          <span
            :data-bg="`${require('@/assets/images/iStock-505869746.jpg')}`"
            class="service-image lazyload"
            data-scroll="true"
            data-scroll-speed="-0.3"
            data-scroll-direction="horizontal"
          />
          <div
            class="black-block"
            data-scroll="true"
            data-scroll-speed="0.2"
            data-scroll-direction="horizontal"
          >
            <b-row>
              <b-col col md="4">
                <h3>Detalhes do serviço</h3>
              </b-col>
              <b-col col md="7">
                <div class="service-text">
                  <p>Realizamos a gestão e co-gestão de fundos conforme estipulado em suas Políticas de Investimentos.</p>
                  <p>Ajudamos a sua empresa a encontrar e viabilizar a melhor forma de securitizar ativos por meio de fundos de investimentos.</p>
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

<script>
export default {
  components: {
    PBoxCta: () => import('~/components/BoxCta.vue'),
    PSection: () => import('~/components/Section.vue'),
    PPageHeader: () => import('~/components/PageHeader.vue'),
    PColorsBars: () => import('~/components/Bars.vue')
  },
  methods: {
    toggleService (index) {
      const { TweenMax, TimelineMax, Back } = require('gsap/all')
      const navItems = document.querySelectorAll('.service-nav-item')
      const images = document.querySelectorAll('.service-image')
      const texts = document.querySelectorAll('.service-text p')

      navItems.forEach((item, k) => item.classList.remove('active'))
      images.forEach((image, k) => TweenMax.set(image, { opacity: 0 }))
      texts.forEach((text, k) => TweenMax.set(text, { y: 0, opacity: 0 }))

      const timeline = new TimelineMax()
      const image = images[index]
      const text = texts[index]
      const navItem = navItems[index]

      navItem.classList.add('active')

      timeline
        .to(image, 0.7, { opacity: 1 }, 0.1)
        .to(text, 1, { y: -15, opacity: 1, ease: Back.easeOut }, 0.2)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-1 {
  padding-bottom: 150px;

  .service-image {
    opacity: 0;

    &:first-child {
      opacity: 1;
    }
  }

  .col.col-md-4 {
    padding-left: 0;
    padding-right: 0;
  }

  .service-nav {
    position: relative;

    &-item {
      font-size: 24px;
      line-height: 1.5;
      letter-spacing: -0.8px;
      margin: 0 0 20px;
      display: block;
      cursor: pointer;
      line-height: 1;
      position: relative;
      transition: opacity .12s ease-in-out;
      color: #000;
      font-weight: 800;

      svg {
        position: absolute;
        top: 7px;
        left: -30px;
        opacity: 0;
        transform: translate3d(-15px, 0, 0);
        transition: transform .12s ease-in-out, opacity .12s ease-in-out;
      }

      small {
        font-size: 14px;
        font-weight: 400;
        line-height: 2;
        color: #979ea6;
        display: block;
        margin-top: 5px;
        transition: transform .12s ease-in-out;
      }

      &.active,
      &:hover {
        opacity: .75;
        text-decoration: none;

        svg {
          opacity: 1;
          transform: translate3d(0, 0, 0)
        }

        small {
          transform: translate3d(0, -5px, 0)
        }
      }
    }
  }

  .bars {
    position: relative;
    left: -130px;
    z-index: 100;
    top: -40px;
  }
}

.black-block {
  padding: 40px 0 0 60px;
  background-color: #1c1c1c;
  min-width: 650px;
  min-height: 260px;
  color: #fff;
  margin: 300px 0 0 100px;
  position: relative;
  top: 100px;

  h3 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1.33;
    letter-spacing: -1.6px;
    color: #fff;
    text-transform: initial;
  }

  .service-text {
    position: relative;

    p {
      font-size: 15px;
      line-height: 1.73;
      color: #fff;
      opacity: 0;
      position: absolute;
      transition: all .12s ease-in-out;
      transform: translate3d(0, -15px, 0);
      top: 25px;
      left: 0;

      &:first-child {
        opacity: 1;
      }
    }
  }
}
</style>
