import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import TiltCard from '../ui/TiltCard'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI/ML' },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="My recent work" />

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-background'
                  : 'glass border border-white/10 text-muted hover:border-primary/50 hover:text-text'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <TiltCard className="w-full">
        <div className="glass rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 20 }}
            >
              <span className="px-4 py-2 rounded-full glass text-sm font-medium flex items-center gap-2">
                View Project <ArrowUpRight size={16} />
              </span>
            </motion.div>
            {project.featured && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-background text-xs font-bold">
                Featured
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-text group-hover:gradient-text transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-muted text-sm line-clamp-2 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md bg-surface text-muted"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-md bg-surface text-muted">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl border border-white/10"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {project.title}
              </h2>
              <span className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary capitalize">
                {project.category}
              </span>
            </div>
            <div className="flex gap-3">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-white/20 text-text font-medium"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 53, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Code
              </motion.a>
            </div>
          </div>

          <p className="text-muted text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-text mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-surface border border-white/10 text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
