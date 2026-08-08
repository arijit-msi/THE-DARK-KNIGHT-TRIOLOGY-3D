import React from 'react';
import { motion } from 'framer-motion';
import { TRILOGY_STATS } from '../../data/trilogyData';

export default function StatsSection() {
  return (
    <section className="relative py-24 px-6 bg-[#030406] text-slate-100 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRILOGY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl border border-slate-800/80 bg-[#080b12]/60 backdrop-blur-xl text-center flex flex-col items-center justify-center hover:border-amber-500/40 transition-colors shadow-xl"
            >
              <span className="font-cinzel text-5xl sm:text-7xl font-black text-amber-400 glow-amber tracking-tight mb-2">
                {stat.value}
              </span>
              <h3 className="font-bebas text-xl md:text-2xl tracking-[0.2em] text-slate-100 mb-1">
                {stat.label}
              </h3>
              <p className="font-inter text-xs tracking-widest text-slate-400">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
