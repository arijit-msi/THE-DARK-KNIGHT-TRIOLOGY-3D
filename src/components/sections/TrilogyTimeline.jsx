import React from 'react';
import { motion } from 'framer-motion';
import { TRILOGY_MOVIES } from '../../data/trilogyData';
import { ArrowRight, Film } from 'lucide-react';

export default function TrilogyTimeline() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="timeline" className="relative py-28 px-6 bg-[#040507] text-slate-100 border-t border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-bebas text-sm tracking-[0.3em] text-amber-400 block mb-2">
            CHRONOLOGICAL ARCHITECTURE
          </span>
          <h2 className="font-cinzel text-4xl md:text-6xl font-black tracking-widest text-slate-100 uppercase glow-amber">
            THE LEGEND TIMELINE
          </h2>
          <p className="font-inter text-slate-400 text-xs md:text-sm tracking-widest mt-2 max-w-xl mx-auto">
            Click any milestone node to travel through Christopher Nolan's Gotham evolution.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-blue-500/20 -translate-y-1/2 z-0" />

          {TRILOGY_MOVIES.map((movie, idx) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              onClick={() => handleScrollTo(movie.id)}
              data-cursor="GO TO"
              className="relative z-10 p-8 rounded-3xl border border-slate-800 bg-[#080b12]/90 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bebas text-3xl text-amber-400 font-bold">
                    {movie.year}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                    <Film className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-cinzel text-xl font-black tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
                  {movie.title}
                </h3>
                <p className="font-bebas text-sm tracking-widest text-slate-400 mb-6">
                  {movie.subtitle}
                </p>

                <p className="font-inter text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                  {movie.story}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <span className="font-bebas text-xs tracking-widest text-amber-400">
                  EXPLORE FILM
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
