"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  badgeIcon?: string;
  title: string;
  gradientWord?: string;
  gradientType?: "emerald" | "cyan" | "violet" | "multi";
  subtitle: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  gradientWord,
  gradientType = "emerald",
  subtitle,
  center = false,
}) => {
  const gradientClass = {
    emerald: "text-gradient-emerald",
    cyan: "text-gradient-cyan",
    violet: "text-gradient-violet",
    multi: "text-gradient-multi",
  }[gradientType];

  // Dynamically render lucide icon if provided
  const IconComponent = badgeIcon && (Icons as any)[badgeIcon] ? (Icons as any)[badgeIcon] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono font-medium tracking-wide mb-4 text-emerald-400 backdrop-blur-md shadow-sm ${
          center ? "mx-auto" : ""
        }`}
      >
        {IconComponent && <IconComponent className="w-3.5 h-3.5 text-emerald-400" />}
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {gradientWord ? (
          <>
            {title.split(gradientWord)[0]}
            <span className={gradientClass}>{gradientWord}</span>
            {title.split(gradientWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      <p className="text-slate-400 text-base md:text-lg leading-relaxed">{subtitle}</p>
    </motion.div>
  );
};
