import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, Cpu, Database, Network, Atom, Calendar, ArrowRight } from "lucide-react";

interface Milestone {
  year: string;
  phase: string;
  title: string;
  status: "completed" | "active" | "planned";
  details: string;
}

export function AboutSection() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(1);

  const pillars = [
    {
      icon: Atom,
      title: "Spatial Immersion Engine",
      desc: "Engineered with native 3D node routers that synthesize hardware rendering capabilities directly with high-performance browser canvases.",
    },
    {
      icon: Network,
      title: "Quantum Interoperability",
      desc: "Synchronizing physical and metaverse states synchronously over high-throughput smart channels, preventing network disconnects.",
    },
    {
      icon: Terminal,
      title: "Sovereign Web Infrastructure",
      desc: "Decentralized state storage arrays that deliver lightning-fast spatial loadouts while maintaining solid end-user cryptographic privacy.",
    }
  ];

  const milestones: Milestone[] = [
    {
      year: "2024",
      phase: "Phase 01: Genesis",
      title: "Core Infrastructure Formulation",
      status: "completed",
      details: "Formulation of initial custom 3D web rendering bindings and zero-knowledge spatial state telemetry. Realized successful prototype transmission over isolated node arrays.",
    },
    {
      year: "2025",
      phase: "Phase 02: Launch",
      title: "Multi-Platform Spatial Synchronization",
      status: "completed",
      details: "Deployed Nirix Protocol Nodes on core validator clusters. Introduced hardware-accelerated rendering pipelines that cut spatial layout delays by over 65%.",
    },
    {
      year: "2026",
      phase: "Phase 03: Scale",
      title: "Autonomous Creator Orchestration",
      status: "active",
      details: "Current runtime state. Bootstrapping decentralized creator interfaces, live 3D voxel sandbox servers, and integrated transaction blocks ($NIRX).",
    },
    {
      year: "2027",
      phase: "Phase 04: Horizon",
      title: "Universal Cross-Chain Frameworks",
      status: "planned",
      details: "Integration of full-spectrum WebGL/WebGPU shaders to support hyper-realistic physical asset translation from VR standard hardware directly into lightweight mobile browsers.",
    }
  ];

  return (
    <section className="relative min-h-screen bg-black pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/12 w-[500px] h-[500px] rounded-full bg-[#513FF5]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-[600px] h-[600px] rounded-full bg-[#B369FE]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 select-none">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#B369FE] text-sm font-mono uppercase tracking-[0.25em] font-semibold"
          >
            System Identity
          </motion.span>
          
          <h2 className="text-white text-3xl md:text-5xl font-bold font-display tracking-tight mt-3">
            Translating Physical Realities
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-3 uppercase tracking-wider">
            Node core active • Nirix architectural vision profile
          </p>
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-[#B369FE] font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#B369FE] animate-pulse" />
              <span>Core Mission Protocol</span>
            </div>
            
            <h3 className="text-white text-2xl md:text-4xl font-bold font-display tracking-tight leading-snug">
              Building the Foundational Plumbing of the Seamless Metaverse
            </h3>
            
            <p className="text-zinc-400 font-sans text-base leading-relaxed">
              Nirix is a cutting-edge decentralized utility environment designed specifically to resolve spatial layout limits and cross-metaverse rendering disconnects. We believe that immersive digital identities should be completely sovereign, open-source, and lightning-fast to deploy.
            </p>
            
            <p className="text-zinc-500 font-sans text-sm leading-relaxed">
              By deploying lightweight, web-native 3D interfaces optimized directly within React contexts, Nirix makes engaging with rich immersive dApps as fluid as loading a standard flat web page. It is physical and digital overlap, fully realized.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
              <div className="px-3.5 py-2 rounded-lg bg-zinc-950/80 border border-zinc-900 text-zinc-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Validator clusters: active</span>
              </div>
              <div className="px-3.5 py-2 rounded-lg bg-zinc-950/80 border border-zinc-900 text-zinc-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>Sync status: 99.98%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:pl-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#513FF5]/10 to-[#B369FE]/10 rounded-2xl blur-3xl opacity-60 pointer-events-none" />
            
            {/* Real Code-themed specs element */}
            <div className="relative rounded-2xl bg-[#07070a] border border-zinc-900 p-6 md:p-8 shadow-2xl space-y-6 font-mono">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-zinc-600 tracking-wider">NIRX_CONFIG.JSON</span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-xs">
                <div className="text-zinc-600">{"{"}</div>
                <div className="pl-4">
                  <span className="text-purple-400">"protocolName"</span>: <span className="text-indigo-300">"Nirix Spatial Interlink"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"meshEngine"</span>: <span className="text-emerald-300">"Web3D-Accelerated v4"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"nodeReplicationRate"</span>: <span className="text-indigo-300">952.12</span>,
                </div>
                <div className="pl-4 text-zinc-500">
                  <span className="text-purple-400">"activeSubnets"</span>: [
                </div>
                <div className="pl-8 text-emerald-300">
                  "US-WEST", "EU-CENTRAL", "AP-SOUTHEAST"
                </div>
                <div className="pl-4 text-zinc-500">
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"contractVettingApproved"</span>: <span className="text-amber-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"encryptionType"</span>: <span className="text-indigo-300">"ECC-QuantumSafe-512"</span>
                </div>
                <div className="text-zinc-600">{"}"}</div>
              </div>

              <div className="p-4 bg-zinc-950/85 rounded-xl border border-zinc-900 flex items-start gap-3">
                <Terminal className="w-5 h-5 text-[#B369FE] shrink-0 mt-0.5" />
                <div className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                  The configuration schema listed above serves as the sovereign communication wrapper executing client interactions with deep rendering containers.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Pillars - Three Card Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-[#09090c] border border-zinc-900 rounded-2xl space-y-4 hover:border-zinc-800 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-[#B369FE]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-white text-lg font-bold font-display tracking-tight">
                  {p.title}
                </h4>
                <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Genesis Timeline - Extremely details-rich */}
        <div className="border border-zinc-900 rounded-3xl p-6 md:p-12 bg-[#050508]/60 relative overflow-hidden select-none">
          <div className="absolute top-0 right-0 p-8 text-right opacity-30 select-none hidden md:block">
            <Calendar className="w-24 h-24 text-zinc-900 tracking-tighter" />
          </div>

          <div className="max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B369FE] font-bold">
              Archival Registry
            </span>
            <h3 className="text-white text-2xl sm:text-3xl font-bold font-display tracking-tight mt-1 mb-6">
              Nirix Timeline & Genesis Log
            </h3>
            
            <p className="text-zinc-400 text-sm sm:text-base font-sans leading-relaxed mb-10 max-w-2xl">
              Understand our transition phases as we construct the spatial interlink. Click on each phase to query the diagnostic log.
            </p>
          </div>

          {/* Timeline Buttons Header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {milestones.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`py-3.5 px-4 rounded-xl text-left border transition cursor-pointer relative ${
                  selectedMilestone === idx
                    ? "bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white border-transparent"
                    : "bg-zinc-950/50 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                <div className="text-[11px] font-mono uppercase opacity-75 tracking-wider">
                  {m.year}
                </div>
                <div className="text-xs sm:text-sm font-bold font-display tracking-tight mt-1 truncate">
                  {m.phase.split(": ")[1]}
                </div>

                {/* Status indicator on standard cards */}
                {selectedMilestone !== idx && (
                  <span className={`absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full ${
                    m.status === "completed" ? "bg-emerald-500" : m.status === "active" ? "bg-purple-500" : "bg-zinc-600"
                  }`} />
                )}
              </button>
            ))}
          </div>

          {/* Timeline Expanded Log View */}
          <div className="min-h-[140px] bg-zinc-950/80 rounded-2xl border border-zinc-900/60 p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-900 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-[#B369FE] uppercase tracking-wider font-semibold">
                      {milestones[selectedMilestone].phase}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <h4 className="text-white text-sm sm:text-base font-bold font-display tracking-tight">
                      {milestones[selectedMilestone].title}
                    </h4>
                  </div>

                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-widest ${
                    milestones[selectedMilestone].status === "completed" 
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15" 
                      : milestones[selectedMilestone].status === "active"
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/15 animate-pulse"
                      : "bg-zinc-800/15 text-zinc-500 border border-zinc-800"
                  }`}>
                    {milestones[selectedMilestone].status}
                  </span>
                </div>

                <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
                  {milestones[selectedMilestone].details}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
