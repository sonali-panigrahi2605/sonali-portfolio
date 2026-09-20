import { Github, Linkedin } from "./Icons";
import React, { useState, useEffect } from "react";
import { 
  ArrowRight, Download, Mail,  
  Sparkles, Code2, Database, Layers, CheckCircle2,
  ExternalLink, Terminal, ChevronDown
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import heroImage from "../assets/sona.jpeg";

export default function Hero({ onOpenResume }) {
  // Typing animation state
  const phrases = [
    "MERN Stack Developer",
    "Software Developer",
    "AI/ML Enthusiast",
    "Final-Year MCA Candidate"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const targetPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(targetPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === targetPhrase) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Deleting
        setCurrentText(targetPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text, Typing, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6 shadow-sm shadow-emerald-950">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for 2026-2027 Opportunities & Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2 mb-4">
              <p className="text-sm sm:text-base font-semibold text-blue-400 tracking-wider uppercase font-mono">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text font-heading">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Dynamic Typing Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200">
              <span className="mr-2 text-indigo-400 font-mono">&gt;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300">
                {currentText}
              </span>
              <span className="w-0.5 h-6 sm:h-7 bg-blue-400 ml-1 animate-pulse"></span>
            </div>

            {/* Tagline & Summary */}
            <p className="text-lg sm:text-xl font-medium text-blue-300/90 mb-3">
              {personalInfo.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* View Projects */}
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download / View Resume */}
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-white/15 text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-white/10 font-semibold text-sm shadow-md active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-700 active:scale-[0.98] transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Info */}
            <div className="flex items-center gap-6 pt-2 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect With Me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg glass-panel hover:border-blue-500/50 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: sonali-panigrahi2605"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg glass-panel hover:border-blue-500/50 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Sonali Panigrahi"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg glass-panel hover:border-blue-500/50 text-slate-300 hover:text-white transition-colors"
                  aria-label="Email Address"
                  title={`Email: ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Developer Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 -rotate-3"></div>

              {/* Main Profile Card */}
              <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Top Terminal Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    sonali.developer.json
                  </span>
                </div>

                <div className="mx-auto w-40 h-40 sm:w-56 sm:h-56 rounded-[2rem] overflow-hidden bg-slate-900 shadow-xl shadow-blue-500/20 mb-6 border border-white/10">
                  <img
                    src={heroImage}
                    alt="Sonali Panigrahi"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="space-y-4 text-center">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Building modern web experiences with the MERN Stack and a passion for practical, user-focused products.
                  </p>

                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col">
                    <span className="text-[11px] font-mono text-slate-400">Target Role</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">Full Stack MERN</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col">
                    <span className="text-[11px] font-mono text-slate-400">Current CGPA</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-400">8.7 CGPA</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
          >
            <span>EXPLORE MORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-blue-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
