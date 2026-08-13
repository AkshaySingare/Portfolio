"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: "emerald" | "cyan" | "violet" | "none";
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = "none",
  interactive = false,
  ...props
}) => {
  const glowClasses = {
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)]",
    violet: "hover:border-violet-500/40 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.2)]",
    none: "",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] transition-all duration-300 overflow-hidden",
        interactive && "hover:-translate-y-1 cursor-pointer",
        glow !== "none" && glowClasses[glow],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
