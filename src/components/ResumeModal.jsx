import { Github, Linkedin } from "./Icons";
import React, { useState, useEffect } from "react";
import { 
  X, Printer, Copy, Check, Download, 
  ExternalLink, Mail, Phone, MapPin 
} from "lucide-react";
import { personalInfo, educationData, experienceData, certificationsData, skillsData, projectsData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
SONALI PANIGRAHI
Software Developer | MCA Candidate (2025 - 2027)
GIET University, Gunupur, Odisha, India
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

SUMMARY:
${personalInfo.summary}

EDUCATION:
- Master of Computer Applications (MCA) | GIET University (2025-2027) - Current Score: 8.7 CGPA
- Bachelor of Computer Applications (BCA) | GIET University (2022-2025) - Score: 8.43 CGPA
- Intermediate (+2 Science) | Vikash Higher Secondary School (2020-2022) - Score: 75.56%

SKILLS:
- Languages: JavaScript, Python, C, Java (Basic)
- Frontend: HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Angular.js
- Backend: Node.js, Express.js, REST APIs, JWT Authentication
- Databases: MongoDB, MySQL, Firebase
- Tools & Cloud: Git, GitHub, VS Code, Postman, npm, AWS (Basics), Docker (Basics)

MAJOR PROJECTS:
1. OneKYCHub | React.js, Node.js, Express.js, AWS, Docker
- Developed a centralized KYC platform allowing users to complete verification once and securely share with authorized orgs.
- Containerized microservices with Docker and integrated AWS cloud deployment.

2. Online Exam Portal | MERN Stack (PCS Global Internship)
- Built full-stack exam portal with secure authentication, exam management, question banks, and instant evaluation.
- Implemented role-based portals for students and administrators.

3. Travel Planner Website | HTML, CSS, JavaScript, Firebase
- Led a 3-member team building an itinerary planner and real-time budget tracker.

INTERNSHIPS:
- MERN Full Stack Development | AICTE-EduSkills (8 Weeks, Aug 2026) - Grade 'O' (Outstanding)
- AI/ML Virtual Internship | AICTE-EduSkills (10 Weeks, Jun 2026) - Grade 'O' (Outstanding)
- Full Stack Developer Intern | PCS Global - Developed Online Exam Portal
- Python & AWS Intern | Hebbale Academy (Jun-Jul 2024) - Good Competing Code Award

CERTIFICATIONS:
- MERN Full Stack Development + Project (EduSkills)
- AI-ML Virtual Internship (EduSkills)
- Good Competing Code Award (Hebbale Academy)
- Google Cloud Computing Foundation (NPTEL)
- Data Analysis with Python (NPTEL)
- Social Networks (NPTEL)
- Complete Java Programming Course (Udemy)
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl glass-panel border border-white/20 bg-slate-950/95 shadow-2xl z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Toolbar (No-Print) */}
        <div className="no-print flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-2">
            
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:bg-white/10 text-slate-200 text-xs font-semibold transition-colors"
              title="Copy plain text version"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white glass-panel"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-100 font-sans text-xs sm:text-sm leading-relaxed space-y-6">
          
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-700">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              SONALI PANIGRAHI
            </h1>
            <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mt-1">
              Aspiring MERN Stack Developer | MCA Candidate (Graduating 2027)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-2.5 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" /> GIET University, Gunupur, Odisha
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-blue-300">
                <Mail className="w-3 h-3 text-slate-400" /> {personalInfo.email}
              </a>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-400" /> {personalInfo.phone}
              </span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-300">
                <Github className="w-3 h-3 text-slate-400" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-300">
                <Linkedin className="w-3 h-3 text-slate-400" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider pb-1 border-b border-slate-800 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider pb-1 border-b border-slate-800 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm text-slate-300">
              <p><strong className="text-white">Programming Languages:</strong> JavaScript, Python, C, Java (Basic Knowledge)</p>
              <p><strong className="text-white">Frontend Technologies:</strong> HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React.js, Angular.js</p>
              <p><strong className="text-white">Backend Technologies:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication</p>
              <p><strong className="text-white">Databases:</strong> MongoDB, MySQL, Firebase Firestore</p>
              <p><strong className="text-white">Tools & Cloud:</strong> Git, GitHub, VS Code, Postman, npm, AWS (Basics), Docker (Basics)</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider pb-1 border-b border-slate-800 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-slate-400 text-xs">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400">{edu.score}</span>
                    <p className="text-slate-400 text-[11px]">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Projects */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider pb-1 border-b border-slate-800 mb-2">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 4).map((p, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white">
                      {p.title} <span className="font-normal text-slate-400">| {p.technologies.join(", ")}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-blue-300">{p.badge}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                    {p.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Experience */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider pb-1 border-b border-slate-800 mb-2">
              Internship Experience
            </h2>
            <div className="space-y-3">
              {experienceData.map((exp, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white">
                      {exp.role}  <span className="text-slate-400 font-normal">{exp.company}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400">{exp.grade}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{exp.duration}</p>
                  <ul className="list-disc list-inside text-xs text-slate-300">
                    <li>{exp.highlights[0]}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider pb-1 border-b border-slate-800 mb-2">
              Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {certificationsData.map((c, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <span className="text-blue-400"></span>
                  <span><strong>{c.title}</strong> ({c.issuer})  <span className="text-emerald-400">{c.badge}</span></span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
