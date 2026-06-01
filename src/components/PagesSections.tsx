import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Rocket, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  X, 
  Sliders, 
  Cpu, 
  Database, 
  Network, 
  LineChart, 
  Play, 
  Check, 
  RefreshCw,
  Search,
  ArrowRight
} from "lucide-react";
import { toast } from "../lib/toast";

// ==========================================
// 1. VIRTUAL GALLERY INTERACTIVE COMPONENT
// ==========================================
export function VirtualGallery() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "AVATAR", "VEHICLE", "SPATIAL_NODES"];

  const items = [
    {
      id: 1,
      category: "AVATAR",
      name: "Cyber Sentinel v9.2",
      complexity: "92,400 vertices",
      details: "Equipped with ECC-Quantum encryption, deep sensory receptors, and custom neon particle bindings. Optimised for spatial low-latency standard platforms.",
      glow: "#B369FE",
      status: "Verified Safe"
    },
    {
      id: 2,
      category: "VEHICLE",
      name: "Nirix Hover Pod Beta",
      complexity: "128,600 vertices",
      details: "Capable of synchronous multi-user mesh translation across three subnets without physics drift. Utilises real-time audio mapping.",
      glow: "#513FF5",
      status: "Pre-Release Master"
    },
    {
      id: 3,
      category: "SPATIAL_NODES",
      name: "Quantum Relational Array",
      complexity: "44,120 vertices",
      details: "Decentralized wireframe connector hosting up to 9,000 parallel state streams simultaneously. Serves as our primary bridge hardware model.",
      glow: "#06b6d4",
      status: "Active Validator"
    },
    {
      id: 4,
      category: "AVATAR",
      name: "Synth Core Operator",
      complexity: "82,100 vertices",
      details: "Specialized zero-knowledge credentials guardian model with reactive overlay meshes and dynamic state replication parameters.",
      glow: "#ea580c",
      status: "Verified Safe"
    }
  ];

  const filteredItems = items.filter(t => activeCategory === "ALL" || t.category === activeCategory);

  return (
    <div className="space-y-12 select-none">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B369FE] flex items-center justify-center gap-1.5 font-bold">
          <Compass className="w-4 h-4 text-[#B369FE] animate-pulse" />
          <span>Virtual Gallery</span>
        </span>
        <h3 className="text-white text-2xl md:text-4xl font-bold font-display tracking-tight">
          3D Canvas Showroom
        </h3>
        <p className="text-zinc-500 text-sm">
          Select digital assets and explore their verified node configurations.
        </p>
      </div>

      {/* Categories Bar */}
      <div className="flex justify-center flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-widest transition cursor-pointer ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white font-bold"
                : "bg-zinc-950/60 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-805"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="p-6 bg-[#08080b] border border-zinc-900 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[250px] shadow-lg group hover:border-zinc-800 transition"
          >
            {/* Subtle glow border */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: item.glow }} />

            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-widest text-zinc-550 uppercase">
                {item.category}
              </span>

              <div className="space-y-1">
                <h4 className="text-white font-bold text-lg font-display tracking-tight">
                  {item.name}
                </h4>
                <p className="text-zinc-500 text-xs font-mono uppercase">
                  Complexity: {item.complexity}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedItem(item)}
              className="mt-6 w-full py-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-lg text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-[#B369FE] transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Examine Node</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Examine Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-[#050508] border border-zinc-900 rounded-2xl p-6 md:p-8 z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: selectedItem.glow }} />

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    {selectedItem.category} DETAILED SPECIFICATIONS
                  </span>
                  <h4 className="text-white text-2xl font-bold font-display tracking-tight">
                    {selectedItem.name}
                  </h4>
                </div>

                <div className="space-y-2">
                  <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                    {selectedItem.details}
                  </p>
                  <div className="grid grid-cols-2 gap-4 bg-zinc-950 p-3 rounded-lg border border-zinc-900 text-xs font-mono">
                    <div>
                      <span className="text-zinc-500 block">Mesh Density:</span>
                      <span className="text-zinc-300 font-bold">{selectedItem.complexity}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Status Score:</span>
                      <span className="text-emerald-400 font-bold">{selectedItem.status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-2 border-t border-zinc-900">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 border border-zinc-900 text-zinc-400 hover:text-white rounded-lg text-xs font-mono uppercase tracking-widest transition cursor-pointer"
                  >
                    Close Block
                  </button>
                  <button
                    onClick={() => toast.success(`Broadcasting item "${selectedItem.name}": dynamic 3D vertex and material shader loaded successfully.`)}
                    className="px-5 py-2 text-white bg-gradient-to-r from-[#513FF5] to-[#B369FE] rounded-lg text-xs font-mono uppercase tracking-widest transition cursor-pointer shadow-lg hover:opacity-95"
                  >
                    Load in Workspace
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// 2. ECOSYSTEM HUB COMPONENT
// ==========================================
export function EcosystemHub() {
  const [activeDapp, setActiveDapp] = useState<string>("VALIDATOR");

  const dapps = [
    {
      id: "VALIDATOR",
      name: "Validator Core Console",
      status: "Connected",
      load: "42.1%",
      throughput: "9,892 state/sec",
      description: "Monitors cross-subnet blocks and verifies spatial telemetry synchronizations. Assures cryptographically reliable packet delivery with low overhead."
    },
    {
      id: "LEDGER",
      name: "Smart Contract Ledger",
      status: "Idle State",
      load: "11.5%",
      throughput: "24,015 queries/sec",
      description: "Maintains immutable ledger records detailing ownership of spatial items, token distributions ($NIRX), and verified smart contract authorizations."
    },
    {
      id: "SPATIAL_SYNC",
      name: "Spatial Render Matcher",
      status: "Connected",
      load: "88.9%",
      throughput: "142.5 FPS target",
      description: "Direct rendering bridge connecting physical camera data or mouse pointer interactions with background virtual coordinate frames in real time."
    }
  ];

  const current = dapps.find(d => d.id === activeDapp) || dapps[0];

  return (
    <div className="space-y-12 select-none">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B369FE] flex items-center justify-center gap-1.5 font-bold">
          <Rocket className="w-4 h-4 text-[#B369FE] animate-pulse" />
          <span>Ecosystem Hub</span>
        </span>
        <h3 className="text-white text-2xl md:text-4xl font-bold font-display tracking-tight">
          Sovereign Integrations Console
        </h3>
        <p className="text-zinc-500 text-sm">
          A centralized dApp view to inspect, initialize, and trigger sovereign sub-modules.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Buttons */}
        <div className="lg:col-span-4 space-y-3">
          {dapps.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveDapp(d.id)}
              className={`w-full text-left p-4 rounded-xl border transition cursor-pointer flex flex-col justify-between ${
                activeDapp === d.id
                  ? "bg-gradient-to-r from-[#513FF5] to-[#B369FE] border-transparent text-white"
                  : "bg-[#08080b] border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
              }`}
            >
              <span className="text-xs font-mono uppercase tracking-widest opacity-80 block">
                {d.id} MODULE
              </span>
              <h4 className="text-sm font-bold font-display mt-1 tracking-tight">
                {d.name}
              </h4>
            </button>
          ))}
        </div>

        {/* Right Side Monitor Output */}
        <div className="lg:col-span-8 p-6 md:p-8 bg-[#07070a]/90 border border-zinc-900 rounded-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <h4 className="text-white text-lg font-bold font-display">
              {current.name} Diagnostics
            </h4>

            <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 rounded">
              {current.status}
            </span>
          </div>

          <p className="text-zinc-400 font-sans text-sm leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">System Load Usage</span>
              <span className="text-2xl font-bold text-[#B369FE] font-mono mt-1.5 block">
                {current.load}
              </span>
            </div>

            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Operational Throughput</span>
              <span className="text-2xl font-bold text-white font-mono mt-1.5 block">
                {current.throughput}
              </span>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => toast.success(`Diagnostics Protocol: Hard reboot dispatched for subnet module ID "${current.id}". System online.`)}
              className="px-5 py-2.5 border border-zinc-800 hover:border-[#B369FE]/40 text-xs font-mono uppercase text-zinc-400 hover:text-[#B369FE] rounded-lg tracking-widest transition cursor-pointer"
            >
              Forced Synchronous Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. CREATOR STUDIO - EXTREMELY HIGH FIDELITY WIRED BUILDER
