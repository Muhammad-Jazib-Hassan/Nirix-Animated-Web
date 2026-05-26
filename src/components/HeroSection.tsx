import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Maximize2, Minimize2, Eye, LayoutGrid } from "lucide-react";

interface HeroSectionProps {
  onOpenAppClick: () => void;
  onBuyTokenClick: () => void;
}

export function HeroSection({ onOpenAppClick, onBuyTokenClick }: HeroSectionProps) {
  // Split titles for neat entry transitions
  const line1 = "Make Your Stuning";
  const line2 = "New Metaverse";

  // Ref to the video element for fine-tuned synchronization
  const videoRef = useRef<HTMLVideoElement>(null);

  // Interactive video adjustment parameters for the user's ultimate customization
  const [videoFit, setVideoFit] = useState<"cover" | "contain">("cover");
  const [overlayStyle, setOverlayStyle] = useState<"vivid" | "balanced" | "cinematic">("balanced");
  const [showConfigPanel, setShowConfigPanel] = useState(false);

  // Custom handler to limit play to first 2 seconds and loop smoothly
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.currentTime >= 2.0) {
      video.currentTime = 0;
      // Re-trigger play in case browser stalls on seek
      video.play().catch(() => {});
    }
  };

  // Dynamically enforce slow motion playback (0.4x) on load / update
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, [videoFit]);

  // Derive target opacities based on customization
  const getOverlayOpacity = () => {
    switch (overlayStyle) {
      case "vivid": // minimal interference
        return "opacity-15";
      case "balanced": // default elegant blend
        return "opacity-45";
      case "cinematic": // high focus on text and gradients
        return "opacity-75";
      default:
        return "opacity-45";
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-36 pb-20">
      {/* Background Video with dynamic fit classes and hardware acceleration for maximum quality rendering */}
      <video
        ref={videoRef}
        key={videoFit} // Forces reload on state change for clean rendering transition
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 w-full h-full ${
          videoFit === "cover" ? "object-cover" : "object-contain bg-zinc-950"
        } pointer-events-none transition-all duration-700 ease-out z-0`}
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translate3d(0,0,0)",
        }}
      >
        <source
          src="https://res.cloudinary.com/dowrdytcc/video/upload/v1779818794/WhatsApp_Video_2026-05-26_at_9.47.34_PM_k9tmq0.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 
        Dynamic Contrast Overlay Engine:
        Adjustable via HUD, lets users customize how visible the video is behind the main texts.
      */}
      <div 
        className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 ${getOverlayOpacity()}`}
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0) 15%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Multi-layered smooth linear-vignettes to blend borders perfectly */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black via-black/30 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-black/40 to-transparent z-0 pointer-events-none" />

      {/* Subtle background ambient mesh glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#513FF5]/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] rounded-full bg-[#B369FE]/8 blur-[150px] pointer-events-none z-0" />

      {/* Hero Content Grid */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-start z-10 text-left select-none relative">
        
        {/* Main Title Heading with Drop-Shadow bounds */}
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold font-display tracking-tight leading-[1.05] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
          {/* Animated First Line */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {line1}
          </motion.span>
          
          {/* Animated Second Line */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="block text-white"
          >
            {line2}
          </motion.span>
        </h1>

        {/* Paragraph text with heavy contrast drop-shadow to handle light & dark video frames */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-zinc-300 font-sans text-[15px] sm:text-[16px] md:text-lg leading-relaxed max-w-xl md:max-w-[34rem] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
        >
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form by injected humour.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4 items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenAppClick}
            className="px-8 py-3.5 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white hover:opacity-95 font-medium rounded-lg text-sm sm:text-base tracking-wider transition-all shadow-[0_4px_30px_rgba(81,63,245,0.22)] hover:shadow-[0_4px_35px_rgba(179,105,254,0.35)] cursor-pointer"
          >
            Open App
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBuyTokenClick}
            className="px-8 py-3.5 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white hover:opacity-95 font-medium rounded-lg text-sm sm:text-base tracking-wider transition-all shadow-[0_4px_30px_rgba(81,63,245,0.22)] hover:shadow-[0_4px_35px_rgba(179,105,254,0.35)] cursor-pointer"
          >
            Buy $NIRX Token
          </motion.button>
        </motion.div>
      </div>

      {/* 
        HUD Display Customization Switcher:
        Positioned discretely in the bottom right corner, allows quick real-time adjustment of video alignment and opacity.
      */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end">
        <AnimatePresence>
          {showConfigPanel && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="mb-3 p-4 bg-black/85 backdrop-blur-md border border-zinc-800 rounded-xl flex flex-col gap-3.5 w-64 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                  Nirix Engine Renderer
                </span>
                <Sliders className="w-3.5 h-3.5 text-[#B369FE]" />
              </div>

              {/* Aspect Ratio Sizing Control */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-zinc-400 font-mono block">Video Alignment Fit:</span>
                <div className="grid grid-cols-2 gap-1.5 bg-zinc-950 p-1 rounded-lg border border-zinc-900">
                  <button
                    onClick={() => setVideoFit("cover")}
                    className={`py-1 text-[10px] font-mono uppercase rounded transition cursor-pointer ${
                      videoFit === "cover" ? "bg-zinc-850 text-[#B369FE] font-bold" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Cover Full
                  </button>
                  <button
                    onClick={() => setVideoFit("contain")}
                    className={`py-1 text-[10px] font-mono uppercase rounded transition cursor-pointer ${
                      videoFit === "contain" ? "bg-zinc-850 text-[#B369FE] font-bold" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Fit Aspect
                  </button>
                </div>
              </div>

              {/* Contrast / Video transparency level */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-zinc-400 font-mono block">Background brightness:</span>
                <div className="grid grid-cols-3 gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-900">
                  {([
                    { id: "vivid", label: "Vivid" },
                    { id: "balanced", label: "Blend" },
                    { id: "cinematic", label: "Focus" }
                  ] as const).map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setOverlayStyle(style.id)}
                      className={`py-1 text-[9px] font-mono uppercase rounded transition cursor-pointer ${
                        overlayStyle === style.id ? "bg-zinc-850 text-[#B369FE] font-bold" : "text-zinc-500 hover:text-zinc-350"
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Configuration Button Toggle with Pulsing Signal */}
        <button
          onClick={() => setShowConfigPanel(!showConfigPanel)}
          className="p-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white transition shadow-xl cursor-pointer flex items-center justify-center relative group"
          title="Video Display Properties"
        >
          <Sliders className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B369FE] border border-black animate-pulse" />
        </button>
      </div>
    </section>
  );
}
