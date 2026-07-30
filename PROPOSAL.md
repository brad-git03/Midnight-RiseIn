# Product Proposal

## What is the product, and who uses it?
Vansidian is an **Enterprise Zero-Knowledge State & Confidential Audit Engine** built natively on the Midnight Network. The product enables corporate treasuries, financial institutions, supply chain managers, and privacy-conscious Web3 enterprises to execute verifiable state updates and maintain immutable audit compliance records—without ever exposing sensitive business data, private financial numbers, or user identity on-chain.

**Target Users**:
- **Corporate CFOs & Finance Managers**: Executing confidential budget allocations and payroll verification.
- **Enterprise Auditors & Regulators**: Verifying business rule compliance on-chain without accessing private customer data.
- **Web3 Enterprises & Supply Chain Networks**: Performing private state updates and proof-of-settlement without revealing trade secrets to competitors.

## Why Midnight specifically?
Traditional public blockchains (such as Ethereum, Bitcoin, or Cardano) enforce complete transparency: every smart contract state parameter, wallet balance, and transaction amount is publicly exposed on-chain. For enterprise operations, this transparency is a fatal flaw—it leaks trade secrets, supplier invoices, and employee salaries to competitors and bad actors.

**Midnight uniquely solves this through its dual-state architecture**:
1. **Client-Side Private Witness (`witness`)**: Sensitive parameters (`secretIncrement`, private keys, intermediate calculation states) execute 100% locally in browser memory. Raw data never touches the network.
2. **Zero-Knowledge Proof Verification (`ZK-SNARK`)**: Midnight verifies that state transitions follow Compact contract rules without reading the underlying private inputs.
3. **Selective Disclosure (`disclose()`)**: Compact forces developers to explicitly state what public ledger outputs (`counter`) are published on-chain, preventing accidental data leakage at the compiler level.

No transparent blockchain can offer this combination of public consensus verifiability and complete client data confidentiality.

## Data Model

| Data Point | Type | Disclosed To |
|---|---|---|
| Public Counter State (`counter`) | Public ledger | Everyone (On-chain, Block Explorers) |
| Verified ZK Proof (`ZK-SNARK`) | Public ledger | Everyone (Verifiable on Midnight Network) |
| Executed Circuit Method (`increment`) | Public ledger | Everyone (On-chain contract signature) |
| Secret Witness Parameter (`secretIncrement`) | Private witness | No one (Local Browser Memory Only) |
| HD Wallet Private Keys & Seeds | Private witness | No one (Client Wallet Only) |
| Intermediate Proof Calculation State | Private witness | No one (Ephemeral Browser Context) |

## Mainnet Feasibility
Vansidian is highly realistic to reach **Midnight Mainnet by Level 6**. 

**Technical Feasibility Assessment**:
- **Standard Compact Architecture**: The smart contract (`counter.compact`) is written in native Compact `v0.31.1` and compiles cleanly into prover keys (`.prover`), verifier keys (`.verifier`), and ZKIR bytecode (`.zkir`).
- **Production SDK Integration**: The frontend is integrated with official `@midnight-ntwrk/midnight-js-*` SDKs and the Lace Wallet DApp connector API.
- **Deployment Readiness**: The system currently deploys and executes verified transactions on Midnight Preprod (`mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm`). Migrating to Mainnet requires only updating network environment IDs and target node endpoints.
