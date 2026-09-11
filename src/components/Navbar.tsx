import React, { useState } from 'react';
import { Logo } from './Logo';
import { WalletState } from '../hooks/useMidnight';
import { Wallet, ExternalLink, ShieldCheck, LogOut, Menu, X, ArrowRight, Terminal, BookOpen, Layers, Info, Sparkles } from 'lucide-react';

interface NavbarProps {
  wallet: WalletState;
  onConnect: () => void;
  onDisconnect: () => void;
  onLaunchApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ wallet, onConnect, onDisconnect, onLaunchApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-purple-500/20 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Official Brand Logo */}
          <a href="#hero" className="flex items-center no-underline focus:outline-none">
            <Logo size={36} showText={true} />
          </a>

          {/* Center SaaS Navigation Menus (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="#about"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-200 flex items-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5 text-purple-400" />
              <span>About</span>
            </a>
            <a
              href="#how-it-works"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-200 flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>How It Works</span>
            </a>
            <button
              onClick={onLaunchApp}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Terminal</span>
            </button>
            <a
              href="#documentation"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all duration-200 flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Documentation</span>
            </a>
          </nav>

          {/* Right Actions: Launch App & Wallet Connection */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/brad-git03/Midnight-RiseIn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {wallet.isConnected ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs font-mono text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
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
                className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-purple-500/30 text-purple-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                <Wallet className="w-3.5 h-3.5 text-purple-400" />
                <span>{wallet.isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
              </button>
            )}

            {/* Launch App Dedicated Button */}
            <button
              onClick={onLaunchApp}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-600/30 transition-all duration-200 active:scale-95 cursor-pointer hover:shadow-purple-600/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
              <span>Launch App</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800/80 bg-slate-950/98 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900 rounded-lg flex items-center gap-2"
            >
              <Info className="w-4 h-4 text-purple-400" />
              <span>About</span>
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900 rounded-lg flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>How It Works</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLaunchApp();
              }}
              className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900 rounded-lg flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Terminal</span>
            </button>
            <a
              href="#documentation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-900 rounded-lg flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Documentation</span>
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLaunchApp();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 text-white rounded-xl font-bold text-sm shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch App Terminal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
