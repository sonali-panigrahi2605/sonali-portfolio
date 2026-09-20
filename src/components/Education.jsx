import React from "react";
import { 
  GraduationCap, Calendar, Award, Sparkles, 
  BookOpen, School, CheckCircle2 
} from "lucide-react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous foundation in computer applications, software engineering principles, and computational problem solving at GIET University.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-blue-500/30 group transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:border-blue-500/40 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <School className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{edu.institution}</span>
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-1">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                    {edu.score}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>{edu.details}</p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Academic Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
