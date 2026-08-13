"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check, ExternalLink, Sparkles } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Hi Akshay,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    
    // Using Gmail Compose URL to force opening in a new browser tab instead of a native app
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, "_blank");
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-glow w-96 h-96 bg-emerald-500/10 bottom-0 left-1/4" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Direct Outreach"
          badgeIcon="Mail"
          title="Let's Build Something Exceptional Together"
          gradientWord="Together"
          gradientType="emerald"
          subtitle="Whether you have an open Java backend position, an enterprise project, or want to discuss system architecture, I'm ready to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Details & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glow="emerald" className="p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Contact Information
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to reach out directly via email, phone, WhatsApp, or connect on professional networks.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-mono">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-emerald-400 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, "email")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-mono">Phone / Mobile</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-cyan-400 truncate block transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-mono">WhatsApp Instant Chat</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-100">Direct Message</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/917020540649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-xs font-semibold transition-all"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Base Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-100">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill in the details below and clicking send will compose an email directly to Akshay.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-300">
                    Your message draft is ready. You can also email directly at {personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">Subject</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Java Backend Engineer Opportunity / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Akshay, I came across your portfolio and wanted to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Akshay</span>
                  </button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
