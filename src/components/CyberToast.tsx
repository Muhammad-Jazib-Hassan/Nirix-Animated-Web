import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";
import { ToastEventDetail } from "../lib/toast";

interface ActiveToast extends ToastEventDetail {
  id: number;
}

export function CyberToast() {
  const [toasts, setToasts] = useState<ActiveToast[]>([]);

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<ToastEventDetail>;
      if (!customEvent.detail) return;

      const newToast: ActiveToast = {
        ...customEvent.detail,
        id: Date.now() + Math.random(),
      };

      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, customEvent.detail.duration || 3500);
    };

    window.addEventListener("cyber-toast", handleToastEvent);
    return () => {
      window.removeEventListener("cyber-toast", handleToastEvent);
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getStyle = (type: string) => {
    switch (type) {
      case "success":
        return {
          icon: CheckCircle2,
          color: "text-[#00f5d4]",
          border: "border-[#00f5d4]/40",
          shadow: "shadow-[#00f5d4]/10",
          badge: "bg-[#00f5d4]/10 text-[#00f5d4]",
          progress: "bg-gradient-to-r from-teal-500 to-[#00f5d4]"
        };
      case "error":
        return {
          icon: AlertCircle,
          color: "text-rose-400",
          border: "border-rose-500/40",
          shadow: "shadow-rose-500/10",
          badge: "bg-rose-500/10 text-rose-400",
          progress: "bg-gradient-to-r from-red-600 to-rose-400"
        };
      case "warning":
        return {
          icon: AlertTriangle,
          color: "text-amber-400",
          border: "border-amber-400/40",
          shadow: "shadow-amber-400/10",
          badge: "bg-amber-400/15 text-amber-450",
          progress: "bg-gradient-to-r from-yellow-600 to-amber-400"
        };
      default:
        return {
          icon: Info,
          color: "text-[#B369FE]",
          border: "border-[#B369FE]/40",
          shadow: "shadow-[#B369FE]/10",
          badge: "bg-[#B369FE]/10 text-[#B369FE]",
          progress: "bg-gradient-to-r from-[#513FF5] to-[#B369FE]"
        };
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-3.5 max-w-sm w-full select-none pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const style = getStyle(toast.type);
          const Icon = style.icon;

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className={`pointer-events-auto relative p-4 rounded-xl border ${style.border} bg-[#06060c]/90 backdrop-blur-md shadow-2xl ${style.shadow} overflow-hidden group w-full`}
            >
              {/* Scanline indicator effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#B369FE]/40 group-hover:bg-[#B369FE]/80 transition duration-300" style={{ backgroundColor: toast.type === "success" ? "#00f5d4" : toast.type === "error" ? "#f43f5e" : "#B369FE" }} />

              <div className="flex gap-3.5 items-start">
                {/* Visual Icon with rotating futuristic frame */}
                <div className={`p-1.5 rounded bg-zinc-950 border border-zinc-900 group-hover:border-zinc-805 transition duration-300 ${style.color}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${style.badge}`}>
                      {toast.type}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500">SYSTEM RELAY</span>
                  </div>
                  <p className="text-xs text-zinc-200 font-sans leading-relaxed tracking-wide">
                    {toast.message}
                  </p>
                </div>

                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-zinc-500 hover:text-white transition p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Countdown bottom microbar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: (toast.duration || 3500) / 1000, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-0.5 ${style.progress}`}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
