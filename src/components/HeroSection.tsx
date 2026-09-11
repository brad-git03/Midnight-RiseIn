import React, { useState } from 'react';
import { FloatingShieldHero } from './FloatingShieldHero';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Globe,
  KeyRound,
  Sparkles,
  Terminal,
  CheckCircle2,
  Lock,
  Zap,
  Play,
  Check,
} from 'lucide-react';

interface HeroSectionProps {
  onConnectClick: () => void;
  isConnected: boolean;
  onLaunchApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onConnectClick, isConnected, onLaunchApp }) => {
  // Live ZK Sandbox state inside the hero
  const [testAmount, setTestAmount] = useState<number>(10);
  const [sandboxStage, setSandboxStage] = useState<'idle' | 'proving' | 'verified'>('idle');

  const handleRunSandbox = () => {
    if (sandboxStage === 'proving') return;
    setSandboxStage('proving');
    setTimeout(() => {
      setSandboxStage('verified');
      setTimeout(() => {
        setSandboxStage('idle');
      }, 5000);
    }, 1800);
  };

  return (
    <section id="hero" className="w-full relative pt-8 pb-20 overflow-hidden">
      {/* 1. Volumetric Ambient Lighting & Gradients */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[700px] sm:w-[900px] h-[600px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-[25%] left-[5%] w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] bg-emerald-600/12 rounded-full blur-[160px] pointer-events-none animate-emerald-glow"></div>

      {/* Futuristic Perspective Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* 2. Top Two-Column Showcase: Content (Left) + Floating Big Shield (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column: Headlines, CTAs, and Interactive Sandbox (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Innovation Badge Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-purple-500/15 border border-purple-500/35 rounded-full text-xs font-semibold text-purple-200 shadow-lg shadow-purple-600/10 backdrop-blur-xl">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '9s' }} />
              <span>Zero-Knowledge Fintech Engine on Midnight Network</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-emerald-glow"></span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
                Shield Every Witness.{' '}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
                  Verify Every State.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                The enterprise zero-knowledge operating system for confidential corporate payroll, treasury disbursements, and selective audit disclosure on Midnight.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onLaunchApp}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white text-sm font-bold shadow-xl shadow-purple-600/35 flex items-center justify-center gap-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Launch ZK Transaction App</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {!isConnected ? (
                <button
                  onClick={onConnectClick}
                  className="w-full sm:w-auto px-7 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-purple-500/30 text-sm font-semibold flex items-center justify-center gap-2.5 rounded-xl transition-all duration-200 hover:border-purple-400 cursor-pointer"
                >
                  <span>Connect Lace Wallet</span>
                </button>
              ) : (
                <button
                  onClick={onLaunchApp}
                  className="w-full sm:w-auto px-7 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold flex items-center justify-center gap-2.5 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Wallet Connected (Enter App)</span>
                </button>
              )}
            </div>

            {/* Interactive Live ZK Sandbox Teaser */}
            <div className="pt-2">
              <div className="p-5 glass-beveled rounded-2xl border border-purple-500/30 text-left space-y-3.5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      Live ZK Engine Sandbox Preview
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Zero Plaintext Leakage
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-300 block font-medium">
                    Test Secret Increment Witness Input (<code className="text-purple-300 font-mono">secretSalaryAmount</code>):
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={testAmount}
                      onChange={(e) => setTestAmount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 bg-slate-950/90 border border-purple-500/30 rounded-xl px-4 py-2 text-sm font-mono text-purple-200 focus:outline-none focus:border-purple-400"
                      placeholder="Enter amount..."
                    />
                    <button
                      onClick={handleRunSandbox}
                      disabled={sandboxStage === 'proving'}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer disabled:opacity-50 shrink-0"
                    >
                      {sandboxStage === 'proving' ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5 animate-spin" />
                          <span>Proving...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>Simulate Proof</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[11px] text-slate-500">Presets:</span>
                    {[5, 10, 25, 50].map((val) => (
                      <button
                        key={val}
                        onClick={() => setTestAmount(val)}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                          testAmount === val
                            ? 'bg-purple-600 text-white font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        +{val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sandbox Output Message */}
                {sandboxStage !== 'idle' && (
                  <div className="p-3 bg-slate-950/90 border border-purple-500/30 rounded-xl font-mono text-xs space-y-1 animate-fadeIn">
                    {sandboxStage === 'proving' ? (
                      <div className="flex items-center gap-2 text-purple-300">
                        <Sparkles className="w-3.5 h-3.5 animate-spin text-purple-400" />
                        <span>Executing Compact local WASM prover... input: [🔒 MASKED]</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-emerald-400">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>ZK-SNARK Proof Validated! Verified (+{testAmount}) delta.</span>
                        </span>
                        <button
                          onClick={onLaunchApp}
                          className="text-xs text-purple-300 underline font-semibold hover:text-white cursor-pointer ml-2"
                        >
                          Launch App →
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: The Grand Floating Holographic Shield Centerpiece (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <FloatingShieldHero onLaunchApp={onLaunchApp} />
          </div>
        </div>

        {/* 3. Live Telemetry Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-800/80 w-full text-center">
          <div className="p-4 glass-card glass-card-hover rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
              <KeyRound className="w-4 h-4" />
              <span className="text-2xl font-black text-white font-mono">100%</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Witness Privacy</p>
          </div>

          <div className="p-4 glass-card glass-card-hover rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-center gap-1.5 text-indigo-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-2xl font-black text-white font-mono">O(1)</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Batch Complexity</p>
          </div>

          <div className="p-4 glass-card glass-card-hover rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-center gap-1.5 text-rose-400 mb-1">
              <Lock className="w-4 h-4" />
              <span className="text-2xl font-black text-white font-mono">0</span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Plaintext Leaks</p>
          </div>

          <div className="p-4 glass-card glass-card-hover rounded-xl border border-slate-800/80">
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
