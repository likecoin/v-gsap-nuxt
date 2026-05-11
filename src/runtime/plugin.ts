import Draggable from 'gsap/Draggable'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import { gsap } from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, TextPlugin, SplitText)

export const useGSAP = (): typeof gsap => {
  return gsap
}
