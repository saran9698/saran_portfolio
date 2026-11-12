"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Layers, Cpu, Compass, ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/lib/constants";
import { Button } from "./Button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/20 bg-[#0E1526] p-6 sm:p-10 shadow-2xl text-slate-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Modal Header */}
          <div className="border-b border-white/10 pb-6 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase text-indigo-400 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                {project.number} / {project.category}
              </span>
              <span>•</span>
              <span>{project.role}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-base sm:text-lg text-slate-400 font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-8">
            {/* Overview & Problem / Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-2">
                  <Compass className="h-4 w-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.caseStudy.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* User Flow & Information Architecture */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-purple-400" />
                User Journey & Architecture Flow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.caseStudy.userFlowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-mono font-bold text-indigo-300">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Highlights & Best Practices */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-indigo-400" />
                Design Highlights & Human Interface Details
              </h3>
              <ul className="space-y-2.5">
                {project.caseStudy.designHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Artifacts */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                Design Stack & Methodologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              {project.visualDirection}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ExternalLink className="h-3.5 w-3.5" />}
                >
                  GitHub Repository
                </Button>
              )}
              {project.figmaUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ArrowUpRight className="h-3.5 w-3.5" />}
                >
                  Figma File / Prototype
                </Button>
              )}
              <Button variant="glass" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
