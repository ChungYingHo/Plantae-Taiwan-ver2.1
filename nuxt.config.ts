// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/Plantae-Taiwan/' : '/',
    buildAssetsDir: '/static/'
  },
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/stylelint-module'
  ],
  typescript: {
    typeCheck: true
  }
})
