import React from 'react';
import { Logo } from './Logo';
import { WalletState } from '../hooks/useMidnight';
import { Wallet, ExternalLink, ShieldCheck, LogOut } from 'lucide-react';

interface NavbarProps {
  wallet: WalletState;
  onConnect: () => void;
  onDisconnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ wallet, onConnect, onDisconnect }) => {
  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-6 py-3.5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="no-underline">
          <Logo size={38} showText={true} />
        </a>

        {/* Center Navigation Links (SariPay inspired) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a
            href="#hero"
            className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Overview
          </a>
          <a
            href="#dashboard"
            className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
          >
            ZK Engine & Vault
          </a>
          <a
            href="#how-it-works"
            className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
          >
            How It Works
          </a>
          <a
            href="#capabilities"
            className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Capabilities
          </a>
          <a
            href="#security"
            className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
          >
            Security & Privacy
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/brad-git03/Midnight-RiseIn"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition-colors"
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
                className="p-2 bg-slate-900 border border-slate-800 hover:bg-rose-500/10 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 rounded-xl transition-colors"
                title="Disconnect Lace Wallet"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onConnect}
              disabled={wallet.isConnecting}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all duration-200 active:scale-95"
            >
              <Wallet className="w-3.5 h-3.5" />
              <span>{wallet.isConnecting ? 'Connecting...' : 'Connect Lace Wallet'}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
