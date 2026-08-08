import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Film, Award, Sparkles, ShieldCheck } from 'lucide-react';

export default function NolanModal({ isOpen, onClose }) {
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
          {/* High-Definition Christopher Nolan Background Image */}
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-95 pointer-events-none scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('/assets/nolan-bg.jpg')` }}
          />

          {/* Lightened Vignette Overlays */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#040508]/40 via-transparent to-[#040508]/75 pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#040508]/60 pointer-events-none" />

          {/* Modal Top Header Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-6 border-b border-slate-800/80 bg-[#040508]/80 backdrop-blur-xl max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bebas text-xs tracking-[0.3em] text-amber-400 block">
                  DIRECTOR SPOTLIGHT
                </span>
                <h2 className="font-cinzel text-lg font-bold tracking-widest text-slate-100 uppercase">
                  CHRISTOPHER NOLAN
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
                IMAX 70MM VISIONARY
              </span>
              <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-slate-100 uppercase glow-amber mb-4">
                CHRISTOPHER NOLAN
              </h1>
              <p className="font-bebas text-xl md:text-3xl tracking-[0.3em] text-amber-400/90 max-w-2xl mx-auto">
                THE DIRECTORIAL JOURNEY BEHIND THE DARK KNIGHT TRILOGY
              </p>
            </motion.div>

            {/* Chapters Grid */}
            <div className="space-y-12">
              {/* Chapter 1 */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="p-8 rounded-3xl border border-slate-800 bg-[#080b14]/90 backdrop-blur-2xl shadow-2xl hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bebas text-2xl text-amber-400 font-bold">CHAPTER 01</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">2003 — 2005</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  RE-INVENTING THE METRIC OF COMIC BOOK CINEMA
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  In 2003, Christopher Nolan pitched Warner Bros. an audacious vision: strip away comic book campiness and treat Batman as a grounded psychological drama set in a real, living metropolis. Rather than relying on soundstages or CGI graphics, Nolan traveled to Iceland for Himalayan glacier shoots, built full-scale monorail miniatures, and engineered the functional Tumbler vehicle from scratch.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-cinzel text-xs text-amber-300 italic">
                  "I wanted to treat Gotham not as a comic book caricature, but as a real city facing real systemic corruption, where fear is both a weapon and a psychological vulnerability." — Christopher Nolan
                </div>
              </motion.div>

              {/* Chapter 2 */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-8 rounded-3xl border border-purple-900/40 bg-[#0a0714]/90 backdrop-blur-2xl shadow-2xl hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bebas text-2xl text-purple-400 font-bold">CHAPTER 02</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">2006 — 2008</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE IMAX 70MM REVOLUTION & JOKER'S ANARCHY
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  With <em className="text-purple-300">The Dark Knight</em>, Nolan made film history by becoming the first mainstream director to shoot key feature action sequences with massive 70mm IMAX cameras. On the streets of Chicago, he flipped an authentic 18-wheeler semi-truck upside down on LaSalle Street without using digital effects. Working alongside Heath Ledger, Nolan directed a masterclass in psychological anarchy that earned Ledger a posthumous Academy Award.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">IMAX 70MM CAMERA WORK</span>
                    <p className="font-inter text-xs text-slate-300">Native 1.43:1 aspect ratio capturing unmatched visual clarity and visceral scale.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">PRACTICAL HEIST STUNTS</span>
                    <p className="font-inter text-xs text-slate-300">Blowing up real hospital structures and executing physical bank heist sequences.</p>
                  </div>
                </div>
              </motion.div>

              {/* Chapter 3 */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="p-8 rounded-3xl border border-blue-900/40 bg-[#060914]/90 backdrop-blur-2xl shadow-2xl hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-bebas text-2xl text-blue-400 font-bold">CHAPTER 03</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">2009 — 2012</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE MONUMENTAL FINALE & SACRIFICE
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  Nolan insisted on concluding the trilogy with a definitive three-act narrative rather than leaving open-ended franchise hooks. <em className="text-blue-300">The Dark Knight Rises</em> pushed scope further, featuring over 11,000 real extras in Heinz Field stadium, aerial plane hijacks filmed over Scotland, and an emotional climax that cemented the trilogy as a historic cinematic landmark.
                </p>
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/30 font-inter text-xs text-slate-300">
                  Nolan’s trilogy grossed over $2.45 Billion worldwide, earned 3 Academy Awards, and redefined how serious cinema approaches heroic mythologies.
                </div>
              </motion.div>

              {/* Nolan's Directorial Commandments */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-8 rounded-3xl border border-amber-500/40 bg-[#090b14]/90 backdrop-blur-2xl shadow-2xl"
              >
                <h4 className="font-bebas text-xl tracking-widest text-amber-400 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  NOLAN'S CINEMATIC COMMANDMENTS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Film className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">PRACTICAL STUNTS OVER CGI</h5>
                      <p className="font-inter text-xs text-slate-400">Build real vehicles, detonate real structures, and film real stunt actors in live camera frames.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">IMAX 70MM FRAMING</h5>
                      <p className="font-inter text-xs text-slate-400">Capture immense vertical resolution and granular detail directly onto physical film stock.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">METROPOLITAN REALISM</h5>
                      <p className="font-inter text-xs text-slate-400">Use real urban architecture across Chicago, London, and Pittsburgh for authentic density.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">DEFINITIVE NARRATIVE ARC</h5>
                      <p className="font-inter text-xs text-slate-400">Structure the trilogy with a complete beginning, middle, and emotional end for Bruce Wayne.</p>
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
