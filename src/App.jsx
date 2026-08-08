import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { audioEngine } from './utils/audioSystem';

import MainCanvas from './components/3d/MainCanvas';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import BatSignalModal from './components/BatSignalModal';
import NolanModal from './components/NolanModal';
import ZimmerModal from './components/ZimmerModal';
import BaleModal from './components/BaleModal';
import PfisterModal from './components/PfisterModal';

import HeroSection from './components/sections/HeroSection';
import BeginsSection from './components/sections/BeginsSection';
import DarkKnightSection from './components/sections/DarkKnightSection';
import RisesSection from './components/sections/RisesSection';
import TrilogyTimeline from './components/sections/TrilogyTimeline';
import StatsSection from './components/sections/StatsSection';
import AboutSection from './components/sections/AboutSection';
import FilmmakingSection from './components/sections/FilmmakingSection';
import BatmobileSection from './components/sections/BatmobileSection';
import FinalQuoteSection from './components/sections/FinalQuoteSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isBatSignalOpen, setIsBatSignalOpen] = useState(false);
  const [isNolanModalOpen, setIsNolanModalOpen] = useState(false);
  const [isZimmerModalOpen, setIsZimmerModalOpen] = useState(false);
  const [isBaleModalOpen, setIsBaleModalOpen] = useState(false);
  const [isPfisterModalOpen, setIsPfisterModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('home');
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [tumblerInteractive, setTumblerInteractive] = useState(false);

  useEffect(() => {
    // Continuous scroll progress sync
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = window.scrollY / totalHeight;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Section IntersectionObserver to update WebGL 3D scene focus
    const sections = ['home', 'begins', 'dark-knight', 'rises', 'timeline', 'about', 'filmmaking', 'batmobile', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoading]);

  const handleToggleAudio = () => {
    const active = audioEngine.toggle();
    setIsAudioOn(active);
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-slate-100 font-inter bg-noise overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* Preloader */}
      {isLoading && (
        <LoadingScreen
          onComplete={() => setIsLoading(false)}
          onToggleAudio={handleToggleAudio}
          isAudioOn={isAudioOn}
        />
      )}

      {/* Dynamic Desktop Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navbar */}
      <Navbar
        isAudioOn={isAudioOn}
        onToggleAudio={handleToggleAudio}
        onOpenBatSignal={() => setIsBatSignalOpen(true)}
        onOpenWallyModal={() => setIsPfisterModalOpen(true)}
      />

      {/* Sky Call Bat-Signal Modal */}
      <BatSignalModal
        isOpen={isBatSignalOpen}
        onClose={() => setIsBatSignalOpen(false)}
      />

      {/* Christopher Nolan Director Showcase Modal */}
      <NolanModal
        isOpen={isNolanModalOpen}
        onClose={() => setIsNolanModalOpen(false)}
      />

      {/* Hans Zimmer Composer Showcase Modal */}
      <ZimmerModal
        isOpen={isZimmerModalOpen}
        onClose={() => setIsZimmerModalOpen(false)}
      />

      {/* Christian Bale Actor Showcase Modal */}
      <BaleModal
        isOpen={isBaleModalOpen}
        onClose={() => setIsBaleModalOpen(false)}
      />

      {/* Wally Pfister Cinematographer Showcase Modal */}
      <PfisterModal
        isOpen={isPfisterModalOpen}
        onClose={() => setIsPfisterModalOpen(false)}
      />

      {/* Three.js / R3F WebGL 3D Canvas Background */}
      <MainCanvas
        scrollProgress={scrollProgress}
        currentSection={currentSection}
        headlightsOn={headlightsOn}
        tumblerInteractive={tumblerInteractive}
      />

      {/* Foreground Scroll Narrative Content */}
      <main className="relative z-10">
        <HeroSection />
        <BeginsSection />
        <DarkKnightSection />
        <RisesSection />
        <TrilogyTimeline />
        <StatsSection />
        <AboutSection
          onOpenNolanModal={() => setIsNolanModalOpen(true)}
          onOpenZimmerModal={() => setIsZimmerModalOpen(true)}
          onOpenBaleModal={() => setIsBaleModalOpen(true)}
          onOpenWallyModal={() => setIsPfisterModalOpen(true)}
        />
        <FilmmakingSection />
        <BatmobileSection
          headlightsOn={headlightsOn}
          onToggleHeadlights={() => setHeadlightsOn(!headlightsOn)}
          tumblerInteractive={tumblerInteractive}
          onToggleInteractive={() => setTumblerInteractive(!tumblerInteractive)}
        />
        <FinalQuoteSection />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
