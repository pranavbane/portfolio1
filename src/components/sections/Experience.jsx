import { useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Building2 } from 'lucide-react'
import { experiences } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Experience" subtitle="My journey" />

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ experience, index, isLeft }) => {
  const itemRef = useRef(null)

  return (
    <motion.div
      ref={itemRef}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="hidden md:flex flex-1 justify-end">
        {isLeft && (
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        )}
        {!isLeft && <div className="flex-1" />}
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex z-10">
        <motion.div
          className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-glow"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', delay: 0.3 }}
        />
      </div>

      <div className="hidden md:flex flex-1 justify-start">
        {!isLeft && (
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        )}
        {isLeft && <div className="flex-1" />}
      </div>

      <div className="md:hidden w-full px-4">
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-glow" />
          <motion.div
            className="absolute left-px top-4 w-px h-full bg-gradient-to-b from-primary/50 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
          />
          <ExperienceCard experience={experience} />
        </div>
      </div>
    </motion.div>
  )
}

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="glass rounded-2xl p-6 gradient-border group hover:border-primary/50 transition-all duration-300"
      whileHover={{ y: -5, boxShadow: '0 0 40px rgba(255, 107, 53, 0.2)' }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
            {experience.role}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <Building2 size={14} className="text-primary" />
            <span className="text-muted">{experience.company}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-sm text-muted">
            <Calendar size={14} className="text-secondary" />
            {experience.period}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted mt-1">
            <MapPin size={14} className="text-secondary" />
            {experience.location}
          </div>
        </div>
      </div>

      <p className="text-muted mb-4">{experience.description}</p>

      <div className="space-y-2 mb-4">
        {experience.achievements.map((achievement, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span className="text-sm text-text/80">{achievement}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-surface border border-white/10 text-muted group-hover:border-primary/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
