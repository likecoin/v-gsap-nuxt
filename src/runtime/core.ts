import { nextTick } from 'vue'
import { uuidv4 } from './utils/utils'
import { loadPreset, getValueFromModifier, needsScrollTrigger } from './shared'

type ANIMATION_TYPES = 'from' | 'to' | 'set' | 'fromTo' | 'call'

type TIMELINE_OPTIONS = {
  scrollTrigger?: {
    trigger?: string | HTMLElement
    id?: string
    start?: string
    end?: string
    scrub?: boolean | number
    markers?: boolean
    toggleActions?: string
    pin?: boolean
    pinSpacing?: string
    onUpdate?: any
    onEnter?: any
    onEnterBack?: any
    onLeave?: any
    onLeaveBack?: any
    scroller?: any
  }
  repeat?: number
}

// Module-scoped, lazily populated references to gsap and its plugins.
// Each helper below assumes `ensurePlugins(binding)` has been awaited.
let gsap: any
let ScrollTrigger: any
let Draggable: any
let SplitText: any
let TextPlugin: any
let ScrollToPlugin: any

let gsapPromise: Promise<any> | null = null

function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = (async () => {
      try {
        const m = await import('gsap')
        gsap = m.gsap
        return gsap
      }
      catch (e) {
        gsapPromise = null
        throw e
      }
    })()
  }
  return gsapPromise
}

function makeLoader(importer: () => Promise<any>, assign: (m: any) => any) {
  let promise: Promise<any> | null = null
  return () => {
    if (!promise) {
      promise = (async () => {
        try {
          const [mod, gsapInst] = await Promise.all([importer(), loadGsap()])
          const plugin = assign(mod)
          gsapInst.registerPlugin(plugin)
          return plugin
        }
        catch (e) {
          promise = null
          throw e
        }
      })()
    }
    return promise
  }
}

const loadScrollTrigger = makeLoader(() => import('gsap/ScrollTrigger'), m => (ScrollTrigger = m.ScrollTrigger ?? m.default))
const loadDraggable = makeLoader(() => import('gsap/Draggable'), m => (Draggable = m.Draggable ?? m.default))
const loadSplitText = makeLoader(() => import('gsap/SplitText'), m => (SplitText = m.SplitText ?? m.default))
const loadTextPlugin = makeLoader(() => import('gsap/TextPlugin'), m => (TextPlugin = m.TextPlugin ?? m.default))
const loadScrollToPlugin = makeLoader(() => import('gsap/ScrollToPlugin'), m => (ScrollToPlugin = m.ScrollToPlugin ?? m.default))

function needsScrollToPlugin(binding) {
  const values = Array.isArray(binding.value) ? binding.value : [binding.value]
  return values.some(v => v && typeof v === 'object' && 'scrollTo' in v)
}

async function ensurePlugins(binding) {
  const m = binding.modifiers
  const promises: Promise<any>[] = [loadGsap()]
  if (needsScrollTrigger(m)) promises.push(loadScrollTrigger())
  if (m.draggable) promises.push(loadDraggable())
  if (m.splitText) promises.push(loadSplitText())
  if (m.animateText) promises.push(loadTextPlugin())
  if (needsScrollToPlugin(binding)) promises.push(loadScrollToPlugin())
  await Promise.all(promises)
}

const globalTimelines = new Map<string, any>()

function dispose(el: any, key: string, cleanup: (v: any) => void) {
  if (el[key]) {
    cleanup(el[key])
    el[key] = undefined
  }
}

