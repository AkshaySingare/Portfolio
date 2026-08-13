"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, Sparkles, Filter } from "lucide-react";
import { projects } from "@/data/portfolioData";
import { Project } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectModal } from "@/components/ui/ProjectModal";

const filterCategories = ["All", "Production", "Backend", "Full Stack", "Mobile"] as const;

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "All") return true;
    if (p.category === selectedFilter) return true;
    if (p.role.includes(selectedFilter)) return true;
    return false;
  });

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Portfolio Showcase"
          badgeIcon="Layers"
          title="Featured Systems & Production Deliverables"
          gradientWord="Deliverables"
          gradientType="emerald"
          subtitle="Explore live production applications, transactional backend engines, and full-stack systems built for performance."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterCategories.map((cat) => {
            const count = cat === "All" 
              ? projects.length 
              : projects.filter((p) => p.category === cat || p.role.includes(cat)).length;
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GlassCard glow="emerald" className="h-full flex flex-col justify-between p-6 sm:p-7 group">
                  {/* Top Badge & Role */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.category}
                      </span>
                      {project.isFeatured && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-1 mb-3">{project.role}</p>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech Stack & Actions */}
                  <div className="space-y-4 pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/40 text-slate-500">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-semibold transition-colors"
                      >
                        <span>Deep Dive Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                            title="GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/30 transition-all"
                            title="Visit Live"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
