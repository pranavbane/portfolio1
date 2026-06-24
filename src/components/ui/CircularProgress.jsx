import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, label }) => {
  const circleRef = useRef(null)
  const containerRef = useRef(null)

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  useEffect(() => {
    if (!circleRef.current || !containerRef.current) return

    const circle = circleRef.current

    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    })

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(circle, {
          strokeDashoffset: offset,
          duration: 1.5,
          ease: 'power4.out',
        })
      },
      once: true,
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [circumference, offset])

  return (
    <div ref={containerRef} className="flex flex-col items-center group">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            ref={circleRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-300"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#FFD166" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold gradient-text">{percentage}%</span>
        </div>
      </div>
      {label && (
        <p className="mt-4 text-sm text-muted group-hover:text-text transition-colors">
          {label}
        </p>
      )}
    </div>
  )
}

export default CircularProgress
