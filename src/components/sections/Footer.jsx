import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Dribbble } from 'lucide-react'
import { personalInfo, navigation, socialLinks } from '../../data/portfolioData'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    dribbble: Dribbble,
  }

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-background font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold font-poppins">{personalInfo.name}</span>
          </motion.div>

          <motion.nav
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-muted hover:text-primary transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass border border-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {Icon && <Icon size={18} />}
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            className="text-center text-muted text-sm mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="flex items-center justify-center gap-1">
              Made with <Heart size={14} className="text-primary fill-primary" /> by {personalInfo.name}
            </p>
            <p className="mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass border border-primary/50 flex items-center justify-center text-primary z-50 opacity-0 pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255, 107, 53, 0.5)' }}
        whileTap={{ scale: 0.9 }}
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 500 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 500 ? 'auto' : 'none',
        }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
