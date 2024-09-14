// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/background.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: { transpile: ['@fortawesome/vue-fontawesome'] },
})
