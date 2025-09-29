"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, PostgreSQL, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App"
    },
    {
      id: 3,
      title: "AI-Powered Blog Platform",
      description: "An intelligent blogging platform that uses AI to suggest content improvements, auto-generate tags, and optimize SEO.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Python", "OpenAI API", "Prisma", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Mobile Weather App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "TypeScript", "Weather API", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles and smooth animations.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data visualization with charts, graphs, and real-time data updates.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Node.js", "Express", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Viz"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-600 hover:text-white rounded-lg font-medium transition-all duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: string
}

function ProjectCard({ project }: { project: Project }) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div 
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      variants={itemVariants}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
          <div className="text-4xl opacity-50">🚀</div>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
          <a
            href={project.liveUrl}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gray-700 dark:bg-gray-600 text-white text-sm rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={project.liveUrl}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-colors duration-200"
            >
              View Project
            </a>
            <a
              href={project.githubUrl}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 font-medium transition-colors duration-200"
            >
              Code
            </a>
          </div>
          
          {/* External link icon */}
          <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}