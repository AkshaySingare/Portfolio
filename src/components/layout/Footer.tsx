"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, MessageSquare, Heart, Terminal, Clock, ShieldCheck } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const istTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#060910] text-slate-400 font-sans overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
                AS
              </div>
              <span className="font-bold text-white text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Java Developer focused on designing scalable Spring Boot microservices, high-concurrency MySQL schemas, and automating production Linux VPS pipelines.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pune, IN: <strong className="text-white">{time || "Loading..."}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open for Roles</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Akshay</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Work Experience</a></li>
              <li><a href="#architecture" className="hover:text-emerald-400 transition-colors">System Architecture</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Production Projects</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Technical Skills</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Information</a></li>
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-4">Connect Directly</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="https://github.com/AkshaySingare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/Akshay-Singare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/917020540649`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Direct</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Engineered with Next.js, Tailwind CSS & Java Spirit.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
