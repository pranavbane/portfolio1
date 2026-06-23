import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionHeading = ({ title, subtitle, className = '' }) => {
  const headingRef = useRef(null)

  useEffect(() => {
    if (!headingRef.current) return

    const chars = headingRef.current.querySelectorAll('.char')

    gsap.from(chars, {
      opacity: 0,
      y: 60,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <div ref={headingRef} className={`text-center mb-16 ${className}`}>
      {subtitle && (
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
        {splitText(title)}
      </h2>
    </div>
  )
}

export default SectionHeading
