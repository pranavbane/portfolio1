import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
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

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOut = () => {
      setTimeout(() => setIsVisible(false), 100)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseEnter)
    window.addEventListener('mouseout', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseEnter)
      window.removeEventListener('mouseout', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseOut)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute rounded-full border border-primary/50"
              animate={{
                x: position.x - 25,
                y: position.y - 25,
                width: isHovering ? 60 : 50,
                height: isHovering ? 60 : 50,
                scale: isClicking ? 0.8 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            />
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-primary"
              animate={{
                x: position.x - 6,
                y: position.y - 6,
                scale: isHovering ? 0 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
              }}
            />
          </motion.div>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute rounded-full border border-secondary/30"
              animate={{
                x: position.x - 100,
                y: position.y - 100,
                width: 200,
                height: 200,
                opacity: isHovering ? 0.3 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MouseFollower
