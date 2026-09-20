import { Github } from "./Icons";
import React, { useEffect } from "react";
import { 
  X,  ExternalLink, CheckCircle2, 
  Layers, AlertCircle, Sparkles, Server, Tag, UserCheck
} from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-white/15 bg-slate-950/95 shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top Header & Close Button */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {project.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-blue-300/90 mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full glass-panel text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 pt-6 text-sm leading-relaxed">
          
          {/* Project Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-200 bg-slate-900/50 p-4 rounded-xl border border-white/5">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Problem Statement</span>
            </h3>
            <p className="text-slate-300 bg-amber-950/10 p-4 rounded-xl border border-amber-500/20 text-amber-200/90">
              {project.problemStatement}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Features & Functional Highlights</span>
            </h3>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/5 text-slate-200"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                  <span className="text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Role and Contributions */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-purple-400" />
              <span>My Role & Contributions</span>
            </h3>
            <p className="text-slate-200 bg-purple-950/10 p-4 rounded-xl border border-purple-500/20 text-purple-200/90">
              {project.roleAndContributions}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Technologies & Tools</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-medium text-xs shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                Live Demo: Academic / Evaluated in Internship
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white text-xs font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
