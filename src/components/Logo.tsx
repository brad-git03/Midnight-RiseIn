import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 36, showText = true }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Faceted Shield Emblem Container */}
      <div
        className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]"
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.png"
          alt="Vansidian Logo"
          className="w-full h-full object-contain rounded-xl"
          onError={(e) => {
            // Fallback to SVG if image fails
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-black text-white tracking-tight text-lg flex items-center gap-1.5 font-sans leading-none">
            VANSIDIAN
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
              ZK
            </span>
          </span>
          <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-0.5">
            Fintech Protocol
          </span>
        </div>
      )}
    </div>
  );
};
