"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Play, RefreshCw } from "lucide-react";
import { personalInfo, experiences } from "@/data/portfolioData";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "neofetch --backend-engineer",
      output: (
        <div className="text-slate-300 font-mono text-xs sm:text-sm space-y-1">
          <p className="text-emerald-400 font-bold">akshay@veagle-vps-prod:~$</p>
          <p><span className="text-cyan-400 font-semibold">OS:</span> Ubuntu 22.04 LTS (Linux x86_64)</p>
          <p><span className="text-cyan-400 font-semibold">Role:</span> Java Backend Developer & Deployment Engineer</p>
          <p><span className="text-cyan-400 font-semibold">Core Stack:</span> Java 17+ | Spring Boot | MySQL | Nginx</p>
          <p><span className="text-cyan-400 font-semibold">Experience:</span> 11+ Months Hands-on (Veagle Space & Creazione)</p>
          <p><span className="text-cyan-400 font-semibold">Current Status:</span> <span className="text-emerald-400">● 100% Operational & Available for Opportunities</span></p>
        </div>
      ),
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);

  const predefinedCommands = [
    { label: "systemctl status", cmd: "systemctl status spring-boot-backend.service" },
    { label: "cat summary.md", cmd: "cat summary.md" },
    { label: "skills --top", cmd: "skills --top" },
    { label: "curl /api/contact", cmd: "curl -s https://akshaysingare.dev/api/contact" },
  ];

  const handleRunCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    let out: React.ReactNode = null;

    if (trimmed.toLowerCase() === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (trimmed.toLowerCase() === "help") {
      out = (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">Available Commands:</p>
          <p><span className="text-cyan-400">skills</span> - Display technical skill stack</p>
          <p><span className="text-cyan-400">projects</span> - View live systems delivered</p>
          <p><span className="text-cyan-400">experience</span> - View career timeline</p>
          <p><span className="text-cyan-400">contact</span> - Display email and direct phone</p>
          <p><span className="text-cyan-400">sudo hire</span> - Direct offer channel</p>
          <p><span className="text-cyan-400">clear</span> - Clear terminal screen</p>
        </div>
      );
    } else if (trimmed.includes("systemctl status")) {
      out = (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400">● spring-boot-backend.service - Veagle Space Core API</p>
          <p className="text-slate-400">   Loaded: loaded (/etc/systemd/system/spring-boot-backend.service; enabled)</p>
          <p className="text-slate-400">   Active: <span className="text-emerald-400 font-bold">active (running)</span> since March 2026</p>
          <p className="text-slate-400">   Main PID: 24891 (java -jar app.jar --spring.profiles.active=prod)</p>
          <p className="text-slate-400">   Tasks: 42 (limit: 4915)</p>
          <p className="text-emerald-400 font-mono">   Logs: [INFO] Tomcat started on port(s): 8080 (http) with context path ''</p>
        </div>
      );
    } else if (trimmed.includes("cat summary.md") || trimmed.toLowerCase() === "whoami") {
      out = (
        <p className="text-slate-300 leading-relaxed">
          {personalInfo.bio}
        </p>
      );
    } else if (trimmed.includes("skills")) {
      out = (
        <div className="text-slate-300 space-y-1">
          <p><span className="text-emerald-400 font-bold">Backend:</span> Java, Spring Boot, Spring Security, Hibernate (JPA), REST APIs, Maven</p>
          <p><span className="text-cyan-400 font-bold">Database:</span> MySQL (Advanced Indexing & Relational Schema), SQL, MongoDB</p>
          <p><span className="text-violet-400 font-bold">DevOps:</span> Linux Ubuntu, Nginx Reverse Proxy, GitHub Actions CI/CD, Hostinger VPS, PM2</p>
          <p><span className="text-amber-400 font-bold">Frontend:</span> Next.js, React.js, Tailwind CSS, TypeScript, JavaScript</p>
        </div>
      );
    } else if (trimmed.includes("contact") || trimmed.includes("curl")) {
      out = (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400">HTTP/1.1 200 OK</p>
          <p className="text-emerald-400 font-mono">{"{"}</p>
          <p className="text-slate-300 pl-4">"name": "{personalInfo.name}",</p>
          <p className="text-slate-300 pl-4">"email": "{personalInfo.email}",</p>
          <p className="text-slate-300 pl-4">"phone": "{personalInfo.phone}",</p>
          <p className="text-slate-300 pl-4">"location": "{personalInfo.location}",</p>
          <p className="text-slate-300 pl-4">"status": "Available"</p>
          <p className="text-emerald-400 font-mono">{"}"}</p>
        </div>
      );
    } else if (trimmed.includes("sudo hire") || trimmed.includes("hire")) {
      out = (
        <div className="text-emerald-400 space-y-1 font-bold">
          <p>✓ Permission granted: Elevating privileges!</p>
          <p className="text-white font-normal">Ready to discuss your backend engineering or full-stack role. Contact directly at <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 underline">{personalInfo.email}</a> or call <a href={`tel:${personalInfo.phone}`} className="text-cyan-400 underline">{personalInfo.phone}</a>.</p>
        </div>
      );
    } else {
      out = (
        <p className="text-rose-400">
          command not found: {trimmed}. Type <span className="text-emerald-400 font-bold">help</span> to view supported commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: out }]);
    setInputVal("");
  };

  const copyTerminalOutput = () => {
    const text = history.map(h => `$ ${h.command}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800/90 shadow-2xl shadow-emerald-950/10 font-mono">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40"></div>
          <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5 font-sans font-medium">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            akshay@vps-production:~ (bash)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory([])}
            title="Clear terminal"
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={copyTerminalOutput}
            title="Copy logs"
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Interactive Command Suggestions */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-slate-950/60 border-b border-slate-900 text-xs">
        <span className="text-slate-500 font-sans text-[11px]">Quick actions:</span>
        {predefinedCommands.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleRunCommand(item.cmd)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-emerald-950/60 hover:text-emerald-300 hover:border-emerald-500/40 border border-slate-700/50 text-slate-300 transition-all text-xs"
          >
            <Play className="w-2.5 h-2.5 text-emerald-400" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
        {history.map((item, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">akshay@vps:~$</span>
              <span className="text-slate-200">{item.command}</span>
            </div>
            <div className="pl-4 border-l-2 border-slate-800 text-slate-300">{item.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRunCommand(inputVal);
          }}
          className="flex items-center gap-2 text-slate-400 pt-1"
        >
          <span className="text-emerald-400 font-bold whitespace-nowrap">akshay@vps:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', or click a button above..."
            className="w-full bg-transparent text-slate-100 focus:outline-none placeholder-slate-600 font-mono text-xs sm:text-sm"
          />
        </form>
      </div>
    </div>
  );
};
