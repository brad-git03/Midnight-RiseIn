import React, { useState } from 'react';
import { CircuitCallState, PREPROD_CONTRACT_ADDRESS } from '../hooks/useMidnight';
import {
  Lock,
  Eye,
  EyeOff,
  Globe,
  Copy,
  Check,
  ShieldAlert,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Search,
  FileText,
  Terminal,
  Cpu,
  ArrowRight,
  Shield,
  Activity,
} from 'lucide-react';
import { PaystubData } from './PaystubModal';

interface DualStateDashboardProps {
  privateWitnessValue: number;
  onWitnessChange: (val: number) => void;
  publicCounterState: number;
  circuitState: CircuitCallState;
  onExecute: () => void;
  isConnected: boolean;
  onOpenPaystub?: (data: PaystubData) => void;
}

export const DualStateDashboard: React.FC<DualStateDashboardProps> = ({
  privateWitnessValue,
  onWitnessChange,
  publicCounterState,
  circuitState,
  onExecute,
  isConnected,
  onOpenPaystub,
}) => {
  const [viewMode, setViewMode] = useState<'employer' | 'public'>('employer');
  const [showSecret, setShowSecret] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PREPROD_CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPublicMode = viewMode === 'public';

  return (
    <div className="w-full bg-[#070b12] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left">
      {/* 1. Unified Workstation Top Control Bar (Integrated Header) */}
      <div className="px-6 py-4 bg-[#0a0f1a] border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left: Terminal Title & Active Status */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              Confidential Treasury Terminal
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 font-semibold">
                ● Live Preprod
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">
              Zero-knowledge proof execution via Compact v0.31.1 smart contract
            </p>
          </div>
        </div>

        {/* Right: Integrated Privacy Lens Switch (Clean Segmented Control) */}
        <div className="flex items-center gap-2 bg-[#050810] p-1 rounded-xl border border-slate-800 w-full sm:w-auto justify-between sm:justify-start">
          <span className="text-[10px] uppercase font-mono text-slate-500 font-bold px-2 hidden sm:inline">
            Lens:
          </span>
          <button
            onClick={() => setViewMode('employer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              !isPublicMode
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Employer View</span>
          </button>
          <button
            onClick={() => setViewMode('public')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              isPublicMode
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Public Explorer</span>
          </button>
        </div>
      </div>

      {/* 2. Unified Two-Column Workstation Canvas (Hairline Split, No Card Clutter) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        {/* LEFT COLUMN: Confidential Transaction Input & Proving Execution (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Context Note with Privacy Guarantee */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>
                  {isPublicMode
                    ? 'Public View: Witness values are cryptographically shielded'
                    : 'Client Session: Private witness is evaluated strictly in browser RAM'}
                </span>
              </div>
              {!isPublicMode && (
                <button
                  onClick={() => setShowSecret(!showSecret)}
                  className="text-[11px] text-purple-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {showSecret ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showSecret ? 'Hide' : 'Reveal'}</span>
                </button>
              )}
            </div>

            {/* Clean Unboxed Amount Input Surface */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                  Disbursement Witness Amount (<code className="text-purple-300">val: Uint&lt;16&gt;</code>)
                </label>
                <span className="text-[11px] text-slate-500 font-mono">
                  Bound: 1 ≤ val ≤ 50,000
                </span>
              </div>

              {isPublicMode ? (
                /* Public Masked Representation */
                <div className="w-full bg-[#04060a] border border-purple-500/30 rounded-xl px-5 py-4 flex items-center justify-between font-mono text-sm text-purple-300">
                  <div className="flex items-center gap-2.5">
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span className="font-semibold">[ 🔒 SHIELDED VIA COMPACT ZK-SNARK ]</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                    Zero Plaintext Leak
                  </span>
                </div>
              ) : (
                /* Interactive Unmasked Input */
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400 font-mono text-lg font-bold select-none">
                    +
                  </span>
                  <input
                    type={showSecret ? 'number' : 'password'}
                    value={privateWitnessValue}
                    onChange={(e) => onWitnessChange(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-[#04060a] border border-purple-500/35 rounded-xl pl-9 pr-32 py-3.5 text-xl font-bold font-mono text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all"
                    placeholder="Enter amount..."
                  />
                  <div className="absolute right-3 flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800 text-[11px] text-purple-300 font-mono font-bold select-none">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>State Delta</span>
                  </div>
                </div>
              )}
            </div>

            {/* Horizontal Preset Selectors */}
            {!isPublicMode ? (
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-slate-400 font-medium">Quick Presets:</span>
                {[1, 5, 10, 25, 50].map((val) => (
                  <button
                    key={val}
                    onClick={() => onWitnessChange(val)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      privateWitnessValue === val
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    +{val}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-slate-500 italic">
                ℹ️ Direct editing disabled in Public Explorer View. Switch to <strong>Employer View</strong> to adjust witness inputs.
              </p>
            )}

            {/* Real-time Inline ZK Pipeline Progress (Subtle, Not a Huge Card) */}
            {circuitState.isCalling && (
              <div className="p-4 bg-[#0a0f1d] border border-purple-500/30 rounded-xl space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-purple-300 flex items-center gap-2 font-bold">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-purple-400" />
                    <span>
                      {circuitState.stage === 'witness' && '1/3 Ingesting Private Witness...'}
                      {circuitState.stage === 'proving' && '2/3 Generating ZK-SNARK Proof...'}
                      {circuitState.stage === 'submitting' && '3/3 Committing State to Midnight Preprod...'}
                    </span>
                  </span>
                  <span className="text-slate-400 text-[10px]">Zero Plaintext Over RPC</span>
                </div>
                {/* Progress Line */}
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 transition-all duration-500"
                    style={{
                      width:
                        circuitState.stage === 'witness'
                          ? '33%'
                          : circuitState.stage === 'proving'
                          ? '66%'
                          : '95%',
                    }}
                  ></div>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {circuitState.error && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/25 rounded-xl flex items-center gap-2 text-rose-300 text-xs">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{circuitState.error}</span>
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          <div className="pt-4">
            <button
              onClick={onExecute}
              disabled={!isConnected || circuitState.isCalling}
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white rounded-xl font-bold text-sm shadow-xl shadow-purple-600/30 transition-all duration-200 disabled:opacity-50 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>
                {circuitState.isCalling
                  ? 'Proving & Committing ZK Circuit...'
                  : isPublicMode
                  ? 'Generate ZK Proof & Submit [Shielded]'
                  : `Generate ZK Proof & Submit (+${privateWitnessValue})`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: On-Chain Consensus & Audit Ledger Feed (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#060910]/50">
          <div className="space-y-5">
            {/* Top State Summary */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                  Public Ledger State (`counter`)
                </span>
                <div className="text-3xl font-black font-mono text-emerald-400 tracking-tight mt-0.5">
                  {publicCounterState}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 font-mono block uppercase">Status</span>
                <span className="text-xs font-mono text-emerald-300 flex items-center gap-1 font-semibold justify-end">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified</span>
                </span>
              </div>
            </div>

            {/* Target Contract Address (Clean Inline Bar) */}
            <div className="flex items-center justify-between p-3 bg-[#04060a] border border-slate-800/90 rounded-xl text-xs font-mono">
              <div className="truncate pr-2">
                <span className="text-slate-500 text-[10px] block uppercase font-bold">Target Contract:</span>
                <span className="text-slate-300 text-[11px] truncate block mt-0.5">
                  {PREPROD_CONTRACT_ADDRESS}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 cursor-pointer transition-colors shrink-0"
                title="Copy Contract Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Verified Audit Table (Clean Stream, No Boxed Clutter) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                <span>Recent Audit Activity</span>
                <span className="text-[10px] text-slate-500 font-normal">Preprod Testnet</span>
              </div>

              {/* Clean Table Rows with Subtle Dividers */}
              <div className="divide-y divide-slate-800/80 border border-slate-800/80 rounded-xl overflow-hidden bg-[#04060a]">
                {circuitState.history.slice(0, 4).map((tx, idx) => (
                  <div
                    key={idx}
                    className="p-3 flex items-center justify-between hover:bg-slate-900/50 transition-colors text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                      <div>
                        <p className="font-mono font-bold text-slate-200">{tx.txHash}</p>
                        <p className="text-[10px] text-slate-500 font-mono">{tx.timestamp} • ZK Verified</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 text-[11px]">
                        {isPublicMode ? '[ 🔒 SHIELDED ]' : `+${tx.addedValue}`}
                      </span>
                      {onOpenPaystub && (
                        <button
                          onClick={() =>
                            onOpenPaystub({
                              certificateId: `CERT-${idx + 30192}`,
                              txHash: tx.txHash,
                              blockTimestamp: tx.timestamp,
                              employeeName: 'Confidential Disbursal',
                              disclosedAmount: tx.addedValue * 100,
                              circuitName: 'increment (Compact v0.31.1)',
                            })
                          }
                          className="p-1 text-purple-400 hover:text-white hover:bg-purple-600/20 rounded border border-transparent hover:border-purple-500/30 cursor-pointer transition-colors"
                          title="View Official ZK Paystub Certificate"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Footer Note */}
          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Circuit: Compact v0.31.1</span>
            <span className="text-emerald-400 flex items-center gap-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Consensus Finality Confirmed</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
