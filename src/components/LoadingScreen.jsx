import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete, onToggleAudio, isAudioOn }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);
          }, 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040507] text-white px-6 selection:bg-none"
        >
          {/* Background subtle amber spotlight */}
          <div className="absolute w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Bat Symbol Icon */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mb-8 relative"
          >
            <svg
              className="w-20 h-20 text-amber-400 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3c-1.5 0-3.2 1.2-4.5 2.5C5.8 4 3 4.5 2 7c2.5 1 3.5 3 3 5-1.5 0-3 1.5-3 3 2.5.5 5-.5 6-2 0 3-1 5-3 6.5C7.5 19 10 20 12 21c2-1 4.5-2 7-1.5-2-1.5-3-3.5-3-6.5 1 1.5 3.5 2.5 6 2 0-1.5-1.5-3-3-3-.5-2 .5-4 3-5-1-2.5-3.8-3-5.5-1.5C15.2 4.2 13.5 3 12 3z" />
            </svg>
          </motion.div>

          {/* Title Header */}
          <h1 className="font-cinzel text-3xl md:text-5xl font-black tracking-[0.25em] text-center mb-2 text-slate-100 uppercase">
            THE DARK KNIGHT
          </h1>
          <p className="font-bebas text-lg md:text-2xl tracking-[0.4em] text-amber-400/90 mb-10">
            TRILOGY
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 md:w-80 h-1 bg-slate-800/80 rounded-full overflow-hidden mb-4 relative border border-slate-700/50">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex items-center justify-between w-64 md:w-80 font-mono text-xs tracking-widest text-slate-400">
            <span>LOADING GOTHAM...</span>
            <span className="text-amber-400 font-bold">{progress}%</span>
          </div>

          {/* Audio Enable Toggle in Loader */}
          <div className="mt-12">
            <button
              onClick={onToggleAudio}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-700/80 bg-slate-900/60 hover:border-amber-400/50 text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              <span>{isAudioOn ? '🔊 SOUND ENABLED' : '🔇 MUTE AUDIO'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
