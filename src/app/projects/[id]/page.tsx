"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { use } from "react";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const videoVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Header />
      <section className="relative min-h-screen flex items-start justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 -z-10"></div>

      <motion.div 
        className="max-w-7xl w-full mx-auto bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl p-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-between items-start mb-4" variants={itemVariants}>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-1">{project.title}</h1>
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            View on GitHub
          </a>
        </motion.div>
        <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-2" variants={itemVariants}>{project.description}</motion.p>
        <motion.div className="mb-3" variants={videoVariants}>
          {/* YouTube video embed */}
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            {project.videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`${project.title} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Add video URL to display demo</span>
              </div>
            )}
          </div>
        </motion.div>
        <motion.div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-5xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-gray-900 dark:prose-h2:text-white prose-p:text-lg prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-lg prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-xl prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold" variants={itemVariants}>
          <div className="whitespace-pre-line text-base md:text-lg lg:text-xl leading-relaxed">{project.fullDescription}</div>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
    </>
  );
}
