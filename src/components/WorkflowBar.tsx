import React from 'react';
import { Wallet, KeyRound, ShieldCheck, ArrowRight } from 'lucide-react';

interface WorkflowBarProps {
  isConnected: boolean;
  hasWitnessValue: boolean;
  isConfirmed: boolean;
}

export const WorkflowBar: React.FC<WorkflowBarProps> = ({
  isConnected,
  hasWitnessValue,
  isConfirmed,
}) => {
  return (
    <div className="w-full glass-panel rounded-2xl p-4 border border-slate-800/80 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Step 1 */}
        <div className={`flex items-center gap-3 flex-1 p-3 rounded-xl transition-all ${
          isConnected ? 'bg-indigo-500/10 border border-indigo-500/20' : 'bg-slate-900/60 border border-slate-800'
        }`}>
          <div className={`p-2.5 rounded-lg text-xs font-mono font-bold ${
            isConnected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
          }`}>
            01
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Wallet className="w-3.5 h-3.5 text-indigo-400" />
              Connect Wallet
            </p>
            <p className="text-[11px] text-slate-400">
              {isConnected ? 'Lace Wallet Linked' : 'Connect Lace Extension'}
            </p>
          </div>
        </div>

        <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block shrink-0" />

        {/* Step 2 */}
        <div className={`flex items-center gap-3 flex-1 p-3 rounded-xl transition-all ${
          hasWitnessValue && isConnected ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-slate-900/60 border border-slate-800'
        }`}>
          <div className={`p-2.5 rounded-lg text-xs font-mono font-bold ${
            hasWitnessValue && isConnected ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'
          }`}>
            02
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-white flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-purple-400" />
              Set Private Witness
            </p>
            <p className="text-[11px] text-slate-400">
              Secret Input (Off-Chain Only)
            </p>
          </div>
        </div>

        <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block shrink-0" />

        {/* Step 3 */}
        <div className={`flex items-center gap-3 flex-1 p-3 rounded-xl transition-all ${
          isConfirmed ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-900/60 border border-slate-800'
        }`}>
          <div className={`p-2.5 rounded-lg text-xs font-mono font-bold ${
            isConfirmed ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
          }`}>
            03
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Prove & Disclose
            </p>
            <p className="text-[11px] text-slate-400">
              {isConfirmed ? 'ZK Verified On-Chain' : 'Generate Proof & Submit'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
