import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Phone, Shield, Terminal, CheckCircle2, RefreshCw } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nodeName: "",
    commAddress: "",
    subject: "GENESIS_GATEWAY",
    payload: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const subjects = [
    { value: "GENESIS_GATEWAY", label: "General Project Inquiry" },
    { value: "TOKEN_SYS", label: "Tokenomics / Validator Node" },
    { value: "DEV_PORTAL", label: "Developer & Integration support" },
    { value: "MEDIA_DISPATCH", label: "Press / Media Dispatch" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateLogs = () => {
    const logs = [
      "Initializing secure TLS handshake...",
      "Resolving Nirix validator address arrays...",
      "Generating spatial envelope key metrics...",
      "Encrypting packet payloads with ECC-512...",
      "Transmitting payload to core blockchain layer...",
      "Broadcast success! Acknowledgment received."
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} > ${log}`]);
        if (index === logs.length - 1) {
          setIsSubmitting(false);
          setIsSuccess(true);
        }
      }, (index + 1) * 600);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nodeName || !formData.commAddress || !formData.payload) {
      alert("Please populate all crucial transmission channels.");
      return;
    }

    setIsSubmitting(true);
    setConsoleLogs(["Initializing Nirix secure packet transmitter system..."]);
    simulateLogs();
  };

  const resetForm = () => {
    setFormData({
      nodeName: "",
      commAddress: "",
      subject: "GENESIS_GATEWAY",
      payload: ""
    });
    setIsSuccess(false);
    setConsoleLogs([]);
  };

  return (
    <section className="relative min-h-screen bg-black pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#513FF5]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#B369FE]/4 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#B369FE] text-sm font-mono uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-[#B369FE] animate-pulse" />
            <span>Communication Link</span>
          </motion.span>
          
          <h2 className="text-white text-3xl md:text-5xl font-bold font-display tracking-tight mt-3">
            Initialize Cluster Connection
          </h2>
          <p className="text-zinc-500 font-mono text-xs mt-3 uppercase tracking-wider">
            Direct multiplexer gateway • secure end-to-end packet transmission
          </p>
        </div>

        {/* Form and info split grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block - System specs & Node locations */}
          <div className="lg:col-span-5 space-y-8 select-none">
            
            <div className="space-y-4">
              <h3 className="text-white text-xl md:text-2xl font-bold font-display tracking-tight">
                Global Network Coordinates
              </h3>
              <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
                Connect with our principal steering committee directly. Send details of your enterprise project, and a dedicated network architect will construct your route.
              </p>
            </div>

            {/* Coordinates / Details Lists */}
            <div className="space-y-4">
              
              {/* Core Terminal Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#08080b] border border-zinc-900">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-[#B369FE]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold font-display">Sovereign Cluster HQ</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-sans">
                    Suite 902 • Spatial Orbit Way, Netcom City, Virtual Space
                  </p>
                  <p className="text-[10px] font-mono text-zinc-650 mt-1">
                    LAT: 37.7749° N, LONG: 122.4194° W
                  </p>
                </div>
              </div>

              {/* Secure Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#08080b] border border-zinc-900">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-[#B369FE]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold font-display">Communication Gateway</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-mono hover:text-[#B369FE] transition cursor-pointer">
                    gateway@nirixsystems.io
                  </p>
                  <p className="text-[10px] font-mono text-zinc-650 mt-1">
                    ECC PGP KEY VECTORS: SECURE_COMM_v4
                  </p>
                </div>
              </div>

              {/* Core Lines */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#08080b] border border-zinc-900">
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-[#B369FE]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold font-display">Hotlink Transmission Multiplexer</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-sans">
                    +1 (888) 513-NIRX
                  </p>
                  <p className="text-[10px] font-mono text-zinc-650 mt-1">
                    Sync hours: 00:00 - 24:00 UTC (Autonomous)
                  </p>
                </div>
              </div>

            </div>

            {/* Shield and System Trust Indicators */}
            <div className="p-4 bg-zinc-950/40 rounded-xl border border-zinc-900/80 flex items-start gap-3.5">
              <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 animate-pulse" />
              <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                Your submitted inputs undergo dynamic ECC encryption protocols. Physical payloads remain secure under zero-trace system logs.
              </p>
            </div>

          </div>

          {/* Right Block - Interactive Form & Terminal Feedback */}
          <div className="lg:col-span-7 bg-[#07070a]/60 border border-zinc-900 rounded-2xl p-6 md:p-8 relative min-h-[460px] shadow-2xl">
            
            <AnimatePresence mode="wait">
              {/* Form State */}
              {!isSubmitting && !isSuccess && (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Node Name input */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Identifier / User Name
                      </label>
                      <input
                        type="text"
                        name="nodeName"
                        required
                        value={formData.nodeName}
                        onChange={handleInputChange}
                        placeholder="Your physical alias"
                        className="w-full bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-3 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-[#B369FE]/40 focus:bg-black transition-all"
                      />
                    </div>

                    {/* Comm Address / Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Communication Address
                      </label>
                      <input
                        type="email"
                        name="commAddress"
                        required
                        value={formData.commAddress}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-3 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-[#B369FE]/40 focus:bg-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Channel dropdown subjects selector */}
                  <div className="space-y-2 select-none">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Transmission Channel (Subject)
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-[#B369FE]/40 focus:bg-black transition-all cursor-pointer"
                    >
                      {subjects.map((sub) => (
                        <option key={sub.value} value={sub.value} className="bg-zinc-950 text-zinc-300">
                          {sub.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Content Payload textarea */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Payload System Content
                    </label>
                    <textarea
                      name="payload"
                      required
                      rows={5}
                      value={formData.payload}
                      onChange={handleInputChange}
                      placeholder="Input message specifications..."
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-lg px-4 py-3 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-[#B369FE]/40 focus:bg-black transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 select-none">
                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white hover:opacity-95 rounded-xl text-sm font-mono uppercase tracking-widest font-bold transition shadow-lg shadow-[#513FF5]/10 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Secure Packet</span>
                    </motion.button>
                  </div>
                </motion.form>
              )}

              {/* Submitting Loading Shell Diagnostics State */}
              {isSubmitting && (
                <motion.div
                  key="submitting-terminal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 flex flex-col justify-between h-full min-h-[400px]"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2.5 text-zinc-400 font-mono text-xs border-b border-zinc-900 pb-3">
                      <RefreshCw className="w-4 h-4 animate-spin text-[#B369FE]" />
                      <span>LIVE PACKET TRANSMISSION TELEMETRY</span>
                    </div>

                    <div className="font-mono text-xs text-zinc-400 space-y-2 bg-black/90 p-4 rounded-xl border border-zinc-950 max-h-[290px] overflow-y-auto">
                      {consoleLogs.map((log, idx) => (
                        <p key={idx} className={idx === consoleLogs.length - 1 ? "text-[#B369FE]" : ""}>
                          {log}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p className="text-center font-mono text-[10px] text-zinc-600 animate-pulse select-none">
                    Please keep terminal link active • Zero-leak connection open
                  </p>
                </motion.div>
              )}

              {/* Success Screen State */}
              {isSuccess && (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-6 h-full min-h-[400px] select-none"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-white text-2xl font-bold font-display tracking-tight">
                      Transmission Confirmed
                    </h3>
                    <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto leading-relaxed">
                      Secure packet transmitted successfully. Our validator steering nodes have acknowledged the reception of transmission route <span className="text-[#B369FE] font-mono">"{formData.subject}"</span>.
                    </p>
                  </div>

                  <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-900 font-mono text-[11px] text-zinc-500 max-w-sm">
                    A secure PGP reply pathway has been mapped to <span className="text-zinc-300 font-sans">{formData.commAddress}</span>. A steering architect will respond within 2-4 operational epochs.
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg text-xs font-mono uppercase tracking-widest transition cursor-pointer"
                  >
                    Transmit Another Packet
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
