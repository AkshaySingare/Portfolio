"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, Server, Globe } from "lucide-react";
import { experiences } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Work History"
          badgeIcon="Briefcase"
          title="Professional Industry Experience"
          gradientWord="Experience"
          gradientType="cyan"
          subtitle="A track record of engineering scalable Java backend systems, delivering client web applications, and maintaining production cloud infrastructure."
        />

        <div className="space-y-8 relative">
          {/* Vertical connecting line for timeline */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-slate-800 pointer-events-none" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative md:pl-20 group"
            >
              {/* Timeline marker icon */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3, type: "spring" }}
                className="hidden md:flex absolute left-4 top-6 w-8 h-8 -translate-x-1/2 rounded-full bg-slate-900 border-2 border-emerald-500 items-center justify-center shadow-lg shadow-emerald-500/20 z-10 group-hover:scale-125 group-hover:shadow-emerald-500/50 group-hover:border-emerald-400 transition-all duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <GlassCard glow="emerald" className="p-6 sm:p-8 transition-colors duration-300 group-hover:border-emerald-500/40">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800/80 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.type}
                      </span>
                      {exp.verified && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                          ✓ Production Verified
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <p className="text-base font-semibold text-emerald-400 mt-0.5">{exp.company}</p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                    {exp.liveUrl && (
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-sans font-medium text-xs mt-1 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>{exp.liveUrl.replace("https://", "")}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Summary narrative */}
                <div className="py-5">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{exp.summary}</p>
                </div>

                {/* Bullet points */}
                <div className="space-y-2.5 pb-6">
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
