import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const GradientBlobs = ({ className = '' }) => {
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const blob3Ref = useRef(null)

  useEffect(() => {
    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current].filter(Boolean)

    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        scale: `random(0.8, 1.2)`,
        duration: `random(10, 15)`,
        ease: 'sine.inOut',
        repeat: -1,
        repeatRefresh: true,
        delay: index * 2,
      })
    })
  }, [])

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <div
        ref={blob1Ref}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #FFD166 0%, transparent 70%)',
        }}
      />
      <div
        ref={blob3Ref}
        className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #FF8C5A 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

export default GradientBlobs
