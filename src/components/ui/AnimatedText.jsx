import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedText = ({ text, className = '', animation = 'fadeUp', delay = 0 }) => {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    const animations = {
      fadeUp: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 },
      },
      fadeDown: {
        from: { opacity: 0, y: -40 },
        to: { opacity: 1, y: 0 },
      },
      fadeLeft: {
        from: { opacity: 0, x: -40 },
        to: { opacity: 1, x: 0 },
      },
      fadeRight: {
        from: { opacity: 0, x: 40 },
        to: { opacity: 1, x: 0 },
      },
      scale: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      blur: {
        from: { opacity: 0, filter: 'blur(10px)' },
        to: { opacity: 1, filter: 'blur(0px)' },
      },
    }

    const anim = animations[animation] || animations.fadeUp

    gsap.fromTo(
      textRef.current,
      anim.from,
      {
        ...anim.to,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [animation, delay])

  return (
    <span ref={textRef} className={className}>
      {text}
    </span>
  )
}

export default AnimatedText
