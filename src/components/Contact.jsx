import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Terminal
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Sender: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-6 sm:px-8 md:px-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="scene-label mb-2">
          <span>Get in Touch</span>
        </div>

        {/* Section Header - Clean, balanced size */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Let's Build Something Useful.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 font-normal">
            "Have a project, opportunity or idea? Let's talk."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Access Details */}
          <div className="md:col-span-5 p-6 sm:p-7 bg-slate-50 border-[1.5px] border-slate-300 rounded-xl shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Direct Communication
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Open to backend engineering roles, microservice projects, and innovative teams.
                </p>
              </div>

              {/* Email One-Click Copy Card */}
              <div className="p-4 rounded-xl bg-white border-[1.5px] border-slate-300 shadow-sm hover:border-rose-400 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                  <span>PRIMARY EMAIL</span>
                  <span className="text-emerald-600 flex items-center gap-1 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ONLINE
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 truncate select-all">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 px-2.5 rounded-md bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-all flex items-center gap-1 font-mono text-xs shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border-[1.5px] border-slate-300 shadow-sm hover:border-rose-400 transition-colors">
                  <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                    <Phone className="w-3 h-3 text-rose-600" />
                    Phone
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="font-mono text-xs font-bold text-slate-900 hover:text-rose-600 transition-colors mt-0.5 block"
                  >
                    +91 {personalInfo.phone}
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-white border-[1.5px] border-slate-300 shadow-sm hover:border-rose-400 transition-colors">
                  <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-600" />
                    Location
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-900 mt-0.5">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-wrap gap-2.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary !text-xs !py-2 !px-4"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-xs !py-2 !px-4"
              >
                <Linkedin className="w-3.5 h-3.5 text-rose-600" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-xs !py-2 !px-4"
              >
                <Github className="w-3.5 h-3.5 text-rose-600" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7 p-6 sm:p-7 bg-slate-50 border-[1.5px] border-slate-300 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Terminal className="w-4 h-4 text-rose-600" />
                  <span>Send a Direct Message</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 font-semibold">
                  Secure Delivery
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-600 uppercase font-semibold text-[10px]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Team / HR"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border-[1.5px] border-slate-300 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all text-xs shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-600 uppercase font-semibold text-[10px]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border-[1.5px] border-slate-300 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all text-xs shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-600 uppercase font-semibold text-[10px]">
                    Message / Opportunity Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Discuss backend engineering opportunities, architecture, or interview availability..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border-[1.5px] border-slate-300 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all resize-none text-xs shadow-sm"
                  />
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <button
                    type="submit"
                    className="btn-primary !py-2.5 !px-5 flex items-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  {submitted && (
                    <span className="font-mono text-xs text-emerald-600 flex items-center gap-1 font-semibold">
                      <Check className="w-3.5 h-3.5" /> Prepared in Email Client
                    </span>
                  )}
                </div>
              </form>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Recipient: udaykirangali2@gmail.com</span>
              <span>Gali Uday Kiran</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
