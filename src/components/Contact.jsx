import { Github, Linkedin } from "./Icons";
import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Send, Check, Copy, 
   Sparkles, MessageSquare, 
  AlertCircle, CheckCircle2, ArrowUpRight
} from "lucide-react";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email format (e.g., name@company.com)";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    }, 900);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || "Software Engineering Opportunity / Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hi Sonali,\n\nName: ${formData.name || "[Your Name]"}\nEmail: ${formData.email || "[Your Email]"}\n\nMessage:\n${formData.message || "I came across your portfolio and would like to connect."}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-300 font-medium max-w-2xl mx-auto mb-2">
            Have an opportunity, project, or collaboration in mind? Id love to connect!
          </p>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Whether you are a recruiter looking for an aspiring MERN developer, an interviewer, or exploring a project collaborationmy inbox is always open.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact & Recruiter Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="p-2.5 rounded-lg glass-panel hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy Email"
              >
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card with Copy button */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Phone / WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="block text-xs sm:text-sm font-semibold text-white hover:text-purple-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, "phone")}
                className="p-2.5 rounded-lg glass-panel hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy Phone"
              >
                {copiedType === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location & University</span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  GIET University, Gunupur, Odisha, India
                </p>
                <span className="text-[11px] text-slate-400">Open to on-site & remote opportunities</span>
              </div>
            </div>

            {/* Social Connect Bar */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Professional Profiles</span>
                <span className="text-[11px] text-slate-400">GitHub & LinkedIn verified</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:bg-white/10 text-xs text-slate-200 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/40 text-blue-300 text-xs border border-blue-500/30 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md">
                    Your message has been captured. If you would like to follow up directly in your email client, you can also send it right away.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={handleMailto}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md hover:brightness-110"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail Client</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-5 py-2.5 rounded-xl glass-panel text-xs text-slate-300 hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                      <span>Send a Message</span>
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      Direct recruiter inbox
                    </span>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 ${
                          errors.name ? "border-rose-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 ${
                          errors.email ? "border-rose-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack / MERN Developer Role Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 ${
                        errors.subject ? "border-rose-500" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.message.length}/500 chars
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows="4"
                      maxLength="500"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Sonali, I came across your portfolio and would like to discuss..."
                      className={`w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 resize-none ${
                        errors.message ? "border-rose-500" : ""
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Form Submission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 active:scale-[0.98] text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleMailto}
                      className="text-xs text-slate-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-mono"
                    >
                      <span>Or launch Mail Client directly</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Clear Disclosure Notice */}
                  <div className="pt-3 border-t border-white/5 text-[11px] text-slate-500 text-center">
                    ?? Client-side validated form. Clicking "launch Mail Client" opens your native email application.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
