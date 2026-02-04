import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/fonts'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-28',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  vgsap: {
    presets: [
      {
        name: 'spin',
        modifiers: 'infinitely.to',
        value: { rotate: '90deg', ease: 'linear' },
      },
    ],
  },
})
