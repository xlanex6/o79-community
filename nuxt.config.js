export default {
  target: 'static',
  ssr: false,
  head: {
    title: 'o79-community',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-request'
  ],
  graphql: {
    endpoint: 'https://graphql.apirocket.io',
    options: {
      headers: {
        authorization: `Bearer ${process.env.API_ROCKET_KEY}`,
      },
    },
  },
  modules: [
    // '@nuxtjs/pwa',
  ],
  build: {
  }
}
