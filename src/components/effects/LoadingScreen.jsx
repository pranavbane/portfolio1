import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsComplete(true)
        setTimeout(onComplete, 500)
      }, 300)
    }
  }, [progress, onComplete])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
  }

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            variants={logoVariants}
            className="mb-8"
          >
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-surface"
                style={{
                  borderTopColor: '#FF6B35',
                  borderRightColor: '#FFD166',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-2 rounded-full bg-surface flex items-center justify-center">
                <span className="text-3xl font-bold gradient-text">P</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={textVariants} className="text-center">
            <h2 className="text-2xl font-bold text-text mb-4 font-poppins">Loading</h2>
            <div className="w-48 h-1 bg-surface rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full animated-gradient"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="mt-4 text-muted text-sm">{progress}%</p>
          </motion.div>

          <div className="absolute bottom-8 text-center">
            <p className="text-muted text-sm">
              Crafting exceptional digital experiences
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
