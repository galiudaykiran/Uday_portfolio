import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Server, Cpu, Smartphone, CheckCircle2 } from 'lucide-react';

export default function About() {
  const corePillars = [
    {
      icon: Server,
      title: "Backend Scalability",
      desc: "Architecting resilient RESTful services with Spring Boot, structured controllers, and relational schemas."
    },
    {
      icon: Cpu,
      title: "Microservices Mindset",
      desc: "Decomposing business logic into modular domains with token authentication and dedicated databases."
    },
    {
      icon: Smartphone,
      title: "End-to-End Delivery",
      desc: "Bridging robust backend API contracts with reactive mobile experiences using Flutter."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-6 sm:px-8 md:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="scene-label mb-2">
          <span>About & Philosophy</span>
        </div>

        {/* Section Header - Clean, normal, comfortable size */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-2">
          <div className="md:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
              Engineered with Curiosity & Practical Execution.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Focused on robust backend architecture, predictable microservices, and reliable application delivery.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-[11px] font-semibold uppercase text-slate-500 font-mono">Primary Stack</div>
                <div className="text-sm font-bold text-slate-900 mt-1">Java & Spring</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase text-slate-500 font-mono">Location</div>
                <div className="text-sm font-bold text-rose-600 mt-1">Hyderabad, IN</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase text-slate-500 font-mono">Active Role</div>
                <div className="text-sm font-bold text-slate-900 mt-1">Java Developer</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 space-y-4">
            <div className="p-5 rounded-xl bg-white border-[1.5px] border-slate-300 shadow-sm text-sm sm:text-base text-slate-700 leading-relaxed font-normal hover:border-rose-400 transition-colors">
              "I'm a <strong className="font-semibold text-slate-900">Computer Science graduate</strong> and{' '}
              <strong className="text-rose-600 font-semibold">Java Developer</strong> focused on building backend systems, microservices and practical software applications."
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              My experience includes developing the{' '}
              <span className="text-slate-900 font-medium underline decoration-rose-400 underline-offset-2">
                Local Taxi application end-to-end
              </span>{' '}
              across frontend mobile development and backend development at <strong className="text-slate-900">Alladi Cloud Solutions</strong>.
            </p>

            <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-xs font-mono text-rose-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Grounded in JVM principles, clean MVC design, and real-world system architecture.</span>
            </div>
          </div>
        </div>

        {/* 3 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 bg-white rounded-xl border-[1.5px] border-slate-300 shadow-sm hover:border-rose-400 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
