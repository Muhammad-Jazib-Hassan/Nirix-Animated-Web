import React from "react";

export function NirixLogo() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-10 h-10 select-none mr-3"
      aria-label="Nirix Logo"
    >
      <defs>
        <radialGradient id="glow-cyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00a8ff" stopOpacity="0.8" />
        </radialGradient>
        <radialGradient id="glow-magenta" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
          <stop offset="100%" stopColor="#db2777" stopOpacity="0.8" />
        </radialGradient>
        <radialGradient id="glow-purple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
          <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.8" />
        </radialGradient>
        <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
        </radialGradient>
      </defs>

      {/* Outer Circle of Dots (Radius: 28) */}
      {/* 12 points around the center (50, 50) */}
      <circle cx="50" cy="22" r="4.5" fill="url(#glow-purple)" />
      <circle cx="64" cy="25.8" r="4.5" fill="url(#glow-blue)" />
      <circle cx="74.2" cy="35.8" r="4.5" fill="url(#glow-cyan)" />
      <circle cx="78" cy="50" r="4.5" fill="url(#glow-cyan)" />
      <circle cx="74.2" cy="64.2" r="4.5" fill="url(#glow-blue)" />
      <circle cx="64" cy="74.2" r="4.5" fill="url(#glow-purple)" />
      <circle cx="50" cy="78" r="4.5" fill="url(#glow-magenta)" />
      <circle cx="36" cy="74.2" r="4.5" fill="url(#glow-magenta)" />
      <circle cx="25.8" cy="64.2" r="4.5" fill="url(#glow-purple)" />
      <circle cx="22" cy="50" r="4.5" fill="url(#glow-cyan)" />
      <circle cx="25.8" cy="35.8" r="4.5" fill="url(#glow-cyan)" />
      <circle cx="36" cy="25.8" r="4.5" fill="url(#glow-blue)" />

      {/* Inner Circle of Dots (Radius: 15) */}
      {/* 8 points around the center (50, 50) */}
      <circle cx="50" cy="35" r="3.5" fill="url(#glow-blue)" />
      <circle cx="60.6" cy="39.4" r="3.5" fill="url(#glow-purple)" />
      <circle cx="65" cy="50" r="3.5" fill="url(#glow-magenta)" />
      <circle cx="60.6" cy="60.6" r="3.5" fill="url(#glow-magenta)" />
      <circle cx="50" cy="65" r="3.5" fill="url(#glow-purple)" />
      <circle cx="39.4" cy="60.6" r="3.5" fill="url(#glow-blue)" />
      <circle cx="35" cy="50" r="3.5" fill="url(#glow-cyan)" />
      <circle cx="39.4" cy="39.4" r="3.5" fill="url(#glow-cyan)" />

      {/* Master Center Dot (Radius: 5) */}
      <circle cx="50" cy="50" r="3.2" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}
