import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Globe, KeyRound, Sparkles, Terminal, CheckCircle2, Lock, Zap } from 'lucide-react';

interface HeroSectionProps {
  onConnectClick: () => void;
  isConnected: boolean;
  onLaunchApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onConnectClick, isConnected, onLaunchApp }) => {
  return (
    <section id="hero" className="w-full relative pt-12 pb-20 overflow-hidden">
      {/* Dynamic Purple/Indigo Ambient Glow Orbs tailored to Faceted Logo Palette */}
      <div className="absolute top-[-15%] left-[10%] w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[400px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10 px-4">
        {/* Top Innovation Badge Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-purple-500/10 via-indigo-500/15 to-purple-500/10 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>The Zero-Knowledge Fintech Engine on Midnight Network</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-emerald-glow"></span>
        </div>

        {/* Catchphrase & Main SaaS Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Shield Every Witness.{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
              Verify Every State.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            The enterprise-grade zero-knowledge operating system for confidential payroll, treasury disbursements, and selective audit disclosure.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary Action: Launch Dedicated App Dashboard */}
          <button
            onClick={onLaunchApp}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white text-sm font-bold shadow-xl shadow-purple-600/30 flex items-center justify-center gap-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-purple-200" />
            <span>Launch ZK Transaction App</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {!isConnected ? (
            <button
              onClick={onConnectClick}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-purple-500/30 text-sm font-semibold flex items-center justify-center gap-2.5 rounded-xl transition-all duration-200 hover:border-purple-400 cursor-pointer"
            >
              <span>Connect Lace Wallet</span>
            </button>
          ) : (
            <button
              onClick={onLaunchApp}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold flex items-center justify-center gap-2.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Wallet Connected (Enter App)</span>
            </button>
          )}

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-6 py-4 bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-800 text-sm font-semibold flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <span>Explore Architecture</span>
          </a>
        </div>

        {/* Floating Interactive ZK Badges Container */}
        <div className="relative pt-6 pb-2 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Floating Element 1 */}
            <div className="p-4 glass-card glass-card-hover rounded-2xl border border-purple-500/20 text-left animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-purple-500/10 border border-purple-500/30 rounded-xl text-purple-400">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider">Client Witness Vault</h2>
                  <p className="text-[11px] text-slate-400">100% In-Memory Privacy</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                <CheckCircle2 className="w-3 h-3" />
                <span>Zero Plaintext Over RPC</span>
              </div>
            </div>

            {/* Floating Element 2 */}
            <div className="p-4 glass-card glass-card-hover rounded-2xl border border-indigo-500/20 text-left animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider">Compact v0.31.1 ZK</h2>
                  <p className="text-[11px] text-slate-400">SNARK Prover Engine</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-indigo-300 font-mono">
                <Cpu className="w-3 h-3" />
                <span>Sub-Second Proof Execution</span>
              </div>
            </div>

            {/* Floating Element 3 */}
            <div className="p-4 glass-card glass-card-hover rounded-2xl border border-emerald-500/20 text-left animate-float-gentle">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider">Multi-Tenant Scale</h2>
                  <p className="text-[11px] text-slate-400">O(1) Batch Commitments</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                <ShieldCheck className="w-3 h-3" />
                <span>Midnight Preprod Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Telemetry Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80 w-full max-w-4xl mx-auto">
          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
              <KeyRound className="w-4 h-4" />
              <span className="text-2xl font-black text-white font-mono">100%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Witness Privacy</p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-indigo-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-2xl font-black text-white font-mono">O(1)</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Batch Complexity</p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-rose-400 mb-1">
              <Lock className="w-4 h-4" />
              <span className="text-2xl font-black text-white font-mono">0</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Plaintext Leaks</p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-2xl font-black text-white font-mono">Active</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Preprod Testnet</p>
          </div>
        </div>
      </div>
    </section>
  );
};
