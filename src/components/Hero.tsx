"use client";

import profileData from "@/data/profile.json";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto w-full">
        {/* Sub-header / Location */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <span className="uppercase tracking-wider">
            Systems &amp; Backend Engineering
          </span>
          <span className="text-neutral-400 dark:text-neutral-600">
            {profileData.contact.location}
          </span>
        </div>

        {/* Hero Title & Intro */}
        <div className="py-12 space-y-6">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
            Building low-latency systems, distributed services, and edge computer vision.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-4xl font-normal">
            {profileData.about[0]}
          </p>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
            {profileData.tagline}
          </p>
        </div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y border-neutral-200 dark:border-neutral-800">
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 rounded border border-neutral-200 dark:border-neutral-800">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1.5">
              01 {"//"} Edge AI &amp; Vision
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
              Edge Computer Vision &amp; CUDA
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
              Pipelined GPU inference, efficient GeoTIFF tiling, and native GPUI (Vulkan) desktop visualization.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 rounded border border-neutral-200 dark:border-neutral-800">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1.5">
              02 {"//"} Trading Engines
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
              Matching &amp; Trading Engines
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
              In-memory Rust CLOB engine with integer accounting, opposite position closing, and Kafka price streaming.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/60 rounded border border-neutral-200 dark:border-neutral-800">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1.5">
              03 {"//"} Transactional Backends
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
              Distributed Backends &amp; Ledgers
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
              Pessimistic row locking (SELECT ... FOR UPDATE), bank webhook idempotency, and balance escrow tracking.
            </p>
          </div>
        </div>

        {/* Action Directives */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900 font-medium text-sm rounded transition-colors"
            >
              View Projects ↓
            </a>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm rounded transition-colors"
            >
              Resume ↗
            </a>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm rounded transition-colors"
            >
              GitHub ↗
            </a>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono text-neutral-500">
            <a href={`mailto:${profileData.contact.email}`} className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
              email
            </a>
            <span>•</span>
            <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
              linkedin
            </a>
            <span>•</span>
            <a href={profileData.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
              x / twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}