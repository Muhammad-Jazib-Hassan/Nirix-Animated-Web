import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Palette, 
  ShoppingBag, 
  MessageSquare, 
  Cpu, 
  Coins, 
  Compass, 
  X,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface FeatureCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isHighlighted?: boolean;
}

export function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureCard | null>(null);

  const features: FeatureCard[] = [
    {
      id: 1,
      title: "Customization Studio",
      subtitle: "Personalization Gateway",
      description: "This spectacular event promises an unforgetta evening filled with digital installations, live scpe rformances by virtual.",
      icon: Palette
    },
    {
      id: 2,
      title: "Virtual Marketplace",
      subtitle: "Decentralized Asset Hub",
      description: "This spectacular event promises an unforgetta evening filled with digital installations, live scpe rformances by virtual.",
      icon: ShoppingBag,
      isHighlighted: true // Fully gradient card as seen in the reference image!
    },
    {
      id: 3,
      title: "Communication Hub",
      subtitle: "Multi-Node Connectivity",
      description: "This spectacular event promises an unforgetta evening filled with digital installations, live scpe rformances by virtual.",
      icon: MessageSquare
    },
    {
      id: 4,
      title: "AI - Powered Virtual",
      subtitle: "Cognitive AI Integration",
      description: "This spectacular event promises an unforgetta evening filled with digital installations, live scpe rformances by virtual.",
      icon: Cpu
    },
    {
      id: 5,
      title: "Crypto Collaboration",
      subtitle: "Smart Contract Clusters",
      description: "This spectacular event promises an unforgetta evening filled with digital installations, live scpe rformances by virtual.",
      icon: Coins
    },
    {
      id: 6,
      title: "Adventure Quets",
      subtitle: "Spatial Exploration Guides",
      description: "This spectacular event promises an unforgetta evening filled with digital installations, live scpe rformances by virtual.",
      icon: Compass
    }
  ];

  return (
    <section className="relative bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-zinc-950">
      {/* Background Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#513FF5]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 select-none">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[#B369FE] text-sm font-mono uppercase tracking-[0.25em] font-semibold"
          >
            Main Feature
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-3xl md:text-5xl font-bold font-display tracking-tight mt-3"
          >
            Utilize The Functionality
          </motion.h2>
        </div>

        {/* 3x2 Grid Reconstructed with exact CSS visual parity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            
            // Highlighted gradient card style
            if (item.isHighlighted) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="relative rounded-2xl p-8 bg-gradient-to-br from-[#513FF5] via-[#855bf6] to-[#B369FE] text-white flex flex-col justify-between min-h-[320px] shadow-[0_15px_35px_rgba(81,63,245,0.25)] select-none cursor-pointer group"
                  onClick={() => setSelectedFeature(item)}
                >
                  <div className="space-y-6">
                    {/* Icon frame with dark blend for contrast */}
                    <div className="w-14 h-14 rounded-xl bg-black/15 flex items-center justify-center text-white border border-white/10 shadow-inner group-hover:scale-110 transition duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-display tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-[14px] leading-relaxed font-sans font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Read More interactive trigger */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 group/btn cursor-pointer">
                    <span className="text-xs uppercase tracking-widest font-mono font-bold text-white group-hover/btn:underline">
                      Read More
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition group-hover/btn:translate-x-1" />
                  </div>
                </motion.div>
              );
            }

            // Standard elegant dark theme cards
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6, bg: "rgb(20,20,25)" }}
                className="relative rounded-2xl p-8 bg-[#111115] border border-zinc-900 flex flex-col justify-between min-h-[320px] shadow-[0_10px_35px_rgba(0,0,0,0.5)] select-none cursor-pointer group hover:border-zinc-800 transition-colors duration-300"
                onClick={() => setSelectedFeature(item)}
              >
                <div className="space-y-6">
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-xl bg-[#18181f] flex items-center justify-center text-[#B369FE] border border-zinc-800/80 group-hover:bg-[#1a1a24] group-hover:text-[#513FF5] group-hover:border-[#513FF5]/30 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display text-white tracking-tight group-hover:text-[#B369FE] transition duration-200">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-[14px] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Read More interactive trigger */}
                <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center gap-2 group/btn cursor-pointer">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#513FF5] group-hover/btn:text-[#B369FE] group-hover/btn:underline transition">
                    Read More
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#513FF5] group-hover/btn:text-[#B369FE] transition group-hover/btn:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Feature Drill-down Modal (High-Fidelity Interaction) */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-[#07070a] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Highlight bar to emphasize choice */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#513FF5] via-[#855bf6] to-[#B369FE]" />

              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#B369FE]">
                  {React.createElement(selectedFeature.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B369FE]">
                    {selectedFeature.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                    {selectedFeature.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-400 font-sans leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac justo eget magna tincidunt gravida. Sed sit amet finibus sapien, vitae congue urna. Ut tempus arcu in eleifend molestie.
                </p>
                <p>
                  {selectedFeature.description}
                </p>
                
                <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-900 space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#B369FE] animate-pulse" />
                    <span>Dynamic System Payload</span>
                  </div>
                  <p className="text-xs text-zinc-550 leading-relaxed font-mono">
                    Node cluster initialization sequence success. Ready to interface virtual 3D rendering environments with low-level protocol channels.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3.5 border-t border-zinc-900 pt-6">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="px-5 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg text-xs font-mono uppercase tracking-widest transition cursor-pointer"
                >
                  Close Detail
                </button>
                <button
                  onClick={() => {
                    setSelectedFeature(null);
                    alert(`Interfacing: Connecting direct client socket payload for physical ${selectedFeature.title} modules...`);
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white rounded-lg text-xs font-mono uppercase tracking-widest transition cursor-pointer hover:opacity-95 shadow-lg shadow-[#513FF5]/20"
                >
                  Mount Instance
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
