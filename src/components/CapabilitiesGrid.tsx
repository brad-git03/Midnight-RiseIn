import React from 'react';
import { Lock, EyeOff, ShieldCheck, Cpu, Layers, Fingerprint } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  const capabilities = [
    {
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      title: 'Smart Client Witness',
      description: 'Private inputs execute 100% locally in browser memory before proof generation.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: 'In-Browser ZK-SNARK Prover',
      description: 'Zero-Knowledge proofs are calculated locally using the Compact compiler runtime.',
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: 'Selective Disclosure Bounds',
      description: 'Public ledger state updates only through explicit `disclose()` compiler rules.',
    },
    {
      icon: <EyeOff className="w-5 h-5 text-rose-400" />,
      title: 'Zero Plaintext Exposure',
      description: 'Raw secret values never leak to RPC nodes, network indexers, or public block explorers.',
    },
    {
      icon: <Fingerprint className="w-5 h-5 text-cyan-400" />,
      title: 'Verifiable State Consensus',
      description: 'Midnight consensus nodes verify cryptographic proofs without seeing private inputs.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Enterprise Compliance Logs',
      description: 'Produces audit trails backed by immutable, zero-knowledge proofs on Preprod.',
    },
  ];

  return (
    <section id="capabilities" className="w-full max-w-6xl mx-auto my-20 px-4">
      <div className="text-center mb-12">
        <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-2">
          Enterprise Security Architecture
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Capabilities Built for Zero-Knowledge Trust
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2 max-w-2xl mx-auto">
          Vansidian guarantees total privacy on the client side while maintaining verifiable trust on the Midnight blockchain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            className="p-6 glass-panel rounded-2xl border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-4 group-hover:scale-110 transition-transform">
              {cap.icon}
            </div>
            <h4 className="text-base font-bold text-white mb-2">{cap.title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
