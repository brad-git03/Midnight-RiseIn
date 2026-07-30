import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 36, showText = true }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="obsidian-grad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="vdn-stroke" x1="50" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* Outer Shield Path */}
          <path
            d="M100 24 L164 42 C164 42 164 96 138 132 C120 156 100 176 100 176 C100 176 80 156 62 132 C36 96 36 42 36 42 L100 24 Z"
            fill="#090d16"
            stroke="url(#obsidian-grad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Vdn Monogram Geometric Paths */}
          {/* 'V' Left Line */}
          <path d="M68 66 L95 125" stroke="url(#vdn-stroke)" strokeWidth="10" strokeLinecap="round" />
          {/* 'V' Right Line */}
          <path d="M95 125 L122 66" stroke="url(#vdn-stroke)" strokeWidth="10" strokeLinecap="round" />
          {/* 'd' Stem */}
          <path d="M122 55 L122 125" stroke="url(#vdn-stroke)" strokeWidth="10" strokeLinecap="round" />
          {/* 'n' Arch */}
          <path d="M122 92 C132 82 144 82 150 94 L150 125" stroke="#10b981" strokeWidth="9" strokeLinecap="round" />

          {/* Emerald Verification Dot */}
          <circle cx="100" cy="148" r="7" fill="#10b981" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-white tracking-tight text-lg flex items-center gap-1 font-sans">
            Vansidian
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">
              Vdn
            </span>
          </span>
          <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
            Midnight ZK Engine
          </span>
        </div>
      )}
    </div>
  );
};
