"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Monitor,
  Smartphone,
  Cpu,
  Search,
  Layers,
  LucideIcon,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Monitor,
  Smartphone,
  Cpu,
  Search,
  Layers,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Design Capabilities"
          title="What I Can Do For Your Product."
          subtitle="Specialized digital design capabilities ready to be deployed across product teams, early-stage startups, and design agencies."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.07] hover:shadow-neon-indigo/20 shadow-glass-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:scale-105 transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-indigo-200 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-indigo-400 group-hover:text-indigo-300">
                  <span>Available for project collaboration</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
