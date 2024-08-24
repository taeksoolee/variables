import { NuxtConfig } from '@nuxt/types'

declare module '@nuxt/types' {
  interface NuxtConfig {
    antd?: {
      [key in string]: any
    }
  }
}