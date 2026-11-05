'use client'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import profileData from '@/data/profile.json'
import projectsData from '@/data/projects.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1)
      if (pathname !== '/') {
        router.push(`/${href}`)
        return
      }
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    if (pathname !== '/') {
      router.push('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          {/* Identity & Scope */}
          <div className="space-y-3 md:col-span-1">
            <div className="font-bold text-sm tracking-tight cursor-pointer" onClick={scrollToTop}>
              {profileData.name.toUpperCase()}
            </div>
            <p className="text-neutral-500 leading-relaxed font-sans text-xs">
              Systems &amp; Distributed Platforms Engineer. Focus on edge AI acceleration, zero-wait pipelines, and transactional correctness.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <div className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
              <li>
                <button onClick={() => handleNavClick('#hero')} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#about')} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#projects')} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#skills')} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#contact')} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-2.5">
            <div className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Projects
            </div>
            <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
              {projectsData.map((project) => (
                <li key={project.id}>
                  <Link href={`/projects/${project.id}`} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-2.5">
            <div className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Links
            </div>
            <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
              <li>
                <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={profileData.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  X / Twitter ↗
                </a>
              </li>
              <li>
                <a href={profileData.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            [ Back to Top ↑ ]
          </button>
        </div>
      </div>
    </footer>
  )
}