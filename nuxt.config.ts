// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vite-pwa/nuxt'],

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
  },

  pwa: {// gives access to a $pwa object in your components https://vite-pwa-org.netlify.app/frameworks/nuxt.html
    manifest: {
      short_name: 'Laundry',
      name: 'OIT Laundry',
      icons: [
        {
          src: 'https://picsum.photos/96/96',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'https://picsum.photos/192/192',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'https://picsum.photos/512/512',
          sizes: '512x512',
          type: 'image/png',
        }
      ],
      start_url: '/',
      display: 'standalone',
      theme_color: '#000000',
      background_color: '#ffffff',
    },

    devOptions: {
      enabled: true,
    }
  }


})