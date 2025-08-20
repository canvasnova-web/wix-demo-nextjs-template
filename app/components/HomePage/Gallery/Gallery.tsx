"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"
import { Zap, ChevronLeft, ChevronRight, X } from "lucide-react"

interface GalleryImage {
    src: string;
    alt: string;
}

interface GalleryProps {
    images: GalleryImage[];
    showTopBadges?: boolean;
    showPriceBadge?: boolean;
}

const TOTAL = 23;

const images = Array.from({ length: TOTAL }).map((_, i) => ({
  src: `/images/home-gallery/gallery-image-${i + 1}.jpeg`,
  alt: `Gallery image ${i + 1}`,
}))

export default function Gallery({images, showTopBadges = true, showPriceBadge = false}: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const openLightbox = (index?: number) => {
        if (index !== undefined) setCurrentIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!lightboxOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowLeft") prevImage()
            if (e.key === "ArrowRight") nextImage()
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [lightboxOpen])

    // Focus trap for lightbox
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [lightboxOpen])

    return (
        <>
            {/* Right Column - Media Card */}
            <div className="relative rounded-[20px] bg-white shadow-2xl overflow-hidden p-[clamp(10px,1.6vw,16px)]">
                {/* Top Badges */}
                {showTopBadges && (
                    <>
                        <div className="absolute top-4 md:top-5 left-4 md:left-5 z-10">
                            <span className="rounded-[12px] bg-[#0F172A] text-white text-[12px] md:text-[13px] px-3.5 md:px-4 py-1.5 md:py-2 shadow-md">
                                Made in Germany
                            </span>
                        </div>
                        <div className="absolute top-4 md:top-5 right-4 md:right-5 z-10">
                            <span className="rounded-[12px] bg-white bg-opacity-[0.94] text-[12px] md:text-[13px] px-3.5 md:px-4 py-1.5 md:py-2 shadow-md">
                                Galeriequalität
                            </span>
                        </div>
                    </>
                )}

                {/* Main Preview Area */}
                <div className="relative overflow-hidden rounded-[16px] aspect-[8/5] lg:aspect-[7/5]">
                    <Image
                        src={images[currentIndex].src || "/placeholder.svg"}
                        alt={images[currentIndex].alt}
                        fill
                        className="object-contain cursor-pointer bg-slate-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onClick={() => openLightbox()}
                    />

                    {/* Carousel Arrows */}
                    <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center size-16 md:size-14 rounded-full bg-white/75 text-slate-800 ring-[3px] md:ring-4 ring-white/90 shadow-md backdrop-blur hover:bg-white/90 hover:ring-white focus-visible:outline-none focus-visible:ring-[4px]"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center size-12 md:size-14 rounded-full bg-white/75 text-slate-800 ring-[3px] md:ring-4 ring-white/90 shadow-md backdrop-blur hover:bg-white/90 hover:ring-white focus-visible:outline-none focus-visible:ring-[4px]"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="mt-[clamp(10px,1.5vw,14px)] thumbs-outer">
                    <div className="thumbs-inner flex gap-2 pb-1">
                        {images.map((image, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative h-[85px] w-[85px] md:h-[95px] md:w-[95px] rounded-[10px] overflow-hidden flex-shrink-0 ring-1 ring-slate-200 transition-all focus-visible:ring-2 focus-visible:ring-[#0F172A] ${
                                index === currentIndex ? "ring-2 ring-[#0F172A]" : ""
                            }`}
                            aria-label={`View ${image.alt}`}
                            aria-pressed={index === currentIndex}
                            >
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="110px"
                            />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Badge */}
                {showPriceBadge && (
                    <div className="absolute left-5 bottom-[20px] sm:bottom-[20px] z-20 pointer-events-none"> 
                        <div className="inline-flex flex-col items-center justify-center rounded-[16px] bg-white/90  shadow-lg ring-1 ring-black/5 px-3 py-3 md:px-3 md:py-3.5 max-w-[70vw]"> 
                            <span className="text-[22px] leading-none font-bold [color:#5F797D]"> ab 38€ </span> 
                            <span className="mt-1 text-[11px] leading-none [color:#525252]"> inkl. Versand </span> 
                        </div> 
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="lightbox-image"
                onClick={closeLightbox}
                >
                    <div
                        className="relative flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                        id="lightbox-image"
                        src={images[currentIndex].src || "/placeholder.svg"}
                        alt={images[currentIndex].alt}
                        width={1200}
                        height={800}
                        className="block object-contain max-w-[95vw] md:max-w-[96vw] lg:max-w-[98vw] max-h-[88vh] md:max-h-[90vh]"
                        sizes="(max-width: 768px) 100vw, 95vw"
                        priority
                        />

                        <button
                        onClick={closeLightbox}
                        className="fixed top-[clamp(8px,2vw,20px)] right-[clamp(8px,2vw,20px)] z-[60] grid place-items-center rounded-full p-2 text-white/90 hover:text-white bg-white/30 hover:bg-black/40 backdrop-blur-sm transition shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        aria-label="Close lightbox"
                        >
                        <X className="w-7 h-7 md:w-8 md:h-8" />
                        </button>

                        {/* Lightbox Navigation */}
                        <button
                        onClick={prevImage}
                        className="fixed left-[clamp(10px,2vw,28px)] top-1/2 -translate-y-1/2 z- grid place-items-center rounded-full p-2 text-white/90 hover:text-white bg-white/30 hover:bg-black/40 backdrop-blur-sm transition shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        aria-label="Previous image"
                        >
                        <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
                        </button>

                        <button
                        onClick={nextImage}
                        className="fixed right-[clamp(10px,2vw,28px)] top-1/2 -translate-y-1/2 z- grid place-items-center rounded-full p-2 text-white/90 hover:text-white bg-white/30 hover:bg-black/40 backdrop-blur-sm transition shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        aria-label="Next image"
                        >
                        <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}