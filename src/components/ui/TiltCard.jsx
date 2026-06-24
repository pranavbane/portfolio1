import { useRef, useEffect, useState, forwardRef } from 'react'
import { gsap } from 'gsap'

const TiltCard = forwardRef(
  ({ children, className = '', intensity = 15, glare = true }, ref) => {
    const combinedRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
      if (!combinedRef.current) return

      const card = combinedRef.current

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -intensity
        const rotateY = ((x - centerX) / centerX) * intensity

        gsap.to(card, {
          rotateX,
          rotateY,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        })

        if (glare) {
          const glareElement = card.querySelector('.glare')
          if (glareElement) {
            const glareX = (x / rect.width) * 100
            const glareY = (y / rect.height) * 100
            glareElement.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15), transparent 50%)`
          }
        }
      }

      const handleMouseEnter = () => {
        setIsHovered(true)
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        setIsHovered(false)
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, [intensity, glare])

    return (
      <div
        ref={combinedRef}
        className={`transform-style-3d transition-transform duration-300 ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
        {glare && (
          <div
            className="glare pointer-events-none absolute inset-0 rounded-inherit opacity-0 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}
      </div>
    )
  })

export default TiltCard
