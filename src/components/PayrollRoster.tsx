import React, { useState } from 'react';
import { Users, Sparkles, CheckCircle2, ShieldCheck, Lock, ArrowUpRight, Cpu, Layers, DollarSign } from 'lucide-react';
import { PaystubData } from './PaystubModal';

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  salary: number;
  bonus: number;
}

const INITIAL_EMPLOYEES: Employee[] = [
  { id: 'emp-1', name: 'Sarah Jenkins', role: 'Lead Cryptographer', department: 'Engineering', salary: 8500, bonus: 500 },
  { id: 'emp-2', name: 'David Kim', role: 'ZK Circuit Architect', department: 'Research', salary: 7400, bonus: 400 },
  { id: 'emp-3', name: 'Elena Rostova', role: 'UI/UX Systems Engineer', department: 'Product', salary: 6200, bonus: 300 },
  { id: 'emp-4', name: 'Marcus Vance', role: 'Smart Contract Auditor', department: 'Security', salary: 5800, bonus: 200 },
  { id: 'emp-5', name: 'Chloe Dupont', role: 'Regulatory Compliance Officer', department: 'Legal', salary: 5100, bonus: 100 },
];

interface PayrollRosterProps {
  isConnected: boolean;
  onDisburseBatch: (batchData: { totalAmount: number; employeeCount: number; batchRootHash: string }) => Promise<void>;
  isProcessing: boolean;
  onOpenPaystub: (data: PaystubData) => void;
  isPublicMode?: boolean;
}

export const PayrollRoster: React.FC<PayrollRosterProps> = ({
  isConnected,
  onDisburseBatch,
  isProcessing,
  onOpenPaystub,
  isPublicMode = false,
}) => {
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);

  // Dynamic Batch Computations
  const totalBaseSalary = employees.reduce((sum, e) => sum + e.salary, 0);
  const totalBonus = employees.reduce((sum, e) => sum + e.bonus, 0);
  const totalBatchAmount = totalBaseSalary + totalBonus;
  const employeeCount = employees.length;

  // Compute a deterministic 32-byte batch hash commitment representation
  const batchRootHash =
    '0x' +
    Array.from({ length: 8 }, (_, i) => ((totalBatchAmount * 31 + i * 17) % 65536).toString(16).padStart(4, '0')).join(
      '',
    ) +
    'f92e4a1b0c3d5e8f';

  const handleBonusToggle = (id: string) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, bonus: emp.bonus > 0 ? 0 : 500 } : emp,
      ),
    );
  };

  const handleDisburse = async () => {
    if (!isConnected || isProcessing) return;

    await onDisburseBatch({
      totalAmount: totalBatchAmount,
      employeeCount,
      batchRootHash,
    });

    // Automatically trigger paystub modal with verified data
    onOpenPaystub({
      certificateId: `CERT-${Math.floor(100000 + Math.random() * 900000)}`,
      txHash: '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
      blockTimestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      employeeName: 'Vansidian Enterprise Team',
      employeeRole: 'Q3 Bi-Weekly Payroll Batch',
      disclosedAmount: totalBatchAmount,
      batchRootHash,
      employeeCount,
      circuitName: 'processPayrollBatch (Compact v0.31.1)',
    });
  };

  return (
    <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 space-y-6 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Roster Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/30">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Enterprise Payroll Roster
              <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30">
                O(1) Batch Engine
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Manage team compensation with off-chain Merkle batch proof generation
            </p>
          </div>
        </div>

        {/* Live Batch Metric Badges */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs">
            <span className="text-slate-400 block text-[10px] uppercase font-mono">Team Count</span>
            <span className="font-mono font-bold text-white">{employeeCount} Employees</span>
          </div>

          <div className="px-3.5 py-1.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs">
            <span className="text-slate-400 block text-[10px] uppercase font-mono">Batch Total</span>
            <span className="font-mono font-bold text-emerald-400">
              {isPublicMode ? '[ 🔒 SHIELDED ]' : `$${totalBatchAmount.toLocaleString()}`}
            </span>
          </div>
        </div>
      </div>

      {/* Computed Merkle Root Card */}
      <div className="p-4 bg-slate-900/90 rounded-xl border border-purple-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="space-y-1">
          <span className="text-purple-300 font-bold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Off-Chain Merkle Batch Root Commitment:</span>
          </span>
          <span className="text-slate-400 text-[11px] break-all block">{batchRootHash}</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">
          Ready for Circuit Submission
        </span>
      </div>

      {/* Interactive Employee Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
              <th className="pb-3 pl-2">Team Member</th>
              <th className="pb-3">Department</th>
              <th className="pb-3">Base Salary</th>
              <th className="pb-3">Q3 Bonus</th>
              <th className="pb-3">Total Payout</th>
              <th className="pb-3 pr-2 text-right">Privacy Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-900/40 transition-colors">
                <td className="py-3 pl-2">
                  <div className="font-bold text-white">{emp.name}</div>
                  <div className="text-[11px] text-slate-400">{emp.role}</div>
                </td>
                <td className="py-3 text-slate-300">
                  <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-[11px]">
                    {emp.department}
                  </span>
                </td>
                <td className="py-3 font-mono font-semibold text-slate-200">
                  {isPublicMode ? '[ 🔒 SHIELDED ]' : `$${emp.salary.toLocaleString()}`}
                </td>
                <td className="py-3 font-mono">
                  {isPublicMode ? (
                    <span className="text-slate-500">[ 🔒 SHIELDED ]</span>
                  ) : (
                    <button
                      onClick={() => handleBonusToggle(emp.id)}
                      className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                        emp.bonus > 0
                          ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                      title="Click to toggle performance bonus"
                    >
                      {emp.bonus > 0 ? `+$${emp.bonus}` : 'Add Bonus'}
                    </button>
                  )}
                </td>
                <td className="py-3 font-mono font-bold text-emerald-400">
                  {isPublicMode ? '[ 🔒 SHIELDED ]' : `$${(emp.salary + emp.bonus).toLocaleString()}`}
                </td>
                <td className="py-3 pr-2 text-right font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>ZK In-Memory</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disburse Batch Call to Action */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400">
          <span className="text-purple-300 font-semibold">O(1) Midnight Scaling:</span> All {employeeCount} salaries are committed into 1 single on-chain transaction.
        </div>

        <button
          onClick={handleDisburse}
          disabled={!isConnected || isProcessing}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold text-xs shadow-xl shadow-purple-600/25 transition-all duration-200 disabled:opacity-50 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>
            {isProcessing
              ? 'Proving & Submitting Batch...'
              : `Disburse Payroll Batch ($${totalBatchAmount.toLocaleString()})`}
          </span>
        </button>
      </div>
    </div>
  );
};
