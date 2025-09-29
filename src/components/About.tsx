"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-gray-950 dark:to-black -z-10"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gray-700 dark:bg-gray-400 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                I am a full-stack developer and a final-year Computer Science student at KIIT Deemed to be University. I specialize in building scalable backend services using technologies like Node.js , TypeScript , Rust, and PostgreSQL, and have experience with modern runtimes like Bun. I also develop responsive front-end interfaces using React.js and Next.js
              </p>
              <p className="text-lg">
                In addition to my full-stack skills, I am also learning Web3 development. My studies focus on building and deploying decentralized applications (dApps) using Solidity with frameworks like Hardhat and Foundry, and deploying to L2 scaling solutions such as zkSync rollups.
              </p>
              <p className="text-lg">
                My journey in tech started with curiosity about how websites work, and it has 
                evolved into a deep passion for creating seamless user experiences. I believe 
                in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
            </div>
          </motion.div>
          
          {/* Image/Visual */}
          <motion.div className="relative" variants={imageVariants}>
            <div className="group relative z-10 bg-white/95 dark:bg-gray-900/70 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur">
              <div
                className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
                style={{ aspectRatio: "854 / 1210" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Shatadal Samui"
                  fill
                  sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, 90vw"
                  quality={95}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gray-700 dark:bg-gray-600 text-white p-4 rounded-xl shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              
              {/* Removed bottom-left decorative icon */}
              
              {/* Background decoration */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-2xl transform rotate-2"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Experience Timeline removed per request */}
      </motion.div>
    </section>
  )
}