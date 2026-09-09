import { CircuitCallState, PREPROD_CONTRACT_ADDRESS } from '../hooks/useMidnight';
import { Lock, Eye, EyeOff, Globe, Copy, Check, ShieldAlert, Sparkles, ShieldCheck, UserCheck, Search, FileText } from 'lucide-react';
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
    <div className="space-y-6 w-full">
      {/* Interactive Privacy Lens Toggle Switch Bar */}
      <div className="w-full p-4 glass-panel rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl border transition-colors ${
            isPublicMode 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
          }`}>
            {isPublicMode ? <Search className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Privacy Lens Mode:
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                isPublicMode
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              }`}>
                {isPublicMode ? '🌐 Public Explorer Perspective' : '👁️ Employer / Client Perspective'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {isPublicMode
                ? 'Simulating what external block explorers, indexers, and network validators see on Midnight.'
                : 'Viewing your confidential local browser session with full unmasked witness figures.'}
            </p>
          </div>
        </div>

        {/* The Toggle Buttons */}
        <div className="flex items-center p-1 bg-slate-950 border border-slate-800 rounded-xl shrink-0">
          <button
            onClick={() => setViewMode('employer')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              !isPublicMode
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Employer View</span>
          </button>
          <button
            onClick={() => setViewMode('public')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              isPublicMode
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Public Explorer View</span>
          </button>
        </div>
      </div>

      {/* Main Dual Panels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* LEFT PANEL: PRIVATE WITNESS VAULT (OFF-CHAIN LOCAL MEMORY) */}
        <div className={`glass-panel rounded-2xl p-6 border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
          isPublicMode ? 'border-purple-500/20 opacity-90' : 'border-purple-500/40'
        }`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-purple-500/15 border border-purple-500/30 rounded-xl text-purple-400">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    Private Witness Vault
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-md">
                      Off-Chain Only
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Local Client Browser Memory</p>
                </div>
              </div>
            </div>

            {/* Privacy Guarantee Badge */}
            <div className="mb-5 p-3 bg-purple-950/40 border border-purple-500/30 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-purple-200">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                <span className="font-semibold">
                  {isPublicMode ? 'Input cryptographically shielded from public view' : 'Proved without revealing your input'}
                </span>
              </div>
              {!isPublicMode && (
                <button
                  onClick={() => setShowSecret(!showSecret)}
                  className="text-xs text-purple-300 hover:text-purple-100 flex items-center gap-1 font-medium bg-purple-900/50 px-2 py-1 rounded-lg border border-purple-700/50 cursor-pointer"
                >
                  {showSecret ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  {showSecret ? 'Hide' : 'Reveal'}
                </button>
              )}
            </div>

            {/* Secret Input Control with Dynamic Privacy Masking */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Secret Increment Witness Input (`secretSalaryAmount`):
                </label>
                <div className="relative">
                  {isPublicMode ? (
                    <div className="w-full bg-slate-950 border border-purple-500/40 rounded-xl px-4 py-3 flex items-center justify-between text-purple-300 font-mono text-sm">
                      <span className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-purple-400" />
                        <span>[ 🔒 SHIELDED VIA COMPACT ZK-SNARK ]</span>
                      </span>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                        Zero Plaintext Leak
                      </span>
                    </div>
                  ) : (
                    <input
                      type={showSecret ? 'number' : 'password'}
                      value={privateWitnessValue}
                      onChange={(e) => onWitnessChange(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-900/90 border border-purple-500/40 rounded-xl px-4 py-3 text-lg font-mono text-purple-200 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="Enter secret number..."
                    />
                  )}
                  {!isPublicMode && (
                    <div className="absolute right-3 top-3 text-xs text-purple-400/60 font-mono">
                      [Secret Parameter]
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Increment Presets */}
              {!isPublicMode ? (
                <div>
                  <span className="text-[11px] text-slate-400 block mb-2 font-medium">Quick Presets:</span>
                  <div className="flex gap-2">
                    {[1, 5, 10, 25].map((val) => (
                      <button
                        key={val}
                        onClick={() => onWitnessChange(val)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                          privateWitnessValue === val
                            ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-400'
                            : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
                        }`}
                      >
                        +{val}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-[11px] text-slate-400">
                  ℹ️ Presets locked in Public Explorer View. Switch to <strong>Employer View</strong> to adjust your private witness parameters.
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div>
            {circuitState.error && (
              <div className="mb-3 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-2 text-rose-300 text-xs">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{circuitState.error}</span>
              </div>
            )}

            <button
              onClick={onExecute}
              disabled={!isConnected || circuitState.isCalling}
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-purple-600/25 transition-all duration-200 disabled:opacity-50 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {isPublicMode
                  ? 'Generate ZK Proof & Submit [Shielded]'
                  : `Generate ZK Proof & Submit (+${privateWitnessValue})`}
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT PANEL: PUBLIC LEDGER STATE (MIDNIGHT PREPROD BLOCKCHAIN) */}
        <div className="glass-panel rounded-2xl p-6 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    Public Ledger State
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-md">
                      On-Chain Preprod
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Verified Midnight Blockchain State</p>
                </div>
              </div>
            </div>

            {/* Public Counter State Display */}
            <div className="mb-5 p-5 bg-slate-900/80 border border-emerald-500/30 rounded-xl text-center">
              <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider mb-1">
                Verified Public Counter State (`counter`)
              </span>
              <div className="text-4xl font-extrabold font-mono text-emerald-400 tracking-tight">
                {publicCounterState}
              </div>
              <span className="text-[11px] text-emerald-300/80 block mt-2 font-medium flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified on-chain via Compact ZK-SNARK</span>
              </span>
            </div>

            {/* Preprod Contract Target Address */}
            <div className="mb-5 p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Target Preprod Contract:</span>
                <button
                  onClick={handleCopy}
                  className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium text-[11px] cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <span className="font-mono text-xs text-emerald-300/90 break-all block">
                {PREPROD_CONTRACT_ADDRESS}
              </span>
            </div>
          </div>

          {/* Transaction History Feed with Dynamic Privacy Masking */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-300">Verified On-Chain Feed:</span>
              <span className="text-[10px] text-slate-500 font-mono">
                {isPublicMode ? 'Explorer Mode (Shielded Outputs)' : 'Employer Mode (Auditor View)'}
              </span>
            </div>

            <div className="space-y-2 max-h-28 overflow-y-auto pr-1">
              {circuitState.history.map((tx, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-slate-900/70 border border-slate-800 rounded-lg flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="font-mono text-slate-300">{tx.txHash}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono font-semibold">
                      {isPublicMode ? '[ 🔒 SHIELDED ]' : `+${tx.addedValue}`}
                    </span>
                    <span className="text-[10px] text-slate-500">{tx.timestamp}</span>
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
                        className="p-1 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded cursor-pointer transition-colors"
                        title="View Official ZK Paystub Certificate"
                      >
                        <FileText className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
