import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

export const useMouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let x = 0
    let y = 0
    let mouseX = 0
    let mouseY = 0

    const updatePosition = () => {
      const dx = mouseX - x
      const dy = mouseY - y

      x += dx * 0.15
      y += dy * 0.15

      setPosition({ x, y })

      requestAnimationFrame(updatePosition)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleMouseOut = () => {
      setTimeout(() => setIsVisible(false), 100)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseEnter)
    window.addEventListener('mouseout', handleMouseLeave)
    document.body.addEventListener('mouseleave', handleMouseOut)

    const animationId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseEnter)
      window.removeEventListener('mouseout', handleMouseLeave)
      document.body.removeEventListener('mouseleave', handleMouseOut)
      cancelAnimationFrame(animationId)
    }
  }, [isVisible])

  return { position, isVisible, isHovering }
}

export const useMagneticButton = (ref) => {
  useEffect(() => {
    if (!ref.current) return

    const button = ref.current
    const strength = 0.5

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])
}

export const useFollowMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}
