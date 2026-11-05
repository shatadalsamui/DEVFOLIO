'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import profileData from '@/data/profile.json'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800' 
          : 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-200/50 dark:border-neutral-800/50'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Masthead Identity */}
          <div 
            className="flex items-baseline space-x-2.5 cursor-pointer select-none"
            onClick={() => scrollToSection('hero')}
          >
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 text-base">
              {profileData.name}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-500 dark:text-neutral-400">
              Systems Engineer
            </span>
          </div>
          
          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium transition-colors"
            >
              Contact
            </button>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-2.5 py-1 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Direct Action */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-xs font-mono text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800"
            >
              Projects
            </button>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono px-2 py-1 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 rounded"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}