export default {
  target: 'static',

  head: {
    title: 'les-lianes',
    htmlAttrs: {
      lang: 'en'
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

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxt/content'
  ],

  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/portfolio').map(file => {
        return {
          route: `/${path.parse(file).name}`,
          payload: require(`./content/portfolio/${file}`),
        };
      });
    },
  },

}
