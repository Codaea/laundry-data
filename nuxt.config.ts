// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  nitro: {
    experimental: {
      database: true,
    },

    database: {
      default: {
        connector: 'postgresql',
        options: { name: 'db'}
      },
      users: {
        connector: 'postgresql', // https://nitro.unjs.io/guide/database
      }
    }
  }


})