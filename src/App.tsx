import { useMidnight } from './hooks/useMidnight';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkflowBar } from './components/WorkflowBar';
import { DashboardFrame } from './components/DashboardFrame';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { PrivacyBreakdown } from './components/PrivacyBreakdown';
import { WalletConnect } from './components/WalletConnect';
import { Logo } from './components/Logo';

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
      {/* Sticky Top Navbar */}
      <Navbar
        wallet={wallet}
        onConnect={connectWallet}
        onDisconnect={disconnectWallet}
      />

      {/* Main Page Layout Container */}
      <main className="flex-1 w-full flex flex-col items-center overflow-x-hidden">
        {/* 1. Hero Section & Stats */}
        <HeroSection
          onConnectClick={connectWallet}
          isConnected={wallet.isConnected}
        />

        {/* 2. Main Section Container */}
        <div className="w-full max-w-6xl mx-auto px-4 space-y-10">
          {/* Guided 4-Step Process Banner */}
          <section id="how-it-works" className="pt-4">
            <WorkflowBar
              isConnected={wallet.isConnected}
              hasWitnessValue={Boolean(privateWitnessValue)}
              isConfirmed={circuitCall.stage === 'confirmed'}
            />
          </section>

          {/* Wallet Modal / Connection Box (if disconnected) */}
          {!wallet.isConnected && (
            <WalletConnect
              wallet={wallet}
              onConnect={connectWallet}
              onDisconnect={disconnectWallet}
              isWalletInstalled={isWalletInstalled}
            />
          )}

          {/* 3. Interactive Window Frame Dashboard */}
          <DashboardFrame
            privateWitnessValue={privateWitnessValue}
            onWitnessChange={setPrivateWitnessValue}
            publicCounterState={publicCounterState}
            circuitState={circuitCall}
            onExecute={executeCircuitCall}
            isConnected={wallet.isConnected}
          />

          {/* 4. Core Enterprise Capabilities Grid */}
          <CapabilitiesGrid />

          {/* 5. Security & Privacy Transparency Comparison */}
          <section id="security">
            <PrivacyBreakdown />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/80 py-10 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size={32} showText={true} />
          <p className="text-xs text-slate-500">
            Vansidian • Enterprise Zero-Knowledge State & Audit Engine • Built for Midnight Builder Challenge
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Overview</a>
            <a href="#dashboard" className="hover:text-white transition-colors">ZK Engine</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
