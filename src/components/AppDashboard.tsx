import React, { useState } from 'react';
import { Logo } from './Logo';
import { ZKPipeline } from './ZKPipeline';
import { DualStateDashboard } from './DualStateDashboard';
import { PayrollRoster } from './PayrollRoster';
import { PaystubData } from './PaystubModal';
import { WalletConnect } from './WalletConnect';
import { WalletState, CircuitCallState, PREPROD_CONTRACT_ADDRESS, PREPROD_CONTRACT_HEX_ID } from '../hooks/useMidnight';
import {
  Cpu,
  Users,
  History,
  Lock,
  ArrowLeft,
  ShieldCheck,
  Globe,
  Terminal,
  FileText,
  Copy,
  Check,
  LogOut,
  Wallet,
  Sparkles,
  ExternalLink,
  Code2,
} from 'lucide-react';

interface AppDashboardProps {
  wallet: WalletState;
  onConnect: () => void;
  onDisconnect: () => void;
  isWalletInstalled: boolean;
  privateWitnessValue: number;
  onWitnessChange: (val: number) => void;
  publicCounterState: number;
  circuitState: CircuitCallState;
  onExecute: () => void;
  onOpenPaystub: (data: PaystubData) => void;
  onBackToWebsite: () => void;
}

export const AppDashboard: React.FC<AppDashboardProps> = ({
  wallet,
  onConnect,
  onDisconnect,
  isWalletInstalled,
  privateWitnessValue,
  onWitnessChange,
  publicCounterState,
  circuitState,
  onExecute,
  onOpenPaystub,
  onBackToWebsite,
}) => {
  const [activeTab, setActiveTab] = useState<'vault' | 'roster' | 'history' | 'contract'>('vault');
  const [copiedContract, setCopiedContract] = useState(false);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(PREPROD_CONTRACT_ADDRESS);
    setCopiedContract(true);
    setTimeout(() => setCopiedContract(false), 2000);
  };

  const handleDisburseBatch = async () => {
    await onExecute();
  };

  return (
    <div className="min-h-screen w-full bg-[#04060a] text-slate-100 flex flex-col font-sans">
      {/* 1. Professional App Header */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-purple-500/20 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Back to Website & Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToWebsite}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Website</span>
            </button>

            <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>

            <div onClick={onBackToWebsite} className="cursor-pointer">
              <Logo size={32} showText={true} />
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span>/</span>
              <span className="text-slate-400">Preprod Workspace</span>
              <span>/</span>
              <span className="text-purple-300 font-semibold">ZK Terminal</span>
            </div>
          </div>

          {/* Right: Network Status, Wallet & Actions */}
          <div className="flex items-center gap-3">
            {/* Midnight Preprod Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Preprod Testnet</span>
            </div>

            {/* Wallet State */}
            {wallet.isConnected ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-purple-500/30 rounded-xl text-xs font-mono text-purple-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{wallet.address?.slice(0, 10)}...</span>
                </div>
                <button
                  onClick={onDisconnect}
                  className="p-2 bg-slate-900 border border-slate-800 hover:bg-rose-500/10 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 rounded-xl transition-colors cursor-pointer"
                  title="Disconnect Wallet"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onConnect}
                disabled={wallet.isConnecting}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-600/25 transition-all duration-200 cursor-pointer"
              >
                <Wallet className="w-3.5 h-3.5" />
                <span>{wallet.isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 2. Main App Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Workspace Telemetry Sub-Header */}
        <div className="p-4 sm:p-6 glass-panel rounded-2xl border border-purple-500/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Enterprise ZK Transaction Terminal
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30">
                O(1) Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Generate client-side zero-knowledge witness proofs and commit confidential state to Midnight Preprod.
            </p>
          </div>

          {/* Quick Target Contract Badge */}
          <div className="flex items-center gap-2 bg-slate-950/80 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-mono w-full md:w-auto justify-between md:justify-start">
            <span className="text-slate-500 text-[11px]">Contract:</span>
            <span className="text-purple-300 text-[11px] truncate max-w-[200px] sm:max-w-[260px]">
              {PREPROD_CONTRACT_ADDRESS}
            </span>
            <button
              onClick={handleCopyContract}
              className="text-purple-400 hover:text-white cursor-pointer ml-1"
              title="Copy Contract Address"
            >
              {copiedContract ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Wallet Connection Banner (if disconnected) */}
        {!wallet.isConnected && (
          <div className="w-full">
            <WalletConnect
              wallet={wallet}
              onConnect={onConnect}
              onDisconnect={onDisconnect}
              isWalletInstalled={isWalletInstalled}
            />
          </div>
        )}

        {/* 3. Transaction Dashboard Tabs */}
        <div className="space-y-6">
          {/* Navigation Tab Bar */}
          <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab('vault')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'vault'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>ZK Vault Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('roster')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'roster'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Enterprise Payroll Roster</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Audit History & Paystubs</span>
            </button>

            <button
              onClick={() => setActiveTab('contract')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'contract'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Contract Explorer</span>
            </button>
          </div>

          {/* Tab 1: ZK Vault Engine */}
          {activeTab === 'vault' && (
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
                isConnected={wallet.isConnected}
                onOpenPaystub={onOpenPaystub}
              />
            </div>
          )}

          {/* Tab 2: Enterprise Payroll Roster */}
          {activeTab === 'roster' && (
            <div className="space-y-6">
              <ZKPipeline
                stage={circuitState.stage}
                isCalling={circuitState.isCalling}
                txHash={circuitState.txHash}
              />
              <PayrollRoster
                isConnected={wallet.isConnected}
                onDisburseBatch={handleDisburseBatch}
                isProcessing={circuitState.isCalling}
                onOpenPaystub={onOpenPaystub}
              />
            </div>
          )}

          {/* Tab 3: Certified Audit History */}
          {activeTab === 'history' && (
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 space-y-6 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                    <History className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Certified On-Chain Audit Records</h3>
                    <p className="text-xs text-slate-400">
                      All verified state changes committed to the Midnight Preprod blockchain
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Preprod Block 8,492,014
                </span>
              </div>

              <div className="space-y-3">
                {circuitState.history.map((tx, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <p className="font-mono font-bold text-slate-200 text-sm">{tx.txHash}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {tx.timestamp} • Verified by Midnight ZK-SNARK Prover
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                        +{tx.addedValue} Verified Delta
                      </span>
                      <button
                        onClick={() =>
                          onOpenPaystub({
                            certificateId: `CERT-${idx + 10482}`,
                            txHash: tx.txHash,
                            blockTimestamp: tx.timestamp,
                            employeeName: 'Verified Recipient',
                            disclosedAmount: tx.addedValue * 100,
                            circuitName: 'processPayrollBatch (Compact v0.31.1)',
                          })
                        }
                        className="px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg cursor-pointer transition-colors flex items-center gap-1.5 font-semibold"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View ZK Paystub</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Contract Explorer */}
          {activeTab === 'contract' && (
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 space-y-6 text-left">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Midnight Preprod Contract Inspector</h3>
                  <p className="text-xs text-slate-400">
                    Cryptographic contract address parameters and active ledger state roots
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Hex Contract ID:
                  </span>
                  <span className="text-purple-300 break-all text-sm font-bold block">
                    {PREPROD_CONTRACT_HEX_ID}
                  </span>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Bech32 Contract Address:
                  </span>
                  <span className="text-emerald-300 break-all text-sm font-bold block">
                    {PREPROD_CONTRACT_ADDRESS}
                  </span>
                </div>

                <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">
                    Active Ledger Counter:
                  </span>
                  <span className="text-2xl font-black text-white font-mono block">
                    {publicCounterState}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* App Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/80 py-6 px-6 mt-16 text-center text-xs text-slate-500">
        Vansidian Enterprise ZK Engine • Connected to Midnight Preprod Testnet • Compact v0.31.1
      </footer>
    </div>
  );
};
