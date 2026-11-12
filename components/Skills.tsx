"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { SkillCard } from "./ui/SkillCard";

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { label: "All Skills", id: "all" },
    { label: "UI/UX Design", id: "ui-ux" },
    { label: "Design Tools", id: "tools" },
    { label: "UX Research", id: "research" },
    { label: "Design Systems", id: "systems" },
    { label: "Development", id: "development" },
    { label: "Productivity", id: "productivity" },
  ];

  const filteredCategories =
    activeFilter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Skills & Expertise"
          title="Tools & Disciplines I Bring to Every Project."
          subtitle="A comprehensive toolkit spanning user research, visual systems, prototyping tools, and technical implementation fundamentals."
          align="center"
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-neon-indigo/30"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Grouped Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category, index) => (
              <SkillCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
