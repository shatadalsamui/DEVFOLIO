"use client";

import { getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLightboxModal, { LightboxImage } from "@/components/ImageLightboxModal";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = use(params);
  const project = getProjectById(id);
  if (!project) return notFound();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages: LightboxImage[] = project.gallery && project.gallery.length > 0
    ? project.gallery.map((item) =>
        typeof item === "string" ? { url: item, caption: project.title } : item
      )
    : project.image
    ? [{ url: project.image, caption: `${project.title} Interface & Telemetry` }]
    : [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const hasValidVideo = project.videoUrl && !project.videoUrl.includes("YOUR_VIDEO_ID");

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/50 dark:bg-neutral-950">
        <article className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 sm:p-12">
          {/* Breadcrumb / Navigation */}
          <div className="pb-6 mb-8 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500">
            <Link
              href="/#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>←</span>
              <span>Back to Projects</span>
            </Link>
            <span className="uppercase">
              PROJECT // {project.id.toUpperCase()}
            </span>
          </div>

          {/* Report Header */}
          <header className="space-y-4 mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-base sm:text-lg font-medium text-neutral-600 dark:text-neutral-400">
                {project.subtitle}
              </p>
            )}

            {/* GitHub and Source Links */}
            {project.githubUrl && (
              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                >
                  <span>GitHub Repository</span>
                  <span>↗</span>
                </a>
              </div>
            )}
          </header>

          {/* Abstract / Summary */}
          <div className="p-4 bg-neutral-50 dark:bg-neutral-950/60 rounded border border-neutral-200 dark:border-neutral-800 mb-8">
            <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1.5">
              Overview
            </div>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {project.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-neutral-50 dark:bg-neutral-950/40 rounded border border-neutral-200 dark:border-neutral-800"
                >
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-neutral-100">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Visual Showcase (Video, Image, or Headless Architecture Banner) */}
          {hasValidVideo ? (
            <div className="mb-8 aspect-video rounded overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`${project.title} Architectural Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : project.image ? (
            <div className="mb-8 space-y-2">
              <div
                onClick={() => openLightbox(0)}
                className="group relative aspect-video rounded overflow-hidden bg-neutral-950 border border-neutral-200 dark:border-neutral-800 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} Visual Overview`}
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  priority
                  className="object-contain sm:object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-neutral-900/90 text-white text-xs font-mono border border-neutral-700/80 flex items-center gap-1.5 shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    Click to zoom &amp; inspect
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-1">
                <span>{project.title} Interface &amp; Telemetry</span>
                <span className="text-neutral-400">Click to expand</span>
              </div>
            </div>
          ) : (
            <div className="mb-8 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-900/90 p-6 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-neutral-800 text-[11px] text-neutral-400">
                <span className="flex items-center gap-2 font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Headless Backend Architecture &bull; No Graphical UI
                </span>
                <span className="text-neutral-500">Event-Driven Services</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-neutral-300">
                <div className="p-3 bg-neutral-950/60 rounded border border-neutral-800/80">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Execution Core</div>
                  <div className="text-neutral-200 font-medium">In-Memory Rust CLOB with FIFO Price-Time Priority</div>
                </div>
                <div className="p-3 bg-neutral-950/60 rounded border border-neutral-800/80">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Data Ingestion</div>
                  <div className="text-neutral-200 font-medium">Bun Poller &bull; Apache Kafka &bull; Express API</div>
                </div>
                <div className="p-3 bg-neutral-950/60 rounded border border-neutral-800/80">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">State &amp; Persistence</div>
                  <div className="text-neutral-200 font-medium">Atomic Redis OTP &bull; PostgreSQL via Prisma</div>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Image Gallery (if multiple screenshots exist) */}
          {galleryImages.length > 1 && (
            <div className="mb-10 p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/40">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-900 dark:text-neutral-100">
                    Application Screenshots &amp; Telemetry Views
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                    {galleryImages.length} Views
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500">
                  Click any image to zoom &amp; inspect details
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative rounded border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-950 cursor-pointer transition-all hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={img.url}
                        alt={img.caption || `Screenshot ${idx + 1}`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded bg-neutral-900/95 text-white text-[11px] font-mono border border-neutral-700 flex items-center gap-1 shadow">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                          Zoom
                        </span>
                      </div>
                    </div>
                    {img.caption && (
                      <div className="p-2.5 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {img.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Technologies & Architecture Pills */}
          {project.tags && project.tags.length > 0 && (
            <div className="mb-10 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2.5">
                Technologies:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Content */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <FormattedContent content={project.fullDescription} />
          </div>

          {/* End of Report Marker */}
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <span>PROJECT // {project.id.toUpperCase()}</span>
            <Link
              href="/#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              [ Back to Projects ↑ ]
            </Link>
          </div>
        </article>

        {/* Lightbox / Zoom Modal for Full-Resolution Inspection */}
        <ImageLightboxModal
          images={galleryImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      </main>
      <Footer />
    </>
  );
}

function renderFormattedInline(text: string): React.ReactNode {
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  const parts = text.split(regex);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-neutral-950 dark:text-neutral-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono text-xs border border-neutral-200 dark:border-neutral-700"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function FormattedContent({ content }: { content: string }) {
  // Parse content into blocks: code blocks (```...```) and text segments
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-6 text-neutral-800 dark:text-neutral-200">
      {parts.map((part, index) => {
        if (part.startsWith("```") && part.endsWith("```")) {
          // Extract code content
          const codeLines = part.slice(3, -3).replace(/^\w*\n/, "");
          return (
            <div key={index} className="my-6">
              <pre className="overflow-x-auto bg-neutral-950 text-neutral-200 font-mono text-xs sm:text-sm p-5 rounded border border-neutral-800 leading-relaxed whitespace-pre">
                <code>{codeLines}</code>
              </pre>
            </div>
          );
        }

        // Regular text block - process headings, bullets, paragraphs, and tables
        const lines = part.split("\n");
        const renderedElements: React.ReactNode[] = [];
        let currentParagraph: string[] = [];
        let currentTable: string[] = [];

        const flushParagraph = (key: string) => {
          if (currentParagraph.length > 0) {
            renderedElements.push(
              <p key={key} className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 my-4">
                {renderFormattedInline(currentParagraph.join(" "))}
              </p>
            );
            currentParagraph = [];
          }
        };

        const flushTable = (key: string) => {
          if (currentTable.length > 0) {
            const parsedRows = currentTable
              .map((rowStr) =>
                rowStr
                  .split("|")
                  .slice(1, -1)
                  .map((cell) => cell.trim())
              )
              .filter((row) => row.length > 0 && !row.every((cell) => /^[-:\s]+$/.test(cell)));

            if (parsedRows.length > 0) {
              const [headerRow, ...bodyRows] = parsedRows;
              renderedElements.push(
                <div key={key} className="overflow-x-auto my-6 rounded border border-neutral-200 dark:border-neutral-800">
                  <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800 text-xs sm:text-sm font-mono">
                    <thead className="bg-neutral-100 dark:bg-neutral-800/80">
                      <tr>
                        {headerRow.map((cell, cIdx) => (
                          <th key={cIdx} className="px-4 py-2.5 text-left font-semibold text-neutral-900 dark:text-neutral-100">
                            {renderFormattedInline(cell)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-900/40">
                      {bodyRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-2.5 text-neutral-700 dark:text-neutral-300 font-mono text-xs">
                              {renderFormattedInline(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            currentTable = [];
          }
        };

        lines.forEach((line, lineIdx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            flushParagraph(`p-${index}-${lineIdx}`);
            flushTable(`table-${index}-${lineIdx}`);
            return;
          }

          if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
            flushParagraph(`before-table-${index}-${lineIdx}`);
            currentTable.push(trimmed);
            return;
          }

          flushTable(`before-content-${index}-${lineIdx}`);

          if (trimmed.startsWith("# ")) {
            flushParagraph(`before-h1-${index}-${lineIdx}`);
            renderedElements.push(
              <h2
                key={`h1-${index}-${lineIdx}`}
                className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100"
              >
                {renderFormattedInline(trimmed.replace(/^#\s+/, ""))}
              </h2>
            );
          } else if (trimmed.startsWith("## ")) {
            flushParagraph(`before-h2-${index}-${lineIdx}`);
            renderedElements.push(
              <h3
                key={`h2-${index}-${lineIdx}`}
                className="text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-3 text-neutral-900 dark:text-neutral-100"
              >
                {renderFormattedInline(trimmed.replace(/^##\s+/, ""))}
              </h3>
            );
          } else if (trimmed.startsWith("### ")) {
            flushParagraph(`before-h3-${index}-${lineIdx}`);
            renderedElements.push(
              <h4
                key={`h3-${index}-${lineIdx}`}
                className="text-base sm:text-lg font-bold tracking-tight mt-6 mb-2 text-neutral-900 dark:text-neutral-100"
              >
                {renderFormattedInline(trimmed.replace(/^###\s+/, ""))}
              </h4>
            );
          } else if (trimmed.startsWith("• ")) {
            flushParagraph(`before-bullet-${index}-${lineIdx}`);
            renderedElements.push(
              <div
                key={`bullet-${index}-${lineIdx}`}
                className="flex items-start gap-2.5 my-2 text-base text-neutral-700 dark:text-neutral-300"
              >
                <span className="text-neutral-400 font-bold select-none">•</span>
                <span className="flex-1 leading-relaxed">{renderFormattedInline(trimmed.replace(/^•\s+/, ""))}</span>
              </div>
            );
          } else if (/^\d+\.\s+/.test(trimmed)) {
            flushParagraph(`before-num-${index}-${lineIdx}`);
            renderedElements.push(
              <h4
                key={`num-${index}-${lineIdx}`}
                className="text-base sm:text-lg font-bold mt-6 mb-2 text-neutral-900 dark:text-neutral-100 font-mono"
              >
                {renderFormattedInline(trimmed)}
              </h4>
            );
          } else {
            currentParagraph.push(trimmed);
          }
        });

        flushParagraph(`final-p-${index}`);
        flushTable(`final-table-${index}`);
        return <div key={index}>{renderedElements}</div>;
      })}
    </div>
  );
}
