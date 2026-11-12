"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Figma,
  Search,
  Layers,
  Code2,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { SkillCategory } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Figma,
  Search,
  Layers,
  Code2,
  Briefcase,
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const IconComponent = iconMap[category.icon] || Layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.07] hover:shadow-neon-indigo/20 shadow-glass-sm flex flex-col justify-between"
    >
      <div>
        {/* Top Icon & Title */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
            <IconComponent className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold font-display text-white group-hover:text-indigo-200 transition-colors">
            {category.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 leading-relaxed font-sans mb-5">
          {category.description}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300 group-hover:border-white/20 group-hover:text-white transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
