export const personalInfo = {
  name: 'Alex Chen',
  firstName: 'Alex',
  lastName: 'Chen',
  role: 'Senior Frontend Developer',
  headline: 'Frontend Developer | React.js | Next.js | JavaScript Expert',
  email: 'alex.chen@portfolio.dev',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: `Passionate frontend developer with 8+ years of experience crafting exceptional digital experiences. I specialize in building high-performance web applications using React.js, Next.js, and modern JavaScript frameworks. My approach combines cutting-edge technology with user-centered design to create interfaces that are both beautiful and highly functional.`,
  resumeUrl: '#',
  avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
}

export const stats = [
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Happy Clients', value: 80, suffix: '+' },
]

export const skills = {
  frontend: [
    { name: 'React.js', level: 95, icon: 'react' },
    { name: 'Next.js', level: 90, icon: 'nextjs' },
    { name: 'TypeScript', level: 88, icon: 'typescript' },
    { name: 'JavaScript', level: 95, icon: 'javascript' },
    { name: 'Tailwind CSS', level: 92, icon: 'tailwind' },
    { name: 'Framer Motion', level: 85, icon: 'framer' },
  ],
  backend: [
    { name: 'Node.js', level: 80, icon: 'nodejs' },
    { name: 'Express.js', level: 75, icon: 'express' },
    { name: 'GraphQL', level: 70, icon: 'graphql' },
    { name: 'REST APIs', level: 90, icon: 'api' },
  ],
  database: [
    { name: 'PostgreSQL', level: 75, icon: 'postgresql' },
    { name: 'MongoDB', level: 80, icon: 'mongodb' },
    { name: 'Firebase', level: 85, icon: 'firebase' },
    { name: 'Supabase', level: 82, icon: 'supabase' },
  ],
  tools: [
    { name: 'Git', level: 92, icon: 'git' },
    { name: 'Docker', level: 70, icon: 'docker' },
    { name: 'Figma', level: 85, icon: 'figma' },
    { name: 'VS Code', level: 95, icon: 'vscode' },
  ],
}

export const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading frontend architecture and development for enterprise SaaS applications. Mentoring junior developers and implementing best practices for code quality and performance.',
    achievements: [
      'Architected and built a real-time dashboard serving 50K+ daily users',
      'Reduced page load time by 40% through code splitting and lazy loading',
      'Led migration from legacy system to modern React architecture',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client-facing web applications. Collaborated with design and backend teams to deliver high-quality products on tight deadlines.',
    achievements: [
      'Built e-commerce platform handling $2M+ monthly transactions',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Created reusable component library used across 5+ projects',
    ],
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 3,
    role: 'Junior Frontend Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    period: '2018 - 2020',
    description: 'Started career building responsive websites and web applications for various clients. Gained experience in full development lifecycle from requirements to deployment.',
    achievements: [
      'Delivered 30+ client projects with 98% satisfaction rate',
      'Learned and applied modern JavaScript frameworks',
      'Contributed to open-source projects',
    ],
    technologies: ['JavaScript', 'React', 'SASS', 'jQuery', 'WordPress'],
  },
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
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.pexels.com/photo-3183152933/pexels-photo-3183293.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'Redux', 'Socket.io', 'Node.js', 'MongoDB'],
    featured: true,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'An interactive analytics dashboard with real-time data visualization, custom charts, and export functionality for enterprise clients.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'D3.js', 'TypeScript', 'GraphQL', 'Chart.js'],
    featured: true,
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'A modern social media platform with real-time messaging, stories feature, and AI-powered content recommendations.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
    technologies: ['Next.js', 'PostgreSQL', 'OpenAI', 'Vercel', 'Prisma'],
    featured: false,
  },
  {
    id: 5,
    title: 'AI Portfolio Generator',
    description: 'An AI-powered tool that generates professional portfolios from simple inputs, with customizable themes and layouts.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ai',
    liveUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    featured: false,
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform with virtual tours, mortgage calculator, and intelligent property matching algorithm.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
    technologies: ['React', 'Three.js', 'Mapbox', 'Node.js', 'PostgreSQL'],
    featured: false,
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
    id: 3,
    title: 'Next.js Development',
    description: 'Full-stack Next.js applications with SSR, SSG, API routes, and optimal performance.',
    icon: 'nextjs',
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
    content: 'Alex delivered exceptional work on our dashboard project. The attention to detail and performance optimization exceeded our expectations. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Working with Alex was a game-changer for our team. The technical expertise and ability to translate complex requirements into elegant solutions is remarkable.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Director',
    company: 'Digital Studio',
    content: 'Alex has an incredible eye for design implementation. Every interaction, animation, and detail is executed flawlessly. A true frontend craftsman.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder',
    company: 'DevAgency',
    content: 'Outstanding communication and delivery. Alex consistently went above and beyond to ensure our project success. Will definitely work together again.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
]

export const techStack = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'GraphQL', icon: 'graphql' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'Figma', icon: 'figma' },
]

export const socialLinks = [
  { name: 'GitHub', url: '#', icon: 'github' },
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
