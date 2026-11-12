"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Linkedin,
  Github,
  Code2,
  Terminal,
  Layers,
  Sparkles,
  MousePointer,
  Figma,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { Button } from "./ui/Button";
import { DynamicRoleText } from "./ui/AnimatedText";

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setMousePosition({ x, y });
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
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Soft Gradients and Radial Mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] sm:h-[700px] sm:w-[700px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px]" />
        <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute top-2/3 right-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ========================================================= */}
          {/* LEFT SIDE: DESIGNER IDENTITY & VALUE PROPOSITION */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-300">
                HELLO, I&apos;M A UI/UX DESIGNER
              </span>
            </motion.div>

            {/* Main Heading & Name */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-[64px] font-bold font-display tracking-tight text-white leading-[1.08]"
              >
                Designing Digital Experiences That Feel{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Effortless.
                </span>
              </motion.h1>

              {/* Identity & Dynamic Role Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-2 text-xl sm:text-2xl font-display font-medium text-slate-300 flex flex-wrap items-center gap-x-3 gap-y-1"
              >
                <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
                <span className="text-slate-500">—</span>
                <DynamicRoleText roles={PERSONAL_INFO.roles} interval={3000} />
              </motion.div>
            </div>

            {/* EXACT Professional Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl"
            >
              &ldquo;{PERSONAL_INFO.bio}&rdquo;
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowDown className="h-4 w-4" />}
              >
                Explore My Work
              </Button>

              <Button
                variant="glass"
                size="lg"
                href="/resume.pdf"
                download="Saran_K_UIUX_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Download className="h-4 w-4" />}
              >
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#contact"
                icon={<Mail className="h-4 w-4" />}
              >
                Let&apos;s Connect
              </Button>
            </motion.div>

            {/* Social Links & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-3 text-slate-400 text-xs font-mono border-t border-white/10"
            >
              <span className="text-slate-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {PERSONAL_INFO.location}
              </span>

              <div className="flex items-center gap-3">
                {PERSONAL_INFO.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300 hover:text-white hover:border-indigo-400/40 hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    aria-label={`${social.name} profile of Saran K`}
                  >
                    {getSocialIcon(social.name)}
                    <span className="font-sans font-medium text-xs">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: ANIMATED DESIGN WORKSPACE ILLUSTRATION */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              style={{
                x: mousePosition.x * 0.8,
                y: mousePosition.y * 0.8,
              }}
              className="relative w-full max-w-[460px]"
            >
              {/* Soft Backing Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl -z-10" />

              {/* Main Figma Canvas Panel */}
              <div className="rounded-3xl border border-white/15 bg-[#0D1424]/90 p-5 backdrop-blur-2xl shadow-2xl space-y-4">
                {/* Figma Canvas Toolbar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Figma className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white font-display">
                        homora-design-system.fig
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Page 1 • Final Prototype (v2.4)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono text-emerald-400">
                      Auto-saved
                    </span>
                  </div>
                </div>

                {/* Canvas Workspace View: Wireframe to UI */}
                <div className="relative rounded-2xl border border-white/10 bg-[#070B14] p-4 overflow-hidden">
                  {/* Subtle Figma dotted canvas background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Wireframe vs UI Component Preview */}
                  <div className="relative z-10 space-y-3">
                    {/* Simulated Figma selection bounds */}
                    <div className="relative rounded-xl border border-indigo-500 bg-indigo-500/5 p-3.5">
                      {/* Selection handle indicators */}
                      <span className="absolute -top-1 -left-1 h-2 w-2 bg-indigo-400 border border-[#0B1120]" />
                      <span className="absolute -top-1 -right-1 h-2 w-2 bg-indigo-400 border border-[#0B1120]" />
                      <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-indigo-400 border border-[#0B1120]" />
                      <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-indigo-400 border border-[#0B1120]" />

                      <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300 pb-2">
                        <span># Component / Card-Primary</span>
                        <span>Auto-Layout [Hug, Hug]</span>
                      </div>

                      {/* Mini Live UI Card inside Figma */}
                      <div className="rounded-lg bg-gradient-to-r from-indigo-600/30 to-purple-600/30 p-3 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-white font-display">
                            Smart Ambient Light
                          </span>
                          <span className="h-2 w-2 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" />
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-300">
                          <span>Warm Glow • 2700K</span>
                          <span className="font-mono text-cyan-300">85% Active</span>
                        </div>
                      </div>
                    </div>

                    {/* Figma Color Palettes & Tokens */}
                    <div className="flex items-center justify-between gap-2 pt-1 text-[10px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-md bg-[#6366F1] border border-white/20" />
                        <span className="text-slate-300">#6366F1</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-md bg-[#8B5CF6] border border-white/20" />
                        <span className="text-slate-300">#8B5CF6</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-4 w-4 rounded-md bg-[#06B6D4] border border-white/20" />
                        <span className="text-slate-300">#06B6D4</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspect Property Mini Panel */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400 pt-1">
                  <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2 flex items-center justify-between">
                    <span>Typography</span>
                    <span className="text-white font-sans font-bold">Space Grotesk</span>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2 flex items-center justify-between">
                    <span>Radius / Grid</span>
                    <span className="text-white">16px / 8pt</span>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Profile Badge */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 z-20 rounded-2xl border border-white/20 bg-[#0B1120]/90 p-3 backdrop-blur-xl shadow-xl flex items-center gap-3"
              >
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1.5px]">
                  <div className="h-full w-full rounded-[10px] bg-[#0B1120] flex items-center justify-center font-bold text-xs text-white">
                    SK
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-display">Saran K</p>
                  <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Ready for Opportunities
                  </p>
                </div>
              </motion.div>

              {/* Floating Element 2: Design Tools Pill */}
              <motion.div
                animate={{
                  y: [6, -6, 6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-4 z-20 rounded-2xl border border-white/20 bg-[#0B1120]/90 p-3 backdrop-blur-xl shadow-xl flex items-center gap-2 text-xs font-semibold text-white"
              >
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span>User-Centered Design</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
