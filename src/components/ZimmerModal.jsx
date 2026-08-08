import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Disc, Volume2, Sparkles, Sliders } from 'lucide-react';

export default function ZimmerModal({ isOpen, onClose }) {
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
          {/* High-Definition Hans Zimmer Studio Background Image */}
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-95 pointer-events-none scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('/assets/zimmer-bg.jpg')` }}
          />

          {/* Lightened Vignette Overlays */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#040508]/40 via-transparent to-[#040508]/75 pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#040508]/60 pointer-events-none" />

          {/* Modal Top Header Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-6 border-b border-slate-800/80 bg-[#040508]/80 backdrop-blur-xl max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bebas text-xs tracking-[0.3em] text-amber-400 block">
                  COMPOSER SPOTLIGHT
                </span>
                <h2 className="font-cinzel text-lg font-bold tracking-widest text-slate-100 uppercase">
                  HANS ZIMMER
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
                LEGENDARY MAESTRO OF SOUND
              </span>
              <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-slate-100 uppercase glow-amber mb-4">
                HANS ZIMMER
              </h1>
              <p className="font-bebas text-xl md:text-3xl tracking-[0.3em] text-amber-400/90 max-w-2xl mx-auto">
                THE AUDIO ARCHITECTURE OF THE DARK KNIGHT TRILOGY
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
                  <span className="font-bebas text-2xl text-amber-400 font-bold">AUDIO CHAPTER 01</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">BATMAN BEGINS (2005)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  MINIMALIST MOTIFS & ORGANIC BAT-WING SAMPLING
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  Collaborating with James Newton Howard, Hans Zimmer set out to avoid heroic horn fanfares. Instead, he crafted a minimalist two-note rising motif (D to F) representing Bruce Wayne's unfinished quest for justice. To embody Batman's fear-inducing origin, Zimmer recorded thousands of real bat wing flaps inside London caves, pitch-shifting and filtering the audio into pulse-pounding sub-bass textures and organic rhythm beds.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-cinzel text-xs text-amber-300 italic">
                  "We didn't want a traditional superhero theme. Batman is a character driven by pain and unresolved trauma, so we created a theme that feels like it's trying to rise, but is constantly holding its breath." — Hans Zimmer
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
                  <span className="font-bebas text-2xl text-purple-400 font-bold">AUDIO CHAPTER 02</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">THE DARK KNIGHT (2008)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE RAZOR-BLADE CELLO & THE SHEPARD TONE ILLUSION
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  For Heath Ledger's Joker, Zimmer discarded conventional harmony to craft "Why So Serious?". He spent months in his studio scraping cellos with razor blades, playing electric guitars with metal picks, and layering synth noise. He employed the acoustic illusion known as the <strong className="text-purple-300">Shepard Tone</strong> — a combination of sine waves that tricks the human brain into hearing an infinitely ascending pitch of endless, nerve-shredding anxiety.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">RAZOR-BLADE CELLO TENSION</span>
                    <p className="font-inter text-xs text-slate-300">Scraping cello strings with metal blades to mimic the Joker's unpredictable psychological threat.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">INFINITE ASCENDING PITCH</span>
                    <p className="font-inter text-xs text-slate-300">Using psychoacoustic Shepard Tones to build relentless tension that never resolves.</p>
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
                  <span className="font-bebas text-2xl text-blue-400 font-bold">AUDIO CHAPTER 03</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">THE DARK KNIGHT RISES (2012)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE GLOBAL CROWD CHANT "DESHI BASARA"
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  To capture the brutal authority of Bane and the hope of Bruce Wayne climbing out of The Pit, Zimmer launched a worldwide crowdsourcing audio initiative ("UJAM"). Thousands of fans around the world recorded themselves chanting <em className="text-blue-300">"Deshi Basara"</em> ("He Rises"). Zimmer combined these global voices with thunderous percussion and massed French horns to create a monumental acoustic climax.
                </p>
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/30 font-inter text-xs text-slate-300">
                  Over 100,000 fan vocal submissions from 60 countries were mastered together into the iconic chant featured throughout the film's climax.
                </div>
              </motion.div>

              {/* Zimmer's Audio Architecture Pillars */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-8 rounded-3xl border border-amber-500/40 bg-[#090b14]/90 backdrop-blur-2xl shadow-2xl"
              >
                <h4 className="font-bebas text-xl tracking-widest text-amber-400 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  ZIMMER'S AUDIO ARCHITECTURE PILLARS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Sliders className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">SYNTH & ORCHESTRAL HYBRID</h5>
                      <p className="font-inter text-xs text-slate-400">Blending vintage Moog synthesizers with 90-piece symphonic string sections.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Volume2 className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">ORGANIC SOUND SAMPLING</h5>
                      <p className="font-inter text-xs text-slate-400">Processing physical cave acoustics, bat wing flaps, and razor-blade textures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Disc className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">SHEPARD TONE ILLUSION</h5>
                      <p className="font-inter text-xs text-slate-400">Structuring continuous ascending frequency ramps to generate psychological dread.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">GLOBAL VOICES CHANT</h5>
                      <p className="font-inter text-xs text-slate-400">Mastering thousands of fan vocal recordings into an epic stadium chant.</p>
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
