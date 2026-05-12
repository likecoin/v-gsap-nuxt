import { entrancePresets } from './utils/entrance-presets'
import type { Preset } from './types/Preset'

export function loadPreset(binding, configOptions) {
  const applyPreset = (preset: Preset, binding) => {
    preset.modifiers
      .split('.')
      .forEach(modifier => (binding.modifiers[modifier] = true))
    if (typeof binding.value == 'string') binding.value = {}
    if (preset.value) {
      if (binding.modifiers.fromTo) {
        binding.value = [
          preset.value[0],
          { ...(preset.value[1] as object), ...binding.value },
        ]
      }
      else binding.value = { ...(preset.value as object), ...binding.value }
    }
  }

  if (binding.modifiers.preset && !!configOptions?.presets?.length) {
    const preset: Preset = configOptions?.presets.find(
      preset => preset.name == binding.value,
    )
    if (preset) applyPreset(preset, binding)
  }

  if (binding.modifiers.entrance) {
    const preset = entrancePresets.filter((preset: Preset) =>
      Object.keys(binding.modifiers).includes(preset.name),
    )?.[0]
    if (preset) applyPreset(preset, binding)
  }
  return binding
}

export function getValueFromModifier(binding, term: string) {
  return Object.keys(binding.modifiers)
    ?.find(m => m.toLowerCase().includes(term.toLowerCase()))
    ?.split('-')?.[1]
}

export function vGsapSSRProps(binding, configOptions) {
  binding = loadPreset(binding, configOptions)
  const m = binding.modifiers
  const v = binding.value
  const fromValue = m.fromTo ? v?.[0] : v
  const fromOpacityZero
    = (m.from || m.fromTo)
    && fromValue && typeof fromValue === 'object'
    && fromValue.opacity === 0
  return {
    'data-vgsap-from-invisible': m.fromInvisible || fromOpacityZero || undefined,
    'data-vgsap-stagger': m.stagger,
    'data-vgsap-mask': m.mask,
  }
}

export function needsScrollTrigger(modifiers) {
  return !!(
    modifiers.whenVisible
    || modifiers.pinned
    || modifiers.parallax
  )
}

export function createLazyDirective(configOptions) {
  let promise: Promise<any> | null = null

  const ensure = () => {
    if (!promise) {
      promise = (async () => {
        try {
          const m = await import('./core')
          return m.vGsapDirective(configOptions)
        }
        catch (e) {
          promise = null
          throw e
        }
      })()
    }
    return promise
  }

  return {
    getSSRProps: binding => vGsapSSRProps(binding, configOptions),
    async beforeMount(el, binding, vnode) {
      const h = await ensure()
      return h.beforeMount(el, binding, vnode)
    },
    async mounted(el, binding) {
      const h = await ensure()
      return h.mounted(el, binding)
    },
    async unmounted(el) {
      if (!promise) return
      const h = await promise
      h.unmounted(el)
    },
  }
}
