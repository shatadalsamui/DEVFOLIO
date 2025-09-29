"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
        { name: "Vue.js" },
        { name: "Sass" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Express.js" },
        { name: "GraphQL" },
        { name: "Redis" },
        { name: "MySQL" },
      ]
    },
    {
      title: "Web3 & Smart Contracts",
      skills: [
        { name: "Solidity" },
        { name: "Hardhat" },
        { name: "Foundry" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "Vercel" },
        { name: "Figma" },
        { name: "VS Code" },
        { name: "Linux" },
        { name: "Postman" },
      ]
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      name: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      year: "2023"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023"
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
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-gray-950 dark:to-black -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & <span className="text-gray-700 dark:text-gray-300">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and technologies 
            I work with to create professional digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} className="space-y-6" variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-700 dark:border-gray-400 pb-2">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 cursor-default">
                    • {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Certifications</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="mb-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{cert.year}</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}