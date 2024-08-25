// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@ant-design-vue/nuxt'],
  css: ['ant-design-vue/dist/reset.css'],
  build: {
    transpile: ['@ant-design-vue']
  },
  antd: {
    extractStyle: true,
  },
})