import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-5xl h-[90vh] bg-white rounded-2xl border-[1.5px] border-slate-300 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-none">
                      Resume — {personalInfo.name}
                    </h3>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                      PDF Document
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">
                    {personalInfo.headline} • {personalInfo.company}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href="/Resume_Uday_Kiran.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                  title="Open in a new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Fullscreen</span>
                </a>

                <a
                  href="/Resume_Uday_Kiran.pdf"
                  download="Resume_Uday_Kiran.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-sm"
                  title="Save PDF file to device"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors ml-1"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Container */}
            <div className="flex-1 w-full h-full bg-slate-100 relative">
              <object
                data="/Resume_Uday_Kiran.pdf#toolbar=1&navpanes=0&view=FitH"
                type="application/pdf"
                className="w-full h-full"
              >
                {/* Fallback iframe */}
                <iframe
                  src="/Resume_Uday_Kiran.pdf#toolbar=1&navpanes=0&view=FitH"
                  className="w-full h-full border-0"
                  title="Resume Preview"
                >
                  <div className="p-8 text-center text-slate-600">
                    <p className="mb-4">Unable to display PDF directly in your browser.</p>
                    <a
                      href="/Resume_Uday_Kiran.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Open PDF in new window
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
