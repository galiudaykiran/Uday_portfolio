import React, { useState } from 'react';
import { skillCategories } from '../data/portfolio';
import {
  Code2,
  Server,
  Cloud,
  Database,
  Cpu,
  Flame
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Code2: Code2,
    Server: Server,
    Cloud: Cloud,
    Database: Database,
    Cpu: Cpu
  };

  const displayedCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 px-6 sm:px-8 md:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="scene-label mb-2">
          <span>Technical Ecosystem</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Skills & Expertise
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Verified technologies across Java enterprise systems, cloud platforms, and core engineering concepts.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'All'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.name
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="space-y-6">
          {displayedCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.name}
                className="p-6 bg-white border-[1.5px] border-slate-300 rounded-xl shadow-sm hover:border-slate-400 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {category.skills.length} Skills
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-lg bg-slate-50 border-[1.5px] border-slate-300 hover:border-rose-400 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-1.5 mb-1.5">
                        <h4 className="font-bold text-sm text-slate-900">
                          {skill.name}
                        </h4>
                        {skill.highlight && (
                          <span className="flex items-center gap-0.5 font-mono text-[8px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                            <Flame className="w-2 h-2 fill-rose-600" />
                            CORE
                          </span>
                        )}
                      </div>

                      <div className="font-mono text-[10px] text-rose-600 mb-1 flex items-center gap-1 font-medium">
                        <span className="w-1 h-1 rounded-full bg-rose-600" />
                        <span>{skill.level}</span>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
