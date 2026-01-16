# Changelog

## v1.5.3

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.5.2...v1.5.3)

## v1.5.2

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.5.1...v1.5.2)

### 🏡 Chore

- Refactor SplitText integration to improve mask handling, hydration support, and descender clipping adjustments ([8b02a9a](https://github.com/holux-design/v-gsap-nuxt/commit/8b02a9a))

### ❤️ Contributors

- Simone Franchina <simone@italianonprofit.it>

## v1.5.1

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.5.0...v1.5.1)

### 🏡 Chore

- Enhance SplitText support with font loading, callbacks, and event dispatch ([bd61c10](https://github.com/holux-design/v-gsap-nuxt/commit/bd61c10))
- Document new SplitText options, callbacks, and event handling in usage guides ([4ed5ddd](https://github.com/holux-design/v-gsap-nuxt/commit/4ed5ddd))
- Add @nuxt/fonts to devDependencies and define custom font in main.css ([febb74e](https://github.com/holux-design/v-gsap-nuxt/commit/febb74e))

### ❤️ Contributors

- Simone Franchina <simone@italianonprofit.it>

## v1.5.0


### 🚀 Enhancements

- **vue:** Separate plugin code from defineNuxtPlugin ([e36c6d2](https://github.com/holux-design/v-gsap-nuxt/commit/e36c6d2))
- **vue:** Add vue plugin function ([7632a05](https://github.com/holux-design/v-gsap-nuxt/commit/7632a05))
- GSAPTransition to include group, stagger and delay props ([b45c314](https://github.com/holux-design/v-gsap-nuxt/commit/b45c314))
- Initial value of 0.1 for GSAPTransition stagger ([e6604dc](https://github.com/holux-design/v-gsap-nuxt/commit/e6604dc))
- Updated GSAPTransition docs to include group, stagger, delay ([c1d97a1](https://github.com/holux-design/v-gsap-nuxt/commit/c1d97a1))

### 🩹 Fixes

- Lint issues before initial release ([0c6e012](https://github.com/holux-design/v-gsap-nuxt/commit/0c6e012))
- Failing test due to missing prepare cmd ([3b67aa0](https://github.com/holux-design/v-gsap-nuxt/commit/3b67aa0))
- Ref is not defined on run ([1fcb94b](https://github.com/holux-design/v-gsap-nuxt/commit/1fcb94b))
- Og-image ([3c38017](https://github.com/holux-design/v-gsap-nuxt/commit/3c38017))
- Lint errors ([fa4ccb7](https://github.com/holux-design/v-gsap-nuxt/commit/fa4ccb7))
- Preset ([ca43f58](https://github.com/holux-design/v-gsap-nuxt/commit/ca43f58))
- Lint errors ([2302c00](https://github.com/holux-design/v-gsap-nuxt/commit/2302c00))
- Build cmd for docs (order) ([870478a](https://github.com/holux-design/v-gsap-nuxt/commit/870478a))
- Shiki // add playground redirect ([bd6f679](https://github.com/holux-design/v-gsap-nuxt/commit/bd6f679))
- Lint ([2cb4c02](https://github.com/holux-design/v-gsap-nuxt/commit/2cb4c02))
- .pinned not working correctly on mobile (ios) ([7839c2e](https://github.com/holux-design/v-gsap-nuxt/commit/7839c2e))
- Mobile startpage breaking due to overlong code snippet ([69748e4](https://github.com/holux-design/v-gsap-nuxt/commit/69748e4))
- Lint ([82f8da8](https://github.com/holux-design/v-gsap-nuxt/commit/82f8da8))
- Lints ([76e49dd](https://github.com/holux-design/v-gsap-nuxt/commit/76e49dd))
- Typo in docs ([bfef697](https://github.com/holux-design/v-gsap-nuxt/commit/bfef697))
- Gsap context adding ([3282dc0](https://github.com/holux-design/v-gsap-nuxt/commit/3282dc0))
- **vue:** Linting tips ([a03112b](https://github.com/holux-design/v-gsap-nuxt/commit/a03112b))
- **vue:** Re-init gsap context inside separated directive ([673ac26](https://github.com/holux-design/v-gsap-nuxt/commit/673ac26))
- **vue:** Add export to package.json for /vue ([21f2c36](https://github.com/holux-design/v-gsap-nuxt/commit/21f2c36))
- Lint ([c97b55d](https://github.com/holux-design/v-gsap-nuxt/commit/c97b55d))
- Lint ([6c7f6f9](https://github.com/holux-design/v-gsap-nuxt/commit/6c7f6f9))
- Typo in docs ([a8930ea](https://github.com/holux-design/v-gsap-nuxt/commit/a8930ea))
- **#12:** .entrance not refreshing on page change ([6a6ba94](https://github.com/holux-design/v-gsap-nuxt/commit/6a6ba94))
- **entrance:** Use `fromTo` instead of `from` to fix reverse playing on upscroll ([abbc753](https://github.com/holux-design/v-gsap-nuxt/commit/abbc753))
- **pinned:** Handle initialization fully from beforeMount instead of SSRProps (which is not handled on browser back) // eventListener for when timeline is ready after browser navigation ([2f8534a](https://github.com/holux-design/v-gsap-nuxt/commit/2f8534a))
- **GSAPTransition:** Remove "GSAPTweenVars" type -> blocked build if not found with autoimport ([1664600](https://github.com/holux-design/v-gsap-nuxt/commit/1664600))
- **console-warning:** Remove scrolltrigger attributes from value before initializing the tween ([25db20a](https://github.com/holux-design/v-gsap-nuxt/commit/25db20a))
- **entrance:** FromInvisible issue where from opacity:0 would not persist across page nav ([30ff059](https://github.com/holux-design/v-gsap-nuxt/commit/30ff059))
- Update handleMouseMove in addMagnetic function to better handle different size elements ([14e7dfc](https://github.com/holux-design/v-gsap-nuxt/commit/14e7dfc))
- Fine tune magnetic strength ([1ec7b4a](https://github.com/holux-design/v-gsap-nuxt/commit/1ec7b4a))
- Add import for computed in GSAPTransition ([015bc92](https://github.com/holux-design/v-gsap-nuxt/commit/015bc92))
- Remove ease from vue Transition as it does not accept such a prop ([5304360](https://github.com/holux-design/v-gsap-nuxt/commit/5304360))
- Console warning issue when using preset with value of type string ([be856da](https://github.com/holux-design/v-gsap-nuxt/commit/be856da))
- Add all missing imports from GSAPTransition ([309901d](https://github.com/holux-design/v-gsap-nuxt/commit/309901d))

### 💅 Refactors

- Feature "scroller" // add to docs // add global config ([e923c27](https://github.com/holux-design/v-gsap-nuxt/commit/e923c27))
- **fromInvisible:** Move fromInvisible handling to separate css file // fix(fromInvisible.stagger) combination ([332c246](https://github.com/holux-design/v-gsap-nuxt/commit/332c246))

### 🏡 Chore

- **release:** V1.0.1 ([bd8e06a](https://github.com/holux-design/v-gsap-nuxt/commit/bd8e06a))
- **release:** V1.0.2 ([66ce86f](https://github.com/holux-design/v-gsap-nuxt/commit/66ce86f))
- **release:** V1.0.3 ([ca1889a](https://github.com/holux-design/v-gsap-nuxt/commit/ca1889a))
- **release:** V1.0.4 ([86953fe](https://github.com/holux-design/v-gsap-nuxt/commit/86953fe))
- **release:** V1.0.5 ([28dc90a](https://github.com/holux-design/v-gsap-nuxt/commit/28dc90a))
- **release:** V1.0.6 ([6e78461](https://github.com/holux-design/v-gsap-nuxt/commit/6e78461))
- **release:** V1.0.7 ([70de43d](https://github.com/holux-design/v-gsap-nuxt/commit/70de43d))
- **release:** V1.0.8 ([21e84a4](https://github.com/holux-design/v-gsap-nuxt/commit/21e84a4))
- **release:** V1.0.9 ([1bcc821](https://github.com/holux-design/v-gsap-nuxt/commit/1bcc821))
- **release:** V1.0.1 ([2938044](https://github.com/holux-design/v-gsap-nuxt/commit/2938044))
- **release:** V1.0.2 ([62a4682](https://github.com/holux-design/v-gsap-nuxt/commit/62a4682))
- **release:** V1.1.1 ([83fd52f](https://github.com/holux-design/v-gsap-nuxt/commit/83fd52f))
- **release:** V1.1.2 ([eb3b9a9](https://github.com/holux-design/v-gsap-nuxt/commit/eb3b9a9))
- **release:** V1.1.3 ([c8f7995](https://github.com/holux-design/v-gsap-nuxt/commit/c8f7995))
- **release:** V1.1.4 ([3921f52](https://github.com/holux-design/v-gsap-nuxt/commit/3921f52))
- **release:** V1.1.5 ([627e21a](https://github.com/holux-design/v-gsap-nuxt/commit/627e21a))
- **release:** V1.1.6 ([a0279c8](https://github.com/holux-design/v-gsap-nuxt/commit/a0279c8))
- **release:** V1.1.7 ([2acb8ca](https://github.com/holux-design/v-gsap-nuxt/commit/2acb8ca))
- **release:** V1.1.8 ([51aaf7f](https://github.com/holux-design/v-gsap-nuxt/commit/51aaf7f))
- **release:** V1.1.9 ([060bb9e](https://github.com/holux-design/v-gsap-nuxt/commit/060bb9e))
- **release:** V1.2.0 ([bbf3d5a](https://github.com/holux-design/v-gsap-nuxt/commit/bbf3d5a))
- **release:** V1.2.1 ([aa2ed2a](https://github.com/holux-design/v-gsap-nuxt/commit/aa2ed2a))
- **release:** V1.2.2 ([8c20867](https://github.com/holux-design/v-gsap-nuxt/commit/8c20867))
- Bump version ([bb91b37](https://github.com/holux-design/v-gsap-nuxt/commit/bb91b37))
- **release:** V1.2.10 ([f0071f4](https://github.com/holux-design/v-gsap-nuxt/commit/f0071f4))
- Bump version ([d7fb32f](https://github.com/holux-design/v-gsap-nuxt/commit/d7fb32f))
- **release:** V1.3.1 ([9114521](https://github.com/holux-design/v-gsap-nuxt/commit/9114521))
- **release:** V1.3.2 ([4af9818](https://github.com/holux-design/v-gsap-nuxt/commit/4af9818))
- **release:** V1.3.3 ([6fceef3](https://github.com/holux-design/v-gsap-nuxt/commit/6fceef3))
- **release:** V1.3.4 ([1f673f8](https://github.com/holux-design/v-gsap-nuxt/commit/1f673f8))
- **release:** V1.3.5 ([927e9f6](https://github.com/holux-design/v-gsap-nuxt/commit/927e9f6))
- **release:** V1.3.6 ([c2e63a4](https://github.com/holux-design/v-gsap-nuxt/commit/c2e63a4))
- **release:** V1.3.7 ([5bb1f19](https://github.com/holux-design/v-gsap-nuxt/commit/5bb1f19))
- **release:** V1.3.8 ([787372b](https://github.com/holux-design/v-gsap-nuxt/commit/787372b))
- **changelog:** V.1.3.8 ([50c9bcb](https://github.com/holux-design/v-gsap-nuxt/commit/50c9bcb))
- **release:** V1.3.9 ([cfcedde](https://github.com/holux-design/v-gsap-nuxt/commit/cfcedde))
- **changelog:** V1.3.9 ([84b6387](https://github.com/holux-design/v-gsap-nuxt/commit/84b6387))
- **release:** V1.3.10 ([18c1661](https://github.com/holux-design/v-gsap-nuxt/commit/18c1661))
- **release:** V1.3.11 ([8a3af6f](https://github.com/holux-design/v-gsap-nuxt/commit/8a3af6f))
- **release:** V1.3.12 ([39083d9](https://github.com/holux-design/v-gsap-nuxt/commit/39083d9))
- **release:** V1.3.13 ([c2fff96](https://github.com/holux-design/v-gsap-nuxt/commit/c2fff96))
- **release:** V1.3.14 ([674e8f7](https://github.com/holux-design/v-gsap-nuxt/commit/674e8f7))
- **release:** V1.3.15 ([20a4a65](https://github.com/holux-design/v-gsap-nuxt/commit/20a4a65))
- **release:** V1.3.16 ([5d91e63](https://github.com/holux-design/v-gsap-nuxt/commit/5d91e63))
- **release:** V1.3.17 ([076245d](https://github.com/holux-design/v-gsap-nuxt/commit/076245d))
- **changelog:** V1.3.17 ([f9681e5](https://github.com/holux-design/v-gsap-nuxt/commit/f9681e5))
- **release:** V1.3.18 ([0a5083d](https://github.com/holux-design/v-gsap-nuxt/commit/0a5083d))
- **changelog:** V1.3.18 ([842d01c](https://github.com/holux-design/v-gsap-nuxt/commit/842d01c))
- **release:** V1.3.19 ([edac30d](https://github.com/holux-design/v-gsap-nuxt/commit/edac30d))
- **release:** V1.3.20 ([839ec56](https://github.com/holux-design/v-gsap-nuxt/commit/839ec56))
- **release:** V1.3.21 ([96ee05b](https://github.com/holux-design/v-gsap-nuxt/commit/96ee05b))
- **release:** V1.4.1 ([84d17c2](https://github.com/holux-design/v-gsap-nuxt/commit/84d17c2))
- **release:** V1.4.2 ([344eca0](https://github.com/holux-design/v-gsap-nuxt/commit/344eca0))
- **release:** V1.4.3 ([a14dbc2](https://github.com/holux-design/v-gsap-nuxt/commit/a14dbc2))
- **release:** V1.4.4 ([92e9bba](https://github.com/holux-design/v-gsap-nuxt/commit/92e9bba))
- Update GSAP dependency to version 3.13.0 ([8733917](https://github.com/holux-design/v-gsap-nuxt/commit/8733917))
- Add Tailwind CSS with Vite plugin integration into playground ([baf5897](https://github.com/holux-design/v-gsap-nuxt/commit/baf5897))
- Refactor layout styles and update Tailwind CSS dependencies ([70c7548](https://github.com/holux-design/v-gsap-nuxt/commit/70c7548))
- Add GSAP animations and Container component to playground layout ([b10984c](https://github.com/holux-design/v-gsap-nuxt/commit/b10984c))
- Improve GSAP timeline management with parent search and retry mechanism ([c0d727a](https://github.com/holux-design/v-gsap-nuxt/commit/c0d727a))
- Extend GSAP animations in playground and simplify directive usage ([27c8dce](https://github.com/holux-design/v-gsap-nuxt/commit/27c8dce))
- Integrate SplitText into GSAP plugin and enhance animation directives ([9350880](https://github.com/holux-design/v-gsap-nuxt/commit/9350880))
- Add SplitText examples and enhance documentation across usage, examples, and playground ([9ec2241](https://github.com/holux-design/v-gsap-nuxt/commit/9ec2241))
- Aggiungi documentazione dettagliata per SplitText e aggiorna esempi nel playground ([92a9696](https://github.com/holux-design/v-gsap-nuxt/commit/92a9696))
- Update GSAP plugins documentation to include SplitText (free since 3.13) ([415fb49](https://github.com/holux-design/v-gsap-nuxt/commit/415fb49))
- Aggiorna nome del pacchetto e versione in package.json, aggiungendo supporto per SplitText ([885a82d](https://github.com/holux-design/v-gsap-nuxt/commit/885a82d))

### ❤️ Contributors

- Simone Franchina <simone@italianonprofit.it>
- Holux-design <office@holux-design.at>
- Harry Yaprakov <h@yaprakov.com>
- Jules Hery <jules.hry@outlook.fr>
- Corentin Hervaud ([@Curs3W4ll](http://github.com/Curs3W4ll))

## v1.4.4

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.4.3...v1.4.4)

## v1.4.3

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.4.2...v1.4.3)

## v1.4.2

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.4.1...v1.4.2)

### 🩹 Fixes

- Add all missing imports from GSAPTransition ([309901d](https://github.com/holux-design/v-gsap-nuxt/commit/309901d))

### ❤️ Contributors

- Harry Yaprakov <h@yaprakov.com>

## v1.4.1

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.4.0...v1.4.1)

- Refactoring of <GSAPTransition>
  - allow for multiple elements with v-for
  - additional properties like stagger

### ❤️ Contributors

- [gluharry](https://github.com/gluharry)

## v1.3.21

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.20...v1.3.21)

### 🩹 Fixes

- Console warning issue when using preset with value of type string ([be856da](https://github.com/holux-design/v-gsap-nuxt/commit/be856da))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.20

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.19...v1.3.20)

### 🩹 Fixes

- Update handleMouseMove in addMagnetic function to better handle different size elements ([14e7dfc](https://github.com/holux-design/v-gsap-nuxt/commit/14e7dfc))
- Fine tune magnetic strength ([1ec7b4a](https://github.com/holux-design/v-gsap-nuxt/commit/1ec7b4a))

### ❤️ Contributors

- Jules Hery <jules.hry@outlook.fr>

## v1.3.19

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.18...v1.3.19)

### 🏡 Chore

- **changelog:** V1.3.18 ([842d01c](https://github.com/holux-design/v-gsap-nuxt/commit/842d01c))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.18

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.17...v1.3.18)

### 🩹 Fixes

- fix missing import for `nextTick` (PR #24 by
  [NekoSukuriputo](https://github.com/NekoSukuriputo))
- fix "500:insertBefore" issue with `v-gsap.timeline.pinned` on forward/backward
  navigation
- **pinned:** Handle initialization fully from beforeMount instead of SSRProps
  (which is not handled on browser back) // eventListener for when timeline is
  ready after browser navigation
  ([2f8534a](https://github.com/holux-design/v-gsap-nuxt/commit/2f8534a))

### ❤️ Contributors

- Holux-design <office@holux-design.at>
- [gluharry](https://github.com/gluharry)
- [NekoSukuriputo](https://github.com/NekoSukuriputo)

## v1.3.16

- add type support for `useGSAP` composable

### ❤️ Contributors

- [oooFreaKooo](https://github.com/oooFreaKooo)
- Holux-design <office@holux-design.at>

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.15...v1.3.16)

## v1.3.14

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.13...v1.3.14)

### 🩹 Fixes

- **entrance:** FromInvisible issue where from opacity:0 would not persist
  across page nav
  ([30ff059](https://github.com/holux-design/v-gsap-nuxt/commit/30ff059))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.13

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.12...v1.3.13)

### 🩹 Fixes

- **console-warning:** Remove scrolltrigger attributes from value before
  initializing the tween
  ([25db20a](https://github.com/holux-design/v-gsap-nuxt/commit/25db20a))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.12

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.11...v1.3.12)

## v1.3.11

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.10...v1.3.11)

### 🩹 Fixes

- **GSAPTransition:** Remove "GSAPTweenVars" type -> blocked build if not found
  with autoimport
  ([1664600](https://github.com/holux-design/v-gsap-nuxt/commit/1664600))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.10

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.9...v1.3.10)

### 🩹 Fixes

- **entrance:** Use `fromTo` instead of `from` to fix reverse playing on
  upscroll
  ([abbc753](https://github.com/holux-design/v-gsap-nuxt/commit/abbc753))

### 🏡 Chore

- **changelog:** V1.3.9
  ([84b6387](https://github.com/holux-design/v-gsap-nuxt/commit/84b6387))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.9

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.8...v1.3.9)

- GSAPTransition: remove `visible` prop (is default element state, only animate
  from/to `hidden` state)

### 🏡 Chore

- **changelog:** V.1.3.8
  ([50c9bcb](https://github.com/holux-design/v-gsap-nuxt/commit/50c9bcb))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.8

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.7...v1.3.8)

- add `ease` prop to `<GSAPTransition>`
- code improvements // calling done-callback after v-if animation completed

## v1.3.7

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.6...v1.3.7)

- added `GSAPTransition` wrapper component to allow GSAP transitions on
  v-if/v-show

## v1.3.6

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.5...v1.3.6)

- Nothing changed, just added keywords and had to re-release to npm 🙄

## v1.3.5

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.4...v1.3.5)

### 🩹 Fixes

- **#12:** .entrance not refreshing on page change
  ([6a6ba94](https://github.com/holux-design/v-gsap-nuxt/commit/6a6ba94))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.4

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.3...v1.3.4)

### 💅 Refactors

- **fromInvisible:** Move fromInvisible handling to separate css file //
  fix(fromInvisible.stagger) combination
  ([332c246](https://github.com/holux-design/v-gsap-nuxt/commit/332c246))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.3.3

- moved composable to plugin.ts
- added "Adding GSAP Plugins" to docs

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.2...v1.3.3)

### 🩹 Fixes

- Typo in docs
  ([a8930ea](https://github.com/holux-design/v-gsap-nuxt/commit/a8930ea))

### ❤️ Contributors

- Corentin Hervaud ([@Curs3W4ll](http://github.com/Curs3W4ll))

## v1.3.2

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.3.1...v1.3.2)

## v1.3.1

- added `.onState-` functionality

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.2.10...v1.3.1)

### 🏡 Chore

- Bump version
  ([d7fb32f](https://github.com/holux-design/v-gsap-nuxt/commit/d7fb32f))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.2.2

- merged [PR #6](https://github.com/holux-design/v-gsap-nuxt/pull/6) by
  [davidparys](https://github.com/davidparys):
  - `.once` reverted to "really only once"
  - added `.once.reversible` that replays every single entrance

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.2.1...v1.2.2)

### 🩹 Fixes

- Lint ([c97b55d](https://github.com/holux-design/v-gsap-nuxt/commit/c97b55d))

### ❤️ Contributors

- Holux-design <office@holux-design.at>
- [davidparys](https://github.com/davidparys)

## v1.2.1

- separated plugin code from nuxt module loader to allow for Vue support + docs
  page "Vue only"

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.2.0...v1.2.1)

### 🩹 Fixes

- **vue:** Add export to package.json for /vue
  ([21f2c36](https://github.com/holux-design/v-gsap-nuxt/commit/21f2c36))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.2.0

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.9...v1.2.0)

### 🚀 Enhancements

- **vue:** Separate plugin code from defineNuxtPlugin
  ([e36c6d2](https://github.com/holux-design/v-gsap-nuxt/commit/e36c6d2))
- **vue:** Add vue plugin function
  ([7632a05](https://github.com/holux-design/v-gsap-nuxt/commit/7632a05))

### 🩹 Fixes

- **vue:** Linting tips
  ([a03112b](https://github.com/holux-design/v-gsap-nuxt/commit/a03112b))
- **vue:** Re-init gsap context inside separated directive
  ([673ac26](https://github.com/holux-design/v-gsap-nuxt/commit/673ac26))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.1.9

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.8...v1.1.9)

### 🩹 Fixes

- Gsap context adding
  ([3282dc0](https://github.com/holux-design/v-gsap-nuxt/commit/3282dc0))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.1.8

- reverse `.once` on upscroll (allows for being played every time the element
  comes into view)

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.7...v1.1.8)

## v1.1.7

- add `.entrance` animations
- Philosophy-Page updated
- added robots.txt to docs
-

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.6...v1.1.7)

### 🩹 Fixes

- Lints ([76e49dd](https://github.com/holux-design/v-gsap-nuxt/commit/76e49dd))
- Typo in docs
  ([bfef697](https://github.com/holux-design/v-gsap-nuxt/commit/bfef697))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.1.6

- added composable `useGSAP()` with according `nuxt.config` and docs page

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.5...v1.1.6)

## v1.1.5

- added 'scroller' option to `nuxt.config`

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.4...v1.1.5)

### 💅 Refactors

- Feature "scroller" // add to docs // add global config
  ([e923c27](https://github.com/holux-design/v-gsap-nuxt/commit/e923c27))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.1.4

- fix: `.markers`
- add support for `scroller` property
- Textflow example in playground
- add callbacks for `.timeline`
- improvement: debouncing for resize listener

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.3...v1.1.4)

### 🩹 Fixes

- Mobile startpage breaking due to overlong code snippet
  ([69748e4](https://github.com/holux-design/v-gsap-nuxt/commit/69748e4))
- Lint ([82f8da8](https://github.com/holux-design/v-gsap-nuxt/commit/82f8da8))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.1.3

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.2...v1.1.3)

### 🩹 Fixes

- .pinned not working correctly on mobile (ios)
  ([7839c2e](https://github.com/holux-design/v-gsap-nuxt/commit/7839c2e))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.1.2

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.1.1...v1.1.2)

## v1.1.1

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.9...v1.1.1)

### 🩹 Fixes

- Preset ([ca43f58](https://github.com/holux-design/v-gsap-nuxt/commit/ca43f58))
- Lint errors
  ([2302c00](https://github.com/holux-design/v-gsap-nuxt/commit/2302c00))
- Build cmd for docs (order)
  ([870478a](https://github.com/holux-design/v-gsap-nuxt/commit/870478a))
- Shiki // add playground redirect
  ([bd6f679](https://github.com/holux-design/v-gsap-nuxt/commit/bd6f679))
- Lint ([2cb4c02](https://github.com/holux-design/v-gsap-nuxt/commit/2cb4c02))

### 🏡 Chore

- **release:** V1.0.1
  ([2938044](https://github.com/holux-design/v-gsap-nuxt/commit/2938044))
- **release:** V1.0.2
  ([62a4682](https://github.com/holux-design/v-gsap-nuxt/commit/62a4682))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.0.2

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.9...v1.0.2)

### 🩹 Fixes

- Preset ([ca43f58](https://github.com/holux-design/v-gsap-nuxt/commit/ca43f58))
- Lint errors
  ([2302c00](https://github.com/holux-design/v-gsap-nuxt/commit/2302c00))
- Build cmd for docs (order)
  ([870478a](https://github.com/holux-design/v-gsap-nuxt/commit/870478a))
- Shiki // add playground redirect
  ([bd6f679](https://github.com/holux-design/v-gsap-nuxt/commit/bd6f679))
- Lint ([2cb4c02](https://github.com/holux-design/v-gsap-nuxt/commit/2cb4c02))

### 🏡 Chore

- **release:** V1.0.1
  ([2938044](https://github.com/holux-design/v-gsap-nuxt/commit/2938044))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.0.1

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.9...v1.0.1)

### 🩹 Fixes

- Preset ([ca43f58](https://github.com/holux-design/v-gsap-nuxt/commit/ca43f58))
- Lint errors
  ([2302c00](https://github.com/holux-design/v-gsap-nuxt/commit/2302c00))
- Build cmd for docs (order)
  ([870478a](https://github.com/holux-design/v-gsap-nuxt/commit/870478a))
- Shiki // add playground redirect
  ([bd6f679](https://github.com/holux-design/v-gsap-nuxt/commit/bd6f679))
- Lint ([2cb4c02](https://github.com/holux-design/v-gsap-nuxt/commit/2cb4c02))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.0.9

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.8...v1.0.9)

## v1.0.8

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.7...v1.0.8)

## v1.0.7

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.6...v1.0.7)

## v1.0.6

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.5...v1.0.6)

## v1.0.5

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.4...v1.0.5)

### 🩹 Fixes

- Og-image
  ([3c38017](https://github.com/holux-design/v-gsap-nuxt/commit/3c38017))
- Lint errors
  ([fa4ccb7](https://github.com/holux-design/v-gsap-nuxt/commit/fa4ccb7))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.0.4

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.3...v1.0.4)

## v1.0.3

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.2...v1.0.3)

## v1.0.2

[compare changes](https://github.com/holux-design/v-gsap-nuxt/compare/v1.0.1...v1.0.2)

### 🩹 Fixes

- Ref is not defined on run
  ([1fcb94b](https://github.com/holux-design/v-gsap-nuxt/commit/1fcb94b))

### ❤️ Contributors

- Holux-design <office@holux-design.at>

## v1.0.1

### 🩹 Fixes

- Lint issues before initial release
  ([0c6e012](https://github.com/your-org/my-module/commit/0c6e012))
- Failing test due to missing prepare cmd
  ([3b67aa0](https://github.com/your-org/my-module/commit/3b67aa0))

### ❤️ Contributors

- Holux-design <office@holux-design.at>
