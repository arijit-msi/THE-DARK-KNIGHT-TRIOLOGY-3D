import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RotateCcw } from 'lucide-react';

export default function BatmobileSection({
  headlightsOn,
  onToggleHeadlights,
  tumblerInteractive,
  onToggleInteractive
}) {
  return (
    <section id="batmobile" className="relative min-h-screen flex flex-col justify-between py-24 px-6 text-slate-100 bg-transparent overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/assets/tumbler-bg.jpg')` }}
      />

      {/* Lightened Cinematic Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/50 via-transparent to-[#050608]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050608]/70 pointer-events-none" />

      {/* Top Header Overlay */}
      <div className="max-w-6xl w-full mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-bebas text-sm tracking-[0.3em] text-amber-400 block mb-2">
            ADVANCED MILITARY STEALTH ARMOR
          </span>
          <h2 className="font-cinzel text-5xl md:text-7xl font-black tracking-widest text-slate-100 uppercase glow-amber mb-2">
            THE TUMBLER
          </h2>
          <p className="font-inter text-slate-400 text-xs md:text-sm tracking-widest">
            A 5.7-liter V8 powered urban assault vehicle capable of unassisted 30-foot ramp jumps.
          </p>
        </motion.div>
      </div>

      {/* Center 3D Space Reserve - Actual canvas renders in background */}

      {/* Bottom Interactive Control Panel Overlay */}
      <div className="max-w-4xl w-full mx-auto z-10 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl border border-slate-800/90 bg-[#06080e]/80 backdrop-blur-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Instructions */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 animate-pulse">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bebas text-sm tracking-widest text-amber-400 block">
                INTERACTIVE 3D MODEL
              </span>
              <p className="font-inter text-xs text-slate-300">
                {tumblerInteractive
                  ? 'DRAG TO ROTATE 360° AROUND THE TUMBLER'
                  : 'CLICK INTERACT TO ROTATE THE MODEL'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Toggle Orbit Controls */}
            <button
              onClick={onToggleInteractive}
              data-cursor="ROTATE"
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-full font-bebas text-sm tracking-widest transition-all duration-300 ${
                tumblerInteractive
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.5)]'
                  : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-amber-400/50'
              }`}
            >
              {tumblerInteractive ? 'FREE ROTATE ON' : 'DRAG TO ROTATE'}
            </button>

            {/* Toggle Headlights */}
            <button
              onClick={onToggleHeadlights}
              className="p-2.5 rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
              title="Toggle Headlights"
            >
              <Lightbulb className={`w-5 h-5 ${headlightsOn ? 'text-amber-400 fill-amber-400' : ''}`} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
