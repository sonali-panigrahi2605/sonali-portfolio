import React from "react";
import { 
  Briefcase, Calendar, Award, CheckCircle2, 
  Sparkles, Building2, ChevronRight, Terminal
} from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Internships & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on software development internships demonstrating verified industry-standard code quality, full-stack development, and artificial intelligence foundations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-30"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-10`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 shadow-md shadow-blue-500/30 flex items-center justify-center z-10">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                  </div>

                  {/* Spacer for Alternate side on Desktop */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className="p-6 sm:p-7 rounded-2xl glass-card border border-white/10 hover:border-blue-500/30 group">
                      
                      {/* Top Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {exp.grade}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-blue-400 mb-4">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {exp.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
