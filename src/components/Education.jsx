import React from 'react';
import { education, certifications, academicParticipations } from '../data/portfolio';
import { GraduationCap, Award, ShieldCheck, Cpu, Sparkles, Wifi } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 px-6 sm:px-8 md:px-12 bg-slate-50 border-t border-slate-300">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="scene-label mb-2">
          <span>Academic Foundation & Credentials</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Academic Record
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Distinction in Computer Science & Engineering, Advanced Mathematics, and Technical Participations.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-500 font-medium">
            [ 3 Institutions • 3 Certifications • 2 Participations ]
          </div>
        </div>

        {/* Education Cards Grid with Highlighted Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {education.map((item) => (
            <div
              key={item.institution}
              className="p-6 bg-white rounded-xl border-[1.5px] border-slate-300 shadow-sm flex flex-col justify-between hover:border-rose-400 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {item.institution}
                </h3>

                <div className="text-xs font-semibold text-rose-600 mb-0.5">
                  {item.degree}
                </div>

                <div className="text-[11px] text-slate-500 mb-3">
                  {item.field}
                </div>

                <p className="text-slate-600 text-xs leading-relaxed font-normal mb-4">
                  {item.highlights}
                </p>
              </div>

              {/* Score Badge */}
              <div className="pt-3.5 border-t border-slate-200 flex items-baseline justify-between">
                <span className="text-[11px] font-semibold uppercase font-mono text-slate-500">
                  {item.scoreLabel}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-900">
                    {item.score}
                  </span>
                  {item.scoreLabel === 'CGPA' && (
                    <span className="text-xs text-slate-500 font-mono">/ 10</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Participations & Hackathons Subsection */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Academic Participations & Hackathons
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {academicParticipations.map((part) => (
              <div
                key={part.title}
                className="p-6 bg-white rounded-xl border-[1.5px] border-slate-300 shadow-sm hover:border-rose-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
                  <span className="px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                    {part.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {part.role}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <span>{part.title}</span>
                </h4>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                  {part.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {part.tech.map((t) => (
                    <span key={t} className="tech-pill text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <Award className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 bg-white rounded-xl border-[1.5px] border-slate-300 shadow-sm hover:border-rose-400 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                    {cert.issuer}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>

                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {cert.title}
                </h4>

                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
