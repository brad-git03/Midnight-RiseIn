import React, { useState } from 'react';
import { DualStateDashboard } from './DualStateDashboard';
import { ZKPipeline } from './ZKPipeline';
import { CircuitCallState } from '../hooks/useMidnight';
import { Cpu, ShieldCheck, History, Lock, Terminal } from 'lucide-react';

interface DashboardFrameProps {
  privateWitnessValue: number;
  onWitnessChange: (val: number) => void;
  publicCounterState: number;
  circuitState: CircuitCallState;
  onExecute: () => void;
  isConnected: boolean;
}

export const DashboardFrame: React.FC<DashboardFrameProps> = ({
  privateWitnessValue,
  onWitnessChange,
  publicCounterState,
  circuitState,
  onExecute,
  isConnected,
}) => {
  const [activeTab, setActiveTab] = useState<'engine' | 'vault' | 'history'>('engine');

  return (
    <section id="dashboard" className="w-full max-w-6xl mx-auto my-12 px-4">
      {/* Outer Window Frame Container (SariPay inspired) */}
      <div className="w-full bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden relative backdrop-blur-xl">
        {/* Top Window Bar */}
        <div className="bg-slate-950/80 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>

          <div className="text-[11px] text-slate-400 font-mono bg-slate-900 px-6 py-1 rounded-md border border-slate-800 select-none flex items-center gap-2">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>dashboard.vansidian.io/zk-vault</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
              Midnight Connected
            </span>
          </div>
        </div>

        {/* Tab Switcher Sub-Header */}
        <div className="bg-slate-950/40 border-b border-slate-800/80 px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('engine')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'engine'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>ZK Engine & Vault</span>
            </button>

            <button
              onClick={() => setActiveTab('vault')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'vault'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Private Witness Vault</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>On-Chain History</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>compact v0.31.1</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 bg-slate-950/40">
          {/* Active Tab View */}
          {activeTab === 'engine' && (
            <div className="space-y-6">
              <ZKPipeline
                stage={circuitState.stage}
                isCalling={circuitState.isCalling}
                txHash={circuitState.txHash}
              />
              <DualStateDashboard
                privateWitnessValue={privateWitnessValue}
                onWitnessChange={onWitnessChange}
                publicCounterState={publicCounterState}
                circuitState={circuitState}
                onExecute={onExecute}
                isConnected={isConnected}
              />
            </div>
          )}

          {activeTab === 'vault' && (
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Local Witness Vault Settings</h4>
                  <p className="text-xs text-slate-400">Manage client-side witness input parameter defaults and security bounds</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">Default Increment Witness Parameter:</label>
                <input
                  type="number"
                  value={privateWitnessValue}
                  onChange={(e) => onWitnessChange(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-slate-950 border border-purple-500/30 rounded-xl px-4 py-2.5 font-mono text-purple-300 text-sm"
                />
                <p className="text-[11px] text-purple-300/80">
                  ✓ This parameter is stored solely in local client memory and is never logged to RPC nodes or indexers.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                    <History className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Verified On-Chain Audit Feed</h4>
                    <p className="text-xs text-slate-400">Recent ZK proof transactions recorded on Midnight Preprod</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Preprod Block 8,492,014
                </span>
              </div>

              <div className="space-y-2">
                {circuitState.history.map((tx, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <div>
                        <p className="font-mono font-bold text-slate-200">{tx.txHash}</p>
                        <p className="text-[10px] text-slate-500">{tx.timestamp} • Verified ZK-SNARK</p>
                      </div>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                      +{tx.addedValue} State Delta
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
