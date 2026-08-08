import React from 'react';
import { motion } from 'framer-motion';
import { TRILOGY_MOVIES } from '../../data/trilogyData';

export default function DarkKnightSection() {
  const movie = TRILOGY_MOVIES[1];

  return (
    <section
      id="dark-knight"
      className="relative min-h-screen flex flex-col justify-center py-32 px-6 text-slate-100 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/assets/dark-knight-bg.jpg')` }}
      />

      {/* Lightened Cinematic Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/50 via-transparent to-[#050608]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050608]/70 pointer-events-none" />

      {/* Subtle Purple Chaos Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Animated Chaotic Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div className="font-bebas text-7xl md:text-9xl text-purple-500/20 font-black tracking-wider leading-none">
            {movie.number}
          </div>
          <h2 className="font-cinzel text-5xl md:text-7xl font-black tracking-widest text-slate-100 uppercase mb-3 -mt-6">
            {movie.title}
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3.5 py-1 bg-purple-500/20 border border-purple-500/40 text-purple-400 font-bebas text-xl tracking-widest rounded">
              {movie.year}
            </span>
            <span className="font-bebas text-slate-400 text-2xl tracking-widest">
              {movie.subtitle}
            </span>
          </div>

          {/* Animated "CHAOS HAS A FACE" Header */}
          <div className="mt-4 p-8 rounded-3xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(147,51,234,0.15)]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="font-bebas text-5xl sm:text-7xl font-black tracking-widest text-purple-400 leading-tight"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block">
                CHAOS
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block text-slate-100">
                HAS
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block text-green-400 glow-amber">
                A FACE.
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Story & Joker Symbolism */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="p-8 rounded-3xl border border-slate-800/80 bg-[#07050a]/80 backdrop-blur-2xl shadow-2xl">
            <h3 className="font-bebas text-2xl tracking-widest text-purple-400 mb-4">
              THE ULTIMATE TEST OF MORALITY
            </h3>
            <p className="font-inter text-slate-300 text-base md:text-lg leading-relaxed mb-8">
              {movie.story}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {movie.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs font-inter text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="border-l-4 border-purple-500 pl-4 py-2 italic font-cinzel text-slate-300 text-sm">
              "Some men aren't looking for anything logical, like money. They can't be bought, bullied, reasoned, or negotiated with. Some men just want to watch the world burn."
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-purple-900/40 bg-purple-950/20 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">BOX OFFICE</span>
              <span className="font-bebas text-xl md:text-2xl text-purple-400 font-bold">{movie.boxOffice}</span>
            </div>
            <div className="p-4 rounded-xl border border-purple-900/40 bg-purple-950/20 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">IMDB RATING</span>
              <span className="font-bebas text-xl md:text-2xl text-purple-400 font-bold">{movie.imdbRating}</span>
            </div>
            <div className="p-4 rounded-xl border border-purple-900/40 bg-purple-950/20 text-center">
              <span className="block font-bebas text-xs tracking-widest text-slate-400">ROTTEN TOMATOES</span>
              <span className="font-bebas text-xl md:text-2xl text-purple-400 font-bold">{movie.rottenTomatoes}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
