"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FileText,
  Lightbulb,
  Palette,
  CheckCircle,
  ArrowRight,
  Layers,
  Wrench,
  Package,
} from "lucide-react";
import { DESIGN_PROCESS, ProcessStep } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

export const DesignProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = DESIGN_PROCESS[activeStepIndex];

  const stepIcons = [Compass, FileText, Lightbulb, Palette, CheckCircle];

  return (
    <section id="process" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Design Methodology"
          title="From Understanding Users to Creating Experiences."
          subtitle="A systematic, human-first five-stage approach ensuring every interaction is grounded in evidence and crafted with intent."
          align="center"
        />

        {/* ========================================================= */}
        {/* DESKTOP TIMELINE STEPPERS */}
        {/* ========================================================= */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between">
            {/* Connecting baseline line */}
            <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[2px] bg-white/10 -z-0" />
            {/* Animated active progress line */}
            <motion.div
              className="absolute top-1/2 left-6 -translate-y-1/2 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 -z-0"
              initial={false}
              animate={{
                width: `${(activeStepIndex / (DESIGN_PROCESS.length - 1)) * 95}%`,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {DESIGN_PROCESS.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isSelected = activeStepIndex === idx;
              const isCompleted = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="group relative z-10 flex flex-col items-center focus:outline-none"
                  aria-label={`Select Step ${step.step}: ${step.name}`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? "border-indigo-400 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-neon-indigo scale-110"
                        : isCompleted
                        ? "border-white/20 bg-indigo-950/60 text-indigo-300"
                        : "border-white/10 bg-[#0B1120] text-slate-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span
                    className={`mt-3 text-xs font-mono uppercase tracking-wider transition-colors ${
                      isSelected ? "text-indigo-300 font-bold" : "text-slate-400"
                    }`}
                  >
                    Step {step.step}
                  </span>
                  <span
                    className={`text-sm font-bold font-display transition-colors ${
                      isSelected ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE STEP BUTTONS SCROLLER */}
        {/* ========================================================= */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-4 mb-6">
          {DESIGN_PROCESS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-sm font-semibold"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                <span className="font-mono">{step.step}</span>
                <span>{step.name}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* ACTIVE STEP DEEP-DIVE CARD */}
        {/* ========================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-10 backdrop-blur-xl shadow-glass-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-indigo-400">
                  <span className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5">
                    Phase {currentStep.step} of 05
                  </span>
                  <span>•</span>
                  <span>{currentStep.name} Stage</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {currentStep.headline}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {currentStep.description}
                </p>

                {/* Core Activities */}
                <div className="pt-2 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Core Activities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentStep.activities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-lg bg-white/[0.02] border border-white/5 px-3 py-2 text-xs text-slate-300"
                      >
                        <ArrowRight className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Artifacts & Tools */}
              <div className="lg:col-span-5 space-y-4">
                {/* Deliverables Box */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs uppercase tracking-wider font-mono">
                    <Package className="h-4 w-4" />
                    <span>Key Deliverables</span>
                  </div>
                  <ul className="space-y-2">
                    {currentStep.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Applied Box */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs uppercase tracking-wider font-mono">
                    <Wrench className="h-4 w-4" />
                    <span>Tools Applied in this Phase</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
