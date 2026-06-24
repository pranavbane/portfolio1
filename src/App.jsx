import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useLenis } from './hooks/useLenis'
import { ThemeProvider } from './context/ThemeContext'

import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

import LoadingScreen from './components/effects/LoadingScreen'
import MouseFollower from './components/effects/MouseFollower'
import ParticleField from './components/effects/ParticleField'
import GradientBlobs from './components/effects/GradientBlobs'
import InteractiveSpotlight from './components/effects/InteractiveSpotlight'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(0)

  useLenis()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])



  useEffect(() => {
    const updateHeaderHeight = () => {
      const navbar = document.querySelector('nav')
      if (navbar) {
        setHeaderHeight(navbar.offsetHeight)
      }
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)

    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-text overflow-x-hidden">
        {/* <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence> */}

        <ParticleField count={40} />
        <GradientBlobs />
        <InteractiveSpotlight />
        <ScrollProgress />

        <Navbar />

        <main
          className="relative z-10"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          <Hero pageLoaded={true} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Testimonials />
          <TechStack />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
