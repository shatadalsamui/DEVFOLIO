"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export interface LightboxImage {
  url: string;
  caption?: string;
}

interface ImageLightboxModalProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightboxModal({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: ImageLightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
      setPan({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  }, [images.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const toggleZoom = () => {
    if (zoomLevel > 1) {
      handleResetZoom();
    } else {
      setZoomLevel(2);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Pan dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-opacity select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800/80 bg-neutral-950/80 text-white z-20">
        {/* Left: Counter & Status */}
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
          <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="hidden sm:inline text-neutral-400">
            Zoom: {Math.round(zoomLevel * 100)}%
          </span>
          {zoomLevel > 1 && (
            <span className="hidden sm:inline text-emerald-400 text-[11px]">
              &bull; Drag to pan
            </span>
          )}
        </div>

        {/* Center: Zoom Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 1}
            aria-label="Zoom out"
            className="p-1.5 sm:px-2.5 sm:py-1 rounded text-xs font-mono bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white"
            title="Zoom Out (-)"
          >
            &minus;
          </button>
          <button
            onClick={handleResetZoom}
            aria-label="Reset zoom"
            className="px-2.5 py-1 rounded text-xs font-mono bg-neutral-800 hover:bg-neutral-700 transition-colors text-neutral-300"
            title="Reset (0)"
          >
            Fit
          </button>
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 3.5}
            aria-label="Zoom in"
            className="p-1.5 sm:px-2.5 sm:py-1 rounded text-xs font-mono bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white"
            title="Zoom In (+)"
          >
            +
          </button>
        </div>

        {/* Right: Close Button */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[11px] font-mono text-neutral-500">
            [ESC to close]
          </span>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden cursor-default"
        onClick={(e) => {
          // If clicked directly on background, close
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Navigation Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 text-white hover:scale-105 transition-transform"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Zoomable Image Wrapper */}
        <div
          onMouseDown={handleMouseDown}
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom();
          }}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
            transition: isDragging ? "none" : "transform 0.2s ease-out",
            cursor:
              zoomLevel > 1
                ? isDragging
                  ? "grabbing"
                  : "grab"
                : "zoom-in",
          }}
          className="relative max-w-[90vw] max-h-[75vh] w-[1200px] h-[675px] flex items-center justify-center select-none"
        >
          <Image
            src={currentImg.url}
            alt={currentImg.caption || "Preview"}
            fill
            sizes="90vw"
            priority
            draggable={false}
            className="object-contain"
          />
        </div>

        {/* Navigation Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 text-white hover:scale-105 transition-transform"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom Information & Thumbnails Bar */}
      <div className="z-20 px-4 sm:px-6 py-3 bg-neutral-950/90 border-t border-neutral-800/80">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Caption */}
          <div className="text-xs text-neutral-300 font-mono text-center sm:text-left line-clamp-2">
            {currentImg.caption || "Screenshot Preview"}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setZoomLevel(1);
                    setPan({ x: 0, y: 0 });
                  }}
                  className={`relative w-14 h-9 rounded overflow-hidden border transition-all ${
                    currentIndex === idx
                      ? "border-neutral-100 ring-2 ring-neutral-400 scale-105"
                      : "border-neutral-700 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

