import React, { useState } from 'react';
import { Logo } from './Logo';
import { DualStateDashboard } from './DualStateDashboard';
import { PayrollRoster } from './PayrollRoster';
import { PaystubData } from './PaystubModal';
import { WalletConnect } from './WalletConnect';
import { WalletState, CircuitCallState, PREPROD_CONTRACT_ADDRESS, PREPROD_CONTRACT_HEX_ID } from '../hooks/useMidnight';
import {
  Cpu,
  Users,
  History,
  ArrowLeft,
  ShieldCheck,
  Globe,
  FileText,
  Copy,
  Check,
  LogOut,
  Wallet,
  Code2,
  ExternalLink,
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
    <div className="min-h-screen w-full bg-[#04060a] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* 1. Sleek Enterprise App Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-[#070b12]/90 border-b border-slate-800 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Return to Site & Breadcrumbs */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToWebsite}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-purple-400" />
              <span>Website</span>
            </button>

            <div className="h-4 w-px bg-slate-800"></div>

            <div onClick={onBackToWebsite} className="cursor-pointer">
              <Logo size={30} showText={true} />
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span>/</span>
              <span className="text-slate-400">Preprod Workspace</span>
              <span>/</span>
              <span className="text-purple-300 font-semibold">Terminal</span>
            </div>
          </div>

          {/* Right: Network Status, Wallet & Contract */}
          <div className="flex items-center gap-3">
            {/* Midnight Preprod Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Preprod Testnet</span>
            </div>

            {/* Wallet State Pill */}
            {wallet.isConnected ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#090e18] border border-purple-500/30 rounded-xl text-xs font-mono text-purple-200">
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
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-600/25 transition-all cursor-pointer"
              >
                <Wallet className="w-3.5 h-3.5" />
                <span>{wallet.isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 2. Workspace Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Workspace Title & Segmented Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-slate-800/80">
          <div>
            <h1 className="text-xl font-extrabold text-white tracking-tight">
              Treasury Workstation
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Enterprise confidential state execution on Midnight Network
            </p>
          </div>

          {/* Segmented Tab Controls (Sleek, Card-Free) */}
          <div className="flex items-center p-1 bg-[#090d16] border border-slate-800 rounded-xl overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('vault')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'vault'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>ZK Vault</span>
            </button>

            <button
              onClick={() => setActiveTab('roster')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'roster'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Payroll Roster</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Audit Ledger</span>
            </button>

            <button
              onClick={() => setActiveTab('contract')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                activeTab === 'contract'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Contract Specs</span>
            </button>
          </div>
        </div>

        {/* Wallet Connection Prompt (if disconnected) */}
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

        {/* 3. Primary Workstation Views */}
        {/* Tab 1: ZK Vault Engine (Streamlined Unified Workstation) */}
        {activeTab === 'vault' && (
          <DualStateDashboard
            privateWitnessValue={privateWitnessValue}
            onWitnessChange={onWitnessChange}
            publicCounterState={publicCounterState}
            circuitState={circuitCall}
            onExecute={onExecute}
            isConnected={wallet.isConnected}
            onOpenPaystub={onOpenPaystub}
          />
        )}

        {/* Tab 2: Enterprise Payroll Roster (Streamlined Data Table) */}
        {activeTab === 'roster' && (
          <PayrollRoster
            isConnected={wallet.isConnected}
            onDisburseBatch={handleDisburseBatch}
            isProcessing={circuitState.isCalling}
            onOpenPaystub={onOpenPaystub}
          />
        )}

        {/* Tab 3: Certified Audit History & Paystubs */}
        {activeTab === 'history' && (
          <div className="w-full bg-[#070b12] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left">
            <div className="px-6 py-4 bg-[#0a0f1a] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <History className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Full On-Chain Audit Records</h2>
                  <p className="text-[11px] text-slate-400">
                    Cryptographic proofs committed to the Midnight Preprod blockchain
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Block #8,492,014
              </span>
            </div>

            <div className="divide-y divide-slate-800">
              {circuitState.history.map((tx, idx) => (
                <div
                  key={idx}
                  className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors text-xs"
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-mono font-bold text-slate-200 text-sm">{tx.txHash}</p>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {tx.timestamp} • Verified by Compact v0.31.1 ZK-SNARK Prover
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20 text-xs">
                      +{tx.addedValue} State Delta
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
                      className="px-3 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg cursor-pointer transition-colors flex items-center gap-1.5 font-semibold text-xs"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Paystub</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Contract Explorer */}
        {activeTab === 'contract' && (
          <div className="w-full bg-[#070b12] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left">
            <div className="px-6 py-4 bg-[#0a0f1a] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Midnight Preprod Smart Contract Specs</h2>
                  <p className="text-[11px] text-slate-400">
                    Active contract addresses, ledger counter state, and multi-tenant map identifiers
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4 font-mono text-xs">
              <div className="p-4 bg-[#04060a] rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Hex Contract ID:</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(PREPROD_CONTRACT_HEX_ID)}
                    className="text-purple-400 hover:text-white text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </button>
                </div>
                <span className="text-purple-300 break-all text-sm font-bold block">{PREPROD_CONTRACT_HEX_ID}</span>
              </div>

              <div className="p-4 bg-[#04060a] rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[10px] uppercase font-bold">Bech32 Contract Address:</span>
                  <button
                    onClick={handleCopyContract}
                    className="text-emerald-400 hover:text-white text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    {copiedContract ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedContract ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <span className="text-emerald-300 break-all text-sm font-bold block">{PREPROD_CONTRACT_ADDRESS}</span>
              </div>

              <div className="p-4 bg-[#04060a] rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Current Ledger Counter:</span>
                  <span className="text-2xl font-black text-white font-mono block mt-1">{publicCounterState}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Multi-Tenant Map State:</span>
                  <span className="text-xs text-purple-300 font-mono block mt-1">orgPayrollRoots (Active)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modern Workspace Footer */}
      <footer className="w-full border-t border-slate-800/80 bg-[#070b12] py-4 px-6 text-center text-xs text-slate-500 font-mono">
        Vansidian Protocol • Native Midnight Network Zero-Knowledge State Engine • Compact v0.31.1
      </footer>
    </div>
  );
};
