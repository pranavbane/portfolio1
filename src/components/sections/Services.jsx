import { motion } from 'framer-motion'
import { LayoutGrid as Layout, Code as Code2, Layers, Palette, Cloud, Smartphone } from 'lucide-react'
import { services } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const Services = () => {
  const icons = {
    layout: Layout,
    react: Code2,
    nextjs: Layers,
    design: Palette,
    api: Cloud,
    responsive: Smartphone,
  }

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-surface/20 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="What I Offer" subtitle="Services" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[service.icon] || Code2
            return (
              <motion.div
                key={service.id}
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <motion.div
                  className="group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="glass rounded-2xl p-8 gradient-border group-hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />

                    <motion.div
                      className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={28} className="text-background" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-text group-hover:gradient-text transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {service.description}
                    </p>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
