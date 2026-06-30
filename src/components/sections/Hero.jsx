import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Github, Linkedin, Twitter, Dribbble, ArrowDown, Download, ExternalLink } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolioData'
import MagneticButton from '../ui/MagneticButton'
import avatar from '../../assets/avatar.png'

const Hero = ({ pageLoaded }) => {
  const heroRef = useRef(null)
  const nameRef = useRef(null)
  // const [isLoaded, setIsLoaded] = useState(false)

  // useEffect(() => {
  //   setIsLoaded(true)
  // }, [])

  useLayoutEffect(() => {
    if (!pageLoaded || !nameRef.current) return

    const chars = nameRef.current.querySelectorAll('.char')
    console.log(
      nameRef.current.querySelectorAll('.char').length
    )
    gsap.killTweensOf(chars)

    gsap.set(chars, {
      opacity: 0,
      y: 100,
    })

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'power4.out',
      delay: 0.3,
    })
  }, [pageLoaded])

  const splitName = (text, gradient = false) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className={`char inline-block origin-bottom ${gradient ? 'gradient-text' : ''
          }`}
      >
        {char}
      </span>
    ))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 border border-primary/20 rounded-full"
          variants={floatVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 border border-secondary/20 rotate-45"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1, duration: 5 }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-20 h-20 bg-primary/10 rounded-lg"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2, duration: 7 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-primary/10 rounded-lg rotate-12"
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5, duration: 8 }}
        />
      </div> */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={pageLoaded ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(255, 107, 53, 0.3)',
                    '0 0 60px rgba(255, 107, 53, 0.5)',
                    '0 0 30px rgba(255, 107, 53, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <img
                src={avatar}
                alt={personalInfo.name}
                className="w-50 h-50 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/50 relative z-10"
              />
              {/* <motion.div
                className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-background z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
              /> */}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <h1
            ref={nameRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6"
          >
            {splitName(personalInfo.firstName)}
            {' '}
            {splitName(personalInfo.lastName, true)}
          </h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted mb-8 h-8"
          >
            <TypewriterText texts={['Frontend Developer', 'React.js Expert', 'JavaScript Enthusiast']} />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-text/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
          >
            I craft exceptional digital experiences with clean code and beautiful designs.
            Specializing in modern web technologies to bring ideas to life.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <MagneticButton>
              <motion.a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-medium hoverable"
                whileHover={{ boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Projects
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </MagneticButton>
            <MagneticButton>
              <motion.a
                href={personalInfo.resumeUrl} target="_blank" download="Pranav_Bane_MERN_Stack_Dev.pdf" rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 rounded-full glass border border-primary/30 text-text font-medium hoverable"
                whileHover={{
                  borderColor: 'rgba(255, 107, 53, 0.6)',
                  boxShadow: '0 0 20px rgba(255, 107, 53, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download size={18} className="transition-transform group-hover:translate-y-1" />
              </motion.a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="p-3 rounded-full glass border border-white/10 text-muted hoverable group transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  borderColor: 'rgba(255, 107, 53, 0.5)',
                  color: '#FF6B35',
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                {social.icon === 'github' && <Github size={20} />}
                {social.icon === 'linkedin' && <Linkedin size={20} />}
                {social.icon === 'twitter' && <Twitter size={20} />}
                {social.icon === 'dribbble' && <Dribbble size={20} />}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.button
          className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  )
}

const TypewriterText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default Hero
