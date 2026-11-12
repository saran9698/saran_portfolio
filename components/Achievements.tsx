"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";

export const Achievements: React.FC = () => {
  const achievement = ACHIEVEMENTS_DATA[0];

  return (
    <section id="achievements" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honors & Recognition"
          title="Milestones in Design & Innovation."
          subtitle="Peer and faculty recognition for bridging machine learning prediction with intuitive visual telemetry."
          align="center"
        />

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.08] via-purple-500/[0.04] to-[#0B1120] p-6 sm:p-10 backdrop-blur-xl shadow-glass-md"
          >
            {/* Soft gold aura */}
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-amber-500/10 blur-2xl" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Trophy Icon Frame */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-amber-400/40 bg-gradient-to-tr from-amber-500/20 to-yellow-500/20 text-amber-300 shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]">
                <Trophy className="h-10 w-10 animate-bounce" />
                <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-amber-200" />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                  <Award className="h-4 w-4" />
                  <span>Capstone Capstone Recognition • {achievement.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium text-slate-300">
                  {achievement.organization}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                <span className="font-semibold text-slate-400">Awarded Project:</span>
                <span className="rounded-md bg-white/5 px-2.5 py-1 border border-white/10 text-white font-sans font-bold">
                  {achievement.project}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {achievement.description}
              </p>

              {/* Evaluation Highlights */}
              <div className="space-y-2 pt-2">
                {achievement.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
