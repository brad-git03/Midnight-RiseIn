import { useMidnight } from './hooks/useMidnight';
import { WalletConnect } from './components/WalletConnect';
import { CircuitCall } from './components/CircuitCall';
import { Shield, Lock, EyeOff, Layers, Github } from 'lucide-react';

export function App() {
  const {
    wallet,
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
            <div className="p-2.5 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                AegisVault Protocol
                <span className="text-xs font-mono px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-md font-normal">
                  Preprod
                </span>
              </h1>
              <p className="text-xs text-slate-400">Enterprise Zero-Knowledge State & Audit Engine</p>
            </div>
          </div>

          <a
            href="https://github.com/brad-git03/Midnight-RiseIn"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub Repo
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 space-y-8 relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-medium text-indigo-300 mb-2">
            <Lock className="w-3.5 h-3.5 text-indigo-400" />
            Midnight Builder Challenge — Level 2
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Confidential DApp Interface
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Execute zero-knowledge circuit transitions locally in your browser. All private witness inputs remain strictly on your device and are never exposed to the public network.
          </p>
        </section>

        {/* Core Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 3: Wallet Connection Component */}
          <WalletConnect
            wallet={wallet}
            onConnect={connectWallet}
            onDisconnect={disconnectWallet}
            isWalletInstalled={isWalletInstalled}
          />

          {/* Step 4: Circuit Execution Component */}
          <CircuitCall
            circuitState={circuitCall}
            onExecute={executeCircuitCall}
            isConnected={wallet.isConnected}
          />
        </div>

        {/* Feature Grid Banner */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-4 glass-card rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
              <EyeOff className="w-4 h-4" />
              Client-Side Witness
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Secret inputs execute strictly in local browser memory. Zero plaintext exposure to RPC nodes.
            </p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
              <Lock className="w-4 h-4" />
              Browser Proof Gen
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              ZK-SNARK proofs are calculated locally using the Compact compiler assets and proof client.
            </p>
          </div>

          <div className="p-4 glass-card rounded-xl border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <Layers className="w-4 h-4" />
              Selective Disclosure
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Public ledger state updates only through explicit `disclose()` bounds verified on Preprod.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 relative z-10">
        <p>AegisVault Protocol • Built for Midnight Builder Challenge Level 2 • Network: Preprod</p>
      </footer>
    </div>
  );
}

export default App;
