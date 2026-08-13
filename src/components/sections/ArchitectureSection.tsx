"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ShieldCheck, Database, Terminal, ArrowRight, CheckCircle2, Cpu, Lock, GitBranch } from "lucide-react";
import { architectureHighlights } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const ArchitectureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(architectureHighlights[0].id);

  const currentHighlight = architectureHighlights.find((h) => h.id === activeTab) || architectureHighlights[0];

  const getTabIcon = (id: string) => {
    if (id.includes("security")) return Lock;
    if (id.includes("concurrency")) return Database;
    return GitBranch;
  };

  return (
    <section id="architecture" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Backend Engineering"
          badgeIcon="Layers"
          title="System Architecture & Infrastructure"
          gradientWord="Architecture"
          gradientType="violet"
          subtitle="Deep dive into how I design stateless authentication, handle high-concurrency transactional consistency, and automate Linux cloud deployments."
        />

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {architectureHighlights.map((highlight) => {
            const Icon = getTabIcon(highlight.id);
            const isActive = activeTab === highlight.id;
            return (
              <button
                key={highlight.id}
                onClick={() => setActiveTab(highlight.id)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/70 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-850"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                <span>{highlight.title}</span>
              </button>
            );
          })}
        </div>

        {/* Architecture Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHighlight.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard glow="violet" className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Overview & Guarantees */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {currentHighlight.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3">{currentHighlight.title}</h3>
                    <p className="text-sm font-mono text-emerald-400 mt-1">{currentHighlight.subtitle}</p>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {currentHighlight.description}
                  </p>

                  {/* Guaranteed Metrics */}
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Architectural Guarantees & Metrics
                    </h4>
                    <div className="space-y-2">
                      {currentHighlight.metrics.map((m, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-cyan-400 font-bold">✓</span>
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Interactive Workflow Pipeline */}
                <div className="lg:col-span-7">
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A] border border-slate-800 shadow-inner">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center justify-between">
                      <span>Execution Pipeline Flow</span>
                      <span className="text-emerald-400 font-normal">Deterministic Execution</span>
                    </h4>

                    <div className="space-y-4">
                      {currentHighlight.diagram.steps.map((step, idx) => (
                        <div key={idx} className="relative">
                          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition-colors">
                            <div className="space-y-1">
                              <h5 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                {step.title}
                              </h5>
                              <p className="text-xs text-slate-400 pl-4">{step.description}</p>
                            </div>
                            <span className="sm:ml-auto px-2.5 py-1 rounded text-[11px] font-mono bg-slate-800 text-emerald-300 border border-slate-700 whitespace-nowrap self-start sm:self-center">
                              {step.tech}
                            </span>
                          </div>

                          {/* Connector arrow between steps */}
                          {idx < currentHighlight.diagram.steps.length - 1 && (
                            <div className="flex justify-center my-1.5 text-slate-600">
                              <div className="w-0.5 h-3 bg-slate-800" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
