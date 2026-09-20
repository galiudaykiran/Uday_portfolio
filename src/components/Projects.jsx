import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import {
  ShieldCheck,
  KeyRound,
  Database,
  Server,
  Layers,
  Camera,
  FileText,
  Folder,
  Upload,
  Scan,
  Sparkles,
  Lock,
  User,
  Check,
  Download
} from 'lucide-react';

export default function Projects() {
  const [faceTab, setFaceTab] = useState('clusters');
  const [zipExported, setZipExported] = useState(false);

  const handleExportZip = () => {
    setZipExported(true);
    setTimeout(() => setZipExported(false), 2500);
  };
  return (
    <section id="projects" className="py-16 sm:py-20 px-6 sm:px-8 md:px-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="scene-label mb-2">
          <span>Featured Projects</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Case studies into microservices, computer vision pipelines, and mobile systems.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-500">
            [ 03 Projects ]
          </div>
        </div>

        <div className="space-y-8">
          {/* Chapter 01: Product Catalog & User Authentication Service */}
          <div className="p-6 sm:p-8 bg-slate-50 border-[1.5px] border-slate-300 rounded-xl hover:border-rose-400 hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                  PROJECT 01
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Distributed Backend Architecture
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Microservices</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-3.5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Product Catalog & User Authentication Service
                </h3>

                <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    "Designed a scalable system to manage products and categories with full CRUD operations, validation, and meaningful error handling."
                  </p>
                  <p>
                    "Developed using a microservices architecture, integrating a separate User Authentication & Authorization Service."
                  </p>
                  <p>
                    "Implemented secure services for signup, login, token validation and logout using <strong className="text-rose-600 font-semibold">BCryptPasswordEncoder</strong> and token-based session management."
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="tech-pill text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-200">
                  {projects[0].metrics.map((m) => (
                    <div key={m.label} className="p-2.5 rounded-lg bg-white border-[1.5px] border-slate-300">
                      <div className="font-mono text-[9px] text-slate-500 uppercase">{m.label}</div>
                      <div className="font-bold text-xs text-slate-900 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Flow */}
              <div className="md:col-span-6 p-5 rounded-xl bg-white border-[1.5px] border-slate-300 shadow-sm">
                <div className="font-mono text-[11px] text-slate-500 border-b border-slate-100 pb-2.5 mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Layers className="w-3.5 h-3.5 text-rose-600" />
                    Distributed Topology Flow
                  </span>
                  <span className="text-emerald-600 font-mono text-[10px] font-semibold">Verified</span>
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-slate-500 uppercase font-semibold">Flow A: Product Management Service</div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center font-mono text-xs">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 w-full text-[11px] text-slate-700">Client</div>
                    <div className="text-rose-500 font-bold">↓</div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 w-full text-[11px] text-slate-700">API Gateway</div>
                    <div className="text-rose-500 font-bold">↓</div>
                    <div className="p-2 rounded bg-rose-50 border border-rose-200 w-full text-rose-700 text-[11px] font-semibold">Product Service</div>
                    <div className="text-rose-500 font-bold">↓</div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 w-full text-emerald-700 text-[11px] font-semibold">Database</div>
                  </div>
                </div>

                <div className="my-3.5 border-t border-slate-100" />

                <div className="space-y-2">
                  <div className="font-mono text-[10px] text-slate-500 uppercase font-semibold">Flow B: Authentication & Authorization</div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center font-mono text-xs">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 w-full text-[11px] text-slate-700 flex items-center justify-center gap-1">
                      <KeyRound className="w-3 h-3 text-slate-500" /> User
                    </div>
                    <div className="text-rose-500 font-bold">↓</div>
                    <div className="p-2 rounded bg-rose-50 border border-rose-200 w-full text-rose-700 text-[11px] font-semibold flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-rose-600" /> Authentication
                    </div>
                    <div className="text-rose-500 font-bold">↓</div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 w-full text-emerald-700 text-[11px] font-semibold flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-600" /> Authorization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 02: Face Recognition & Grouping */}
          <div className="p-6 sm:p-8 bg-slate-50 border-[1.5px] border-slate-300 rounded-xl hover:border-rose-400 hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                  PROJECT 02
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Computer Vision & Clustering
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                <Scan className="w-3.5 h-3.5" />
                <span>HOG Model</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-3.5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Face Recognition & Grouping
                </h3>

                <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    "Built a face recognition tool for clustering and organizing images using <strong className="text-slate-900 font-semibold">face_recognition</strong> and <strong className="text-rose-600 font-semibold">HOG detection</strong>."
                  </p>
                  <p>
                    "Added webcam-based real-time recognition and a user-friendly interface with rename and ZIP features."
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {projects[1].tags.map((tag) => (
                    <span key={tag} className="tech-pill text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-200">
                  {projects[1].metrics.map((m) => (
                    <div key={m.label} className="p-2.5 rounded-lg bg-white border-[1.5px] border-slate-300">
                      <div className="font-mono text-[9px] text-slate-500 uppercase">{m.label}</div>
                      <div className="font-bold text-xs text-slate-900 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intelligent Face Clustering Showcase */}
              <div className="md:col-span-6 p-5 sm:p-6 rounded-xl bg-white border-[1.5px] border-slate-300 shadow-sm flex flex-col justify-between">
                {/* Header with Mode Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                      <Camera className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                        Face Clustering Pipeline
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono">
                        Auto-detects faces & groups into folders
                      </p>
                    </div>
                  </div>

                  {/* Interactive Tab Switcher */}
                  <div className="flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setFaceTab('clusters')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                        faceTab === 'clusters'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Organized Folders
                    </button>
                    <button
                      type="button"
                      onClick={() => setFaceTab('scanner')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                        faceTab === 'scanner'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Webcam Scanner
                    </button>
                  </div>
                </div>

                {/* View 1: Organized Folders / Auto-Clustered Albums */}
                {faceTab === 'clusters' && (
                  <div className="space-y-3">
                    <div className="text-[11px] text-slate-600 leading-snug">
                      Photos are extracted, matched with 128D facial vectors, and automatically organized into individual person folders:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Cluster 01 */}
                      <div className="p-3 rounded-xl bg-slate-50 border-[1.5px] border-slate-200 hover:border-rose-300 transition-colors">
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 mb-2">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                            <Folder className="w-3.5 h-3.5 text-amber-500 fill-amber-400/20" />
                            <span>Person_01 /</span>
                          </div>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            99.4% Match
                          </span>
                        </div>

                        {/* Visual Image Thumbnails */}
                        <div className="grid grid-cols-3 gap-1.5">
                          {['photo_01.jpg', 'photo_04.jpg', 'photo_07.jpg'].map((name, i) => (
                            <div key={name} className="relative rounded-lg bg-white border border-slate-200 p-1.5 text-center flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-1">
                                <User className="w-4 h-4" />
                              </div>
                              <span className="font-mono text-[8px] text-slate-500 truncate w-full">{name}</span>
                              <span className="text-[7px] text-emerald-600 font-mono font-bold">Face #{i + 1}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-[10px] font-mono text-slate-500 text-center">
                          Total: 3 Photos Sorted
                        </div>
                      </div>

                      {/* Cluster 02 */}
                      <div className="p-3 rounded-xl bg-slate-50 border-[1.5px] border-slate-200 hover:border-rose-300 transition-colors">
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 mb-2">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                            <Folder className="w-3.5 h-3.5 text-amber-500 fill-amber-400/20" />
                            <span>Person_02 /</span>
                          </div>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            98.8% Match
                          </span>
                        </div>

                        {/* Visual Image Thumbnails */}
                        <div className="grid grid-cols-3 gap-1.5">
                          {['photo_02.jpg', 'photo_05.jpg', 'photo_08.jpg'].map((name, i) => (
                            <div key={name} className="relative rounded-lg bg-white border border-slate-200 p-1.5 text-center flex flex-col items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-1">
                                <User className="w-4 h-4" />
                              </div>
                              <span className="font-mono text-[8px] text-slate-500 truncate w-full">{name}</span>
                              <span className="text-[7px] text-emerald-600 font-mono font-bold">Face #{i + 4}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-[10px] font-mono text-slate-500 text-center">
                          Total: 3 Photos Sorted
                        </div>
                      </div>
                    </div>

                    {/* Export Action Strip */}
                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-200">
                      <span className="text-[11px] text-slate-500 font-mono">
                        Auto-Rename & Clustering: Complete
                      </span>
                      <button
                        type="button"
                        onClick={handleExportZip}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                      >
                        {zipExported ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-300">ZIP Created!</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5 text-rose-400" />
                            <span>Export ZIP Archive</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* View 2: Live Detection Scanner HUD */}
                {faceTab === 'scanner' && (
                  <div className="space-y-3">
                    {/* Simulated Camera Viewfinder */}
                    <div className="relative rounded-xl bg-slate-950 p-4 text-white overflow-hidden h-52 flex flex-col justify-between border border-slate-800">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-25" />

                      {/* Top HUD */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-1.5">
                        <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                          LIVE WEBCAM STREAM
                        </span>
                        <span className="text-emerald-400 font-semibold">30 FPS • HOG ACTIVE</span>
                      </div>

                      {/* Center Target with Bounding Box & 68 Landmarks */}
                      <div className="relative z-10 self-center my-auto flex flex-col items-center">
                        <div className="relative w-28 h-28 border-2 border-emerald-400 rounded-xl flex items-center justify-center bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                          {/* Corner Reticles */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-300" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-300" />
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-300" />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-300" />

                          <div className="flex flex-col items-center">
                            <User className="w-14 h-14 text-emerald-400/80" />
                            <div className="flex gap-2 -mt-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            </div>
                          </div>

                          {/* Identification Tag */}
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-600 text-white text-[9px] font-mono font-bold uppercase tracking-wider whitespace-nowrap shadow-md">
                            Person_01 (99.4%)
                          </div>
                        </div>
                      </div>

                      {/* Bottom HUD */}
                      <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-slate-800 pt-1.5">
                        <span>Landmarks: 68 Points</span>
                        <span>Vector: 128-d Embedding</span>
                        <span className="text-emerald-400 font-semibold">MATCH FOUND</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-600 font-normal leading-relaxed">
                      "Real-time webcam detection tracks bounding coordinates and instantly identifies returning individuals against stored embeddings."
                    </div>
                  </div>
                )}

                {/* Bottom Step-by-Step Flow */}
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-700">1. Photos</span>
                    <span className="text-rose-500 font-bold">→</span>
                    <span className="font-semibold text-slate-700">2. HOG Vector</span>
                    <span className="text-rose-500 font-bold">→</span>
                    <span className="font-semibold text-rose-600 font-bold">3. Auto-Clusters</span>
                    <span className="text-rose-500 font-bold">→</span>
                    <span className="font-semibold text-emerald-600 font-bold">4. ZIP Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 03: Document Hub */}
          <div className="p-6 sm:p-8 bg-slate-50 border-[1.5px] border-slate-300 rounded-xl hover:border-rose-400 hover:shadow-md transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                  PROJECT 03
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Cross-Platform Mobile Application
                </span>
              </div>
              <div className="font-mono text-xs text-slate-600 font-semibold">
                Flutter & Dart
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-3.5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Document Hub
                </h3>

                <div className="space-y-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  <p>
                    "Built Document Hub, a file management app with folder creation, notes, PDF maker, file uploads and camera integration."
                  </p>
                  <p>
                    "Implemented theme customization and colorful UI to enhance usability and user experience."
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {projects[2].tags.map((tag) => (
                    <span key={tag} className="tech-pill text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-1.5 pt-2">
                  {projects[2].features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="md:col-span-6 flex justify-center">
                <div className="w-full max-w-[280px] rounded-[24px] p-2 bg-slate-900 border-2 border-slate-700 shadow-lg">
                  <div className="rounded-[18px] bg-white p-3.5 flex flex-col justify-between h-[300px]">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-rose-600 flex items-center justify-center text-white font-bold text-[9px]">
                          DH
                        </div>
                        <span className="font-bold text-xs text-slate-900">Document Hub</span>
                      </div>
                      <span className="font-mono text-[9px] text-slate-400">Flutter Client</span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 my-2">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <Folder className="w-3.5 h-3.5 text-rose-600 mb-1" />
                        <div className="font-bold text-[11px] text-slate-900">Folders</div>
                        <div className="text-[8px] text-slate-500">Categorized</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <FileText className="w-3.5 h-3.5 text-amber-500 mb-1" />
                        <div className="font-bold text-[11px] text-slate-900">Notes</div>
                        <div className="text-[8px] text-slate-500">Rich editor</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <Sparkles className="w-3.5 h-3.5 text-purple-500 mb-1" />
                        <div className="font-bold text-[11px] text-slate-900">PDF Maker</div>
                        <div className="text-[8px] text-slate-500">Instant export</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <Camera className="w-3.5 h-3.5 text-emerald-600 mb-1" />
                        <div className="font-bold text-[11px] text-slate-900">Camera Scan</div>
                        <div className="text-[8px] text-slate-500">Hardware input</div>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-slate-800">
                        <Upload className="w-3 h-3 text-rose-600" />
                        <span className="text-[10px]">Instant File Sync</span>
                      </div>
                      <span className="font-mono text-[9px] text-rose-700 font-bold">READY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
