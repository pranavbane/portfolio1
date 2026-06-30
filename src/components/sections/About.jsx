import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Briefcase, Rocket, Users } from 'lucide-react'
import { personalInfo, stats } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import avatar from '../../assets/avatar.png'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      onEnter: () => setHasAnimated(true),
      once: true,
    })
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
              <div className="relative glass rounded-3xl p-2 h-full">
                <img
                  src={avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-2xl text-muted gradient-text ps-7">2+</p>
                  <p className="text-xs text-muted">Years Experience</p>
                </motion.div>
              </div>

              <motion.div
                className="absolute -top-4 -left-4 glass p-3 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-text">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6">
              I'm <span className="gradient-text">{personalInfo.name}</span>, a passionate
            </h3>
            <p className="text-lg text-primary font-medium mb-4">Frontend Developer</p>
            <p className="text-muted leading-relaxed mb-8">{personalInfo.bio}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-muted mb-1">Location</p>
                <p className="text-text font-medium">{personalInfo.location}</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-muted mb-1">Email</p>
                <p className="text-text font-medium truncate">{personalInfo.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-gradient-border p-4 rounded-xl text-center group hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.p
                    className="text-3xl md:text-4xl text-muted gradient-text"
                    // initial={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                  >
                    {hasAnimated && <AnimatedCount end={stat.value} suffix={stat.suffix} />}
                  </motion.p>
                  <p className="text-xs md:text-sm text-muted mt-1 group-hover:text-text transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const AnimatedCount = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end])

  return <>{count}{suffix}</>
}

export default About
