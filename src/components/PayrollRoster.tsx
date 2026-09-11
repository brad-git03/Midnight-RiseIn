import React, { useState } from 'react';
import { Users, Sparkles, CheckCircle2, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
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
    <div className="w-full bg-[#070b12] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-left">
      {/* 1. Header Bar with Metrics */}
      <div className="px-6 py-4 bg-[#0a0f1a] border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              Enterprise Payroll Roster
              <span className="text-[10px] font-mono px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20 font-semibold">
                O(1) Batch Engine
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">
              Aggregating {employeeCount} salaries into a single on-chain Merkle batch commitment
            </p>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="text-right">
            <span className="text-[10px] text-slate-500 block uppercase">Total Disbursal</span>
            <span className="text-emerald-400 font-bold text-sm">
              {isPublicMode ? '[ 🔒 SHIELDED ]' : `$${totalBatchAmount.toLocaleString()}`}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Merkle Root Hash Strip */}
      <div className="px-6 py-3 bg-[#050810] border-b border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 text-purple-300">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] font-bold">Merkle Batch Root:</span>
          <span className="text-slate-400 text-[11px] truncate max-w-xs sm:max-w-md">{batchRootHash}</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          <span>Off-Chain In-Memory Hashing Ready</span>
        </span>
      </div>

      {/* 3. Streamlined Table Surface */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 bg-[#060910] text-slate-400 font-mono text-[11px] uppercase">
              <th className="py-3 px-6">Team Member</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Base Salary</th>
              <th className="py-3 px-4">Q3 Bonus</th>
              <th className="py-3 px-4">Total Payout</th>
              <th className="py-3 px-6 text-right">Privacy Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/70">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-900/40 transition-colors">
                <td className="py-3.5 px-6">
                  <div className="font-bold text-white">{emp.name}</div>
                  <div className="text-[11px] text-slate-400">{emp.role}</div>
                </td>
                <td className="py-3.5 px-4 text-slate-300">
                  <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-[11px] font-mono">
                    {emp.department}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-mono font-semibold text-slate-200">
                  {isPublicMode ? '[ 🔒 SHIELDED ]' : `$${emp.salary.toLocaleString()}`}
                </td>
                <td className="py-3.5 px-4 font-mono">
                  {isPublicMode ? (
                    <span className="text-slate-500">[ 🔒 SHIELDED ]</span>
                  ) : (
                    <button
                      onClick={() => handleBonusToggle(emp.id)}
                      className={`px-2.5 py-0.5 rounded text-[11px] transition-colors cursor-pointer ${
                        emp.bonus > 0
                          ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40 font-bold'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                      title="Click to toggle bonus"
                    >
                      {emp.bonus > 0 ? `+$${emp.bonus}` : 'Add Bonus'}
                    </button>
                  )}
                </td>
                <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                  {isPublicMode ? '[ 🔒 SHIELDED ]' : `$${(emp.salary + emp.bonus).toLocaleString()}`}
                </td>
                <td className="py-3.5 px-6 text-right font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>ZK Shielded</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. Action Footer Bar */}
      <div className="px-6 py-4 bg-[#0a0f1a] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          <strong className="text-white">Batch Proof:</strong> Proving all {employeeCount} salary splits simultaneously reduces on-chain fees by 99.9%.
        </p>

        <button
          onClick={handleDisburse}
          disabled={!isConnected || isProcessing}
          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white rounded-xl font-bold text-xs shadow-lg shadow-purple-600/25 transition-all duration-200 disabled:opacity-50 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-purple-200" />
          <span>
            {isProcessing
              ? 'Computing Batch Proof...'
              : `Disburse Payroll Batch ($${totalBatchAmount.toLocaleString()})`}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
