import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Film, Award, Sparkles, Sun, Eye, Layers } from 'lucide-react';

export default function PfisterModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#040508]/60 backdrop-blur-md text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200"
        >
          {/* Uploaded High-Definition Wally Pfister Background Image */}
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('/assets/wally-bg.jpg')` }}
          />

          {/* Cinematic Vignette Overlays for Maximum Readability */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#040508]/60 via-[#040508]/40 to-[#040508]/85 pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040508]/50 to-[#040508]/90 pointer-events-none" />

          {/* Top Header Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-6 border-b border-slate-800/80 bg-[#040508]/85 backdrop-blur-xl max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bebas text-xs tracking-[0.3em] text-amber-400 block">
                  CINEMATOGRAPHER SPOTLIGHT
                </span>
                <h2 className="font-cinzel text-lg font-bold tracking-widest text-slate-100 uppercase">
                  WALLY PFISTER, ASC
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/80 hover:border-amber-400/60 hover:bg-slate-800 text-slate-300 hover:text-amber-400 transition-all duration-300 text-xs font-bebas tracking-widest"
            >
              <span>CLOSE SHOWCASE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content Body */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
            {/* Title Banner */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-bebas text-sm tracking-[0.3em] inline-block mb-4">
                OSCAR-WINNING MASTER OF LIGHT & FILM
              </span>
              <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-slate-100 uppercase glow-amber mb-4">
                WALLY PFISTER
              </h1>
              <p className="font-bebas text-xl md:text-3xl tracking-[0.3em] text-amber-400/90 max-w-3xl mx-auto">
                THE CINEMATOGRAPHY JOURNEY BEHIND THE DARK KNIGHT TRILOGY
              </p>
            </motion.div>

            {/* Chapters Grid */}
            <div className="space-y-12">
              {/* Chapter 1: Batman Begins */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-8 rounded-3xl border border-slate-800 bg-[#080b14]/90 backdrop-blur-2xl shadow-2xl hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bebas text-2xl text-amber-400 font-bold">CINEMA CHAPTER 01</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">BATMAN BEGINS (2005)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  GROUNDING GOTHAM IN TACTILE URBAN NOIR
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  When Wally Pfister reunited with Christopher Nolan for <em>Batman Begins</em>, their goal was revolutionary: rescue Batman from comic-book campiness and craft a grounded, dark psychological film noir. Pfister eschewed digital backdrops, preferring to shoot on physical 35mm film across the frozen glaciers of Iceland and the rain-drenched streets of Chicago.
                </p>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  He established Gotham’s signature photographic identity using high-contrast chiaroscuro lighting, deep impenetrable blacks, and warm sodium-vapor lamp glows to evoke a living, decaying metropolis.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-cinzel text-xs text-amber-300 italic">
                  "We wanted Gotham to feel dirty, wet, and real. You should feel the steam rising off the wet asphalt and the suffocating weight of dark alleyway shadows." — Wally Pfister, ASC
                </div>
              </motion.div>

              {/* Chapter 2: The Dark Knight */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-8 rounded-3xl border border-purple-900/40 bg-[#0a0714]/90 backdrop-blur-2xl shadow-2xl hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bebas text-2xl text-purple-400 font-bold">CINEMA CHAPTER 02</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">THE DARK KNIGHT (2008)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE IMAX 70MM REVOLUTION & ACADEMY NOMINATION
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  With <em>The Dark Knight</em>, Pfister and Nolan made cinematic history by becoming the first filmmakers to shoot major feature sequences with massive 15-perforation 70mm IMAX cameras. Pfister wrestled 60-pound IMAX cameras onto moving rigs, helicopters, and hand-held mounts to film the bank heist, the Tumbler chase through Chicago’s Wacker Drive, and the iconic flipping of an 18-wheeler semi-truck on LaSalle Street.
                </p>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  His lighting palette evolved into a stark contrast between icy blue Gotham nightscapes and searing, explosive orange hues, earning him an <strong>Academy Award Nomination for Best Cinematography</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">IMAX 15/70MM FORMAT</span>
                    <p className="font-inter text-xs text-slate-300">18,000 horizontal pixels of photographic detail on 70mm physical film stock.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">NO DIGITAL INTERMEDIATE</span>
                    <p className="font-inter text-xs text-slate-300">Pure photochemical color timing preserving authentic film grain texture.</p>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 3: The Dark Knight Rises */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="p-8 rounded-3xl border border-blue-900/40 bg-[#060914]/90 backdrop-blur-2xl shadow-2xl hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bebas text-2xl text-blue-400 font-bold">CINEMA CHAPTER 03</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">THE DARK KNIGHT RISES (2012)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE GRAND DAYLIGHT IMAX EPIC & TRILOGY CULMINATION
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  For the grand conclusion, Pfister expanded IMAX photography to over 72 minutes of screen time. He tackled immense lighting challenges, transitioning Gotham from night shadow into harsh, snow-swept daylight battles on Wall Street featuring 11,000 extras, high-altitude aerial plane hijacks over the Scottish Highlands, and oppressive claustrophobia inside Bane's Pit.
                </p>
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/30 font-inter text-xs text-slate-300">
                  Pfister’s work across the trilogy redefined superhero visual language worldwide, cementing his partnership with Nolan as one of cinema history's most iconic director-cinematographer duos.
                </div>
              </motion.div>

              {/* Pfister's Cinematography Commandments */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-8 rounded-3xl border border-amber-500/40 bg-[#090b14]/90 backdrop-blur-2xl shadow-2xl"
              >
                <h4 className="font-bebas text-xl tracking-widest text-amber-400 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  PFISTER'S CINEMATOGRAPHY PILLARS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Film className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">PHYSICAL FILM STOCK ALWAYS</h5>
                      <p className="font-inter text-xs text-slate-400">Strictly shooting on Kodak 35mm anamorphic & 70mm IMAX film rather than digital sensors.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">CHIAROSCURO & DIRECTIONAL LIGHT</h5>
                      <p className="font-inter text-xs text-slate-400">Creating dramatic contrast with practical lights, deep shadow falloffs, and rich black levels.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">KINETIC OPERATOR CAMERAWORK</h5>
                      <p className="font-inter text-xs text-slate-400">Personally operating the camera on handheld & Steadicam rigs for intense intimacy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">4 ACADEMY AWARD NOMINATIONS</h5>
                      <p className="font-inter text-xs text-slate-400">Nominated for Batman Begins, The Prestige, The Dark Knight, and winning the Oscar for Inception.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Close Action */}
            <div className="text-center mt-12 mb-8">
              <button
                onClick={onClose}
                className="px-8 py-3.5 rounded-full border border-amber-400 bg-amber-500/20 text-amber-300 font-bebas text-lg tracking-[0.2em] hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                RETURN TO TRILOGY
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
