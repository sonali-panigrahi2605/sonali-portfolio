import React, { useState } from "react";
import { 
  Award, CheckCircle2, ExternalLink, Calendar, 
  Sparkles, X, ShieldCheck, BookmarkCheck
} from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Certifications & <span className="gradient-text">Honors</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Standardized technical accreditations validating proficiency in MERN full-stack development, machine learning, cloud foundations, and algorithm design.
          </p>
        </div>

        {/* Certificate Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{cert.date}</span>
                </span>

                <button
                  onClick={() => setActiveCert(cert)}
                  className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Inspection Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveCert(null)}
            />
            <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-white/15 bg-slate-950/95 shadow-2xl p-6 sm:p-8 z-10 animate-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {activeCert.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {activeCert.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Issuing Organization</span>
                  <p className="font-semibold text-white mt-0.5">{activeCert.issuer}</p>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Period / Issue Date</span>
                  <p className="font-semibold text-slate-200 mt-0.5">{activeCert.date}</p>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Demonstrated Competencies</span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {activeCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 text-blue-300 border border-blue-500/20 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-xs shadow-md hover:brightness-110 transition-all"
                >
                  <span>Verify at {activeCert.issuer.split(' ')[0]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 rounded-xl glass-panel text-xs text-slate-300 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
