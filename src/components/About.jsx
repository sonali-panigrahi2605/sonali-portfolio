import React from "react";
import { 
  GraduationCap, Layers, Cpu, Compass, 
  Award, Sparkles, CheckCircle, ArrowUpRight, 
  BookOpen, Terminal, Rocket
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Full Stack Development",
      description:
        "Specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) to engineer end-to-end web applications with clean RESTful APIs, secure authentication, and responsive interfaces."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Problem Solving & Code Quality",
      description:
        "Committed to writing maintainable, modular, and optimized code. Honed algorithmic problem solving through academic programs and awarded the 'Good Competing Code Award' at Hebbale Academy."
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      title: "Continuous Learning & AI/ML",
      description:
        "Proactively expanding knowledge into AI/ML data pipelines (10-week AICTE EduSkills Grade O), cloud foundations (NPTEL Google Cloud), and containerization practices with Docker."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiter Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            About <span className="gradient-text">Sonali Panigrahi</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging academic rigor at GIET University with practical, project-driven software engineering skills.
          </p>
        </div>

        {/* Top Story & Academic Snapshot Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>Academic Background & Career Focus</span>
              </h3>
              <p>
                I am currently in my final year of the <strong className="text-white">Master of Computer Applications (MCA)</strong> program at <strong className="text-blue-300">GIET University, Gunupur</strong>, expecting to graduate in <strong className="text-white">2027</strong> with a current academic record of <strong className="text-emerald-400">8.7 CGPA</strong>. Prior to my MCA, I completed my <strong className="text-white">BCA</strong> at GIET University with <strong className="text-emerald-400">8.43 CGPA</strong>.
              </p>
              <p>
                My passion lies in <strong className="text-white">Full-Stack Web Development</strong>, particularly crafting responsive client experiences with React.js and architecting high-throughput backend services using Node.js, Express.js, and MongoDB. 
              </p>
              <p>
                Beyond standard coursework, I focus on building <strong className="text-blue-300">real-world applications</strong>such as the OneKYCHub identity platform and the Online Exam Portalwhere security, scalability, and user empathy take center stage. I also actively explore AI/ML techniques for intelligent automation.
              </p>
            </div>
          </div>

          {/* Quick Metrics / Recruiter Highlights */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl glass-card border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 font-heading">
                    {stat.value}
                  </span>
                  <div className="text-xs font-semibold text-slate-200">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-3 pt-2 border-t border-white/5 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>{stat.detail}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 3 Animated Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-blue-500/40 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-blue-400 font-semibold">Core Competency</span>
                <span className="text-slate-500">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
