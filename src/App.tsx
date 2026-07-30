import { useMidnight } from './hooks/useMidnight';
import { WalletConnect } from './components/WalletConnect';
import { WorkflowBar } from './components/WorkflowBar';
import { DualStateDashboard } from './components/DualStateDashboard';
import { ZKPipeline } from './components/ZKPipeline';
import { PrivacyBreakdown } from './components/PrivacyBreakdown';
import { Shield, Lock, Github } from 'lucide-react';

export function App() {
  const {
    wallet,
    privateWitnessValue,
    setPrivateWitnessValue,
    publicCounterState,
    circuitCall,
    connectWallet,
    disconnectWallet,
    executeCircuitCall,
    checkWalletInstalled,
  } = useMidnight();

  const isWalletInstalled = checkWalletInstalled();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Glow Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 shadow-lg shadow-indigo-600/10">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Vansidian
                <span className="text-xs font-mono px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-md font-normal">
                  Preprod Testnet
                </span>
              </h1>
              <p className="text-xs text-slate-400">Enterprise Zero-Knowledge State & Audit Engine</p>
            </div>
          </div>

          <a
            href="https://github.com/brad-git03/Midnight-RiseIn"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl transition-all hover:border-slate-700"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 space-y-6 relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-medium text-indigo-300 mb-1">
            <Lock className="w-3.5 h-3.5 text-indigo-400" />
            Midnight Network • Zero-Knowledge Dual-State DApp
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Confidential State & Proof Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Execute zero-knowledge circuit transitions locally in your browser. All private witness parameters remain strictly on your device and are never exposed to the public network.
          </p>
        </section>

        {/* 1. Guided 3-Step Workflow Banner */}
        <WorkflowBar
          isConnected={wallet.isConnected}
          hasWitnessValue={Boolean(privateWitnessValue)}
          isConfirmed={circuitCall.stage === 'confirmed'}
        />

        {/* 2. Wallet Connection Card */}
        <WalletConnect
          wallet={wallet}
          onConnect={connectWallet}
          onDisconnect={disconnectWallet}
          isWalletInstalled={isWalletInstalled}
        />

        {/* 3. Real-Time ZK Execution Pipeline Banner */}
        <ZKPipeline
          stage={circuitCall.stage}
          isCalling={circuitCall.isCalling}
          txHash={circuitCall.txHash}
        />

        {/* 4. Dual-State Visual Dashboard (Private Witness Vault vs Public Ledger State) */}
        <DualStateDashboard
          privateWitnessValue={privateWitnessValue}
          onWitnessChange={setPrivateWitnessValue}
          publicCounterState={publicCounterState}
          circuitState={circuitCall}
          onExecute={executeCircuitCall}
          isConnected={wallet.isConnected}
        />

        {/* 5. Privacy Transparency Breakdown */}
        <PrivacyBreakdown />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 relative z-10">
        <p>Vansidian • Built for Midnight Builder Challenge • Network: Preprod Testnet</p>
      </footer>
    </div>
  );
}

export default App;
