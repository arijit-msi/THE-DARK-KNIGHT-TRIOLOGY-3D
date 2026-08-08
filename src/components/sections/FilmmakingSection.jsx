import React from 'react';
import { motion } from 'framer-motion';
import { FILMMAKING_PILLARS } from '../../data/trilogyData';
import { Camera, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function FilmmakingSection() {
  const icons = [ShieldCheck, Camera, Layers, Cpu];

  return (
    <section id="filmmaking" className="relative py-32 px-6 bg-[#030406] text-slate-100 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-bebas text-sm tracking-[0.3em] text-amber-400 block mb-2">
            PRACTICAL CINEMATOGRAPHY & CRAFT
          </span>
          <h2 className="font-cinzel text-4xl md:text-6xl font-black tracking-widest text-slate-100 uppercase glow-amber">
            BEHIND THE MASK
          </h2>
          <p className="font-inter text-slate-400 text-xs md:text-sm tracking-widest mt-2 max-w-xl mx-auto">
            Nolan's uncompromising commitment to real physical stunts, 70mm IMAX framing, and tangible production design.
          </p>
        </motion.div>

        {/* Parallax Grid Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FILMMAKING_PILLARS.map((pillar, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: idx % 2 === 0 ? 40 : 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="p-8 rounded-3xl border border-slate-800 bg-[#080b12]/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bebas text-xs tracking-widest rounded">
                      {pillar.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-cinzel text-2xl font-black tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors mb-4">
                    {pillar.title}
                  </h3>

                  <p className="font-inter text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bebas tracking-widest text-slate-400">
                  <span>IMAX 70MM SPECIFICATION</span>
                  <span className="text-amber-400">AUTHENTIC</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
