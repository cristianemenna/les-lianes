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
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/less/commons.less',
    '@/assets/less/fonts.less',
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

  server: {
    port: 4000,
  },

  build: {
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
