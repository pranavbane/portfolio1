import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useLenis = () => {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return lenisRef
}

export const useGSAP = (callback, deps = []) => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ref.current)
    }, ref)

    return () => ctx.revert()
  }, deps)

  return ref
}

export const useScrollTrigger = (options = {}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const {
      animation = {},
      triggerOptions = {},
    } = options

    const defaults = {
      trigger: elementRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...triggerOptions,
    }

    const tl = gsap.timeline({
      scrollTrigger: defaults,
    })

    tl.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      ...animation,
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [options])

  return elementRef
}
