import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar({ isAudioOn, onToggleAudio, onOpenBatSignal, onOpenWallyModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'BEGINS', href: '#begins' },
    { label: 'THE DARK KNIGHT', href: '#dark-knight' },
    { label: 'RISES', href: '#rises' },
    { label: 'TIMELINE', href: '#timeline' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WALLY PFISTER', modalAction: true },
    { label: 'FILMMAKING', href: '#filmmaking' },
    { label: 'TUMBLER 3D', href: '#batmobile' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.modalAction && onOpenWallyModal) {
      onOpenWallyModal();
      return;
    }
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4 ${
        scrolled
          ? 'bg-[#050608]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: DK Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-slate-900 border border-amber-500/40 flex items-center justify-center font-cinzel font-black text-amber-400 text-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300">
            DK
          </div>
          <span className="font-cinzel text-sm font-bold tracking-[0.2em] hidden sm:inline-block text-slate-200 group-hover:text-amber-400 transition-colors">
            TRILOGY
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="font-bebas text-sm tracking-[0.15em] text-slate-400 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Bat-Signal trigger & Audio Toggle */}
        <div className="flex items-center gap-3">
          {/* Bat Signal Sky Call Button */}
          <button
            onClick={onOpenBatSignal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-bebas tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
            <span className="hidden md:inline">BAT-SIGNAL</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleAudio}
            className="p-2 rounded-full border border-slate-700 bg-slate-900/80 hover:border-amber-400/50 text-slate-300 hover:text-amber-400 transition-all duration-300"
            title="Toggle Audio Ambiance"
          >
            {isAudioOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:text-amber-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#050608]/95 backdrop-blur-2xl border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="font-bebas text-lg tracking-widest text-slate-300 hover:text-amber-400 transition-colors py-2 border-b border-slate-800/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
