import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Navbar({ onResumeClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hydTime, setHydTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setHydTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'py-5 bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 no-underline"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              UK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500">
                {personalInfo.headline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {/* Live IST Status */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 font-mono text-[11px] text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
              <span className="text-slate-800 font-medium">{hydTime || '12:30 PM'} IST</span>
              <span className="text-slate-400">•</span>
              <span>HYDERABAD</span>
            </div>

            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={onResumeClick}
                className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Resume
              </button>
            </nav>

            <a
              href="#contact"
              className="btn-primary"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 md:hidden bg-white transition-all duration-200 flex flex-col justify-between px-6 py-20 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2">
            Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-semibold text-slate-900 hover:text-rose-600 transition-colors py-2 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onResumeClick?.();
            }}
            className="text-xl font-semibold text-rose-600 hover:text-rose-700 transition-colors py-2 border-b border-slate-100 text-left bg-transparent border-none cursor-pointer"
          >
            View Resume (PDF)
          </button>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Location: Hyderabad, India</span>
            <span className="text-emerald-600 font-medium">Available</span>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary text-center py-3"
          >
            Email Me
          </a>
        </div>
      </div>
    </>
  );
}
