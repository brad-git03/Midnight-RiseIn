import React from 'react';
import { Shield, EyeOff, Layers, FileCheck, CheckCircle2, Lock, Zap, Server } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full pt-16 pb-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-xs font-semibold text-purple-300">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>About Vansidian Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Enterprise Finance Requires{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-indigo-500 bg-clip-text text-transparent">
              Zero-Knowledge Privacy
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Public blockchains expose executive salaries, vendor invoices, and treasury balances to competitors. Vansidian eliminates data exposure through Midnight's dual-state architecture.
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 glass-card glass-card-hover rounded-2xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Client-Side Witness Secrecy</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Confidential parameters like salary increments execute 100% locally inside client browser memory. Raw figures never travel across public RPC endpoints.
            </p>
            <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero plaintext leaks to validators</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Protected against block explorer scraping</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-6 glass-card glass-card-hover rounded-2xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">O(1) Multi-Tenant Scale</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Isolated organization state roots (<code className="text-purple-300 font-mono text-[11px]">orgPayrollRoots</code>) eliminate global state serialization bottlenecks across enterprises.
            </p>
            <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1,000 employee payouts in 1 transaction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>99.9% reduction in on-chain gas overhead</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-6 glass-card glass-card-hover rounded-2xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Selective Audit Disclosure</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Compact smart contracts use explicit <code className="text-emerald-300 font-mono text-[11px]">disclose()</code> bounds to publish verified state transitions without exposing underlying inputs.
            </p>
            <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Auditable proof of solvency</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mathematically verified by ZK-SNARKs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Architecture Banner */}
        <div className="p-6 sm:p-8 glass-panel rounded-2xl border border-purple-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-left">
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-purple-400" />
                <span>Native Midnight Network Compact Architecture</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Compiled directly with Compact v0.31.1, Vansidian adheres to zero-knowledge sound circuit constraints with 100% formal verification.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#documentation"
                className="px-5 py-2.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 rounded-xl text-xs font-bold transition-colors"
              >
                Read Compact Specs
              </a>
              <a
                href="#terminal"
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Try Live Terminal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