export const vGsapDirective = (configOptions) => {
  let gsapContext: any = null

  return {
    async beforeMount(el, binding, vnode) {
      binding = loadPreset(binding, configOptions)
      await ensurePlugins(binding)

      // Store gsapId on the element object (not as data attribute yet to avoid hydration mismatch)
      const gsapId = uuidv4()
      el._gsapId = gsapId

      if (!gsapContext) gsapContext = gsap.context(() => {})

      if (binding.modifiers.timeline) {
        assignChildrenOrderAttributesFor(vnode)

        await nextTick()

        // Skip SplitText creation in beforeMount to avoid hydration issues
        // It will be created in mounted hook
        const timeline = prepareTimeline(
          el,
          binding,
          configOptions,
          true, // skipSplitText
        )
        globalTimelines.set(gsapId, timeline)

        gsapContext.add(() => globalTimelines.get(gsapId))
      }
    },

    async mounted(el, binding) {
      // Vue does not await async beforeMount, so mounted may run before
      // gsap finishes loading. Await the same memoised promises here.
      await ensurePlugins(binding)

      // Wait for hydration to complete before any GSAP manipulation
      // This prevents hydration mismatch warnings in Nuxt
      await nextTick()

      // Use requestAnimationFrame to ensure we're after hydration
      await new Promise(resolve => requestAnimationFrame(resolve))

      // DON'T add data-gsap-id or data-gsap-timeline to DOM to avoid hydration mismatch
      // These are only stored as internal properties (el._gsapId)
      // Only data-vgsap-* from SSR are kept

      let timeline

      // Refresh scrollTrigger from .timeline after all has mounted
      if (binding.modifiers.timeline) {
      // DON'T set el.dataset.gsapTimeline - causes hydration mismatch

        // If the timeline element itself uses SplitText, we need to recreate the timeline
        // after hydration to ensure proper DOM manipulation order
        if (binding.modifiers.splitText && !el._splitText) {
        // SplitText already waited above

          // Kill the existing timeline created in beforeMount
          const existingTimeline = globalTimelines.get(el._gsapId)
          if (existingTimeline) {
            existingTimeline.scrollTrigger?.kill()
            existingTimeline.kill()
          }

          // Recreate the timeline with SplitText
          const newTimeline = prepareTimeline(el, binding, configOptions, false)
          globalTimelines.set(el._gsapId, newTimeline)
          gsapContext.add(() => globalTimelines.get(el._gsapId))
        }

        // Wait for next tick to ensure all child .add directives have been added
        await nextTick()

        globalTimelines.get(el._gsapId)?.scrollTrigger?.refresh()
        ScrollTrigger?.normalizeScroll(true)
      }
      else {
      // All directives that are not .timeline

        if (binding.modifiers.magnetic) return addMagneticEffect(el, binding)

        // Wait for next tick before DOM manipulation for splitText
        if (binding.modifiers.splitText) {
          await nextTick()
        }

        const breakpoint = configOptions?.breakpoint || 768
        if (binding.modifiers.desktop || binding.modifiers.mobile) {
          el._mm = gsap.matchMedia()
          const query = binding.modifiers.desktop
            ? `(min-width: ${breakpoint}px)`
            : `(max-width: ${breakpoint}px)`
          el._mm.add(query, () => {
            timeline = prepareTimeline(el, binding, configOptions)
          })
        }
        else {
          timeline = prepareTimeline(el, binding, configOptions)
        }

        if (binding.modifiers.add) {
        // Use nextTick to ensure all parent components have completed their beforeMount phase
          nextTick(() => {
            let order
            = getValueFromModifier(binding, 'order-')
            || getValueFromModifier(binding, 'suggestedOrder-')
            if (binding.modifiers.withPrevious) order = '<'

            // _gsapId is stored on the element (not in dataset) to avoid hydration mismatches
            let parentTimelineElement: any = null
            let currentParent = el.parentElement
            while (currentParent) {
              if (currentParent._gsapId && globalTimelines.has(currentParent._gsapId)) {
                parentTimelineElement = currentParent
                break
              }
              currentParent = currentParent.parentElement
            }

            if (!parentTimelineElement?._gsapId) {
              return
            }

            // Use a retry mechanism to ensure parent timeline is ready
            const addToParentTimeline = () => {
              const parentTimeline = globalTimelines.get(parentTimelineElement._gsapId)
              if (!parentTimeline) {
              // Parent timeline not ready yet, retry after a short delay
                setTimeout(addToParentTimeline, 10)
                return
              }
              // .add.desktop / .add.mobile: timeline is only created if the
              // media query matches; bail if it doesn't.
              if (!timeline) return
              parentTimeline.add(timeline, order)
            }
            addToParentTimeline()
          })
          return // Exit early to avoid creating standalone timeline
        }
      }

      gsapContext.add(() => timeline)
      const resizeHandler = () => ScrollTrigger?.refresh(true)
      el._resizeHandler = resizeHandler
      window.addEventListener('resize', resizeHandler)
    },

    unmounted(el) {
      const gsapId = el._gsapId || el.dataset.gsapId
      if (gsapId) {
        ScrollTrigger?.getById(gsapId)?.kill()
        globalTimelines.get(gsapId)?.scrollTrigger?.kill()
        globalTimelines.delete(gsapId)
      }

      dispose(el, '_splitText', v => v.revert())
      dispose(el, '_resizeHandler', v => window.removeEventListener('resize', v))
      dispose(el, '_magneticHandler', v => window.removeEventListener('mousemove', v))
      dispose(el, '_hoverEnter', v => el.removeEventListener('mouseenter', v))
      dispose(el, '_hoverLeave', v => el.removeEventListener('mouseout', v))
      dispose(el, '_draggable', v => v.forEach(d => d.kill()))
      dispose(el, '_observer', v => v.disconnect())
      dispose(el, '_intersectionObserver', v => v.disconnect())
      dispose(el, '_mm', v => v.kill())

      gsapContext?.revert()
    },
  }
}

