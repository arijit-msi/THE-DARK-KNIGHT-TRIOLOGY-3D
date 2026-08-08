import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserCheck, Shield, Award, Sparkles, Activity } from 'lucide-react';

export default function BaleModal({ isOpen, onClose }) {
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
          {/* High-Definition Christian Bale Background Image */}
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-95 pointer-events-none scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('/assets/bale-bg.jpg')` }}
          />

          {/* Lightened Vignette Overlays */}
          <div className="fixed inset-0 bg-gradient-to-b from-[#040508]/40 via-transparent to-[#040508]/75 pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#040508]/60 pointer-events-none" />

          {/* Modal Top Header Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-6 border-b border-slate-800/80 bg-[#040508]/80 backdrop-blur-xl max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bebas text-xs tracking-[0.3em] text-amber-400 block">
                  ACTOR SPOTLIGHT
                </span>
                <h2 className="font-cinzel text-lg font-bold tracking-widest text-slate-100 uppercase">
                  CHRISTIAN BALE
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
                THE DEFINITIVE BATMAN
              </span>
              <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-slate-100 uppercase glow-amber mb-4">
                CHRISTIAN BALE
              </h1>
              <p className="font-bebas text-xl md:text-3xl tracking-[0.3em] text-amber-400/90 max-w-2xl mx-auto">
                THE PHYSICAL & EMOTIONAL TRANSFORMATION OF BRUCE WAYNE
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
                  <span className="font-bebas text-2xl text-amber-400 font-bold">ACTOR CHAPTER 01</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">BATMAN BEGINS (2005)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  PHYSICAL TRANSFORMATION & THE TRIFECTA PERSONA
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  Coming straight off his extreme emaciation for <em>The Machinist</em> (121 lbs), Christian Bale undertook a legendary body transformation, putting on over 100 lbs of muscular weight in under six months to portray Batman. Bale developed a distinct three-tier persona for the role: the real, wounded Bruce Wayne grieving in secret; the arrogant, champagne-swilling playboy facade constructed for Gotham's high society; and the terrifying, guttural force of nature that is Batman.
                </p>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-cinzel text-xs text-amber-300 italic">
                  "I had to treat Bruce Wayne not as a billionaire superhero, but as a man who adopted three distinct personas: the monster in the cowl, the playboy in the press, and the real broken man underneath both." — Christian Bale
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
                  <span className="font-bebas text-2xl text-purple-400 font-bold">ACTOR CHAPTER 02</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">THE DARK KNIGHT (2008)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE MORAL CRUCIBLE & BECOMING THE HUNTED FUGITIVE
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  In <em>The Dark Knight</em>, Bale captured the profound psychological exhaustion of a hero forced to question his own limits. Opposite Heath Ledger's Joker, Bale brought raw emotional restraint, showing Bruce Wayne's willingness to sacrifice his own reputation for the greater good. By taking the blame for Harvey Dent's murders at the film's climax, Bale's Batman accepted becoming a villain in the eyes of Gotham to preserve its hope.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">INTENSE INTERROGATION SCENE</span>
                    <p className="font-inter text-xs text-slate-300">Bale matching Ledger's chaotic energy with brutal physical restraint in the famous police interrogation room.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                    <span className="font-bebas text-xs tracking-widest text-purple-400 block mb-1">THE DARK KNIGHT MONOLOGUE</span>
                    <p className="font-inter text-xs text-slate-300">Accepting the mantle of the "silent guardian, watchful protector, a Dark Knight."</p>
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
                  <span className="font-bebas text-2xl text-blue-400 font-bold">ACTOR CHAPTER 03</span>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="font-bebas text-sm tracking-widest text-slate-400">THE DARK KNIGHT RISES (2012)</span>
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-black text-slate-100 tracking-wider mb-4">
                  THE PIT ESCAPE & EMOTIONAL REBIRTH
                </h3>
                <p className="font-inter text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  For the trilogy finale, Bale portrayed an ailing Bruce Wayne with a cane, depleted cartilage, and an isolated spirit. His performance during the Pit climb sequence — removing the safety rope to embrace the primal fear of death — remains one of superhero cinema's most powerful emotional beats, providing Bruce Wayne with a complete, triumphant narrative arc and peaceful retirement in Florence.
                </p>
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/30 font-inter text-xs text-slate-300">
                  Bale's portrayal across 3 films spanned 7 years of production, earning unanimous critical acclaim as one of the greatest character arcs in modern film history.
                </div>
              </motion.div>

              {/* Bale's Method Acting Commandments */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-8 rounded-3xl border border-amber-500/40 bg-[#090b14]/90 backdrop-blur-2xl shadow-2xl"
              >
                <h4 className="font-bebas text-xl tracking-widest text-amber-400 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  BALE'S ACTING METHODOLOGY PILLARS
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">EXTREME BODY TRANSFORMATIONS</h5>
                      <p className="font-inter text-xs text-slate-400">Gaining 100+ lbs of muscle to physically embody Batman's intimidating strength.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">KEYSI FIGHTING METHOD</h5>
                      <p className="font-inter text-xs text-slate-400">Mastering brutal 360-degree close-quarters defense combat for live camera takes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">TRI-VOCAL CONTROL</h5>
                      <p className="font-inter text-xs text-slate-400">Distinct vocal tonalities for Bruce Wayne, the playboy persona, and the Batman growl.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-slate-100 mb-1">GROUNDED EMOTIONAL AUTHENTICITY</h5>
                      <p className="font-inter text-xs text-slate-400">Anchoring a comic mythos in genuine human trauma, duty, and spiritual rebirth.</p>
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
