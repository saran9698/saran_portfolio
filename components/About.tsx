"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Quote,
  Sparkles,
  Compass,
  CheckCircle2,
  Heart,
  Eye,
  Layers,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";

export const About: React.FC = () => {
  const designPrinciples = [
    {
      title: "User-Centered Empathy",
      desc: "Every interface begins with active listening—understanding human cognitive loads and simplifying workflows.",
      icon: Heart,
    },
    {
      title: "Clean & Accessible Interfaces",
      desc: "Strict adherence to WCAG 2.2 AA standards, ensuring readable contrast, tactile feedback, and seamless legibility.",
      icon: Eye,
    },
    {
      title: "Design System Scalability",
      desc: "Architecting modular tokens and components in Figma that transition smoothly into production code.",
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background radial accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Behind Every Great Experience Is Thoughtful Design."
          subtitle="Combining analytical thinking, empathy for real users, and a deep appreciation for digital craftsmanship."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: PROFESSIONAL INTRODUCTION & PHILOSOPHY */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 text-indigo-400">
                <Compass className="h-5 w-5" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Designer Perspective
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                Crafting interfaces that feel natural, intuitive, and human.
              </h3>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed font-sans">
                <p>
                  As an aspiring UI/UX Designer based in{" "}
                  <span className="text-white font-medium">Hosur, Tamil Nadu</span>, I bridge the
                  gap between complex user needs and clean, intuitive digital experiences. My
                  background in{" "}
                  <span className="text-white font-medium">
                    Artificial Intelligence & Data Science
                  </span>{" "}
                  gives me a unique lens: I approach product design with both analytical rigor and
                  deep human empathy.
                </p>

                <p>
                  I enjoy solving real-world friction points through wireframing, interactive
                  prototyping, and systematic UI component architecture in Figma. Whether it is
                  designing an IoT smart home application like{" "}
                  <span className="text-indigo-300 font-medium">HOMORA</span> or optimizing
                  information architecture in educational platforms like{" "}
                  <span className="text-indigo-300 font-medium">CourseInn</span>, my goal is always
                  the same: eliminate friction and make digital products feel effortless.
                </p>

                <p>
                  I hold hands-on front-end development knowledge (HTML, CSS, JavaScript, and
                  Python), which allows me to collaborate effectively with engineers and design
                  interfaces that are not only beautiful but also technically feasible and
                  production-ready.
                </p>
              </div>

              {/* Core Design Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
                {designPrinciples.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 space-y-1.5"
                    >
                      <Icon className="h-4 w-4 text-indigo-400" />
                      <h4 className="text-xs font-bold text-white font-display">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: EDUCATION, LOCATION & DESIGN QUOTE */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Design Philosophy Quote Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-transparent p-7 backdrop-blur-xl shadow-glass-md"
            >
              <Quote className="h-8 w-8 text-indigo-400/40 mb-3" />
              <blockquote className="text-lg sm:text-xl font-display font-medium text-white italic leading-snug">
                &ldquo;{PERSONAL_INFO.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-mono text-indigo-300 uppercase tracking-wider">
                — Personal Design Philosophy
              </p>
            </motion.div>

            {/* Academic Education Card */}
            <GlassCard hoverEffect={true} className="p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  <GraduationCap className="h-5 w-5" />
                  <span>Academic Foundation</span>
                </div>
                <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-bold text-indigo-300">
                  {PERSONAL_INFO.education.duration}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold font-display text-white">
                  {PERSONAL_INFO.education.degree}
                </h4>
                <p className="text-sm text-slate-300 mt-1 font-sans">
                  {PERSONAL_INFO.education.institution}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {PERSONAL_INFO.education.location}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs text-slate-400 font-mono">Academic Score</span>
                <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-400">
                  {PERSONAL_INFO.education.score}
                </span>
              </div>
            </GlassCard>

            {/* Location & Relocation Card */}
            <GlassCard hoverEffect={true} className="p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <MapPin className="h-4 w-4" />
                <span>Base Location & Work Mode</span>
              </div>
              <h4 className="text-base font-bold font-display text-white">
                Hosur, Tamil Nadu, India
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open to Full-Time UI/UX Design Roles, Junior Product Designer positions, and
                collaborative remote design opportunities worldwide.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available immediately for interviews</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
