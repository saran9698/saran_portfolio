"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: "none" | "indigo" | "violet" | "cyan";
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = "none",
  hoverEffect = true,
  ...props
}) => {
  const glowStyles = {
    none: "",
    indigo: "after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:bg-indigo-500/10 after:blur-xl",
    violet: "after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:bg-purple-500/10 after:blur-xl",
    cyan: "after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:bg-cyan-500/10 after:blur-xl",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-white/[0.1] bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300",
        "shadow-glass-sm shadow-black/40",
        hoverEffect && "hover:border-white/[0.22] hover:bg-white/[0.07] hover:shadow-glass-md",
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {/* Subtle top inner highlight line for Apple-like glass reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </motion.div>
  );
};
