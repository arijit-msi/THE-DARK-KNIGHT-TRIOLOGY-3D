import React from 'react';
import { motion } from 'framer-motion';
import { TRILOGY_MOVIES } from '../../data/trilogyData';

export default function RisesSection() {
  const movie = TRILOGY_MOVIES[2];

  return (
    <section
      id="rises"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 text-slate-100 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/assets/rises-bg.jpg')` }}
      />

      {/* Lightened Cinematic Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/50 via-transparent to-[#050608]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050608]/70 pointer-events-none" />

      {/* Cold Ice Blue Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Story & Hero Quote */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="p-8 rounded-3xl border border-slate-800/80 bg-[#050810]/80 backdrop-blur-2xl shadow-2xl">
            <h3 className="font-bebas text-2xl tracking-widest text-blue-400 mb-4">
              THE REBIRTH FROM THE PIT
            </h3>
            <p className="font-inter text-slate-300 text-base md:text-lg leading-relaxed mb-8">
              {movie.story}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {movie.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs font-inter text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Quote Header */}
            <div className="p-6 rounded-2xl border border-blue-500/30 bg-blue-950/30 text-center">
              <span className="font-bebas text-xs tracking-widest text-blue-300 block mb-1">
                THE FINAL REVELATION
              </span>
              <h4 className="font-cinzel text-2xl md:text-4xl font-black text-slate-100 uppercase tracking-widest glow-blue">
                "A HERO CAN BE ANYONE."
              </h4>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-blue-900/40 bg-blue-950/20 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">BOX OFFICE</span>
              <span className="font-bebas text-xl md:text-2xl text-blue-400 font-bold">{movie.boxOffice}</span>
            </div>
            <div className="p-4 rounded-xl border border-blue-900/40 bg-blue-950/20 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">IMDB RATING</span>
              <span className="font-bebas text-xl md:text-2xl text-blue-400 font-bold">{movie.imdbRating}</span>
            </div>
            <div className="p-4 rounded-xl border border-blue-900/40 bg-blue-950/20 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">ROTTEN TOMATOES</span>
              <span className="font-bebas text-xl md:text-2xl text-blue-400 font-bold">{movie.rottenTomatoes}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Number & Title */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col items-start lg:items-end text-left lg:text-right"
        >
          <div className="font-bebas text-7xl md:text-9xl text-blue-500/20 font-black tracking-wider leading-none">
            {movie.number}
          </div>
          <h2 className="font-cinzel text-5xl md:text-7xl font-black tracking-widest text-slate-100 uppercase mb-3 -mt-6">
            {movie.title}
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-blue-500/20 border border-blue-500/40 text-blue-400 font-bebas text-xl tracking-widest rounded">
              {movie.year}
            </span>
            <span className="font-bebas text-slate-400 text-2xl tracking-widest">
              {movie.subtitle}
            </span>
          </div>

          <div className="w-32 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded mb-8" />

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl text-left max-w-md">
            <span className="font-bebas text-xs tracking-widest text-blue-400 block mb-2">
              THEMATIC CLOSURE
            </span>
            <p className="font-cinzel text-xl font-bold text-slate-200">
              "{movie.theme}"
            </p>
            <p className="font-inter text-xs text-slate-400 mt-2">
              Bruce Wayne overcomes physical weakness and fear of death to sacrifice himself for Gotham's ultimate freedom.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