function assignChildrenOrderAttributesFor(vnode, startOrder?): number {
  let order = startOrder || 0

  const getChildren = (vnode) => {
    if (vnode?.children) return Array.from(vnode?.children)
    if (vnode?.component?.subtree) return Array.from(vnode?.ctx?.subtree)
    return []
  }

  ;(getChildren(vnode) || [])?.forEach((child: any) => {
    ;(child?.dirs ? Array.from(child?.dirs) : [])?.forEach((dir: any) => {
      if (dir.modifiers.timeline) return

      dir.modifiers[`suggestedOrder-${order}`] = true
      order++
    })
    order = assignChildrenOrderAttributesFor(child, order)
  })
  return order
}

function prepareSplitText(el, binding) {
  if (binding.modifiers.splitText) {
    // Determine the split type based on modifiers (only one type supported)
    let splitType = 'chars'

    if (binding.modifiers.lines) {
      splitType = 'lines'
    }
    else if (binding.modifiers.words) {
      splitType = 'words'
    }
    // chars is default, no need to check

    // Additional options for SplitText
    const splitOptions: any = {
      type: splitType,
      ...binding.value?.splitText || {},
    }

    // Add mask support if specified in modifiers
    if (binding.modifiers.mask) {
      // Determine mask type based on split type
      if (binding.modifiers.lines) {
        splitOptions.mask = 'lines'
      }
      else if (binding.modifiers.words) {
        splitOptions.mask = 'words'
      }
      else {
        splitOptions.mask = 'chars' // Default
      }
    }

    // Support onSplit callback from options
    const onSplitCb = splitOptions.onSplit
    // Whether to wait for custom fonts before final split (default: true)
    const waitForFonts = splitOptions.waitForFonts !== false

    // Helper to create and store a SplitText instance
    const doSplit = () => {
      // Clean up any previous instance before re-splitting
      if (el._splitText && typeof el._splitText.revert === 'function') {
        try {
          el._splitText.revert()
        }
        catch (e) {
          /* noop */
        }
      }
      const instance = new SplitText(el, splitOptions)
      el._splitText = instance

      // Apply padding to mask containers to prevent clipping of descenders (g, p, q, y, j)
      if (binding.modifiers.mask) {
        const maskPadding = splitOptions.maskPadding ?? '0'
        const containers = []

        // Get the appropriate mask containers based on split type
        if (splitOptions.mask === 'lines' && instance.lines) {
          // For lines mask, each line is wrapped in a parent container with overflow
          containers.push(...Array.from(instance.lines).map((line: any) => line.parentElement).filter(Boolean))
        }
        else if (splitOptions.mask === 'words' && instance.words) {
          containers.push(...Array.from(instance.words).map((word: any) => word.parentElement).filter(Boolean))
        }
        else if (splitOptions.mask === 'chars' && instance.chars) {
          containers.push(...Array.from(instance.chars).map((char: any) => char.parentElement).filter(Boolean))
        }

        // Apply padding-bottom to prevent clipping descenders
        containers.forEach((container: HTMLElement) => {
          if (container && container.style) {
            container.style.paddingBottom = maskPadding
            // Ensure line-height is sufficient for descenders
            if (!container.style.lineHeight || container.style.lineHeight === 'normal') {
              container.style.lineHeight = 'normal'
            }
          }
        })
      }

      // Fire user callback if provided
      if (typeof onSplitCb === 'function') {
        try {
          onSplitCb({ el, split: instance })
        }
        catch (e) {
          /* noop */
        }
      }
      // Also dispatch a DOM event so users can listen without code changes
      try {
        el.dispatchEvent(new CustomEvent('vgsap:split', { detail: { el, split: instance } }))
      }
      catch (e) { /* noop */ }

      // If there is a ScrollTrigger tied to this element, refresh it after splitting
      try {
        const gsapId = el._gsapId || el.dataset.gsapId
        if (gsapId) {
          ScrollTrigger?.getById?.(gsapId)?.refresh?.()
        }
      }
      catch (e) {
        /* noop */
      }

      return instance
    }

    // Perform an initial split immediately so downstream code has targets
    const initialSplit = doSplit()

    // If requested, perform a final split after fonts finish loading for accurate measurements
    if (waitForFonts && typeof document !== 'undefined' && (document as any).fonts) {
      try {
        const fonts: any = (document as any).fonts
        // If fonts aren't fully loaded yet, wait and re-split
        const ready: Promise<any> = fonts.ready
        if (ready && fonts.status !== 'loaded') {
          ready.then(() => {
            doSplit()
          }).catch(() => {
            // Ignore font load errors; keep initial split
          })
        }
      }
      catch (e) { /* noop */ }
    }

    return initialSplit
  }
}

