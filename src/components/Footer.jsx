import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 sm:px-8 md:px-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
            UK
          </div>
          <div>
            <span className="font-semibold text-slate-900">{personalInfo.name}</span>
            <span className="mx-2">•</span>
            <span>{personalInfo.headline}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-rose-600">●</span>
          <span>17.3850° N, 78.4867° E</span>
          <span className="text-slate-400">•</span>
          <span>HYDERABAD, INDIA</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Vercel Ready</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
        <div>
          © {new Date().getFullYear()} Gali Uday Kiran. All rights reserved.
        </div>
        <div>
          Clean White Theme • Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
