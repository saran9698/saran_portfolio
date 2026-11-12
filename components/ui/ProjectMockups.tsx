"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Thermometer,
  ShieldCheck,
  Tv,
  Search,
  BookOpen,
  Star,
  Activity,
  Zap,
  TrendingDown,
  Layers,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  Sliders,
  Check,
} from "lucide-react";

// ==========================================
// 1. HOMORA SMART HOME MOBILE MOCKUP
// ==========================================
export const HomoraMockup: React.FC = () => {
  const [lightsOn, setLightsOn] = useState(true);
  const [temperature, setTemperature] = useState(22);
  const [activeRoom, setActiveRoom] = useState("Living Room");
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-[340px] rounded-[38px] border-4 border-slate-700/60 bg-[#0B1120] p-4 shadow-2xl overflow-hidden select-none">
      {/* Phone Notch & Status Bar */}
      <div className="flex items-center justify-between px-3 pb-3 pt-1 text-[11px] font-mono text-slate-400">
        <span>9:41</span>
        <div className="h-4 w-24 rounded-full bg-slate-900 border border-white/10" />
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <span className="h-2 w-4 rounded-sm border border-slate-400 bg-slate-400" />
        </div>
      </div>

      {/* App Header */}
      <div className="px-2 pt-1 pb-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-400">
            HOMORA • Hosur Home
          </span>
          <h4 className="text-base font-bold text-white font-display">Good Evening, Saran</h4>
        </div>
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-neon-indigo">
          SK
        </div>
      </div>

      {/* Room Selector Pills */}
      <div className="flex items-center gap-1.5 px-1 pb-3 overflow-x-auto text-[11px]">
        {["Living Room", "Bedroom", "Studio", "Kitchen"].map((room) => (
          <button
            key={room}
            onClick={() => setActiveRoom(room)}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-all ${
              activeRoom === room
                ? "bg-indigo-600 text-white font-medium shadow-sm"
                : "bg-white/5 text-slate-400 hover:text-slate-200"
            }`}
          >
            {room}
          </button>
        ))}
      </div>

      {/* Main Climate Card */}
      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-[#0F172A] p-4 mb-3 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-cyan-400" />
            <span className="text-xs text-slate-300 font-medium">Climate Control</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            Eco Active
          </span>
        </div>

        <div className="flex items-baseline justify-between mt-3">
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold text-white font-display">
              {temperature}
            </span>
            <span className="text-lg text-cyan-400 ml-1">°C</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setTemperature((t) => Math.max(16, t - 1))}
              className="h-7 w-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm"
              aria-label="Decrease temp"
            >
              -
            </button>
            <button
              onClick={() => setTemperature((t) => Math.min(30, t + 1))}
              className="h-7 w-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm"
              aria-label="Increase temp"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Quick Interactive Device Grid */}
      <div className="grid grid-cols-2 gap-2.5 pb-2">
        {/* Smart Lights */}
        <div
          onClick={() => setLightsOn(!lightsOn)}
          className={`cursor-pointer rounded-2xl border p-3 transition-all ${
            lightsOn
              ? "border-indigo-500/50 bg-indigo-500/15 shadow-[0_0_20px_-3px_rgba(99,102,241,0.3)]"
              : "border-white/5 bg-white/[0.03]"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <Lightbulb
              className={`h-5 w-5 ${
                lightsOn ? "text-amber-300 drop-shadow-[0_0_8px_#fde047]" : "text-slate-500"
              }`}
            />
            <span
              className={`text-[10px] font-mono uppercase ${
                lightsOn ? "text-indigo-300 font-bold" : "text-slate-500"
              }`}
            >
              {lightsOn ? "ON" : "OFF"}
            </span>
          </div>
          <p className="text-xs font-semibold text-white">Smart Ambient</p>
          <p className="text-[10px] text-slate-400">Philips Hue • 85%</p>
        </div>

        {/* Security Lock */}
        <div
          onClick={() => setIsLocked(!isLocked)}
          className={`cursor-pointer rounded-2xl border p-3 transition-all ${
            isLocked
              ? "border-cyan-500/40 bg-cyan-500/10"
              : "border-rose-500/40 bg-rose-500/10"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <ShieldCheck
              className={`h-5 w-5 ${isLocked ? "text-cyan-400" : "text-rose-400"}`}
            />
            <span
              className={`text-[10px] font-mono uppercase ${
                isLocked ? "text-cyan-300 font-bold" : "text-rose-300 font-bold"
              }`}
            >
              {isLocked ? "LOCKED" : "UNLOCKED"}
            </span>
          </div>
          <p className="text-xs font-semibold text-white">Front Door</p>
          <p className="text-[10px] text-slate-400">Biometric Smart Lock</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-around text-slate-400 text-xs">
        <span className="text-indigo-400 font-medium">Home</span>
        <span className="hover:text-white">Devices</span>
        <span className="hover:text-white">Scenes</span>
        <span className="hover:text-white">Profile</span>
      </div>
    </div>
  );
};

// ==========================================
// 2. COURSEINN REDESIGN BROWSER MOCKUP
// ==========================================
export const CourseinnMockup: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const courses = [
    {
      title: "Design Systems & Token Architecture",
      instructor: "Saran K",
      rating: "4.9",
      lessons: "18 Lessons",
      tag: "UI/UX",
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Human-Centered Mobile App UX",
      instructor: "Design Guild",
      rating: "4.8",
      lessons: "24 Lessons",
      tag: "Product",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <div className="rounded-2xl border border-white/15 bg-[#0D1424] shadow-2xl overflow-hidden text-slate-200">
      {/* Browser Bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0A0F1D] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-md bg-white/5 px-2 text-[11px] font-mono text-slate-400 border border-white/5">
          https://courseinn.design/explore
        </div>
      </div>

      {/* Header & Search */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">
              Website Redesign • 2026
            </span>
            <h4 className="text-lg font-bold text-white font-display">
              Curated Courses for Modern Designers
            </h4>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs">
            <Search className="h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search UX courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-white placeholder-slate-500 text-xs outline-none w-28 sm:w-36"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 pb-4 overflow-x-auto text-xs">
          {["All Courses", "UI/UX Design", "Figma", "Research", "Accessibility"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white font-medium"
                    : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-3.5 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all"
            >
              <div
                className={`h-24 w-full rounded-lg bg-gradient-to-r ${course.color} p-3 flex flex-col justify-between mb-3 relative overflow-hidden`}
              >
                <span className="self-start text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-white backdrop-blur-sm">
                  {course.tag}
                </span>
                <span className="text-xs font-semibold text-white/90">Course Preview</span>
              </div>
              <h5 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                {course.title}
              </h5>
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3 text-indigo-400" />
                  {course.lessons}
                </span>
                <span className="flex items-center gap-1 text-amber-300 font-medium">
                  <Star className="h-3 w-3 fill-amber-300" />
                  {course.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. SMART ENERGY SYSTEM TELEMETRY MOCKUP
// ==========================================
export const EnergySystemMockup: React.FC = () => {
  return (
    <div className="rounded-2xl border border-white/15 bg-[#090F1C] p-4 sm:p-5 shadow-2xl text-slate-200">
      {/* Top Banner with Best Project Award badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            IoT LSTM Telemetry Engine
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300">
          <Sparkles className="h-3 w-3" />
          Best Capstone Project 2025
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
          <span className="text-[10px] text-slate-400 block font-mono">Live Load</span>
          <span className="text-base sm:text-xl font-bold text-white font-display">3.42 kW</span>
          <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
            <TrendingDown className="h-3 w-3" /> -12% avg
          </span>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
          <span className="text-[10px] text-slate-400 block font-mono">LSTM Predicted</span>
          <span className="text-base sm:text-xl font-bold text-cyan-400 font-display">3.58 kW</span>
          <span className="text-[10px] text-slate-400">± 0.05 RMSE</span>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5">
          <span className="text-[10px] text-slate-400 block font-mono">Peak Forecast</span>
          <span className="text-base sm:text-xl font-bold text-purple-400 font-display">5.8 kW</span>
          <span className="text-[10px] text-slate-400">@ 19:30 IST</span>
        </div>
      </div>

      {/* Dynamic SVG Waveform Chart */}
      <div className="rounded-xl border border-white/10 bg-black/40 p-3 mb-3">
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-2">
          <span>Actual Load vs LSTM Prediction (24h Window)</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-cyan-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> Actual
            </span>
            <span className="flex items-center gap-1 text-purple-400">
              <span className="h-2 w-2 rounded-full bg-purple-400" /> LSTM Curve
            </span>
          </div>
        </div>

        {/* SVG Graphic */}
        <div className="h-28 w-full relative">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid horizontal lines */}
            <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

            {/* Actual Filled Curve */}
            <path
              d="M 0 75 Q 40 40, 80 55 T 160 30 T 220 70 T 300 20 L 300 100 L 0 100 Z"
              fill="url(#actualGradient)"
            />
            {/* Actual Line */}
            <path
              d="M 0 75 Q 40 40, 80 55 T 160 30 T 220 70 T 300 20"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2.5"
            />
            {/* LSTM Predicted Line */}
            <path
              d="M 0 78 Q 40 45, 80 52 T 160 35 T 220 65 T 300 24"
              fill="none"
              stroke="#A855F7"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      {/* Appliance Load Distribution */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>HVAC: 42%</span>
        <span>Refrig: 18%</span>
        <span>Compute: 22%</span>
        <span>Lighting: 18%</span>
      </div>
    </div>
  );
};

// ==========================================
// 4. DESIGN SYSTEM TOKEN SHOWCASE MOCKUP
// ==========================================
export const DesignSystemMockup: React.FC = () => {
  const [toggleState, setToggleState] = useState(true);
  const [sliderVal, setSliderVal] = useState(70);

  return (
    <div className="rounded-2xl border border-white/15 bg-[#0C1322] p-4 sm:p-5 shadow-2xl text-slate-200">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-indigo-400" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Atomic Component Spec & Tokens
          </span>
        </div>
        <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded-md">
          WCAG 2.2 AA Compliant
        </span>
      </div>

      {/* Color Tokens Swatches */}
      <div className="mb-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
          Color Tokens & Contrast Ratio
        </span>
        <div className="grid grid-cols-4 gap-2">
          <div className="rounded-lg bg-[#6366F1] p-2 text-white">
            <span className="block text-[10px] font-bold">Primary</span>
            <span className="text-[9px] font-mono opacity-80">#6366F1</span>
          </div>
          <div className="rounded-lg bg-[#8B5CF6] p-2 text-white">
            <span className="block text-[10px] font-bold">Secondary</span>
            <span className="text-[9px] font-mono opacity-80">#8B5CF6</span>
          </div>
          <div className="rounded-lg bg-[#06B6D4] p-2 text-slate-950 font-semibold">
            <span className="block text-[10px]">Accent</span>
            <span className="text-[9px] font-mono opacity-90">#06B6D4</span>
          </div>
          <div className="rounded-lg bg-[#0B1120] border border-white/20 p-2 text-white">
            <span className="block text-[10px] font-bold">Obsidian</span>
            <span className="text-[9px] font-mono opacity-80">#0B1120</span>
          </div>
        </div>
      </div>

      {/* Interactive UI Atoms */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 space-y-3">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
          Interactive Component States
        </span>

        {/* Buttons anatomy */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors">
            Primary Action
          </button>
          <button className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/10 transition-colors">
            Glass Surface
          </button>
          <button className="rounded-lg border border-indigo-400/40 px-3 py-1.5 text-xs font-medium text-indigo-300 hover:bg-indigo-500/10 transition-colors">
            Outline
          </button>
        </div>

        {/* Switches & Sliders */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setToggleState(!toggleState)}
              className="text-indigo-400 focus:outline-none"
              aria-label="Toggle state"
            >
              {toggleState ? (
                <ToggleRight className="h-6 w-6 text-indigo-400" />
              ) : (
                <ToggleLeft className="h-6 w-6 text-slate-500" />
              )}
            </button>
            <span className="text-xs text-slate-300">
              {toggleState ? "Active State" : "Disabled State"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400">{sliderVal}%</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="h-1.5 w-20 rounded-lg appearance-none bg-slate-700 accent-indigo-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
