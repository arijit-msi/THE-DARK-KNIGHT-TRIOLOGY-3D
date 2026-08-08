import React from 'react';
import { motion } from 'framer-motion';
import { TRILOGY_MOVIES } from '../../data/trilogyData';

export default function BeginsSection() {
  const movie = TRILOGY_MOVIES[0];

  return (
    <section
      id="begins"
      className="relative min-h-screen flex items-center justify-center py-28 px-6 text-slate-100 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat opacity-80 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/assets/begins-bg.jpg')` }}
      />

      {/* Lightened Cinematic Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/50 via-transparent to-[#050608]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050608]/70 pointer-events-none" />
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Number & Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="font-bebas text-7xl md:text-9xl text-amber-500/20 font-black tracking-wider leading-none">
            {movie.number}
          </div>
          <h2 className="font-cinzel text-4xl md:text-6xl font-black tracking-widest text-slate-100 uppercase mb-3 -mt-6">
            {movie.title}
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bebas text-lg tracking-widest rounded">
              {movie.year}
            </span>
            <span className="font-bebas text-slate-400 text-xl tracking-widest">
              {movie.subtitle}
            </span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded mb-8" />
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
            <span className="font-bebas text-xs tracking-widest text-amber-400 block mb-2">
              THEMATIC CORE
            </span>
            <p className="font-cinzel text-2xl font-bold text-slate-200">
              "{movie.theme}"
            </p>
          </div>
        </motion.div>

        {/* Right Column: Story & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="p-8 rounded-3xl border border-slate-800/80 bg-[#080b10]/80 backdrop-blur-2xl shadow-2xl">
            <h3 className="font-bebas text-2xl tracking-widest text-amber-400 mb-4">
              THE ORIGIN STORY
            </h3>
            <p className="font-inter text-slate-300 text-base md:text-lg leading-relaxed whitespace-pre-line mb-8">
              {movie.story}
            </p>

            <h4 className="font-bebas text-sm tracking-widest text-slate-400 uppercase mb-4">
              KEY CINEMATIC HIGHLIGHTS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {movie.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-inter text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">BOX OFFICE</span>
              <span className="font-bebas text-xl md:text-2xl text-amber-400 font-bold">{movie.boxOffice}</span>
            </div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">IMDB RATING</span>
              <span className="font-bebas text-xl md:text-2xl text-amber-400 font-bold">{movie.imdbRating}</span>
            </div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">ROTTEN TOMATOES</span>
              <span className="font-bebas text-xl md:text-2xl text-amber-400 font-bold">{movie.rottenTomatoes}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
