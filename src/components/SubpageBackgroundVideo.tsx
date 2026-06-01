import React from "react";
import { SeamlessYoYoVideo } from "./SeamlessYoYoVideo";

export function SubpageBackgroundVideo() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Background Video using Seamless YoYo (Ping-Pong) looping algorithm for zero jerk */}
      <SeamlessYoYoVideo
        speed={1.0}
        maxTime={2.0}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-700 ease-out z-0 opacity-30"
      />

      {/* Deep-vignette style contrast overlay keeping text exceptionally crisp and legible */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0) 10%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.98) 100%)",
        }}
      />
      
      {/* Blends with top/bottom black edges perfectly */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/40 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black via-black/40 to-transparent z-0 pointer-events-none" />
    </div>
  );
}
