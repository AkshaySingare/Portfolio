"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Server, Layers, ShieldCheck, Database } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0C1220] border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">• {project.role}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-6 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">Overview</h4>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
            </div>

            {/* Quick Stats Grid */}
            {project.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <p className="text-xs text-slate-400 font-mono">{stat.label}</p>
                    <p className="text-base font-bold text-emerald-400 mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Architectural Highlights */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">Key Engineering Deliverables</h4>
              <div className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">System Architecture Notes</h4>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-2">
                  {project.architectureNotes.map((note, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">⚡</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
