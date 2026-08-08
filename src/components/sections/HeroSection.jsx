import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-between pt-32 pb-12 px-6 text-center select-none overflow-hidden"
    >
      {/* High-Definition Batman Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
      />

      {/* Lightened Cinematic Gradient Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/50 via-transparent to-[#050608]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050608]/70 pointer-events-none" />

      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10"
      >
        <span className="font-bebas text-sm md:text-lg tracking-[0.4em] text-amber-400/80 px-4 py-1.5 rounded-full border border-amber-500/20 bg-slate-950/60 backdrop-blur-md">
          CHRISTOPHER NOLAN'S CINEMATIC MASTERPIECE
        </span>
      </motion.div>

      {/* Main Monumental Typography */}
      <div className="z-10 my-auto py-12 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.15em] text-slate-100 uppercase glow-amber leading-none mb-4"
        >
          THE DARK KNIGHT
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-bebas text-2xl sm:text-4xl md:text-5xl tracking-[0.4em] text-amber-400 font-bold mb-8"
        >
          TRILOGY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 font-inter text-xs sm:text-sm tracking-[0.25em] text-slate-400 font-semibold"
        >
          <span>THE LEGEND BEGINS.</span>
          <span className="hidden sm:inline text-amber-500">•</span>
          <span>THE DARKNESS RISES.</span>
          <span className="hidden sm:inline text-amber-500">•</span>
          <span>THE LEGEND ENDS.</span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#begins"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        data-cursor="SCROLL"
        className="z-10 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="font-bebas text-xs tracking-[0.3em] text-slate-400 group-hover:text-amber-400 transition-colors">
          SCROLL TO ENTER GOTHAM
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
