import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<PS> = {
  secretSalaryAmount(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, bigint];
  secretBatchHash(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  secretBatchTotalAmount(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, bigint];
  secretEmployeeCount(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, bigint];
}

export type ImpureCircuits<PS> = {
  processPayrollBatch(context: __compactRuntime.CircuitContext<PS>,
                      orgId_0: Uint8Array,
                      newBatchRoot_0: Uint8Array,
                      batchTotalAmount_0: bigint,
                      employeeCount_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  increment(context: __compactRuntime.CircuitContext<PS>, val_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
}

export type ProvableCircuits<PS> = {
  processPayrollBatch(context: __compactRuntime.CircuitContext<PS>,
                      orgId_0: Uint8Array,
                      newBatchRoot_0: Uint8Array,
                      batchTotalAmount_0: bigint,
                      employeeCount_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  increment(context: __compactRuntime.CircuitContext<PS>, val_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
}

export type PureCircuits = {
}

export type Circuits<PS> = {
  processPayrollBatch(context: __compactRuntime.CircuitContext<PS>,
                      orgId_0: Uint8Array,
                      newBatchRoot_0: Uint8Array,
                      batchTotalAmount_0: bigint,
                      employeeCount_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  increment(context: __compactRuntime.CircuitContext<PS>, val_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
}

export type Ledger = {
  readonly totalBatchesProcessed: bigint;
  readonly totalVolumeDisbursed: bigint;
  readonly counter: bigint;
  orgPayrollRoots: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): Uint8Array;
    [Symbol.iterator](): Iterator<[Uint8Array, Uint8Array]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): Promise<__compactRuntime.ConstructorResult<PS>>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
export declare const expectedVk: Record<string, string>;
