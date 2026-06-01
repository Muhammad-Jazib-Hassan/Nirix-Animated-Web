import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sliders, Calendar, User, Eye, X, ArrowRight, Rss, ArrowLeft } from "lucide-react";
import { SubpageBackgroundVideo } from "./SubpageBackgroundVideo";
import { toast } from "../lib/toast";

interface Article {
  id: number;
  category: "METAVERSE" | "CRYPTO" | "PROTOCOL" | "ECOSYSTEM";
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: string;
  views: string;
}

export function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ["ALL", "METAVERSE", "CRYPTO", "PROTOCOL", "ECOSYSTEM"];

  const articles: Article[] = [
    {
      id: 1,
      category: "METAVERSE",
      title: "Voxel Interoperability Phase 3 Testing Confirmed",
      excerpt: "Technical steering groups confirm absolute data stability while translating full vertex shaders across modular dApp systems with zero user lag.",
      date: "May 24, 2026",
      readTime: "4 min read",
      author: "Nirix Core Team",
      views: "1.2k views",
      content: [
        "In a substantial leap forward for web 3D rendering engines, Nirix engineers have reported key milestones during Phase 3 verification protocols of our Voxel Interoperability platform.",
        "The milestone was hit across multiple testing rigs spanning isolated GPU clusters in Singapore, Seattle, and Hamburg. Results show stable, high-efficiency client node loops that transfer modular graphics objects seamlessly with zero memory leaks.",
        "Through this integration, developers can bundle standard GLTF/GLB digital models directly into lightweight browser canvases, removing the barrier of complex standalone setups and proprietary software constraints."
      ]
    },
    {
      id: 2,
      category: "PROTOCOL",
      title: "Optimized Quantum-Safe ECC-512 Encryptions Live on Mainnet",
      excerpt: "Nirix has officially initialized state protection protocols across public nodes, guaranteeing data safety for all smart wallets and communication networks.",
      date: "May 18, 2026",
      readTime: "7 min read",
      author: "CISO Dr. Alix",
      views: "982 views",
      content: [
        "Security is a principal pillar of any virtual experience. Today, the Nirix development group successfully deployed lightweight, quantum-safe cryptographic envelopes to secure live Web3 client sessions.",
        "Traditional encryption standards face ultimate threats from post-quantum compute breakthroughs. By introducing advanced Elliptic Curve Cryptography combined with dense lattice-based variables (ECC-512), we ensure active spatial transactions remain secure forever.",
        "Validators have confirmed flawless packet routing speeds with negligible latency impact, ensuring premium-level standard protection without hindering fast interactions."
      ]
    },
    {
      id: 3,
      category: "ECOSYSTEM",
      title: "Introducing Nirix Creator dApp Portal v2.0",
      excerpt: "Empowering developers and content designers with intuitive UI widgets to construct animated 3D assets directly from standard browser nodes.",
      date: "May 12, 2026",
      readTime: "5 min read",
      author: "Design Lead Maya",
      views: "1.6k views",
      content: [
        "We are thrilled to pull the curtain on Nirix Creator Portal v2.0. This updated web pipeline allows both beginners and highly skilled Web3 architects to craft customized elements easily.",
        "Supported by fully styled modular libraries and automated smart code bindings, creators can design, test, and preview interactive components with live visual feedback. The portal bridges standard layout parameters into functional metaverse code.",
        "Phase 2 rollouts will introduce automated asset listing features to streamline publishing directly to decentralized virtual marketplaces under verified creator keys."
      ]
    },
    {
      id: 4,
      category: "CRYPTO",
      title: "Nirix Smart Tokenomics ($NIRX) Audit Completion Success",
      excerpt: "Securing validator structures and smart execution paths. Our $NIRX distribution model gains excellent ratings from premier cybersecurity testers.",
      date: "May 06, 2026",
      readTime: "3 min read",
      author: "Audit Node 09",
      views: "2.1k views",
      content: [
        "Compliance checks and robust smart transaction code represent critical assets when delivering utility layers. The Nirix development team is proud to present details of our completed token system audit.",
        "Led by premium industry testers, the vetting confirmed strict safety scores across our smart ledger structures, multi-signature vaults, and automated rewards code. Zero high-intensity warning logs were reported.",
        "With secure smart pathways verified, we are fully positioned to support continuous liquid trades and validator reward structures as our spatial user footprint expands."
      ]
    }
  ];

  // Filtering Logic
  const filteredArticles = articles.filter((a) => {
    const matchesCategory = selectedCategory === "ALL" || a.category === selectedCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative min-h-screen bg-black pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video Layer */}
      <SubpageBackgroundVideo />

      {/* Background Ambience styling */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#513FF5]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#B369FE]/4 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16 select-none">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#B369FE] text-sm font-mono uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2"
          >
            <Rss className="w-4 h-4 text-[#B369FE] animate-pulse" />
            <span>Operational Bulletins</span>
          </motion.span>
          
          <h2 className="text-white text-3xl md:text-5xl font-bold font-display tracking-tight mt-3">
            Nirix Spatial News Terminal
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-3 uppercase tracking-wider">
            Public communications registry • cryptographically signed records
          </p>
        </div>

        {/* Filter and Search Bar Controller HUD */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between border border-zinc-900 rounded-2xl p-4 bg-[#050508]/80 select-none">
          
          {/* Categories Row */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white font-bold"
                    : "bg-zinc-950/55 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news records..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/70 border border-zinc-900 rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-300 placeholder-zinc-550 focus:outline-none focus:border-[#B369FE]/40 focus:bg-black transition-all"
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art, index) => (
                <motion.div
                  key={art.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl p-6 md:p-8 bg-[#09090c] border border-zinc-900 flex flex-col justify-between min-h-[290px] shadow-lg hover:border-zinc-800 transition"
                >
                  <div className="space-y-4">
                    {/* Meta Headers */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#B369FE] bg-[#B369FE]/5 border border-[#B369FE]/15 px-2.5 py-0.5 rounded">
                        {art.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{art.date}</span>
                      </div>
                    </div>

                    {/* Headline and excerpt */}
                    <div className="space-y-2">
                      <h3 className="text-white text-xl font-bold font-display tracking-tight hover:text-[#B369FE] transition duration-200 cursor-pointer" onClick={() => setSelectedArticle(art)}>
                        {art.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed font-sans line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More button row */}
                  <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-4 text-zinc-500">
                      <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {art.author}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {art.views}</span>
                    </div>

                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="flex items-center gap-1.5 text-[#513FF5] hover:text-[#B369FE] bg-transparent border-none font-bold transition cursor-pointer"
                    >
                      <span>Read Dispatches</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-16 bg-zinc-950/20 border border-zinc-900 rounded-2xl select-none">
                <p className="text-zinc-500 font-mono text-sm">No matched operations found in news registry.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Popout detailed article overlay modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-[#060609] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto selection:bg-[#B369FE]/40"
            >
              {/* Highlight design strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#513FF5] via-[#855bf6] to-[#B369FE]" />

              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 text-zinc-500 hover:text-white transition p-1 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                {/* Meta details header info */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 border-b border-zinc-900 pb-4 pr-12">
                  <span className="text-[#B369FE] font-bold bg-[#B369FE]/5 border border-[#B369FE]/15 px-2.5 py-0.5 rounded">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                  <span>•</span>
                  <span>Logged by {selectedArticle.author}</span>
                </div>

                {/* Main Headline */}
                <h3 className="text-white text-2xl md:text-3xl font-bold font-display tracking-tight leading-snug">
                  {selectedArticle.title}
                </h3>

                {/* Multi-paragraph content list */}
                <div className="space-y-4 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                  {selectedArticle.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Verification footer notes */}
                <div className="p-4 bg-zinc-950/80 rounded-xl border border-zinc-900 text-xs text-zinc-500 font-mono leading-relaxed space-y-1 mt-6">
                  <p className="font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Dispatch cryptographically verified
                  </p>
                  <p className="text-[10px] text-zinc-650 tracking-tighter truncate font-mono">
                    SHA256: 4e9a8f2b3c1d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f
                  </p>
                </div>

                {/* Action button triggers */}
                <div className="flex justify-between items-center pt-6 border-t border-zinc-900 mt-6 select-none">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition text-xs font-mono uppercase tracking-widest cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to dispatches</span>
                  </button>

                  <button
                    onClick={() => {
                      toast.info(`Query dispatched: Fetching raw system documentation vectors for node "${selectedArticle.title}". Please standby...`);
                    }}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white hover:opacity-95 font-medium rounded-lg text-xs font-mono uppercase tracking-widest transition cursor-pointer shadow-lg shadow-[#513FF5]/10"
                  >
                    Request System Raw Docs
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
