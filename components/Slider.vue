<template>
  <section class="slider">
    <div class="slider-items">
      <div v-for="(item, k) in items" :key="k" class="slider-item lazyload" :data-bg="`${require(`@/assets/images/${item.image}`)}`">
        <b-container class="slider-inner">
          <small class="slider-count" v-text="`0${(k + 1)}/0${items.length}`" />
          <h2 v-text="item.text" />
        </b-container>
      </div>
    </div>
    <nav class="slider-nav">
      <b-container class="slider-inner">
        <b-row>
          <b-col col md="3" />
          <b-col v-for="(item, i) in items" :key="i" col md="3">
            <div :class="`nav-item nav-item-${i}`" @click="sliderIn(i)">
              <small v-text="`0${(i + 1)}`" />
              <span v-text="item.text" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          {
            text: 'Somos uma gestora de fundos especializada em Investimentos Alternativos.',
            image: 'iStock-953577456.jpg'
          },
          {
            text: 'Encontramos e viabilizamos as melhores formas de investimentos.',
            image: 'iStock-682839254.jpg'
          },
          {
            text: 'Acreditamos que os investimentos no setor produtivo são feitos em cima de parcerias de longo prazo.',
            image: 'iStock-1040302812.jpg'
          }
        ]
      }
    }
  },
  methods: {
    slider (index = 0) {
      const { TweenMax, TimelineMax, Back } = require('gsap/all')
      const sliderItems = document.querySelectorAll('.slider-item')
      const item = sliderItems[index]
      const text = item.querySelectorAll('h2')
      const navItem = document.querySelectorAll(`.nav-item-${index}`)
      const timeline = new TimelineMax()

      TweenMax.set(item, { opacity: 0 })
      TweenMax.set(navItem, { opacity: 1 })

      timeline
        .to(item, 0.7, { opacity: 1 }, 0)
        .staggerFrom(text, 0.6, { y: 50, autoAlpha: 0, ease: Back.easeOut }, 0)
    },
    sliderIn (index) {
      const { TweenMax } = require('gsap/all')
      const sliderItems = document.querySelectorAll('.slider-item')
      const sliderNav = document.querySelectorAll('.slider-nav a')

      sliderItems.forEach((item, k) => TweenMax.set(item, { opacity: 0 }))
      sliderNav.forEach((item, k) => TweenMax.set(item, { opacity: 0.7 }))

      this.slider(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  position: relative;
  margin-bottom: 150px;

  &,
  &-items {
    width: 100vw;
    height: 100vh;
  }

  &-items {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
  }

  &-count {
    font-size: 11px;
    font-weight: 800;
    line-height: 1.82;
    letter-spacing: 1px;
    color: #fff;
  }

  &-inner {
    position: relative;
    z-index: 10;
  }

  &-nav {
    position: absolute;
    bottom: 60px;
    width: 100%;
    z-index: 10;

    .nav-item {
      opacity: 0.7;
      font-size: 15px;
      line-height: 1.73;
      color: #fff;
      cursor: pointer;
      display: inline-block;

      small {
        position: absolute;
        top: 4px;
        left: -15px;
      }

      &,
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
  }

  &-item {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    top: 0;
    left: 0;

    &:first-child {
      opacity: 1;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: 1;
      pointer-events: none;
      background-color: #000;
      opacity: .5;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    h2 {
      margin: 0;
      font-size: 60px;
      font-weight: 600;
      line-height: 1.17;
      color: #fff;
    }
  }
}
</style>
