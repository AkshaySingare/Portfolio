"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Database, Terminal, Layout, Cpu, Check, Sparkles } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "backend-java":
        return Server;
      case "databases":
        return Database;
      case "devops-cloud":
        return Terminal;
      case "frontend-web":
        return Layout;
      default:
        return Cpu;
    }
  };

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Technical Arsenal"
          badgeIcon="Cpu"
          title="Core Skills & Engineering Toolkit"
          gradientWord="Toolkit"
          gradientType="cyan"
          subtitle="Specialized in backend Java ecosystems, high-performance database architectures, and automated cloud operations."
        />

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeCategory === "all"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-10">
          {displayedCategories.map((category, catIdx) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              >
                <GlassCard className="p-6 sm:p-8">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                        <p className="text-xs text-slate-400 font-sans mt-0.5">{category.tagline}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 self-start sm:self-center">
                      {category.skills.length} core competencies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-slate-100 text-sm font-sans">{skill.name}</span>
                          {skill.badge && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-cyan-300 border border-slate-700/60">
                              {skill.badge}
                            </span>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>Proficiency</span>
                            <span className="text-emerald-400 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                            />
                          </div>
                        </div>

                        {skill.description && (
                          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
