# How to Use Vansidian (Confidential Payroll & Treasury Engine)

This guide provides plain English, step-by-step instructions for enterprise CFOs, financial auditors, and Web3 managers using **Vansidian** to execute zero-knowledge confidential payroll allocations and verify state transitions on the Midnight Preprod testnet.

---

## What You Need

Before getting started, make sure you have:
1. **Google Chrome or Brave Browser** installed on your desktop.
2. **Lace Wallet Browser Extension** installed with access to the **Midnight Preprod Testnet**.
3. Free testnet `tNIGHT` tokens in your wallet (available instantly from the [Preprod Faucet](https://midnight-tmnight-preprod.nethermind.dev)).

---

## Getting Started on Preprod

1. **Open the Live Application**:  
   👉 Navigate to **[https://vansidian-protocol.vercel.app](https://vansidian-protocol.vercel.app)**.
2. **Connect Lace Wallet**:  
   Click the purple **Connect Lace Wallet** button in the top navigation bar. When the Lace extension pop-up appears, click **Connect**.
3. **Verify Network Status**:  
   The navbar will display a green `● Preprod Synced` indicator and your connected wallet address (`mn_addr_preprod...`).

---

## Your First Transaction (Step-by-Step)

### Step 1: Input Your Confidential Witness Parameter
In the **Private Witness Vault (Left Panel)**:
- Enter your confidential salary allocation parameter (`secretSalaryIncrement`), or click one of the quick preset buttons (**`+1`**, **`+5`**, **`+10`**, **`+25`**).
- *Notice the lock badge*: 🔒 **100% Client-Side Witness** — Your parameter executes exclusively in your browser memory and is NEVER broadcast in plaintext to the blockchain.

### Step 2: Generate ZK Proof & Submit
Click **Generate ZK Proof & Submit**. The animated **ZK Execution Pipeline** will process three automated stages:
1. **Stage 1 (Local Witness Input)**: Reads your private parameter locally inside browser memory.
2. **Stage 2 (Browser ZK-SNARK Prover)**: Calculates a zero-knowledge proof using Compact v0.31.1 circuit assets.
3. **Stage 3 (On-Chain Verification)**: Submits the cryptographic proof and selective disclosure output (`disclose()`) to the Midnight Preprod blockchain.

### Step 3: Audit On-Chain Verification
Within seconds, the **Public Ledger State (Right Panel)** updates automatically, and a confirmed transaction hash is recorded in your live on-chain history feed.

---

## What Gets Proved (and What Stays Private)

| Data Component | Privacy Level | Where It Resides |
| :--- | :--- | :--- |
| **Public Ledger State (`counter`)** | 🌐 **PUBLIC (On-Chain)** | Midnight Preprod Blockchain |
| **ZK Proof Signature (`ZK-SNARK`)** | 🌐 **PUBLIC (On-Chain)** | Midnight Preprod Blockchain |
| **Secret Witness Parameter (`secretSalaryIncrement`)** | 🔒 **PRIVATE (Off-Chain)** | Local Client Browser Memory |
| **Private Keys & Seed Phrases** | 🔒 **PRIVATE (Off-Chain)** | User's Lace Wallet Extension |

---

## Troubleshooting

- **Lace Wallet Not Detected**: Make sure the Lace extension is active in your browser. Press **F5 (Refresh)** after enabling the extension.
- **Network Mismatch**: Open Lace Wallet ➔ Settings ⚙️ ➔ Switch network to **Midnight Preprod Testnet**.
- **Zero Balance**: Claim free testnet `tNIGHT` tokens from the [Nethermind Faucet](https://midnight-tmnight-preprod.nethermind.dev).
