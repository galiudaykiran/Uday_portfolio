import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

// Clean Interactive 3D Motion Profile Card (Previous Layout)
function MotionProfileCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physics spring
  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-14deg', '14deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full max-w-xs sm:max-w-sm flex justify-center cursor-pointer"
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-full bg-white rounded-2xl border-[1.5px] border-slate-300 p-6 shadow-sm hover:border-rose-400 hover:shadow-xl transition-colors text-center relative overflow-hidden select-none group"
      >
        {/* Dynamic Pointer Glare Flare */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(320px circle at ${gx} ${gy}, rgba(225, 29, 72, 0.12), transparent 80%)`
            ),
          }}
        />

        {/* 3D Depth Layer for Image Frame */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border-[1.5px] border-slate-300 shadow-md transition-transform"
        >
          <img
            src={personalInfo.profileImage || '/profile.jpg'}
            alt={personalInfo.name}
            className="w-full h-full object-cover pointer-events-none"
            onError={(e) => {
              e.target.src = '/avatar.svg';
            }}
          />
        </div>

        {/* Candidate Details with 3D Depth */}
        <div style={{ transform: 'translateZ(25px)' }} className="mt-4">
          <h2 className="font-bold text-lg text-slate-900">
            {personalInfo.name}
          </h2>
          <p className="text-xs font-medium text-rose-600 mt-0.5">
            {personalInfo.headline}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {personalInfo.company} • Hyderabad, India
          </p>
        </div>

        {/* Core Tech Stack Pills with 3D Depth */}
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-1.5"
        >
          <span className="tech-pill text-[11px]">Java 21</span>
          <span className="tech-pill text-[11px]">Spring Boot</span>
          <span className="tech-pill text-[11px]">Microservices</span>
          <span className="tech-pill text-[11px]">Flutter</span>
          <span className="tech-pill text-[11px]">MySQL</span>
          <span className="tech-pill text-[11px]">AWS</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero({ onResumeClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-6 sm:px-8 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto w-full my-auto py-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Column: Clean, Elegant Typography */}
        <div className="md:col-span-7 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            <span>Java Developer • Software Engineer</span>
          </div>

          {/* Clean Candidate Title - Normal, Beautiful, Non-Aggressive Size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Gali Uday Kiran
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
            Java Developer focused on building{' '}
            <strong className="text-slate-900 font-semibold">scalable backend systems</strong>,{' '}
            <span className="text-rose-600 font-semibold">microservices</span>, and modern applications.
          </p>

          {/* Verified Highlights */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border-[1.5px] border-slate-300 text-slate-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Current: <strong>Alladi Cloud Solutions</strong> (Java Dev)</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border-[1.5px] border-slate-300 text-slate-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>ICFAI University • <strong>CGPA 8.77</strong></span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              <span>View Projects</span>
              <span className="text-xs">→</span>
            </a>

            {/* In-Web View Resume Button */}
            <button
              type="button"
              onClick={onResumeClick}
              className="btn-secondary !text-rose-600 !border-rose-200 hover:!bg-rose-50 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-rose-600" />
              <span>View Resume</span>
            </button>

            <a href="#contact" className="btn-secondary">
              <span>Contact Me</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 border-[1.5px] border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 border-[1.5px] border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Motionable Profile Card (Restored) */}
        <div className="md:col-span-5 flex justify-center">
          <MotionProfileCard />
        </div>
      </div>

      {/* Bottom Scroll Hint */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
        <a href="#about" className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
          <ArrowDown className="w-3.5 h-3.5 text-rose-600 animate-bounce" />
          <span>Explore portfolio</span>
        </a>
        <span>Hyderabad, India • 2026</span>
      </div>
    </section>
  );
}
