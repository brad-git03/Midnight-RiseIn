import React from 'react';
import { EyeOff, Eye, ShieldCheck, Lock, ChevronRight } from 'lucide-react';

export const PrivacyBreakdown: React.FC = () => {
  return (
    <div className="w-full glass-panel rounded-2xl p-6 border border-slate-800/80 my-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Privacy Transparency Guarantee</h3>
          <p className="text-xs text-slate-400">Side-by-side comparison of local client privacy vs on-chain ledger visibility</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: What Stays Private */}
        <div className="p-4 bg-slate-900/60 border border-purple-500/20 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs uppercase tracking-wider">
            <EyeOff className="w-4 h-4 text-purple-400" />
            What Stays 100% Private (Your Local Device)
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
              <span>Raw witness increment input value (`secretIncrement`)</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
              <span>Wallet secret keys and HD derivation parameters</span>
            </li>
            <li className="flex items-start gap-2">
              <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
              <span>Local browser circuit intermediate calculation states</span>
            </li>
          </ul>
        </div>

        {/* Right: What Blockchain Observers See */}
        <div className="p-4 bg-slate-900/60 border border-emerald-500/20 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs uppercase tracking-wider">
            <Eye className="w-4 h-4 text-emerald-400" />
            What On-Chain Observers See (Midnight Preprod)
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Verified Zero-Knowledge Proof hash (`ZK-SNARK`)</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Updated public ledger state (`counter`) via `disclose()`</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Preprod transaction confirmation hash & block index</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
