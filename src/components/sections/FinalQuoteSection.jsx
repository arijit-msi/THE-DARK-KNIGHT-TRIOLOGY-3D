import React from 'react';
import { motion } from 'framer-motion';

export default function FinalQuoteSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#020304] text-slate-100 px-6 py-32 text-center select-none border-b border-slate-900 overflow-hidden">
      {/* High-Definition Dark Knight Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105 pointer-events-none transition-all duration-1000"
        style={{ backgroundImage: `url('/assets/final-quote-bg.jpg')` }}
      />

      {/* Cinematic Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020304] via-[#020304]/50 to-[#020304] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#020304]/60 to-[#020304] pointer-events-none" />

      {/* Foreground Quote Narrative */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-12">
        {/* Quote Step 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="font-inter text-sm md:text-xl tracking-[0.3em] text-slate-300 font-semibold drop-shadow-md"
        >
          SOME HEROES ARE FORGOTTEN.
        </motion.p>

        {/* Quote Step 2 */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.2em] text-amber-300 uppercase glow-amber drop-shadow-2xl"
        >
          SOME LEGENDS NEVER DIE.
        </motion.h3>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '120px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="h-1 bg-amber-500/60 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"
        />

        {/* Sub-quote Step 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-bebas text-3xl md:text-5xl tracking-[0.3em] text-slate-100 drop-shadow-lg">
            THE DARK KNIGHT
          </span>
          <span className="font-bebas text-lg md:text-2xl tracking-[0.4em] text-amber-400 font-bold drop-shadow">
            THE LEGEND LIVES ON.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
