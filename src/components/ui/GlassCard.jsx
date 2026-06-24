import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GlassCard = ({ children, className = '', delay = 0, hover = true }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`
        glass rounded-2xl p-6
        ${hover ? 'hover:border-primary/30 hover:shadow-glow transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default GlassCard