function prepareTimeline(el, binding, configOptions, skipSplitText = false) {
  const timelineOptions: TIMELINE_OPTIONS = {}

  // Prepare SplitText if needed before creating the timeline
  // Skip in beforeMount to avoid hydration issues, will be done in mounted
  if (binding.modifiers.splitText && !el._splitText && !skipSplitText) {
    prepareSplitText(el, binding)
  }

  const callbacks = prepareCallbacks(binding)

  // Prepare ScrollTrigger if .whenVisible. modifier is present
  // You can overwrite scrollTrigger Props in the value of the directive
  // .once.
  const once = binding.modifiers.call ?? binding.modifiers.once
  const scroller
    = configOptions?.scroller
    || binding.value?.scroller
    || binding.value?.[0]?.scroller
    || binding.value?.[1]?.scroller
    || undefined
  const scrub
    = binding.value?.scrub
    ?? binding.value?.[1]?.scrub
    ?? (once == true ? false : undefined)
    ?? true
  const markers = binding.modifiers.markers
  const gsapId = el._gsapId || el.dataset.gsapId

  if (binding.modifiers.whenVisible) {
    timelineOptions.scrollTrigger = {
      trigger: el,
      id: gsapId,
      start: binding.value?.start ?? 'top 90%',
      end: binding.value?.end ?? 'top 50%',
      scroller,
      scrub,
      ...callbacks,
      markers,
      toggleActions: binding.modifiers.once
        ? binding.modifiers.reversible
          ? 'play none none reverse'
          : 'play none none none'
        : undefined,
    }
  }

  if (binding.modifiers.pinned) {
    const end = binding.value?.end ?? '+=1000px'
    timelineOptions.scrollTrigger = {
      trigger: el,
      id: gsapId,
      start: binding.value?.start ?? 'center center',
      end,
      scroller,
      scrub,
      pin: true,
      pinSpacing: 'margin',
      ...callbacks,
      markers,
    }
  }

  if (binding.modifiers.parallax) {
    timelineOptions.scrollTrigger = {
      trigger: el,
      id: gsapId,
      start: `top bottom`,
      end: `bottom top`,
      scroller,
      scrub: true,
      ...callbacks,
      markers,
    }
  }

  if (!once && binding.modifiers.parallax)
    timelineOptions.scrollTrigger!.toggleActions = 'restart none none reverse'

  // .infinitely.
  if (binding.modifiers.infinitely) timelineOptions.repeat = -1

  // Set up actual timeline
  const timeline = gsap.timeline(timelineOptions)

  if (binding.modifiers.parallax) {
    const parallaxModifier = Object.keys(binding.modifiers).find(
      m => m.includes('slower') || m.includes('faster'),
    ) ?? 'slower-5'
    const [parallaxType, parallaxFactor] = parallaxModifier.split('-')
    const direction = parallaxType == 'slower' ? -1 : 1
    timeline.fromTo(
      el,
      { yPercent: +`${10 * +(parallaxFactor || 5) * direction}` },
      {
        yPercent: +`${10 * +(parallaxFactor || 5) * direction * -1}`,
        ease: 'linear',
      },
    )
  }

  // .delay-<milliseconds>. modifier
  const delayKey = Object.keys(binding.modifiers).find(modifier =>
    modifier.includes('delay'),
  )
  if (delayKey) {
    const milliseconds = delayKey.split('-')?.[1] || 500
    timeline.to('body', { duration: +milliseconds / 1000 })
  }

  // Prepare stagger if .stagger. is present OR if splitText is used with stagger value
  // Value defaults to 0.2, but can be set in the values
  // .stagger.
  let stagger = false
  if (binding.modifiers.stagger) {
    stagger = binding.value?.stagger ?? binding.value?.[1]?.stagger ?? '0.2'
  }
  else if (binding.modifiers.splitText) {
    // For SplitText, automatically use default stagger if not explicitly set to false or 0
    if (binding.value?.stagger !== false && binding.value?.stagger !== 0) {
      stagger = binding.value?.stagger ?? 0.1 // Default stagger for splitText
    }
  }
  // Handle SplitText targets
  let animationTarget = el
  if (binding.modifiers.splitText && el._splitText) {
    // Determine which target to use based on modifiers
    // With or without mask, we always animate the text elements, not the masks
    if (binding.modifiers.lines) {
      animationTarget = el._splitText.lines
    }
    else if (binding.modifiers.words) {
      animationTarget = el._splitText.words
    }
    else {
      animationTarget = el._splitText.chars // Default
    }
  }
  else if (binding.modifiers.stagger) {
    // Only if NOT splitText, use children for stagger
    animationTarget = el.children
  }

  // Remove scrollTrigger attributes from binding.value to prevent console.warings "Invalid property ... Missing plugin?"
  delete binding.value?.start
  delete binding.value?.end
  delete binding.value?.scrub
  delete binding.value?.scroller
  delete binding.value?.markers
  delete binding.value?.toggleActions

  // Remove SplitText configuration from binding.value to prevent passing it to GSAP animations
  delete binding.value?.splitText

  // Setup actual animation step // Respects stagger if set
  const animationType: ANIMATION_TYPES = Object.keys(binding.modifiers).find(
    modifier => ['to', 'from', 'set', 'fromTo', 'call'].includes(modifier),
  ) as ANIMATION_TYPES
  if (animationType == 'to') {
    if (binding.modifiers.fromInvisible)
      binding.value.opacity = binding.value.opacity || 1
    const toProps = { ...binding.value }
    if (stagger !== false) toProps.stagger = stagger
    timeline.to(animationTarget, toProps)
  }
  if (animationType == 'set') {
    const setProps = { ...binding.value }
    if (stagger !== false) setProps.stagger = stagger
    timeline.set(animationTarget, setProps)
  }
  if (animationType == 'from') {
    const fromProps = {
      ...binding.value,
      opacity:
        binding.value.opacity ?? (binding.modifiers.fromInvisible ? 0 : 1),
      duration: binding.value.duration || 0.5,
    }
    if (stagger !== false) fromProps.stagger = stagger
    timeline.from(animationTarget, fromProps)

    // gsap.from() infers the to-state from current computed style — when
    // the SSR hider in vgsap.css pins opacity:0 the tween runs 0->0. Force
    // opacity:1 explicitly whenever the from-state is 0.
    if (binding.modifiers.fromInvisible || fromProps.opacity === 0) {
      const toProps: any = { opacity: 1, duration: binding.value.duration || 0.5 }
      if (stagger !== false) toProps.stagger = stagger
      timeline.to(animationTarget, toProps, '<')
    }
  }

  // .fromTo=
  if (animationType == 'fromTo') {
    const values = binding.value
    if (stagger !== false) values[1].stagger = stagger
    if (binding.modifiers.fromInvisible) {
      values[0].opacity = 0
      values[1].opacity = values[1].opacity || 1
    }
    timeline.fromTo(animationTarget, binding.value?.[0], binding.value?.[1])
  }

  // .animateText. // .slow // .fast
  if (binding.modifiers.animateText) {
    // if text is inside element => use it as value and then empty it for animation
    const value
      = typeof binding.value === 'string'
        ? binding.value
        : binding.value?.text || el.textContent
    if (el.textContent) el.textContent = ''

    const speeds = {
      slow: 0.5,
      fast: 10,
    }
    const speed
      = speeds[
        Object.keys(binding.modifiers).find(modifier =>
          Object.keys(speeds).includes(modifier),
        ) || ''
      ] || 2
    timeline.to(el, { text: { value, speed } })
  }

  // .whileHover.
  if (binding.modifiers.whileHover) {
    timeline.pause()
    el._hoverEnter = () => timeline.play()
    el._hoverLeave = () => {
      if (binding.modifiers.noReverse) timeline.time(0).pause()
      else timeline.play().reverse()
    }
    el.addEventListener('mouseenter', el._hoverEnter)
    el.addEventListener('mouseout', el._hoverLeave)
  }

  // .call=""
  if (animationType == 'call') {
    timeline.call(binding.value)
  }

  // .draggable. // .x // .y // .rotation // .bounds (="")
  if (binding.modifiers.draggable) {
    const type = Object.keys(binding.modifiers).find(modifier =>
      ['x', 'y', 'rotation'].includes(modifier),
    )
    el._draggable = Draggable.create(el, {
      type,
      bounds: binding.value || el.parentElement,
    })
  }

  if (getValueFromModifier(binding, 'onState')) {
    const [dataKey, targetValue = 'true']: (string | boolean | number)[]
      = Object.keys(binding.modifiers)
        .find(m => m.toLowerCase().includes('onstate'))
        ?.split('-')
        ?.slice(1)!

    const targetElement = binding.modifiers.inherit
      ? (el?.[0] || el).closest(`*[data-${dataKey}]`)
      : el?.[0] || el

    const getCurrentValue = () => targetElement.dataset[dataKey]

    if (getCurrentValue() != targetValue) timeline.pause()

    el._observer = new MutationObserver((mutationRecords) => {
      const event = mutationRecords.filter(
        record => record.attributeName == `data-${dataKey}`,
      )?.[0]
      if (!event) return

      if (getCurrentValue() == targetValue) return timeline.play()
      else return timeline.play().reverse()
    })
    el._observer.observe(targetElement, { attributes: true })
  }

  return timeline
}

