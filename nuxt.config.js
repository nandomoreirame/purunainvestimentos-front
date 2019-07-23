import { resolve } from 'path'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Sarabun:300,300i,400,400i,600,600i,800,800i&display=swap' }
    ],
    script: [
      // { src: '//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js' },
      // { src: '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js' },
      // { src: '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js' },
      // { src: '//cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/ScrollToPlugin.min.js' },
      // { src: '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#007aff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/sass/style.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/webfont.js', ssr: false },
    // { src: '~/plugins/animations.js', ssr: false },
    // { src: '~/plugins/slider.js', ssr: false },
    { src: '~/plugins/locomotive-scroll.js', mode: 'client' },
    { src: '~/plugins/lazysizes.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt'
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    linkActiveClass: 'active'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, { isDev, isClient, loaders: { vue } }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
}
