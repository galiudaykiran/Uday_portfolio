import React from 'react';
import { experience } from '../data/portfolio';
import { Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-6 sm:px-8 md:px-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="scene-label mb-2">
          <span>Professional Experience</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The Journey
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Verified career milestones across backend development, microservices, and practical applications.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-500">
            [ 3 Positions ]
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-rose-500" />

          {experience.map((item) => {
            const isCurrent = item.current;
            return (
              <div key={item.id} className="relative group">
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-rose-600 border-white ring-4 ring-rose-100'
                      : 'bg-white border-slate-400'
                  }`}
                />

                <div className="p-6 bg-slate-50 border-[1.5px] border-slate-300 rounded-xl shadow-sm hover:border-rose-400 hover:shadow-md hover:bg-white transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-rose-700 bg-rose-100/60 px-2.5 py-0.5 rounded border border-rose-200">
                        {item.period}
                      </span>
                      {isCurrent && (
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          Present Role
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {item.type}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.role}
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-700 font-semibold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-rose-600" />
                      <span>{item.company}</span>
                      {item.parentCompany && (
                        <span className="text-slate-500 text-xs">
                          (Parent: {item.parentCompany})
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3.5">
                    "{item.description}"
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span key={skill} className="tech-pill text-[11px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
