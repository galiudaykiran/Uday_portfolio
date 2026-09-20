import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentWork from './components/CurrentWork';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative antialiased selection:bg-rose-500 selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Clean Navigation */}
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <About />
        <CurrentWork />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* In-Web Interactive Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
