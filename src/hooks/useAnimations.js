import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout = null
    let index = 0

    const startTyping = () => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
        timeout = setTimeout(startTyping, speed)
      } else {
        setIsComplete(true)
      }
    }

    timeout = setTimeout(startTyping, delay)

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [text, speed, delay])

  return { displayText, isComplete }
}

export const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const countRef = useRef(null)

  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const animate = () => {
      const now = Date.now()
      const remaining = Math.max(endTime - now, 0)
      const progress = 1 - remaining / duration

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)

      setCount(current)

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate)
      }
    }

    countRef.current = requestAnimationFrame(animate)

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current)
      }
    }
  }, [end, duration, start])

  return count
}

export const useInView = (options = {}) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        ...options,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, isInView]
}

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export const useTilt = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return

    const {
      max = 15,
      perspective = 1000,
      scale = 1.05,
      speed = 300,
      glare = false,
      'max-glare': maxGlare = 0.5,
    } = options

    const element = ref.current

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const percentX = (mouseX - centerX) / centerX
      const percentY = (mouseY - centerY) / centerY

      const rotateX = -percentY * max
      const rotateY = percentX * max

      gsap.to(element, {
        rotateX,
        rotateY,
        scale,
        perspective,
        duration: speed / 1000,
        ease: 'power2.out',
        transformPerspective: perspective,
        transformOrigin: 'center center',
      })

      if (glare) {
        const glareAngle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI)
        const glareOpacity = Math.min((percentX ** 2 + percentY ** 2) * 2 * maxGlare, maxGlare)

        element.style.setProperty('--glare-opacity', glareOpacity)
        element.style.setProperty('--glare-angle', `${glareAngle + 90}deg`)
      }
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: speed / 1000,
        ease: 'power2.out',
      })

      if (glare) {
        element.style.setProperty('--glare-opacity', '0')
      }
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, options])
}

export const useParallax = (ref, speed = 0.5) => {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

   ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress
        const yPos = (progress - 0.5) * speed * 100
        gsap.set(element, { y: yPos })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [ref, speed])
}
