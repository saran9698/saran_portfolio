"use client";

import React from "react";
import {
  ArrowUp,
  Linkedin,
  Github,
  Code2,
  Terminal,
  Heart,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO, NAV_ITEMS } from "@/lib/constants";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "github":
        return <Github className="h-4 w-4" />;
      case "hackerrank":
        return <Code2 className="h-4 w-4" />;
      case "leetcode":
        return <Terminal className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070C18] pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-display font-bold text-xs shadow-neon-indigo/30">
                SK
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Saran K
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-sans leading-relaxed">
              Aspiring UI/UX Designer crafting human-centered digital experiences, intuitive
              mobile architectures, and scalable Figma design systems.
            </p>
            <p className="text-xs font-mono text-indigo-400">
              Hosur, Tamil Nadu, India • {PERSONAL_INFO.email}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Connect With Me
            </span>
            <div className="flex items-center gap-2">
              {PERSONAL_INFO.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-white/10 transition-colors"
                  aria-label={`${social.name} profile`}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ArrowUp className="h-3.5 w-3.5 text-indigo-400" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Saran K. Designed with creativity and attention to detail.</p>
          <p className="flex items-center gap-1.5">
            Crafted with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
