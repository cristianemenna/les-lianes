export default {
  target: 'static',

  head: {
    title: 'Les Lianes - Collectif de journalistes et photographes',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Les Lianes est un collectif de journalistes et de photographes. Rendez-vous sur notre site pour découvrir notre travail, retrouver nos articles et photos et apprendre à nous connaître.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans&family=Raleway:wght@700&display=swap'
      },
    ]
  },

  css: [
    '@/assets/less/commons.less',
  ],

  loading: '~/components/loading/Loader.vue',

  loadingIndicator: {
    name: 'circle',
    color: '#228782',
    background: 'white',
  },

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxt/content'
  ],

  plugins: [
    { src: '~/plugins/lightgallery.client.js' }
  ],

  server: {
    host: '0.0.0.0',
    port: 4000,
  },

  generate: {
    fallback: true,
  },

  build: {
    friendlyErrors: false,
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      })
    },
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:4000'
  }
}
