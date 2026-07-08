export const personalInfo = {
  name: 'Pranav Bane',
  firstName: 'Pranav',
  lastName: 'Bane',
  role: 'Frontend Developer',
  headline: 'Frontend Developer | React.js | JavaScript Expert',
  email: 'pranavbane777@gmail.com',
  phone: '+91 9321664393',
  location: 'Thane, Maharashtra',
  bio: `Passionate frontend developer with 2.4+ years of experience. I specialize in building high-performance web applications using React.js, Node.js, and modern JavaScript frameworks.`,
  resumeUrl: '/resume/Pranav_Bane_Frontend_dev.pdf',
  avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
}

export const stats = [
  { label: 'Years Experience', value: 2.4, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Happy Clients', value: 8, suffix: '+' },
]

export const skills = {
  frontend: [
    { name: 'React.js', level: 60, icon: 'react' },
    { name: 'JavaScript', level: 95, icon: 'javascript' },
    { name: 'Bootstrap', level: 90, icon: 'bootstarp' },
    { name: 'Tailwind CSS', level: 60, icon: 'tailwind' },
    { name: 'Framer Motion', level: 50, icon: 'framer' },
  ],
  tools: [
    { name: 'Git', level: 92, icon: 'git' },
    { name: 'Figma', level: 50, icon: 'figma' },
    { name: 'VS Code', level: 95, icon: 'vscode' },
    { name: 'Vite', level: 90, icon: 'vite' },
    { name: 'Postman', level: 90, icon: 'postman' },
  ],
}

export const experiences = [
  {
    id: 1,
    role: 'Jr. Software Developer',
    company: 'Scan InfoTech Private Limited',
    location: 'Lower Parel, Mumbai',
    period: 'Oct-2023 - Feb-2026',
    description: 'frontend architecture and development for enterprise SaaS applications. Mentoring junior developers and implementing best practices for code quality and performance.',
    achievements: [
      'Architected and built a real-time dashboard serving 50K+ daily users',
      'Reduced page load time by 40% through code splitting and lazy loading',
      'Led migration from legacy system to modern React architecture',
    ],
    technologies: ['React', 'JavaScript','jQuery', 'Redux', 'Tailwind CSS', 'Metronics', 'Bootstrap','HTML', 'CSS', 'Node.js'],
  }
]

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with Next.js and integrated with Stripe for payments.',
    image: 'https://images.pexels.com/photos/2305445/pexels-photo-2305445.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 2,
    title: 'Dashboard Analytics Tool',
    description: 'Built a responsive dashboard interface for data visualization and management.',
    image: 'https://images.pexels.com/photos/2305445/pexels-photo-2305445.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'frontend',
    liveUrl: 'https://pranavbane.github.io/Dashbord/',
    githubUrl: 'https://github.com/pranavbane/Dashbord',
    technologies: ['React', 'Redux', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    featured: true,
  },
   {
    id: 3,
    title: 'College Management System',
    description: 'A College Management System (CMS) is an administrative software suite that centralizes and automates institutional workflows.',
    image: 'https://repository-images.githubusercontent.com/356916985/cebcbf05-cf6a-4e55-9f28-a08d3c061919',
    category: 'frontend',
    liveUrl: 'https://frontend-c6qnvcj1q-pranavbanes-projects.vercel.app/login',
    githubUrl: 'https://github.com/pranavbane/Lecture_Scheduling_Module',
    technologies: ['React.js', 'Node.js', 'tailwind CSS', 'express.js', 'Redux', 'JavaScript', 'MongoDB', 'Bootstrap', 'HTML', 'CSS'],
    featured: true,
  },
]

export const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and performant web applications using modern frameworks and best practices.',
    icon: 'layout',
  },
  {
    id: 2,
    title: 'React Development',
    description: 'Expert React.js development with hooks, context, and advanced patterns for scalable applications.',
    icon: 'react',
  },
  {
    id: 4,
    title: 'UI/UX Implementation',
    description: 'Translating designs into pixel-perfect, interactive interfaces with smooth animations.',
    icon: 'design',
  },
  {
    id: 5,
    title: 'API Integration',
    description: 'Seamless integration with RESTful APIs, GraphQL, and third-party services.',
    icon: 'api',
  },
  {
    id: 6,
    title: 'Responsive Web Design',
    description: 'Mobile-first, responsive websites that work flawlessly across all devices.',
    icon: 'responsive',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Inc.',
    content: 'Pranav delivered exceptional work on our dashboard project. The attention to detail and performance optimization exceeded our expectations. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Working with Pranav was a game-changer for our team. The technical expertise and ability to translate complex requirements into elegant solutions is remarkable.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'Digital Studio',
    content: 'Pranav has an incredible eye for design implementation. Every interaction, animation, and detail is executed flawlessly. A true frontend craftsman.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder',
    company: 'DevAgency',
    content: 'Outstanding communication and delivery. Pranav consistently went above and beyond to ensure our project success. Will definitely work together again.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
]

export const techStack = [
  { name: 'React', icon: 'React' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Html', icon: 'HTML' },
  { name: 'CSS', icon: 'CSS' },
  { name: 'Node.js', icon: 'Nodejs' },
  { name: 'Git', icon: 'git' },
  { name: 'Figma', icon: 'figma' },
]

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/pranavbane', icon: 'github' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'Dribbble', url: '#', icon: 'dribbble' },
]

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]