// ==========================================
export function CreatorStudio() {
  const [shape, setShape] = useState<"sphere" | "cube" | "torus" | "pyramid">("sphere");
  const [nodeCount, setNodeCount] = useState<number>(12);
  const [spinSpeed, setSpinSpeed] = useState<number>(3);
  const [wireColor, setWireColor] = useState<string>("#B369FE");

  const colors = [
    { value: "#B369FE", label: "Violet Glow" },
    { value: "#513FF5", label: "Indi Blue" },
    { value: "#00f5d4", label: "Cyber Teal" },
    { value: "#ff007f", label: "Neon Rose" }
  ];

  return (
    <div className="space-y-12 select-none">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B369FE] flex items-center justify-center gap-1.5 font-bold">
          <Sparkles className="w-4 h-4 text-[#B369FE] animate-pulse" />
          <span>Creator Studio</span>
        </span>
        <h3 className="text-white text-2xl md:text-4xl font-bold font-display tracking-tight">
          3D Node Layout Configurator
        </h3>
        <p className="text-zinc-500 text-sm">
          Interact with configuration modules to realize a floating custom holographic spatial mesh structure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side Controls Column */}
        <div className="lg:col-span-5 bg-[#08080b] p-6 rounded-2xl border border-zinc-900 space-y-6">
          <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider block border-b border-zinc-950 pb-2">
            CONTROL INTERFACE
          </span>

          {/* Sizing: Shape select */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-400 block uppercase">1. Cyber Geometry Type:</span>
            <div className="grid grid-cols-2 gap-2">
              {(["sphere", "cube", "torus", "pyramid"] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setShape(s)}
                  className={`py-2 text-[10px] font-mono rounded-lg border uppercase tracking-widest transition cursor-pointer ${
                    shape === s
                      ? "bg-zinc-950 border-[#B369FE] text-[#B369FE] font-bold"
                      : "bg-[#0b0b0f] border-zinc-950 text-zinc-500 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Node Density slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400 uppercase">2. Node Cluster Density:</span>
              <span className="text-[#B369FE] font-bold">{nodeCount} active nodes</span>
            </div>
            <input
              type="range"
              min="4"
              max="24"
              value={nodeCount}
              onChange={(e) => setNodeCount(Number(e.target.value))}
              className="w-full accent-[#B369FE]"
            />
          </div>

          {/* Spin Speed slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400 uppercase">3. Orbital Spin Rate:</span>
              <span className="text-[#B369FE] font-bold">{spinSpeed} rad/sec</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={spinSpeed}
              onChange={(e) => setSpinSpeed(Number(e.target.value))}
              className="w-full accent-[#B369FE]"
            />
          </div>

          {/* Wireframe Color Selection */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-400 block uppercase">4. Emission Color Wave:</span>
            <div className="flex gap-2">
              {colors.map(col => (
                <button
                  key={col.value}
                  onClick={() => setWireColor(col.value)}
                  className="w-7 h-7 rounded-lg border transition cursor-pointer flex items-center justify-center shrink-0 border-zinc-900 hover:scale-105"
                  style={{ backgroundColor: col.value }}
                  title={col.label}
                >
                  {wireColor === col.value && (
                    <span className="w-2 h-2 rounded-full bg-white shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => toast.success(`Mesh Compiler: Shape="${shape.toUpperCase()}" Color="${wireColor}" Nodes=${nodeCount} compiled and exported to your custom workspace.`)}
              className="w-full py-3 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white rounded-lg text-xs font-mono uppercase tracking-widest font-bold shadow-lg transition cursor-pointer hover:opacity-95"
            >
              Compile & Export Asset
            </button>
          </div>
        </div>

        {/* Right Side Visual Live Rendering Module! */}
        <div className="lg:col-span-7 bg-[#050508] border border-zinc-900 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center p-6 relative overflow-hidden shadow-2xl">
          {/* Subtle grid backdrop for visual design excellence */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          {/* Dynamic Vector Core Render based on interactive sliders! */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Ambient dynamic radial shadows beneath node geometry */}
            <div 
              className="absolute w-32 h-32 rounded-full blur-3xl opacity-35 animate-pulse transition-all duration-500"
              style={{ backgroundColor: wireColor }}
            />

            {/* Vector SVG node model rotating with dynamic speed */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: spinSpeed > 0 ? 30 / spinSpeed : 10000000, ease: "linear" }}
              className="w-full h-full z-10"
              viewBox="0 0 100 100"
            >
              {/* Basic shape lines based on selections */}
              {shape === "sphere" && (
                <>
                  <circle cx="50" cy="50" r="35" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="3 2" className="opacity-90" />
                  <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke={wireColor} strokeWidth="0.8" className="opacity-60" />
                  <ellipse cx="50" cy="50" rx="15" ry="35" fill="none" stroke={wireColor} strokeWidth="0.8" className="opacity-60" />
                </>
              )}

              {shape === "cube" && (
                <>
                  <rect x="25" y="25" width="50" height="50" fill="none" stroke={wireColor} strokeWidth="1" />
                  <rect x="35" y="35" width="50" height="50" fill="none" stroke={wireColor} strokeWidth="0.8" className="opacity-40" />
                  <line x1="25" y1="25" x2="35" y2="35" stroke={wireColor} strokeWidth="0.8" />
                  <line x1="75" y1="25" x2="85" y2="35" stroke={wireColor} strokeWidth="0.8" />
                  <line x1="25" y1="75" x2="35" y2="85" stroke={wireColor} strokeWidth="0.8" />
                  <line x1="75" y1="75" x2="85" y2="85" stroke={wireColor} strokeWidth="0.8" />
                </>
              )}

              {shape === "torus" && (
                <>
                  <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke={wireColor} strokeWidth="1.2" />
                  <ellipse cx="50" cy="50" rx="20" ry="12" fill="none" stroke={wireColor} strokeWidth="0.8" className="opacity-50" />
                  {/* connecting grids */}
                  <line x1="10" y1="50" x2="30" y2="50" stroke={wireColor} strokeWidth="0.5" className="opacity-45" />
                  <line x1="70" y1="50" x2="90" y2="50" stroke={wireColor} strokeWidth="0.5" className="opacity-45" />
                </>
              )}

              {shape === "pyramid" && (
                <>
                  {/* Outer Faces */}
                  <polygon points="50,15 20,75 80,75" fill="none" stroke={wireColor} strokeWidth="1" />
                  <line x1="50" y1="15" x2="50" y2="75" stroke={wireColor} strokeWidth="0.8" className="opacity-80" />
                  <line x1="20" y1="75" x2="50" y2="75" stroke={wireColor} strokeWidth="0.8" className="opacity-80" />
                  <line x1="80" y1="75" x2="50" y2="75" stroke={wireColor} strokeWidth="0.8" className="opacity-80" />
                </>
              )}

              {/* Dynamic Coordinate spatial nodes drawn on SVG path */}
              {Array.from({ length: nodeCount }).map((_, idx) => {
                const angle = (idx * 2 * Math.PI) / nodeCount;
                const r = 35;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <circle
                    key={idx}
                    cx={x}
                    cy={y}
                    r="2.5"
                    fill={wireColor}
                    className="animate-pulse shadow-md"
                  />
                );
              })}
            </motion.svg>
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] text-zinc-550 border-t border-zinc-950 pt-2.5">
            RUNTIME ASSET MAPPING ENGINE: ACTIVE • MODE={shape.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. SECURITY AUDIT SYSTEM COMPONENT
// ==========================================
export function SecurityAudit() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);

  const audits = [
    { target: "NIRX_TOKEN_DISP.SOL", hash: "0x4fe...92ba", score: "99.2%", status: "compliant" },
    { target: "SPATIAL_LEDGER_CORE.SOL", hash: "0xa2d...1f4e", score: "98.7%", status: "compliant" },
    { target: "CREATOR_ROYALTIES_LOCK.SOL", hash: "0xccc...a38b", score: "100.0%", status: "compliant" }
  ];

  const runVettingSequence = () => {
    setIsAuditing(true);
    setAuditProgress(0);

    const interval = setInterval(() => {
      setAuditProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAuditing(false);
          toast.success("Audit Complete: Smart contract pathways verified. Zero critical warning flags registered. Security matches 100%.");
          return 100;
        }
        return prev + 10;
      });
    }, 250);
  };

  return (
    <div className="space-y-12 select-none">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B369FE] flex items-center justify-center gap-1.5 font-bold">
          <ShieldCheck className="w-4 h-4 text-[#B369FE] animate-pulse" />
          <span>Security Audit</span>
        </span>
        <h3 className="text-white text-2xl md:text-4xl font-bold font-display tracking-tight">
          Verified Compliance Registry
        </h3>
        <p className="text-zinc-500 text-sm">
          Cryptographically sign smart contract channels and ensure stable spatial state actions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Verification Checklist */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-white text-lg font-bold font-display">
            Active Core Smart Audits
          </h4>

          <div className="space-y-3">
            {audits.map((aud, index) => (
              <div key={index} className="p-4 bg-[#08080b] border border-zinc-900 rounded-xl flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#B369FE]">
                    {aud.target}
                  </span>
                  <p className="text-[10px] font-mono text-zinc-500">
                    HASH: {aud.hash}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-400 block">
                    {aud.score} SCORE
                  </span>
                  <span className="text-[9px] uppercase font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 rounded">
                    {aud.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostic Run Module */}
        <div className="lg:col-span-5 bg-[#07070a] border border-zinc-900 rounded-2xl p-6 space-y-6">
          <h4 className="text-white font-bold font-display">
            Run Cryptographic Path Audit
          </h4>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Initialize an isolated diagnostic path query sequence to verify live smart transaction code compliance.
          </p>

          <AnimatePresence mode="wait">
            {!isAuditing && auditProgress === 0 ? (
              <motion.button
                key="audit-btn"
                onClick={runVettingSequence}
                className="w-full py-3 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white rounded-lg text-xs font-mono uppercase tracking-widest font-bold shadow-lg cursor-pointer hover:opacity-95"
              >
                Start Smart Analysis
              </motion.button>
            ) : (
              <motion.div
                key="audit-process"
                className="space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="animate-pulse">Vetting in progress...</span>
                  <span className="text-[#B369FE] font-bold">{auditProgress}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                  <div
                    className="h-full bg-gradient-to-r from-[#513FF5] to-[#B369FE] transition-all duration-300"
                    style={{ width: `${auditProgress}%` }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-4 bg-zinc-950/80 rounded-xl border border-zinc-900/60 font-mono text-[10px] text-zinc-500 leading-relaxed">
            Diagnostics perform parallel loops to check ledger state replication matrices for buffer overflow and multi-sig exceptions.
          </div>
        </div>
      </div>
    </div>
  );
}
