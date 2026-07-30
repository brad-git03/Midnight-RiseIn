import React from 'react';
import { CircuitCallState, PREPROD_CONTRACT_ADDRESS } from '../hooks/useMidnight';
import { Cpu, CheckCircle2, Loader2, Lock, ShieldAlert, FileCode2 } from 'lucide-react';

interface CircuitCallProps {
  circuitState: CircuitCallState;
  onExecute: () => void;
  isConnected: boolean;
}

export const CircuitCall: React.FC<CircuitCallProps> = ({
  circuitState,
  onExecute,
  isConnected,
}) => {
  return (
    <div className="w-full glass-panel rounded-2xl p-6 border border-slate-800 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Compact ZK Circuit Execution</h2>
            <p className="text-xs text-slate-400">Zero-Knowledge State Transition</p>
          </div>
        </div>
      </div>

      {/* Contract Target Address */}
      <div className="mb-5 p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
          <FileCode2 className="w-3.5 h-3.5 text-purple-400" />
          <span>Preprod Contract Address:</span>
        </div>
        <span className="font-mono text-xs text-purple-300 break-all select-all">
          {PREPROD_CONTRACT_ADDRESS}
        </span>
      </div>

      {/* Mandatory Zero-Knowledge Privacy Guarantee Banner */}
      <div className="mb-5 p-3.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl flex items-start gap-3">
        <Lock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">
            Proved without revealing your input
          </p>
          <p className="text-xs text-indigo-300/80 mt-0.5 leading-relaxed">
            Private witness inputs execute locally in your browser. Only the zero-knowledge proof and disclosed ledger bounds are broadcast to Preprod.
          </p>
        </div>
      </div>

      {/* Error Message */}
      {circuitState.error && (
        <div className="mb-4 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3 text-rose-300 text-sm">
          <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
          <p className="text-xs">{circuitState.error}</p>
        </div>
      )}

      {/* Success Result Box */}
      {circuitState.result && (
        <div className="mb-5 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span className="font-medium text-sm text-emerald-200">On-Chain Transaction Confirmed</span>
          </div>
          <p className="text-xs text-emerald-300/90 leading-relaxed">
            {circuitState.result}
          </p>
          {circuitState.txHash && (
            <div className="pt-2 border-t border-emerald-500/20">
              <span className="text-xs text-slate-400 block mb-1">Transaction Hash (Preprod):</span>
              <span className="font-mono text-xs text-emerald-300/80 break-all select-all">
                {circuitState.txHash}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Execute Action Button */}
      <button
        onClick={onExecute}
        disabled={!isConnected || circuitState.isCalling}
        className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-purple-600/20 transition-all duration-200 disabled:opacity-50 active:scale-[0.99]"
      >
        {circuitState.isCalling ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-purple-200" />
            <span>
              {circuitState.isProving
                ? 'Generating ZK Proof in Browser...'
                : 'Submitting to Preprod Network...'}
            </span>
          </>
        ) : (
          <>
            <Cpu className="w-4 h-4" />
            <span>Call Circuit (Execute ZK State Transition)</span>
          </>
        )}
      </button>

      {/* Subtext info */}
      {!isConnected && (
        <p className="text-center text-xs text-slate-500 mt-2">
          Connect your Lace Wallet to execute circuit calls against Preprod.
        </p>
      )}
    </div>
  );
};
