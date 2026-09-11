import React, { useState } from 'react';
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
    <section id="hero" className="w-full relative pt-12 pb-24 overflow-hidden">
      {/* 1. Volumetric Ambient Lighting & Gradients */}
      <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[700px] sm:w-[900px] h-[600px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-[25%] left-[10%] w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[35%] right-[10%] w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none animate-emerald-glow"></div>

      {/* Futuristic Deep Perspective Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10 px-4">
        {/* Top Innovation Badge Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-purple-500/15 via-indigo-500/20 to-purple-500/15 border border-purple-500/35 rounded-full text-xs font-semibold text-purple-200 shadow-lg shadow-purple-600/10 backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '9s' }} />
          <span>The Zero-Knowledge Fintech Engine on Midnight Network</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-emerald-glow"></span>
        </div>

        {/* 2. GRAND FLOATING SHIELD CENTERPIECE WITH CONCENTRIC ORBITAL RINGS */}
        <div className="relative w-full max-w-lg mx-auto h-72 sm:h-84 md:h-96 flex items-center justify-center select-none my-4">
          {/* Outer Concentric Holographic Orbital Ring 1 (Dashed, Rotating Slow) */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] rounded-full hologram-ring-dashed animate-spin-slow pointer-events-none">
            {/* Small Glowing Orbital Node on Ring */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc]"></div>
            <div className="absolute bottom-4 right-12 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]"></div>
          </div>

          {/* Inner Concentric Holographic Ring 2 (Smooth, Counter-Rotating) */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px] rounded-full hologram-ring animate-reverse-spin-slow pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]"></div>
          </div>

          {/* Central Volumetric Glow Behind Shield */}
          <div className="absolute w-44 h-44 sm:w-60 sm:h-60 bg-gradient-to-tr from-purple-600/35 via-indigo-500/25 to-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* The Big Floating Shield Logo Emblem */}
          <div className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-float transition-transform duration-500 hover:scale-105">
            <img
              src="/logo.png"
              alt="Vansidian Faceted Shield Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(139,92,246,0.5)] drop-shadow-[0_0_50px_rgba(16,185,129,0.3)] cursor-pointer"
              onClick={onLaunchApp}
            />
          </div>

          {/* Orbiting Telemetry Floating Badges */}
          {/* Badge Top Left: Compact Circuit */}
          <div className="hidden sm:flex absolute -top-2 left-2 z-30 p-2.5 glass-panel rounded-xl border border-purple-500/30 items-center gap-2 text-left shadow-xl animate-float-delayed">
            <div className="p-1.5 bg-purple-500/20 rounded-lg text-purple-300">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-mono leading-none">CIRCUIT SPEC</p>
              <p className="text-xs font-bold text-white font-mono mt-0.5">Compact v0.31.1</p>
            </div>
          </div>

          {/* Badge Top Right: ZK Prover Active */}
          <div className="hidden sm:flex absolute -top-2 right-2 z-30 p-2.5 glass-panel rounded-xl border border-emerald-500/30 items-center gap-2 text-left shadow-xl animate-float">
            <div className="p-1.5 bg-emerald-500/20 rounded-lg text-emerald-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-mono leading-none">STATUS</p>
              <p className="text-xs font-bold text-emerald-300 font-mono mt-0.5">● SNARK Active</p>
            </div>
          </div>

          {/* Badge Bottom Left: Witness Privacy */}
          <div className="hidden sm:flex absolute bottom-2 left-4 z-30 p-2.5 glass-panel rounded-xl border border-purple-500/30 items-center gap-2 text-left shadow-xl animate-float-gentle">
            <div className="p-1.5 bg-purple-500/20 rounded-lg text-purple-300">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-mono leading-none">PRIVACY</p>
              <p className="text-xs font-bold text-purple-200 font-mono mt-0.5">100% Client RAM</p>
            </div>
          </div>

          {/* Badge Bottom Right: Preprod Scale */}
          <div className="hidden sm:flex absolute bottom-2 right-4 z-30 p-2.5 glass-panel rounded-xl border border-indigo-500/30 items-center gap-2 text-left shadow-xl animate-float-delayed">
            <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-300">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-mono leading-none">CONSENSUS</p>
              <p className="text-xs font-bold text-white font-mono mt-0.5">O(1) Batch Finality</p>
            </div>
          </div>
        </div>

        {/* 3. Main SaaS Headline & Catchphrase */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
            Shield Every Witness.{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
              Verify Every State.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            The enterprise zero-knowledge operating system for confidential corporate payroll, treasury disbursements, and selective audit disclosure on Midnight.
          </p>
        </div>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary CTA: Launch Dedicated App Dashboard */}
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
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-purple-500/30 text-sm font-semibold flex items-center justify-center gap-2.5 rounded-xl transition-all duration-200 hover:border-purple-400 cursor-pointer"
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

        {/* 5. INTERACTIVE LIVE ZK ENGINE SANDBOX TEASER IN HERO */}
        <div className="w-full max-w-2xl mx-auto pt-4">
          <div className="p-5 glass-beveled rounded-2xl border border-purple-500/30 text-left space-y-4 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Interactive ZK Sandbox Preview
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Zero Plaintext Leakage
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-300 block font-medium">
                Test Secret Increment Witness Value (<code className="text-purple-300 font-mono">secretSalaryAmount</code>):
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
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {sandboxStage === 'proving' ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Proving...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Simulate ZK Proof</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Preset Buttons */}
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

            {/* Sandbox Prover Output Box */}
            {sandboxStage !== 'idle' && (
              <div className="p-3 bg-slate-950/90 border border-purple-500/30 rounded-xl font-mono text-xs space-y-1.5 animate-fadeIn">
                {sandboxStage === 'proving' ? (
                  <div className="flex items-center gap-2 text-purple-300">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-purple-400" />
                    <span>Executing Compact v0.31.1 local WASM prover... input: [🔒 MASKED]</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>ZK-SNARK Proof Validated! Ledger state delta (+{testAmount}) certified.</span>
                    </span>
                    <button
                      onClick={onLaunchApp}
                      className="text-xs text-purple-300 underline font-semibold hover:text-white cursor-pointer ml-2"
                    >
                      Commit on Preprod →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 6. Live Telemetry Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 w-full max-w-4xl mx-auto">
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
