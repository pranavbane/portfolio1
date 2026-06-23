import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-surface/20 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Testimonials" subtitle="What clients say" />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/10">
            <Quote size={120} />
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="glass rounded-3xl p-8 md:p-12 text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-secondary fill-secondary" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-text/80 leading-relaxed mb-8 italic">
                  "{testimonials[current].content}"
                </p>

                <div className="flex flex-col items-center">
                  <motion.img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-primary/50"
                    whileHover={{ scale: 1.1 }}
                  />
                  <h4 className="text-lg font-bold text-text">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted text-sm">
                    {testimonials[current].role} at {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="hidden md:flex absolute inset-y-0 items-center justify-between pointer-events-none">
            <motion.button
              onClick={prev}
              className="pointer-events-auto p-3 rounded-full glass border border-white/10 hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={next}
              className="pointer-events-auto p-3 rounded-full glass border border-white/10 hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
