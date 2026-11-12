"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, Eye, Check } from "lucide-react";
import { Project } from "@/lib/constants";
import { Button } from "./Button";
import {
  HomoraMockup,
  CourseinnMockup,
  EnergySystemMockup,
  DesignSystemMockup,
} from "./ProjectMockups";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  index,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -4;
    const rotY = ((x - centerX) / centerX) * 4;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const renderMockup = () => {
    switch (project.id) {
      case "homora":
        return <HomoraMockup />;
      case "courseinn":
        return <CourseinnMockup />;
      case "energy-system":
        return <EnergySystemMockup />;
      case "design-system":
        return <DesignSystemMockup />;
      default:
        return null;
    }
  };

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-glass-md hover:border-white/20 transition-colors"
    >
      {/* Background glow behind card on hover */}
      <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Left Side: Project Info */}
        <div
          className={`lg:col-span-6 space-y-6 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Top metadata tag */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 font-semibold text-indigo-300">
              {project.number}
            </span>
            <span className="text-slate-400 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{project.year}</span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>
            <p className="mt-1 text-base text-slate-300 font-medium font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Key Contributions Checklist */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Key Contributions:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyContributions.slice(0, 4).map((contribution, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{contribution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenCaseStudy(project)}
              icon={<Eye className="h-4 w-4" />}
            >
              View Case Study
            </Button>

            {project.figmaUrl && (
              <Button
                variant="glass"
                size="md"
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Figma Prototype
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="outline"
                size="md"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="h-4 w-4" />}
              >
                GitHub Code
              </Button>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Mockup Showcase */}
        <div
          className={`lg:col-span-6 flex justify-center ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="w-full transition-transform duration-300 group-hover:scale-[1.01]">
            {renderMockup()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
