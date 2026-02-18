export type ProjectType = 'personal' | 'freelance'

export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured?: boolean
  gradient?: string
  type: ProjectType
  screenshots?: { src: string; caption?: string }[]
  client?: {
    name: string
    industry?: string
    contact?: string
    website?: string
  }
  requirements?: string[]
  documents?: { title: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: 'nexus-intra-college-platform',
    title: 'Nexus - Intra-College Platform',
    description:
      'An innovative intra-college platform that revolutionizes communication, collaboration, and resource sharing. Features hierarchical user system, virtual classrooms, marks management, secure fee payment, and event coordination.',
    tech: ['React.js', 'Tailwind CSS', 'Spring Boot', 'AWS'],
    github: 'https://github.com/githubabhinav14',
    live: '#',
    featured: true,
    gradient: 'from-primary/20 to-primary/5',
    type: 'personal',
    screenshots: [
      {
        src: '/images/art-1.jpg',
        caption: 'Dashboard showcasing announcements and class overview.',
      },
      {
        src: '/images/art-2.jpg',
        caption: 'Student portal with marks and fee overview.',
      },
      {
        src: '/images/art-3.jpg',
        caption: 'Events and notices section for campus activities.',
      },
    ],
  },
  {
    slug: 'food-hero-donate-food-deliver-hope',
    title: 'Food Hero - Donate Food, Deliver Hope',
    description:
      'A food donation platform connecting donors with people in need. Features real-time updates, location-based tracking, NGO integration, and inventory management for timely food distribution.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'MongoDB'],
    github: 'https://github.com/githubabhinav14',
    live: '#',
    featured: true,
    gradient: 'from-chart-2/20 to-chart-2/5',
    type: 'personal',
    screenshots: [
      {
        src: '/images/art-4.jpg',
        caption: 'Landing page connecting donors and receivers.',
      },
      {
        src: '/images/art-5.jpg',
        caption: 'Map and tracking view for active food donations.',
      },
    ],
  },
  {
    slug: 'soma-scents-ecommerce',
    title: 'Soma Scents - E-Commerce Website',
    description:
      'A complete e-commerce platform for a candle-selling business with product showcasing, cart functionality, and order handling. Integrated a secure backend using MongoDB to manage product data, customer details, and order tracking.',
    tech: ['Next.js', 'MongoDB'],
    github:
      'https://github.com/githubabhinav14/Soma-Scents-Ecommerce-website-candles-business',
    live: 'https://soma-scents-ecommerce-website-candl-three.vercel.app/',
    featured: false,
    gradient: 'from-chart-4/20 to-chart-4/5',
    type: 'personal',
    screenshots: [
      {
        src: '/images/art-6.jpg',
        caption: 'Product grid with featured candle collections.',
      },
    ],
  },
  {
    slug: 'aani-creations-company-site',
    title: 'Aani Creations - Design & Printing Services',
    description:
      'A professional company website to promote graphic design and printing services. Features responsive layouts, interactive elements, branding consistency, optimized performance, and an intuitive admin panel for content updates.',
    tech: ['Next.js'],
    github: 'https://github.com/githubabhinav14/Aani-Creations',
    live: 'https://aani-creations.vercel.app/',
    featured: false,
    gradient: 'from-chart-5/20 to-chart-5/5',
    type: 'freelance',
    client: {
      name: 'Aani Creations',
      industry: 'Design & Printing',
      website: 'https://aani-creations.vercel.app/',
    },
    requirements: [
      'Responsive brochure site with service catalog',
      'Brand-consistent visuals and typography',
      'Contact and quote request CTA',
      'Easy content updates',
    ],
    documents: [
      { title: 'Initial Requirements Brief', href: '#' },
      { title: 'Brand Guidelines', href: '#' },
      { title: 'Deployment Checklist', href: '#' },
    ],
    screenshots: [
      {
        src: '/images/art-1.jpg',
        caption: 'Hero section with branding for Aani Creations.',
      },
      {
        src: '/images/art-2.jpg',
        caption: 'Services grid for design and printing offerings.',
      },
    ],
  },
  {
    slug: 'typing-speed-tester',
    title: 'Typing Speed Tester',
    description:
      'An app to improve typing accuracy with focus mode, progress reports, speed challenges, real-time error tracking, and typing guidance for proper finger placement.',
    tech: ['Python', 'VS Code'],
    github: 'https://github.com/githubabhinav14',
    live: '#',
    featured: false,
    gradient: 'from-chart-3/20 to-chart-3/5',
    type: 'personal',
    screenshots: [
      {
        src: '/images/art-3.jpg',
        caption: 'Typing speed challenge view with live stats.',
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
