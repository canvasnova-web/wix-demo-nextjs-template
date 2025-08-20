"use client";
import React, { useEffect, useRef, useState } from "react";
import { Zap, ArrowRight, Play, MonitorPlay, Box, Flag, ChevronLeft, ChevronRight, X } from "lucide-react"
import Gallery from "../Gallery/Gallery";

const TOTAL = 23;
const images = Array.from({ length: TOTAL }).map((_, i) => ({
  src: `/images/home-gallery/gallery-image-${i + 1}.jpeg`,
  alt: `Gallery image ${i + 1}`,
}))

export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRef = useRef(null);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.4}px)`,
  };

  return (
    <section className="mx-auto w-full lg:w-[85vw] max-w-[1500px] px-[clamp(16px,4vw,40px)] lg:px-10 pt-[clamp(24px,5vw,56px)] pb-[clamp(24px,5vw,56px)]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-center gap-[clamp(24px,4vw,48px)]">
        {/* Left Column - Text and Actions */}
        <div className="space-y-[clamp(16px,2vw,20px)]">
          <h1 className="text-[clamp(28px,6vw,70px)] leading-[1.05] tracking-[-0.01em] font-bold text-slate-900">Ihre Vision wird zu Galeriekunst</h1>
          <p className="text-[clamp(16px,2.2vw,20px)] text-slate-700 leading-relaxed max-w-[62ch]">
            Einzigartige KI-Kunstwerke in Galeriequalität. In Deutschland gefertigt und auf Langlebigkeit ausgelegt –
            individuell für Sie gestaltet, in nur wenigen Minuten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-[clamp(16px,2vw,20px)]">
            <button
              className="bg-[#0F172A] text-white rounded-[12px] inline-flex items-center justify-center gap-2 px-[clamp(16px,2.2vw,24px)] py-[clamp(10px,1.6vw,14px)] text-[clamp(14px,1.2vw,16px)] font-medium hover:opacity-95 focus-visible:ring-2 ring-offset-2 ring-[#0F172A]/50 transition-all flex-1"
              aria-label="Kunstwerk erstellen"
            >
              <Zap className="w-4 h-4" />
              Kunstwerk erstellen
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              className="border border-slate-300 bg-white text-slate-900 rounded-[12px] inline-flex items-center justify-center gap-2 px-[clamp(16px,2.2vw,24px)] py-[clamp(10px,1.6vw,14px)] text-[clamp(14px,1.2vw,16px)] font-medium hover:bg-slate-50 focus-visible:ring-2 ring-offset-2 ring-slate-300 transition-all flex-1"
              aria-label="Beispiele ansehen"
            >
              <Play className="w-4 h-4" />
              Beispiele ansehen
            </button>
          </div>

          {/* Feature Strip */}
          <div className="mt-[clamp(16px,2vw,20px)] flex items-center justify-between text-slate-500 text-[clamp(12px,1.5vw,14px)]">
            <div className="flex items-center gap-2">
              <MonitorPlay className="w-4 h-4" />
              <span className="hidden sm:inline">Live-Vorschau auf Website</span>
              <span className="sm:hidden">Live-Vorschau</span>
            </div>
            <div className="flex items-center gap-2">
              <Box className="w-4 h-4" />
              <span className="hidden sm:inline">Sichere Kunstverpackung</span>
              <span className="sm:hidden">Sicher verpackt</span>
            </div>
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4" />
              <span className="hidden sm:inline">Made in Germany</span>
            </div>
          </div>
        </div>
        <Gallery images={images} showPriceBadge />
      </div>
    </section>
  );
}
