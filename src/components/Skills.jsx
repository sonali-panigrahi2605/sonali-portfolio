import React, { useState } from "react";
import { 
  Code2, Server, Database, Terminal, Wrench, 
  Sparkles, CheckCircle2, Layers, Cpu, Cloud, 
  Container, Globe, Box
} from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Technologies", icon: <Layers className="w-4 h-4" /> },
    { id: "frontend", name: "Frontend", icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { id: "backend", name: "Backend & APIs", icon: <Server className="w-4 h-4 text-green-400" /> },
    { id: "database", name: "Databases", icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { id: "languages", name: "Languages", icon: <Terminal className="w-4 h-4 text-amber-400" /> },
    { id: "tools", name: "Tools & Cloud", icon: <Wrench className="w-4 h-4 text-purple-400" /> },
  ];

  const renderCategory = (title, items, icon, accentColor) => (
    <div className="p-6 sm:p-7 rounded-2xl glass-card border border-white/10 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 pb-4 mb-5 border-b border-white/10">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 shadow-sm" style={{ color: accentColor }}>
            {icon}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {title}
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              {items.length} Skills Listed
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {items.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-white/5 hover:border-blue-500/40 hover:bg-slate-850 hover:scale-[1.02] transition-all duration-200 group"
            >
              <div 
                className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform"
                style={{ backgroundColor: skill.color || "#38bdf8" }}
              ></div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Verified Proficiency</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Project Tested
        </span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on expertise across modern full-stack web engineering, database architecture, and developer workflows. No fake percentagesonly demonstrated proficiency.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 border border-blue-400/30"
                  : "glass-panel text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "all" || activeTab === "frontend") &&
            renderCategory("Frontend Engineering", skillsData.frontend, <Code2 className="w-5 h-5" />, "#38bdf8")}

          {(activeTab === "all" || activeTab === "backend") &&
            renderCategory("Backend & API Architecture", skillsData.backend, <Server className="w-5 h-5" />, "#22c55e")}

          {(activeTab === "all" || activeTab === "database") &&
            renderCategory("Database & Storage", skillsData.database, <Database className="w-5 h-5" />, "#10b981")}

          {(activeTab === "all" || activeTab === "languages") &&
            renderCategory("Programming Languages", skillsData.languages, <Terminal className="w-5 h-5" />, "#facc15")}

          {(activeTab === "all" || activeTab === "tools") &&
            renderCategory("Tools, Cloud & Containers", skillsData.tools, <Wrench className="w-5 h-5" />, "#a855f7")}
        </div>

        {/* Recruiter Callout Banner */}
        <div className="mt-12 p-5 rounded-2xl glass-panel border border-blue-500/20 bg-blue-950/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full-Stack Readiness</h4>
              <p className="text-xs text-slate-400">
                Trained in end-to-end MERN architecture, RESTful API design, and cloud containerization via Docker & AWS basics.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
          >
            See Skills In Projects ?
          </a>
        </div>

      </div>
    </section>
  );
}
