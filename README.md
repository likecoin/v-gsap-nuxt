# `@likecoin/v-gsap-nuxt`

> Fork of [`v-gsap-nuxt`](https://github.com/holux-design/v-gsap-nuxt) published under the `@likecoin` npm scope. Adds lazy-loading of `gsap` and its plugins so pages that never use `v-gsap` ship zero gsap, and pages that only use `.from` get `gsap` core (~70KB) instead of the full bundle (~165KB). Public API is unchanged from upstream.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href] [![Nuxt][nuxt-src]][nuxt-href]

[![](docs/public/cover.png)](https://v-gsap-nuxt.vercel.app/) (Click image to
visit the upstream docs)

## Features

- 🚀 Smooth animations with [GSAP](https://gsap.com/)
- 🖍️ Easy to use directive syntax with
  [`v-gsap`](https://v-gsap-nuxt.vercel.app/playground)
- 📦 [`useGSAP()`](https://v-gsap-nuxt.vercel.app/usage/composable) composable
  for complex animations
- 🪄 [`<GSAPTransition>`](https://v-gsap-nuxt.vercel.app/usage/v-if) to animate
  `v-if`
- ⌨️ Powerful
  [entrance presets](https://v-gsap-nuxt.vercel.app/usage/modifiers#entrance)
  and [custom presets](https://v-gsap-nuxt.vercel.app/usage/presets)
- 🧩 Full GSAP
  [Plugin extensibility](https://v-gsap-nuxt.vercel.app/information/gsap-plugins)

## Installation

Install the module from npm:

```bash
npm install @likecoin/v-gsap-nuxt
```

Then add it to `modules` in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@likecoin/v-gsap-nuxt'],
})
```

That's it! You can now use `v-gsap` in your Nuxt app ✨

### Want to use it with Vue? [Learn about Vue usage](https://v-gsap-nuxt.vercel.app/installation/vue.only)

## Docs

### 👁️ Find the full docs and examples here: [Documentation](https://v-gsap-nuxt.vercel.app/)

---

### GSAP Licensing

GSAP is subject to its own licensing terms. Before incorporating GSAP with
`v-gsap-nuxt` (as dependency), ensure you review and comply with the
[GSAP Standard License](https://gsap.com/community/standard-license/).

This module itself is licensed under the MIT License.

---

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev:playground
  # OR
  # Develop with the Docs
  npm run dev:docs
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run dev:check
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->

[npm-version-src]:
  https://img.shields.io/npm/v/@likecoin/v-gsap-nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@likecoin/v-gsap-nuxt
[npm-downloads-src]:
  https://img.shields.io/npm/dm/@likecoin/v-gsap-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@likecoin/v-gsap-nuxt
[license-src]:
  https://img.shields.io/npm/l/@likecoin/v-gsap-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@likecoin/v-gsap-nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
