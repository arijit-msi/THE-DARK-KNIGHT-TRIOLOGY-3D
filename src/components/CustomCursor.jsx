import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor], [role="button"], input');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        setCursorText(customText || 'INTERACT');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 250);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Outer Glowing Bat Aura & Hover Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-amber-400 bg-amber-500/10 backdrop-blur-[2px] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)]"
        animate={{
          x: pos.x - (isHovered ? 36 : 18),
          y: pos.y - (isHovered ? 36 : 18),
          width: isHovered ? 72 : 36,
          height: isHovered ? 72 : 36,
          borderColor: isHovered ? '#fbbf24' : 'rgba(212,175,55,0.7)',
          scale: isClicked ? 0.85 : 1,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 400, mass: 0.15 }}
      >
        {isHovered ? (
          <span className="font-bebas text-xs tracking-widest text-amber-300 font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
            {cursorText}
          </span>
        ) : (
          /* Animated Bat Emblem Icon inside Cursor Ring */
          <motion.svg
            animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.9)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3c-1.5 0-3.2 1.2-4.5 2.5C5.8 4 3 4.5 2 7c2.5 1 3.5 3 3 5-1.5 0-3 1.5-3 3 2.5.5 5-.5 6-2 0 3-1 5-3 6.5C7.5 19 10 20 12 21c2-1 4.5-2 7-1.5-2-1.5-3-3.5-3-6.5 1 1.5 3.5 2.5 6 2 0-1.5-1.5-3-3-3-.5-2 .5-4 3-5-1-2.5-3.8-3-5.5-1.5C15.2 4.2 13.5 3 12 3z" />
          </motion.svg>
        )}
      </motion.div>

      {/* Inner Precision Target Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-amber-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: isClicked ? 1.8 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 600, mass: 0.08 }}
      />

      {/* Click Shockwave Ripple Effect */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ left: pos.x - 25, top: pos.y - 25 }}
            className="fixed w-12 h-12 rounded-full border-2 border-amber-300 shadow-[0_0_20px_rgba(212,175,55,1)]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
