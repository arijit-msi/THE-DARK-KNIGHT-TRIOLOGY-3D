import React from 'react';
import { motion } from 'framer-motion';
import { TRILOGY_CREW } from '../../data/trilogyData';

export default function AboutSection({ onOpenNolanModal, onOpenZimmerModal, onOpenBaleModal, onOpenWallyModal }) {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#040507] text-slate-100 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-bebas text-sm tracking-[0.3em] text-amber-400 block mb-2">
            THE ARCHITECTS OF GOTHAM
          </span>
          <h2 className="font-cinzel text-4xl md:text-6xl font-black tracking-widest text-slate-100 uppercase glow-amber">
            ABOUT THE TRILOGY
          </h2>
          <p className="font-inter text-slate-300 text-sm md:text-base tracking-widest mt-4 max-w-2xl mx-auto leading-relaxed">
            Christopher Nolan's Batman trilogy redefined the superhero genre through grounded storytelling, complex characters, psychological conflict, practical filmmaking, and an uncompromising vision of Gotham City.
          </p>
        </motion.div>

        {/* Cinematic Crew Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRILOGY_CREW.map((person, idx) => {
            const isNolan = person.name === 'CHRISTOPHER NOLAN';
            const isZimmer = person.name === 'HANS ZIMMER';
            const isBale = person.name === 'CHRISTIAN BALE';
            const isWally = person.name === 'WALLY PFISTER';
            const isInteractive = isNolan || isZimmer || isBale || isWally;

            const handleCardClick = () => {
              if (isNolan && onOpenNolanModal) onOpenNolanModal();
              if (isZimmer && onOpenZimmerModal) onOpenZimmerModal();
              if (isBale && onOpenBaleModal) onOpenBaleModal();
              if (isWally && onOpenWallyModal) onOpenWallyModal();
            };

            const cursorLabel = isNolan ? 'EXPLORE' : isZimmer ? 'LISTEN' : isBale ? 'BECOME' : isWally ? 'IMAX 70MM' : undefined;

            return (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                onClick={handleCardClick}
                data-cursor={cursorLabel}
                className={`p-8 rounded-3xl border bg-[#080b12] backdrop-blur-xl shadow-2xl flex flex-col justify-between transition-all duration-300 group ${
                  isInteractive
                    ? 'border-amber-500/60 shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-pointer hover:border-amber-400 hover:bg-[#0c0f1a]'
                    : 'border-slate-800 hover:border-amber-400/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bebas text-xs tracking-widest rounded inline-block">
                      {person.tag}
                    </span>
                    {isInteractive && (
                      <span className="px-2 py-0.5 rounded bg-amber-400 text-black font-bebas text-[10px] tracking-widest font-bold animate-pulse">
                        CLICK TO OPEN
                      </span>
                    )}
                  </div>

                  <h3 className="font-cinzel text-xl font-black tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors mb-1">
                    {person.name}
                  </h3>
                  <span className="font-bebas text-xs tracking-widest text-slate-400 block mb-6">
                    {person.role}
                  </span>

                  <p className="font-inter text-xs text-slate-400 leading-relaxed">
                    {person.bio}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-400">
                  <span>{isInteractive ? 'CLICK FOR FULL STORY' : 'CREDITED MASTER'}</span>
                  <span className="text-amber-400 font-bold">{isInteractive ? 'EXPLORE →' : 'LEGENDARY'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
