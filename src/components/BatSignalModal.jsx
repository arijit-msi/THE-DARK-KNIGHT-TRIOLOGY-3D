import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioEngine } from '../utils/audioSystem';

export default function BatSignalModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      audioEngine.playBatSignalSound();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020305]/95 backdrop-blur-3xl px-6"
          onClick={onClose}
        >
          {/* Volumetric Bat-Signal Beam Effect */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="w-[800px] h-[800px] bg-gradient-radial from-amber-400/20 via-amber-500/5 to-transparent rounded-full animate-pulse" />
          </div>

          <div className="relative text-center max-w-xl flex flex-col items-center">
            {/* Glowing Bat-Signal Icon */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.9, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-amber-400/20 to-slate-950 border-2 border-amber-400/60 p-6 flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.6)] mb-8"
            >
              <svg
                className="w-full h-full text-amber-300 drop-shadow-[0_0_20px_rgba(212,175,55,0.9)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3c-1.5 0-3.2 1.2-4.5 2.5C5.8 4 3 4.5 2 7c2.5 1 3.5 3 3 5-1.5 0-3 1.5-3 3 2.5.5 5-.5 6-2 0 3-1 5-3 6.5C7.5 19 10 20 12 21c2-1 4.5-2 7-1.5-2-1.5-3-3.5-3-6.5 1 1.5 3.5 2.5 6 2 0-1.5-1.5-3-3-3-.5-2 .5-4 3-5-1-2.5-3.8-3-5.5-1.5C15.2 4.2 13.5 3 12 3z" />
              </svg>
            </motion.div>

            {/* Glowing Message */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-cinzel text-4xl md:text-6xl font-black tracking-[0.2em] text-amber-300 glow-amber uppercase mb-4"
            >
              GOTHAM NEEDS YOU.
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-inter text-slate-300 text-sm md:text-base tracking-widest max-w-md mb-8"
            >
              "Because he's the hero Gotham deserves, but not the one it needs right now. So we'll hunt him. Because he can take it. Because he's not our hero. He's a silent guardian. A watchful protector. A Dark Knight."
            </motion.p>

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-amber-400 bg-amber-500/20 text-amber-300 font-bebas text-lg tracking-[0.2em] hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              RETURN TO GOTHAM
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
