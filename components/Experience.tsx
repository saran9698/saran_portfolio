"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";
import { EXPERIENCE_DATA } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work & Practical Training"
          title="Learning Through Building."
          subtitle="How hands-on front-end and back-end engineering training fuels my design systems and developer empathy."
          align="center"
        />

        <div className="mx-auto max-w-4xl">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-6 sm:pl-10 before:absolute before:left-0 before:top-3 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500/40 before:to-transparent"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[11px] top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-400 bg-[#0B1120] text-indigo-400 shadow-neon-indigo/50">
                <Briefcase className="h-3 w-3" />
              </div>

              <GlassCard hoverEffect={true} className="p-6 sm:p-8 space-y-5">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-indigo-400 font-semibold tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5 text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                    Core Technical Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Bridge Highlight Callout */}
                <div className="rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent p-4 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      How Code Knowledge Elevates My UI/UX Craft:
                    </h5>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.designBridgeHighlight}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
