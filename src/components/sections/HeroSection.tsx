"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, Shield, Database, Server } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ui/ResumeModal";

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="orb-glow w-[500px] h-[500px] bg-emerald-500/15 top-10 -left-48" />
      <div className="orb-glow w-[450px] h-[450px] bg-cyan-500/15 bottom-10 -right-48" />
      <div className="orb-glow w-[350px] h-[350px] bg-violet-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Beacon */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md text-xs font-mono text-emerald-300 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Java Developer • Spring Boot & Linux VPS Specialist</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-gradient-emerald">{personalInfo.name}</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono">
                  {"> "}{personalInfo.roles[roleIndex]}
                </span>
              </div>
            </motion.div>

            {/* Sub-headline / Elevator Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              {personalInfo.subHeadline} Currently delivering live production microservices at{" "}
              <strong className="text-emerald-400 font-semibold">Veagle Space</strong> and shipping scalable end-to-end applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <span>Explore Live Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm transition-all border border-slate-700/80 hover:border-emerald-500/40 shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let's Talk</span>
              </a>
            </motion.div>

            {/* Key Metric Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl font-extrabold text-white font-mono">{stat.value}</p>
                  <p className="text-[11px] text-slate-400 font-sans mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Visual & Floating Tech Pills */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Animated Glowing Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-600 opacity-30 blur-xl animate-pulse-slow" />
              
              {/* Profile Card Container */}
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-2 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden relative bg-slate-950">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080C14] to-transparent" />
                  
                  {/* Floating role chip inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <Server className="w-3.5 h-3.5" />
                      <span>Spring Boot 3.x</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">Production Live</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill 1: Linux VPS & Nginx */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 sm:-left-10 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-slate-200"
              >
                <div className="p-1 rounded bg-cyan-500/20 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
                <span>Ubuntu VPS / Nginx</span>
              </motion.div>

              {/* Floating Pill 2: High Concurrency SQL */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono text-slate-200"
              >
                <div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <span>MySQL ACID Schema</span>
              </motion.div>
            </motion.div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/AkshaySingare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-slate-800 transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/Akshay-Singare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-all"
                title="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};
