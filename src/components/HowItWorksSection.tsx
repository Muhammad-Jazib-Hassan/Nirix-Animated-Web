import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, ShieldCheck, Cpu, Database } from "lucide-react";

// Import local assets so Vite processes them correctly for deployment
import launchedAppCityImg from "../assets/images/launched_app_city_1779819623359.png";
import metaverseBuggyImg from "../assets/images/metaverse_buggy_1779819596996.png";
import innovativeNodesImg from "../assets/images/innovative_nodes_1779819644621.png";

interface Tab {
  id: string;
  label: string;
  imgSrc: string;
  title: string;
  description: string;
  bullets: string[];
}

export function HowItWorksSection() {
  const [activeTabId, setActiveTabId] = useState<string>("marketplace");

  const tabs: Tab[] = [
    {
      id: "launched",
      label: "Launched App",
      imgSrc: launchedAppCityImg,
      title: "Connecting Users with Seamless Neural Spatial Interfaces",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting individual has been the industry's standard dummy text ever since the when on this hour of unknown printer took a galley of type harden people.",
      bullets: [
        "Instant Node Synchronization",
        "Full Multi-Platform Interop",
        "Decentralized Audio Spatial Mapping"
      ]
    },
    {
      id: "marketplace",
      label: "Metaverse Marketplace",
      imgSrc: metaverseBuggyImg,
      title: "Made A New App Where You Will Get Part Taste Of Metaverse World Like",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting individual like has been the industry's standard dummy text ever since the when on this hour of unknown printer took a galley of type harden people.",
      bullets: [
        "Individuals Can Meet Friends",
        "Virtual Economy Is Emerging",
        "Breaking Geographical Barriers"
      ]
    },
    {
      id: "innovative",
      label: "Innovative Approach",
      imgSrc: innovativeNodesImg,
      title: "Next-Gen Protocol For Fluid Spatial Interaction Engines",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting individual has been the industry's standard dummy text ever since the when on this hour of unknown printer took a galley of type harden people.",
      bullets: [
        "Quantum-Secured Contract Architecture",
        "Ultra Low Latency Wireframe Nodes",
        "Distributed Sovereign Data Systems"
      ]
    }
  ];

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[1];

  return (
    <section className="relative bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-zinc-950">
      {/* Background neon sphere */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#B369FE]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title Information */}
        <div className="text-center mb-12 select-none">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#B369FE] text-sm font-mono uppercase tracking-[0.25em] font-semibold"
          >
            How It Works
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-3xl md:text-5xl font-bold font-display tracking-tight mt-3 max-w-2xl mx-auto leading-tight"
          >
            The Intersection Of Real And Metaverse Worlds
          </motion.h2>
        </div>

        {/* Tab Controls Selector - Exact Parity */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 select-none">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative px-7 py-3 rounded-lg text-sm sm:text-base font-display font-medium tracking-wide transition-all z-10 cursor-pointer overflow-hidden ${
                  isActive 
                    ? "bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white shadow-[0_4px_25px_rgba(81,63,245,0.3)] font-bold"
                    : "border border-zinc-900 bg-[#07070a]/40 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - Image Viewport */}
          <div className="lg:col-span-6 relative">
            {/* Visual background borders for precision layout framing */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#513FF5]/10 to-[#B369FE]/10 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border border-zinc-900 bg-[#09090b] aspect-[4/3] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab.id}
                  src={activeTab.imgSrc}
                  alt={activeTab.label}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="w-full h-full object-cover select-none"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Block - Explanations */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.45 }}
                className="space-y-6 w-full"
              >
                {/* Section Title */}
                <h3 className="text-white text-2xl sm:text-3xl md:text-[2.2rem] font-bold font-display tracking-tight leading-[1.15]">
                  {activeTab.title}
                </h3>

                {/* Main Paragraph */}
                <p className="text-zinc-400 font-sans text-[15px] sm:text-[16px] leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Spec check bullet items with matching checkbox icons */}
                <ul className="space-y-4 pt-1">
                  {activeTab.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3.5 group">
                      <div className="w-5.5 h-5.5 rounded-full bg-[#B369FE]/10 border border-[#B369FE]/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(179,105,254,0.1)] transition group-hover:bg-[#B369FE]/20">
                        <Check className="w-3.5 h-3.5 text-[#B369FE] font-bold" />
                      </div>
                      <span className="text-zinc-300 font-sans text-[15px] sm:text-[16px] tracking-wide transition group-hover:text-white">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Interaction Action Read More Trigger */}
                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => alert(`Simulating connection sequence for the ${activeTab.label} suite... Gateway configured.`)}
                    className="px-7 py-3 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white hover:opacity-95 font-medium rounded-lg text-sm sm:text-base tracking-wider transition-all shadow-[0_4px_15px_rgba(81,63,245,0.25)] hover:shadow-[0_4px_20px_rgba(179,105,254,0.4)] flex items-center gap-2.5 cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
