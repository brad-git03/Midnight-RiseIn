import React from 'react';
import { Cpu, Zap, Lock, Globe, ShieldCheck } from 'lucide-react';

interface FloatingShieldHeroProps {
  onLaunchApp: () => void;
}

export const FloatingShieldHero: React.FC<FloatingShieldHeroProps> = ({ onLaunchApp }) => {
  return (
    <div className="relative w-full max-w-[500px] h-[460px] sm:h-[500px] flex items-center justify-center select-none mx-auto">
      {/* 1. Ambient Volumetric Glow Behind Shield */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-emerald-500/20 rounded-full blur-[90px] pointer-events-none animate-pulse-glow"></div>

      {/* 2. Outer Concentric Holographic Orbital Ring (Dashed, Slow Rotation) */}
      <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full hologram-ring-dashed animate-spin-slow pointer-events-none">
        {/* Orbiting Planetary Telemetry Nodes */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7]"></div>
        <div className="absolute bottom-6 right-10 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#6366f1]"></div>
        <div className="absolute top-1/3 -left-1 w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_10px_#c084fc]"></div>
      </div>

      {/* 3. Inner Counter-Rotating Holographic Ring */}
      <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full hologram-ring animate-reverse-spin-slow pointer-events-none">
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_16px_#10b981]"></div>
        <div className="absolute top-8 right-6 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]"></div>
      </div>

      {/* 4. The Giant Floating Faceted Shield (SVG Vector with Transparent Background) */}
      <div
        onClick={onLaunchApp}
        className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 md:w-92 md:h-92 animate-float cursor-pointer transition-transform duration-500 hover:scale-105"
        title="Click to launch Vansidian ZK App"
      >
        <svg
          viewBox="0 0 400 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_20px_40px_rgba(139,92,246,0.5)] drop-shadow-[0_0_60px_rgba(16,185,129,0.35)]"
        >
          <defs>
            {/* Ambient Shield Gradients */}
            <linearGradient id="shield-rim-grad" x1="50" y1="20" x2="350" y2="430" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="35%" stopColor="#8b5cf6" />
              <stop offset="70%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            <linearGradient id="facet-top" x1="200" y1="30" x2="200" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>

            <linearGradient id="facet-left-wing" x1="40" y1="60" x2="200" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1a1c2e" />
              <stop offset="50%" stopColor="#2e1065" />
              <stop offset="100%" stopColor="#0b0f19" />
            </linearGradient>

            <linearGradient id="facet-right-wing" x1="360" y1="60" x2="200" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#060911" />
            </linearGradient>

            <linearGradient id="v-left-arm" x1="120" y1="120" x2="200" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            <linearGradient id="v-right-arm" x1="280" y1="120" x2="200" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#4338ca" />
            </linearGradient>

            <radialGradient id="emerald-core" cx="200" cy="345" r="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="45%" stopColor="#10b981" />
              <stop offset="85%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064e3b" />
            </radialGradient>

            <filter id="emerald-glow" x="140" y="285" width="120" height="120" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Shield Hull (Faceted Obsidian) */}
          <path
            d="M200 24 L345 70 C345 70 355 210 295 305 C250 375 200 422 200 422 C200 422 150 375 105 305 C45 210 55 70 55 70 L200 24 Z"
            fill="#050811"
            stroke="url(#shield-rim-grad)"
            strokeWidth="8"
            strokeLinejoin="round"
          />

          {/* Top Diamond Facet */}
          <polygon points="200,32 290,75 200,185 110,75" fill="url(#facet-top)" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.4" />

          {/* Left Wing Facet */}
          <polygon points="110,75 200,185 130,290 64,80" fill="url(#facet-left-wing)" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.3" />

          {/* Right Wing Facet */}
          <polygon points="290,75 336,80 270,290 200,185" fill="url(#facet-right-wing)" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.3" />

          {/* Bottom Left Triangular Facet */}
          <polygon points="130,290 200,185 200,340 120,345" fill="#0c101c" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Bottom Right Triangular Facet */}
          <polygon points="270,290 200,185 200,340 280,345" fill="#080c16" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Architectural 'V' Monogram (Left Beam) */}
          <path
            d="M125 135 L182 295 L200 338 L168 338 L100 148 Z"
            fill="url(#v-left-arm)"
            filter="drop-shadow(0 0 10px rgba(192,132,252,0.6))"
          />

          {/* Architectural 'V' Monogram (Right Beam) */}
          <path
            d="M275 135 L218 295 L200 338 L232 338 L300 148 Z"
            fill="url(#v-right-arm)"
            filter="drop-shadow(0 0 10px rgba(129,140,248,0.6))"
          />

          {/* Central Prismatic Spine */}
          <line x1="200" y1="32" x2="200" y2="185" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.6" />

          {/* Radiant Emerald Zero-Knowledge Verification Core Node */}
          <circle cx="200" cy="345" r="28" fill="#10b981" opacity="0.4" filter="url(#emerald-glow)" />
          <circle cx="200" cy="345" r="18" fill="url(#emerald-core)" stroke="#a7f3d0" strokeWidth="2.5" />
          <circle cx="195" cy="340" r="4" fill="#ffffff" opacity="0.8" />
        </svg>
      </div>

      {/* 5. Orbiting Floating Telemetry Badges */}
      {/* Top Left Badge */}
      <div className="hidden sm:flex absolute -top-4 left-0 z-30 p-2.5 glass-panel rounded-xl border border-purple-500/40 items-center gap-2 text-left shadow-2xl animate-float-delayed">
        <div className="p-1.5 bg-purple-500/20 rounded-lg text-purple-300">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Circuit</p>
          <p className="text-xs font-bold text-white font-mono">Compact v0.31.1</p>
        </div>
      </div>

      {/* Top Right Badge */}
      <div className="hidden sm:flex absolute -top-4 right-0 z-30 p-2.5 glass-panel rounded-xl border border-emerald-500/40 items-center gap-2 text-left shadow-2xl animate-float">
        <div className="p-1.5 bg-emerald-500/20 rounded-lg text-emerald-400">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">ZK Prover</p>
          <p className="text-xs font-bold text-emerald-300 font-mono">● Active Preprod</p>
        </div>
      </div>

      {/* Bottom Left Badge */}
      <div className="hidden sm:flex absolute bottom-4 -left-6 z-30 p-2.5 glass-panel rounded-xl border border-purple-500/40 items-center gap-2 text-left shadow-2xl animate-float-gentle">
        <div className="p-1.5 bg-purple-500/20 rounded-lg text-purple-300">
          <Lock className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Privacy</p>
          <p className="text-xs font-bold text-purple-200 font-mono">100% Client RAM</p>
        </div>
      </div>

      {/* Bottom Right Badge */}
      <div className="hidden sm:flex absolute bottom-4 -right-6 z-30 p-2.5 glass-panel rounded-xl border border-indigo-500/40 items-center gap-2 text-left shadow-2xl animate-float-delayed">
        <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-300">
          <Globe className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Consensus</p>
          <p className="text-xs font-bold text-white font-mono">O(1) Batch Scale</p>
        </div>
      </div>
    </div>
  );
};
