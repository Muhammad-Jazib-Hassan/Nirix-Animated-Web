import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Send, Coins, Compass, Globe, Info, CreditCard, ChevronRight, Activity, Cpu } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinModal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#09090b] border border-zinc-800 rounded-2xl p-6 md:p-8 overflow-hidden shadow-[0_10px_50px_rgba(81,63,245,0.15)] z-10"
          >
            {/* Custom glowing border effects */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#513FF5] via-[#8b5cf6] to-[#B369FE]" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="pt-2">
                <div className="flex items-center gap-2 text-[#B369FE] mb-3">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="text-xs uppercase font-semibold tracking-wider font-mono">
                    Beta Access Port
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                  Enter Nirix Metaverse
                </h3>
                <p className="text-zinc-400 text-sm mt-2 font-sans">
                  Register your neural signature to join early testnets, earn $NIRX seed drops, and reserve immersive custom domains before public launch.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                      Secure Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. architect@nirix.network"
                      className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-[#B369FE]/60 rounded-lg py-2.5 px-4 text-white text-sm outline-none transition-all placeholder:text-zinc-650"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white font-medium rounded-lg text-sm transition-all hover:opacity-95 shadow-[0_4px_15px_rgba(81,63,245,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Transmission</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#513FF5] to-[#B369FE] flex items-center justify-center mx-auto shadow-lg shadow-[#513FF5]/20">
                  <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mt-4 tracking-tight">
                  Signature Registered
                </h3>
                <p className="text-zinc-400 text-sm mt-3 max-w-sm mx-auto font-sans leading-relaxed">
                  Welcome to the frontier. A neural gateway key is being transmitted to <span className="text-[#B369FE] font-medium">{email}</span>. Prepare for launch.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-lg text-sm transition cursor-pointer font-sans"
                >
                  Close Gateway
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function BuyTokenModal({ isOpen, onClose }: ModalProps) {
  const [usdAmount, setUsdAmount] = useState<string>("100");
  const [tokenRate] = useState<number>(0.15); // $0.15 per $NIRX
  const [nirxAmount, setNirxAmount] = useState<number>(100 / 0.15);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<"calc" | "success">("calc");

  useEffect(() => {
    const usd = parseFloat(usdAmount);
    if (!isNaN(usd) && usd > 0) {
      setNirxAmount(parseFloat((usd / tokenRate).toFixed(2)));
    } else {
      setNirxAmount(0);
    }
  }, [usdAmount, tokenRate]);

  const handleSimulateBuy = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 2200);
  };

  const handleReset = () => {
    setUsdAmount("100");
    setStep("calc");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#09090b] border border-zinc-800 rounded-2xl p-6 md:p-8 overflow-hidden shadow-[0_10px_50px_rgba(81,63,245,0.15)] z-10"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#513FF5] via-[#8b5cf6] to-[#B369FE]" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {step === "calc" ? (
              <div className="pt-2">
                <div className="flex items-center gap-2 text-[#513FF5] mb-3">
                  <Coins className="w-5 h-5 text-[#B369FE] animate-pulse" />
                  <span className="text-xs uppercase font-semibold tracking-wider font-mono text-zinc-400">
                    Smart Swap Simulation
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                  Acquire $NIRX Utility Token
                </h3>

                <div className="mt-6 space-y-4">
                  {/* Rate Indicator */}
                  <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">Current seed rate:</span>
                    <span className="text-[#B369FE] font-bold">1 $NIRX = ${tokenRate} USD</span>
                  </div>

                  {/* Input USD */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                      Invest Amount (USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 font-mono text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        min="1"
                        value={usdAmount}
                        onChange={(e) => setUsdAmount(e.target.value)}
                        placeholder="100"
                        disabled={isProcessing}
                        className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-[#B369FE]/65 rounded-lg py-2.5 pl-8 pr-4 text-white text-sm outline-none transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex justify-center -my-2">
                    <div className="bg-zinc-800 text-zinc-400 p-1.5 rounded-full border border-zinc-700">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>

                  {/* Output NIRX */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                      Estimated $NIRX Output
                    </label>
                    <div className="relative">
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B369FE] font-mono text-sm font-bold">
                        $NIRX
                      </span>
                      <input
                        type="text"
                        readOnly
                        value={nirxAmount.toLocaleString()}
                        className="w-full bg-zinc-950/20 border border-zinc-800 rounded-lg py-2.5 pl-4 pr-16 text-zinc-300 text-sm outline-none font-semibold font-mono"
                      />
                    </div>
                  </div>

                  {/* Simulate Swap Trigger */}
                  <button
                    onClick={handleSimulateBuy}
                    disabled={isProcessing || nirxAmount <= 0}
                    className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white font-medium rounded-lg text-sm transition-all hover:opacity-95 shadow-[0_4px_15px_rgba(81,63,245,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin text-white" />
                        <span>Verifying Smart Contract...</span>
                      </>
                    ) : (
                      <>
                        <span>Execute Simulated Protocol</span>
                        <CreditCard className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                  Transaction Committed
                </h3>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Receipt: Tx_0x{Math.floor(Math.random() * 900000000 + 100000000)}vF
                </p>
                <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800/80 my-4 text-left space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">Asset Acquired:</span>
                    <span className="text-[#B369FE] font-bold">{nirxAmount.toLocaleString()} $NIRX</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-zinc-500">Equivalent Cost:</span>
                    <span className="text-white font-bold">${parseFloat(usdAmount).toLocaleString()} USD</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-emerald-400 bg-emerald-500/5 p-1 rounded">
                    <span>Status:</span>
                    <span>100% SUCCESS (SIMULATION)</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs text-center px-4">
                  This simulated exchange runs completely off-chain on the design mockup local sandbox state.
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-lg text-sm transition cursor-pointer"
                  >
                    Swap Again
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-sm transition cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function OpenAppModal({ isOpen, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"explorer" | "hardware">("explorer");
  const [nodes, setNodes] = useState([
    { id: "Core-A", name: "Alpha Gateway Node", latency: "14ms", rate: "99.8%" },
    { id: "Core-B", name: "Beta Genesis Node", latency: "12ms", rate: "100%" },
    { id: "Sync-E", name: "Ecosystem Relay Station", latency: "38ms", rate: "97.2%" },
  ]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#09090b] border border-zinc-800 rounded-2xl p-6 md:p-8 overflow-hidden shadow-[0_10px_50px_rgba(81,63,245,0.18)] z-10"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#513FF5] via-[#8b5cf6] to-[#B369FE]" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-[#513FF5] mb-2">
                <Globe className="w-5 h-5 text-[#B369FE] animate-spin-slow" />
                <span className="text-xs uppercase font-semibold tracking-wider font-mono text-zinc-400">
                  Nirix Cloud Sandbox Space
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                Virtual Metaverse Terminal
              </h3>
              <p className="text-zinc-400 text-xs mt-1 font-sans">
                Interfacing directly with Nirix Node testnets. Explore decentralized spatial instances.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-zinc-800 mt-6 gap-4">
              <button
                onClick={() => setActiveTab("explorer")}
                className={`pb-2.5 text-xs font-mono uppercase tracking-widest cursor-pointer ${
                  activeTab === "explorer"
                    ? "text-[#B369FE] border-b-2 border-[#B369FE] font-bold"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Universe Grid
              </button>
              <button
                onClick={() => setActiveTab("hardware")}
                className={`pb-2.5 text-xs font-mono uppercase tracking-widest cursor-pointer ${
                  activeTab === "hardware"
                    ? "text-[#B369FE] border-b-2 border-[#B369FE] font-bold"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Hyper-Node Telemetry
              </button>
            </div>

            {/* Content Tabs */}
            <div className="mt-5 h-72 overflow-y-auto pr-1">
              {activeTab === "explorer" ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-zinc-950 p-4 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-[#B369FE] px-2 py-0.5 rounded bg-[#B369FE]/5 border border-[#B369FE]/20">
                          INST-1049
                        </span>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          ONLINE
                        </span>
                      </div>
                      <h4 className="text-white mt-3 font-semibold text-sm">Prism Sector Lobby</h4>
                      <p className="text-zinc-500 text-xs mt-1">Decentralized 3D lobby hosting live audio channels & virtual spaces.</p>
                      <button
                        onClick={() => alert("Simulation: Launching lobby 3D rendering container... Please stand by.")}
                        className="mt-4 w-full py-1.5 bg-zinc-900 hover:bg-[#513FF5]/90 text-zinc-300 hover:text-white transition text-xs font-medium rounded-md cursor-pointer border border-zinc-800"
                      >
                        Launch sector view
                      </button>
                    </div>

                    <div className="bg-zinc-950 p-4 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-[#B369FE] px-2 py-0.5 rounded bg-[#B369FE]/5 border border-[#B369FE]/20">
                          INST-8820
                        </span>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          ONLINE
                        </span>
                      </div>
                      <h4 className="text-white mt-3 font-semibold text-sm">Cybernetic Gallery</h4>
                      <p className="text-zinc-500 text-xs mt-1">Auctioning spatial layout models, token lands & virtual architecture.</p>
                      <button
                        onClick={() => alert("Simulation: Connecting high-throughput NFT storage cluster...")}
                        className="mt-4 w-full py-1.5 bg-zinc-900 hover:bg-[#513FF5]/90 text-zinc-300 hover:text-white transition text-xs font-medium rounded-md cursor-pointer border border-zinc-800"
                      >
                        Launch sector view
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-800 flex items-start gap-2.5">
                    <Info className="w-4.5 h-4.5 text-[#B369FE] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">
                      This interface simulates standard container triggers. In production, this bridges your web browser directly to responsive WebGL engines via decentralized cluster relays.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-zinc-950 p-4 border border-zinc-800 rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-white font-medium text-xs font-mono">
                      <Cpu className="w-4 h-4 text-[#B369FE]" />
                      <span>Cluster Performance Diagnostics</span>
                    </div>

                    <div className="divide-y divide-zinc-900 border-t border-zinc-900/40 pt-2 space-y-3">
                      {nodes.map((node) => (
                        <div key={node.id} className="flex justify-between items-center text-xs pt-2.5 font-mono">
                          <div className="flex flex-col">
                            <span className="text-zinc-300 font-semibold">{node.name}</span>
                            <span className="text-zinc-600 font-normal mt-0.5">{node.id}</span>
                          </div>
                          <div className="flex gap-4 items-center">
                            <div className="text-right">
                              <p className="text-zinc-500 text-[10px] uppercase">Latency</p>
                              <p className="text-emerald-400 font-bold mt-0.5">{node.latency}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-zinc-500 text-[10px] uppercase">SLA Sync</p>
                              <p className="text-[#B369FE] font-bold mt-0.5">{node.rate}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3.5 bg-[#513FF5]/5 border border-[#513FF5]/20 rounded-xl">
                    <span className="text-xs text-zinc-400 font-sans">
                      All systems operating within normal parameters.
                    </span>
                    <span className="text-xs font-mono text-[#B369FE] font-bold">
                      Seed testnet active
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-sm transition cursor-pointer font-sans"
              >
                Close Sandbox
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