type CALLBACKS = {
  onUpdate?: any
  onEnter?: any
  onEnterBack?: any
  onLeave?: any
  onLeaveBack?: any
}

function prepareCallbacks(binding): CALLBACKS {
  const callbacks: CALLBACKS = {}

  if (binding.modifiers.onUpdate) callbacks.onUpdate = binding.value
  if (binding.modifiers.onEnter) callbacks.onEnter = binding.value
  if (binding.modifiers.onEnterBack) callbacks.onEnterBack = binding.value
  if (binding.modifiers.onLeave) callbacks.onLeave = binding.value
  if (binding.modifiers.onLeaveBack) callbacks.onLeaveBack = binding.value

  return callbacks
}

function addMagneticEffect(el, binding) {
  const strengthModifiers = {
    strong: 2,
    stronger: 1.5,
    weaker: 0.75,
    weak: 0.5,
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (el) {
      const { width, height, left, right, top, bottom }
        = el.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      const distanceX
        = left < e.clientX && right > e.clientX
          ? 0
          : Math.min(Math.abs(e.clientX - left), Math.abs(e.clientX - right)) // Horizontal distance between mouse and el
      const distanceY
        = top < e.clientY && bottom > e.clientY
          ? 0
          : Math.min(Math.abs(e.clientY - top), Math.abs(e.clientY - bottom)) // Vertical distance between mouse and el

      const strengthFactor
        = Object.entries(strengthModifiers).find(
          entry => binding.modifiers[entry[0]],
        )?.[1] || 1

      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2) // Distance between mouse and el
      const centerDistance = Math.sqrt(deltaX ** 2 + deltaY ** 2) // Distance between mouse and el's center

      const magneticDistanceX = width / 3 // Horizontal distance for magnetic attraction
      const magneticDistanceY = height / 3 // Vertical distance for magnetic attraction
      const attractionStrength = 0.45 * strengthFactor // Magnetic strength

      if (distance < magneticDistanceX && distance < magneticDistanceY) {
        const strength
          = Math.abs(1 - centerDistance / 4)
          / ((magneticDistanceX + magneticDistanceY) / 2)
        gsap.to(el, {
          x: deltaX * strength * attractionStrength,
          y: deltaY * strength * attractionStrength,
          duration: 0.2,
        })
      }
      else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.3,
        })
      }
    }
  }

  el._magneticHandler = handleMouseMove
  el._intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener('mousemove', handleMouseMove)
      }
      else {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    })
  })

  el._intersectionObserver.observe(el)
}
