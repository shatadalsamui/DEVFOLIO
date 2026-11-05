"use client";

import Link from "next/link";
import Image from "next/image";
import { projects as projectData } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function Projects() {
  const projects = projectData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Systems programming, distributed trading infrastructure, and transactional backend services.
          </p>
        </div>

        {/* Project Entries */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <ProjectEntry key={project.id} project={project} index={idx + 1} />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-500">
          <span>All projects include benchmarks and technical documentation</span>
          <a
            href="https://github.com/shatadalsamui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
          >
            More on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  return (
    <article className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 rounded-lg overflow-hidden transition-colors">
      {/* Entry Masthead */}
      <div className="p-6 sm:p-8 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1.5">
            PROJECT {formattedIndex}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-center px-3.5 py-1.5 text-xs font-mono border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded transition-colors inline-flex items-center gap-1.5"
          >
            <span>Repository</span>
            <span>↗</span>
          </a>
        )}
      </div>

      {/* Main Content Grid */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Technical Preview or Headless Architecture Card */}
        {project.image ? (
          <div className="relative aspect-video rounded border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-950">
            <Image
              src={project.image}
              alt={`${project.title} Preview`}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain sm:object-cover object-top"
            />
          </div>
        ) : (
          <div className="rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-900/90 p-5 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
              <span className="flex items-center gap-2 font-medium">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Backend Engine Architecture &bull; Headless Service
              </span>
              <span className="text-neutral-500">No Graphical UI Required</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-neutral-300">
              <div className="p-3 bg-neutral-950/60 rounded border border-neutral-800/80">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Service Modules</div>
                <div className="text-neutral-200 font-medium">Matching Engine &bull; WS Poller &bull; DB Processor</div>
              </div>
              <div className="p-3 bg-neutral-950/60 rounded border border-neutral-800/80">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Message Pipeline</div>
                <div className="text-neutral-200 font-medium">Backpack WS &rarr; Kafka Bus &rarr; Redis &rarr; Clients</div>
              </div>
              <div className="p-3 bg-neutral-950/60 rounded border border-neutral-800/80">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Accounting Model</div>
                <div className="text-neutral-200 font-medium">Integer Cents (Zero Floating-Point Drift)</div>
              </div>
            </div>
          </div>
        )}

        {/* Executive Summary */}
        <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {project.description}
        </p>

        {/* Verified Performance Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {project.metrics.map((metric, mIdx) => (
              <div 
                key={mIdx}
                className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800"
              >
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 font-mono">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Core Technologies */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Project View Action */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
          <Link
            href={`/projects/${project.id}`}
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:underline inline-flex items-center gap-1.5 group"
          >
            <span>View Project &amp; Architecture Details</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}