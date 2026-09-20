import React, { useState } from 'react';
import { currentWork } from '../data/portfolio';
import {
  Car,
  Server,
  Database,
  Smartphone,
  Cpu,
  Radio,
  ArrowRight
} from 'lucide-react';

export default function CurrentWork() {
  const [activeTab, setActiveTab] = useState('live');
  const [rideStatus, setRideStatus] = useState('DISPATCHED');

  return (
    <section id="work" className="py-16 sm:py-20 px-6 sm:px-8 md:px-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="scene-label mb-2">
          <span>{currentWork.tag}</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Local Taxi <span className="text-rose-600 font-normal text-xl sm:text-2xl">— End-to-End System</span>
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-600">
              <span className="text-slate-900 font-semibold">{currentWork.role}</span>
              <span>•</span>
              <span className="text-rose-600 font-medium">{currentWork.company}</span>
              <span>•</span>
              <span>Parent: {currentWork.parentCompany}</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 font-mono text-[11px]">
                {currentWork.period}
              </span>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-lg bg-slate-100 border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('live')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'live'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Live Telemetry
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'code'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Spring Service
            </button>
            <button
              onClick={() => setActiveTab('arch')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'arch'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Architecture
            </button>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Mobile App Mockup */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] rounded-[32px] p-2.5 bg-slate-900 border-2 border-slate-700 shadow-xl relative overflow-hidden">
              <div className="w-full h-5 flex items-center justify-between px-5 pt-0.5 text-slate-400">
                <span className="font-mono text-[10px] font-bold text-white">09:41</span>
                <div className="w-14 h-3 rounded-full bg-black" />
                <div className="flex items-center gap-1">
                  <Radio className="w-2.5 h-2.5 text-rose-500" />
                  <span className="font-mono text-[9px]">5G</span>
                </div>
              </div>

              <div className="mt-1.5 rounded-[24px] bg-slate-950 p-4 flex flex-col justify-between h-[410px] text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                      <Car className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs">Local Taxi</div>
                      <div className="text-[9px] text-slate-400">Hyderabad Hub</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[9px] border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    ONLINE
                  </span>
                </div>

                <div className="my-2 rounded-xl bg-slate-900 border border-slate-800 p-3 relative overflow-hidden h-32 flex flex-col justify-between">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 25 80 Q 80 20 180 45"
                      fill="transparent"
                      stroke="#e11d48"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  <div className="relative z-10 flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 text-[9px] font-bold">
                      A
                    </div>
                    <div className="text-[10px] font-mono text-slate-300">Begumpet Station</div>
                  </div>
                  <div className="relative z-10 flex items-center gap-1.5 self-end">
                    <div className="text-[10px] font-mono text-rose-400 font-semibold">HITEC City</div>
                    <div className="w-4 h-4 rounded-full bg-rose-500 border border-white flex items-center justify-center text-white text-[9px] font-bold">
                      B
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono text-[10px]">ASSIGNED DRIVER</span>
                    <span className="text-rose-400 font-mono font-bold text-[10px]">TS09-8812</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-xs">Ramesh K.</div>
                      <div className="text-[9px] text-slate-400 font-mono">ETA: 4 Mins</div>
                    </div>
                    <div className="font-mono text-sm font-bold text-white">₹320</div>
                  </div>
                </div>

                <button
                  onClick={() => setRideStatus(rideStatus === 'DISPATCHED' ? 'EN_ROUTE' : 'DISPATCHED')}
                  className="w-full py-2 rounded-lg bg-rose-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-rose-700 transition-colors shadow-sm"
                >
                  Status: {rideStatus}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Telemetry & Architecture Panel */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div className="p-6 sm:p-7 bg-slate-50 border-[1.5px] border-slate-300 rounded-2xl shadow-sm flex flex-col h-full">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Backend Infrastructure</h3>
                    <p className="text-xs text-slate-500">Spring Boot Microservices & Mobile Client</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>200 OK</span>
                </div>
              </div>

              {activeTab === 'live' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-white border-[1.5px] border-slate-300 font-mono text-xs space-y-2">
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">Core Backend Systems</div>
                    <div className="flex items-center justify-between text-slate-800">
                      <span className="text-rose-600 font-bold">DISPATCH</span>
                      <span>Ride Allocation & Booking Engine</span>
                      <span className="text-emerald-600 font-semibold">Operational</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-800">
                      <span className="text-emerald-600 font-bold">STREAM</span>
                      <span>Real-Time Coordinates & Live Telemetry</span>
                      <span className="text-emerald-600 font-semibold">Connected</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white border-[1.5px] border-slate-300 hover:border-rose-400 transition-colors">
                      <div className="font-mono text-[10px] text-slate-500 uppercase">Database</div>
                      <div className="font-bold text-sm text-slate-900 mt-0.5">MySQL / HikariCP</div>
                      <div className="font-mono text-[9px] text-emerald-600 mt-0.5">Active Pool</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border-[1.5px] border-slate-300 hover:border-rose-400 transition-colors">
                      <div className="font-mono text-[10px] text-slate-500 uppercase">Mobile Client</div>
                      <div className="font-bold text-sm text-slate-900 mt-0.5">Flutter / Dart</div>
                      <div className="font-mono text-[9px] text-rose-600 mt-0.5">Reactive UI</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white border-[1.5px] border-slate-300 hover:border-rose-400 transition-colors">
                      <div className="font-mono text-[10px] text-slate-500 uppercase">Security</div>
                      <div className="font-bold text-sm text-slate-900 mt-0.5">Token Guard</div>
                      <div className="font-mono text-[9px] text-emerald-600 mt-0.5">Verified</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    "Developing the <strong className="text-slate-900 font-semibold">Local Taxi</strong> application end-to-end, working across frontend mobile development and backend development."
                  </p>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 font-mono text-[11px] leading-relaxed overflow-x-auto">
                  <div className="text-slate-400 text-[10px] mb-1 font-semibold">// RideDispatchService.java — Spring Boot Business Logic</div>
                  <p><span className="text-purple-400">@Service</span></p>
                  <p><span className="text-purple-400">@Transactional</span></p>
                  <p className="text-blue-400">public class <span className="text-yellow-300">RideDispatchService</span> &#123;</p>
                  <p className="pl-3 text-slate-400"><span className="text-purple-400">@Autowired</span> private DriverRepository driverRepo;</p>
                  <p className="pl-3 text-blue-400">public RideResponse <span className="text-yellow-300">processBooking</span>(DispatchRequest req) &#123;</p>
                  <p className="pl-6 text-rose-400 font-semibold">return rideEngine.allocateNearestDriver(req);</p>
                  <p className="pl-3 text-blue-400">&#125;</p>
                  <p className="text-blue-400">&#125;</p>
                </div>
              )}

              {activeTab === 'arch' && (
                <div className="p-4 rounded-xl bg-white border-[1.5px] border-slate-300 space-y-3">
                  <div className="font-mono text-xs text-rose-600 font-semibold">End-to-End Pipeline</div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center font-mono text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border-[1.5px] border-slate-300 w-full">
                      <Smartphone className="w-4 h-4 text-rose-600 mx-auto mb-1" />
                      <div className="text-slate-900 font-semibold text-xs">Flutter Client</div>
                      <div className="text-[9px] text-slate-500">Passenger & Driver</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:block shrink-0" />
                    <div className="p-2.5 rounded-lg bg-rose-50 border-[1.5px] border-rose-300 w-full">
                      <Server className="w-4 h-4 text-rose-600 mx-auto mb-1" />
                      <div className="text-slate-900 font-semibold text-xs">Spring Boot</div>
                      <div className="text-[9px] text-slate-500">REST Services</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:block shrink-0" />
                    <div className="p-2.5 rounded-lg bg-slate-50 border-[1.5px] border-slate-300 w-full">
                      <Database className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                      <div className="text-slate-900 font-semibold text-xs">MySQL Engine</div>
                      <div className="text-[9px] text-slate-500">ACID Transactions</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-[11px] text-slate-500 mr-2 font-semibold">Tech Stack:</span>
                {currentWork.techStack.map((tech) => (
                  <span key={tech} className="tech-pill text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
