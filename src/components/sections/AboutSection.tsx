"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Database, Terminal, CheckCircle2, Code2, Cpu, Globe } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";

export const AboutSection: React.FC = () => {
  const engineeringPillars = [
    {
      icon: Server,
      title: "Backend & Microservices",
      desc: "Robust Java & Spring Boot services engineered with clean architectural patterns, DTO validation, and maintainable layered structures.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Security & Authentication",
      desc: "Zero-trust Spring Security filter chains, stateless JWT issuance, RBAC permissions, and protection against OWASP vulnerabilities.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      icon: Database,
      title: "Relational Schema & ACID",
      desc: "Performance-tuned MySQL databases, normalized entities with Hibernate (JPA), indexing strategies, and transactional locking.",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
    {
      icon: Terminal,
      title: "Linux VPS & CI/CD Pipelines",
      desc: "Hands-on Ubuntu server administration, Nginx reverse proxy configuration with TLS/SSL, and GitHub Actions continuous delivery.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Engineering Profile"
          badgeIcon="Code2"
          title="Engineered for Scalability, Security & Performance"
          gradientWord="Scalability"
          gradientType="emerald"
          subtitle="Specialized in building high-throughput backend services with Java & Spring Boot, while bridging frontend interfaces with Next.js."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 flex flex-col h-full justify-between"
          >
            <GlassCard className="p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                Backend Craftsmanship & System Reliability
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a Java Developer with <strong>11 months of hands-on experience</strong> (5 months as a Software Developer / Backend Developer & Deployment Engineer at <em>Veagle Space</em>, and 6 months as a Java Developer Intern at <em>Creazione Software</em>).
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My primary focus is crafting secure, high-throughput backend systems using <strong>Java, Spring Boot, Spring Security, and Hibernate (JPA) with MySQL</strong>. I take pride in designing transactional schemas that prevent race conditions and writing clean, maintainable code following SOLID principles.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Beyond writing backend services, I have strong operational skills in <strong>Linux server administration (Ubuntu), Nginx reverse proxy configuration, automated GitHub Actions CI/CD workflows, and Hostinger VPS deployment</strong>.
              </p>

              {/* Key Bullet Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>Currently building and deploying a live production platform (<strong>veaglespace.com</strong>) end-to-end.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span>Delivered a client platform (<strong>valuexper.in</strong>) independently with custom VPS deployment.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-1" />
                  <span>Shipped cross-platform mobile apps to both Google Play Store and Apple App Store.</span>
                </div>
              </div>
            </GlassCard>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                <p className="text-2xl font-bold font-mono text-emerald-400">11+ Months</p>
                <p className="text-xs text-slate-400 mt-1">Hands-on Industry Experience</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                <p className="text-2xl font-bold font-mono text-cyan-400">Production</p>
                <p className="text-xs text-slate-400 mt-1">Live Systems Running 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-4 flex flex-col h-full min-h-[500px]"
          >
            {/* Developer Terminal Emulator */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)] w-full text-center sm:text-left h-auto">
              <Terminal className="w-4 h-4 text-emerald-400 shrink-0 hidden sm:block" />
              <span className="break-words max-w-full">If you don't get any info about me, type a command and see info about me!</span>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0">
                <InteractiveTerminal />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {engineeringPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300 space-y-3 group"
              >
                <div className={`w-10 h-10 rounded-xl ${p.bg} ${p.border} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${p.color}`} />
                </div>
                <h4 className="font-bold text-white text-sm">{p.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
