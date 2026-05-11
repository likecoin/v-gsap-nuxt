import { createLazyDirective } from './shared'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const configOptions = useRuntimeConfig().public.vgsap ?? {}
  nuxtApp.vueApp.directive('gsap', createLazyDirective(configOptions))
})
