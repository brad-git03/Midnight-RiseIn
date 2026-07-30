import React from 'react';
import { Lock, ArrowRight, ShieldCheck, Cpu, Globe, KeyRound } from 'lucide-react';

interface HeroSectionProps {
  onConnectClick: () => void;
  isConnected: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onConnectClick, isConnected }) => {
  return (
    <section id="hero" className="w-full relative pt-12 pb-16 overflow-hidden">
      {/* Soft Glow Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10 px-4">
        {/* Top Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-semibold text-indigo-300">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Vansidian Zero-Knowledge & Verification Network
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          Shielded State.<br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Verified On-Chain Audits.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
          Vansidian protects every transaction using client-side zero-knowledge witness circuits and selective disclosure, giving enterprises absolute data privacy with verifiable consensus on Midnight.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {!isConnected ? (
            <button
              onClick={onConnectClick}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-sm font-bold shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2.5 rounded-xl transition-all hover:translate-y-[-1px]"
            >
              <span>Connect Lace Wallet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <a
              href="#dashboard"
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm font-bold shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2.5 rounded-xl transition-all hover:translate-y-[-1px]"
            >
              <span>Launch ZK Vault Engine</span>
              <ShieldCheck className="w-4 h-4" />
            </a>
          )}

          <a
            href="#how-it-works"
            className="px-8 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-semibold flex items-center justify-center gap-2.5 rounded-xl transition-all hover:translate-y-[-1px]"
          >
            Explore How It Works
          </a>
        </div>

        {/* Live Metric Counters (SariPay Inspired) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80 w-full max-w-4xl mx-auto">
          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
              <KeyRound className="w-4 h-4" />
              <span className="text-xl font-extrabold text-white font-mono">100%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Client Witness Privacy</p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-indigo-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xl font-extrabold text-white font-mono">99.9%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Proof Verification</p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-rose-400 mb-1">
              <Lock className="w-4 h-4" />
              <span className="text-xl font-extrabold text-white font-mono">0</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Plaintext Leaks</p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-xl font-extrabold text-white font-mono">Synced</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Preprod Ledger Status</p>
          </div>
        </div>
      </div>
    </section>
  );
};
