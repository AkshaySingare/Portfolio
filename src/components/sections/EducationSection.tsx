"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Languages, Award, CheckCircle2 } from "lucide-react";
import { education, spokenLanguages } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Background"
          badgeIcon="GraduationCap"
          title="Education & Language Proficiency"
          gradientWord="Education"
          gradientType="violet"
          subtitle="Academic foundation in computer applications and multilingual communication capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-8 space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard glow="violet" className="p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{item.degree}</h3>
                      <p className="text-sm font-semibold text-violet-400 mt-0.5">{item.institution}</p>
                    </div>
                    <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {item.highlights && (
                    <div className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Spoken Languages & Core Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard className="p-6 sm:p-7 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Languages</h3>
                  <p className="text-xs text-slate-400 font-mono">Communication Fluency</p>
                </div>
              </div>

              <div className="space-y-4">
                {spokenLanguages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <div>
                        <h4 className="font-bold text-white text-sm">{lang.name}</h4>
                        <p className="text-xs text-slate-400">{lang.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Quick Summary Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0A0F1D] border border-slate-800 text-center space-y-3">
              <Award className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-white text-sm">Agile Collaborator</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experienced in fast-paced software engineering sprints, pull request reviews, and cross-functional team alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
