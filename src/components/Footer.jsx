import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-24 px-6 bg-[#020304] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black tracking-widest text-slate-100 uppercase glow-amber mb-3">
            BUILT WITH PASSION.
          </h2>
          <p className="font-bebas text-xl sm:text-3xl tracking-[0.3em] text-amber-400">
            INSPIRED BY GOTHAM.
          </p>
        </motion.div>

        {/* Developer Attribution */}
        <div className="mb-12 p-8 rounded-3xl border border-slate-800 bg-[#06080e] backdrop-blur-xl max-w-xl w-full shadow-2xl">
          <span className="font-bebas text-xs tracking-widest text-slate-400 uppercase block mb-2">
            DESIGNED & DEVELOPED BY
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-slate-100 tracking-wider mb-6">
            A R I J I T
          </h3>

          {/* Developer Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com/arijit-msi"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-amber-600/40 hover:to-amber-500/60 border border-amber-500/40 text-amber-300 hover:text-amber-200 font-bebas text-base tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] w-full sm:w-auto justify-center"
            >
              <Github className="w-4 h-4 text-amber-400" />
              <span>GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arijit-dey-b201a8381/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LINKEDIN"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-900/60 via-slate-900 to-amber-500/20 hover:bg-blue-800/40 border border-blue-500/40 text-blue-300 hover:text-amber-300 font-bebas text-base tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)] w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-4 h-4 fill-current text-blue-400" />
              <span>LINKEDIN</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arijit.msi666@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="EMAIL"
              onClick={(e) => {
                // Fallback to mailto if needed
                if (!window.navigator.onLine) {
                  window.location.href = 'mailto:arijit.msi666@gmail.com';
                }
              }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-slate-900 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 hover:text-amber-200 font-bebas text-base tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)] w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>EMAIL</span>
            </a>
          </div>

          {/* Secondary Social Links */}
          <div className="flex items-center justify-center gap-6 text-slate-400">
            <a
              href="https://github.com/arijit-msi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-800 hover:border-amber-400 hover:text-amber-400 transition-colors"
              title="GitHub: @arijit-msi"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arijit-dey-b201a8381/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-800 hover:border-amber-400 hover:text-amber-400 transition-colors"
              title="LinkedIn: Arijit Dey"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arijit.msi666@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-800 hover:border-amber-400 hover:text-amber-400 transition-colors"
              title="Send Email: arijit.msi666@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="mb-12 flex items-center gap-2 font-bebas text-xs tracking-[0.3em] text-slate-400 hover:text-amber-400 transition-colors group"
        >
          <span>RETURN TO TOP OF GOTHAM</span>
          <div className="p-2 rounded-full border border-slate-800 group-hover:border-amber-400 transition-colors">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>

        {/* Copyright & Fan-Made Disclaimer */}
        <div className="text-slate-400 text-xs font-inter tracking-wider max-w-2xl leading-relaxed border-t border-slate-900 pt-8 w-full">
          <p className="mb-2 font-semibold text-slate-300">
            © 2026 ARIJIT. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[11px] text-slate-400">
            This is a fan-made, non-commercial concept website. Batman and related characters, titles, logos, and elements belong to their respective copyright and trademark owners, including DC Comics and Warner Bros. Entertainment Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
