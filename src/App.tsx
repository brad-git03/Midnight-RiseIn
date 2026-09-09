import { useState } from 'react';
import { useMidnight } from './hooks/useMidnight';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkflowBar } from './components/WorkflowBar';
import { DashboardFrame } from './components/DashboardFrame';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { DocsSection } from './components/DocsSection';
import { PrivacyBreakdown } from './components/PrivacyBreakdown';
import { WalletConnect } from './components/WalletConnect';
import { PaystubModal, PaystubData } from './components/PaystubModal';
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

  const [paystubData, setPaystubData] = useState<PaystubData | null>(null);
  const [isPaystubOpen, setIsPaystubOpen] = useState(false);

  const isWalletInstalled = checkWalletInstalled();

  const handleOpenPaystub = (data: PaystubData) => {
    setPaystubData(data);
    setIsPaystubOpen(true);
  };

  const handleClosePaystub = () => {
    setIsPaystubOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Sticky Modern SaaS Top Navbar */}
      <Navbar
        wallet={wallet}
        onConnect={connectWallet}
        onDisconnect={disconnectWallet}
      />

      {/* Main Page Layout Container */}
      <main className="flex-1 w-full flex flex-col items-center overflow-x-hidden">
        {/* 1. Hero Section with Catchphrase, Dynamic Floating Elements & Live Stats */}
        <HeroSection
          onConnectClick={connectWallet}
          isConnected={wallet.isConnected}
        />

        {/* 2. Main Section Container */}
        <div className="w-full max-w-6xl mx-auto px-4 space-y-16">
          {/* About Section */}
          <AboutSection />

          {/* Guided 4-Step Process & Lifecycle */}
          <section id="how-it-works" className="pt-6 scroll-mt-20">
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

          {/* 3. Interactive ZK Vault & Terminal Dashboard with Roster & Paystubs */}
          <section id="terminal" className="scroll-mt-20">
            <DashboardFrame
              privateWitnessValue={privateWitnessValue}
              onWitnessChange={setPrivateWitnessValue}
              publicCounterState={publicCounterState}
              circuitState={circuitCall}
              onExecute={executeCircuitCall}
              isConnected={wallet.isConnected}
              onOpenPaystub={handleOpenPaystub}
            />
          </section>

          {/* 4. Enterprise Capabilities Grid */}
          <section id="capabilities" className="scroll-mt-20">
            <CapabilitiesGrid />
          </section>

          {/* 5. Interactive Developer Documentation Section */}
          <DocsSection />

          {/* 6. Security & Privacy Transparency Comparison */}
          <section id="security" className="scroll-mt-20">
            <PrivacyBreakdown />
          </section>
        </div>
      </main>

      {/* Downloadable / Printable Confidential ZK Paystub Certificate Modal */}
      <PaystubModal
        isOpen={isPaystubOpen}
        onClose={handleClosePaystub}
        data={paystubData}
      />

      {/* Modern SaaS Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/90 py-12 px-6 mt-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <Logo size={34} showText={true} />
          <p className="text-xs text-slate-400">
            Vansidian • Enterprise Zero-Knowledge State & Audit Engine • Built natively for Midnight Network
          </p>
          <div className="flex items-center gap-5 text-xs font-semibold text-slate-400">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#terminal" className="hover:text-purple-400 transition-colors">Terminal</a>
            <a href="#documentation" className="hover:text-purple-400 transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
