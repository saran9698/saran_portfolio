"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Linkedin,
  Github,
  Code2,
  Terminal,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "prepared"
  >("idle");

  // Keep live local time for Hosur, Tamil Nadu (IST, UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmissionStatus("submitting");

    // Open user's default email client pre-filled with the message
    const mailtoUrl = `mailto:${encodeURIComponent(
      PERSONAL_INFO.email
    )}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} — from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Saran,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via sarank-portfolio`
    )}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmissionStatus("prepared");
    }, 600);
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "github":
        return <Github className="h-4 w-4" />;
      case "hackerrank":
        return <Code2 className="h-4 w-4" />;
      case "leetcode":
        return <Terminal className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Have an Idea? Let's Design Something Great."
          subtitle="Whether you have an upcoming project, a design opening, or just want to discuss product design, I'd love to connect."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT: PREMIUM CONTACT FORM */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                  <Mail className="h-4 w-4" />
                  <span>Send a Direct Message</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  Direct to Inbox
                </span>
              </div>

              {submissionStatus === "prepared" ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    Email Client Opened!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your email client has been launched with your message pre-filled to{" "}
                    <span className="text-emerald-300 font-mono font-semibold">
                      {PERSONAL_INFO.email}
                    </span>
                    . Simply hit send in your email client.
                  </p>
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => {
                      setSubmissionStatus("idle");
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                      >
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-400 focus:bg-white/[0.07] ${
                          errors.name ? "border-rose-500" : "border-white/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                      >
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-400 focus:bg-white/[0.07] ${
                          errors.email ? "border-rose-500" : "border-white/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Subject <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Junior UI/UX Designer Opportunity / Design Project"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-400 focus:bg-white/[0.07] ${
                        errors.subject ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Share a brief overview of your design project, opportunity, or goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-400 focus:bg-white/[0.07] resize-none ${
                        errors.message ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={submissionStatus === "submitting"}
                      icon={<Send className="h-4 w-4" />}
                    >
                      {submissionStatus === "submitting"
                        ? "Opening Mail Client..."
                        : "Send Message"}
                    </Button>
                    <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
                      Launches your mail client directly addressed to saransaran9698@gmail.com
                    </p>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: CONTACT INFORMATION & SOCIAL PROFILES */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card with 1-Click Copy */}
            <GlassCard hoverEffect={true} className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400">
                <Mail className="h-4 w-4" />
                <span>Primary Email Address</span>
              </div>

              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-lg font-bold font-display text-white hover:text-indigo-300 transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Guaranteed response within 24 hours.
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Copy email address"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </GlassCard>

            {/* Location & Local Time Card */}
            <GlassCard hoverEffect={true} className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                  <MapPin className="h-4 w-4" />
                  <span>Location</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  <Clock className="h-3.5 w-3.5 text-indigo-400" />
                  <span>{localTime || "IST (UTC+5:30)"}</span>
                </div>
              </div>

              <h4 className="text-lg font-bold font-display text-white">
                Hosur, Tamil Nadu, India
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Located in the Bangalore-Hosur tech corridor. Available for on-site roles in
                Hosur/Bangalore/Chennai and remote worldwide.
              </p>
            </GlassCard>

            {/* Social Profiles Grid */}
            <GlassCard className="p-6 space-y-4">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Official Profiles & Repositories:
              </span>

              <div className="space-y-2.5">
                {PERSONAL_INFO.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 text-slate-300 hover:border-indigo-500/40 hover:bg-white/[0.06] hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-slate-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                        {getSocialIcon(social.name)}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {social.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {social.username}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
