import {
  isProduction,
  title,
  description,
  theme,
  siteBaseUrl,
  apiBaseUrl
} from './site.config'

export default {
  mode: 'universal',
  env: {
    baseUrl: siteBaseUrl,
    baseTitle: title,
    baseDescription: description,
    baseKeywords: 'gestora, investimento, securitização, desintermediação, ativos, experiência, competência, resultados, investimentos, fundos',
    imageDefault: '/share.jpg'
  },
  head: {
    title,
    titleTemplate: titleTemplate => titleTemplate ? `${titleTemplate} | Purunã Investimentos` : `Purunã Investimentos`,
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'theme-color', content: theme.color },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@oseunando' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: title },
      { name: 'generator', content: 'Visual Studio Code - Insiders' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'ICBM', content: '-25.4284,-49.2733' },
      { name: 'geo.position', content: 'latitude;longitude' },
      { name: 'geo.region', content: 'pt_BR-PR' },
      { name: 'geo.placename', content: 'Curitiba/Paraná' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Sarabun:300,300i,400,400i,600,600i,800,800i&display=swap' },
      { rel: 'index', href: `${siteBaseUrl}/` },
      { rel: 'dns-prefetch', href: `${siteBaseUrl}/` },
      { rel: 'preconnect', href: `${siteBaseUrl}/` },
      { rel: 'prefetch', href: `${siteBaseUrl}/` },
      { rel: 'prerender', href: `${siteBaseUrl}/` }
    ],
    script: [
    ]
  },
  manifest: {
    name: title,
    short_name: title,
    theme_color: theme.color,
    background_color: '#fff',
    display: 'standalone',
    description
  },
  loading: {
    color: theme.color,
    height: '4px',
    continuous: true
  },
  // loading: '~/components/Loading.vue',
  css: [
    '@/assets/sass/style.scss'
  ],
  plugins: [
    // { src: '~/plugins/webfont', ssr: false },
    // { src: '~/plugins/animations', ssr: false },
    // { src: '~/plugins/slider', ssr: false },
    { src: '~/plugins/locomotive-scroll', mode: 'client' },
    { src: '~/plugins/lazysizes', ssr: false },
    { src: '~/plugins/vuelidate', ssr: false }
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    // ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  router: {
    linkActiveClass: 'active'
  },
  'google-analytics': {
    id: isProduction ? 'UA-0000000-1' : 'UA-0000000-1',
    debug: {
      enabled: !isProduction,
      track: !isProduction,
      sendHitTask: isProduction
    }
  },
  build: {
    vendor: [
    ],
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            enforce: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          },
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    hooks: {
      listen (server, { host, port }) {
        if (process.env.NODE_ENV !== 'production') {
          open(`http://${host}:${port}`)
        }
      }
    },
    http: {
      retry: 3
    },
    generate: {
      // return an array of strings of your dynamic pages
      fallback: '404.html',
      routes () {
        // returns an array of strings for each dynamic page found
        // return axios.get(`${Config.wpDomain}${Config.api.yourPostsListEndpoint}`).then(res => {
        //   return res.data.slug
        // })
        return []
      }
    },
    render: {
      static: {
        maxAge: 2592000
      }
    },
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
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: `${apiBaseUrl}/wp-content/uploads/.*`,
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'images',
          cacheExpiration: {
            maxEntries: 30,
            maxAgeSeconds: 300
          },
          cacheableResponse: { statuses: [0, 200] }
        }
      }
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: `${siteBaseUrl}`,
    cacheTime: 1000 * 60 * 15,
    exclude: ['/.git']
  }
}
