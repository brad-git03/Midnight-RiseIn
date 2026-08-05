# How to Use Vansidian (Confidential Payroll & Treasury Engine)

This guide provides plain English, step-by-step instructions for non-technical enterprise CFOs, auditors, and Web3 managers using **Vansidian** to execute zero-knowledge confidential payroll allocations and state verification.

---

## What You Need

Before getting started, make sure you have:
1. **Google Chrome or Brave Browser** installed on your desktop.
2. **Lace Wallet Browser Extension** installed with access to the **Midnight Preprod Testnet**.
3. Free testnet `tNIGHT` tokens in your wallet (available from the [Preprod Faucet](https://midnight-tmnight-preprod.nethermind.dev)).

---

## Step-by-Step Guide

### Step 1: Access the Vansidian DApp
Open your browser and navigate to the live DApp URL:  
👉 **[https://vansidian-protocol.vercel.app](https://vansidian-protocol.vercel.app)**

### Step 2: Connect Your Lace Wallet
1. Click the purple **Connect Lace Wallet** button in the top right corner of the navbar.
2. Accept the connection request in the Lace Wallet popup window.
3. Your connected wallet address (`mn_addr_preprod...`) will display in the navigation bar.

### Step 3: Enter Your Confidential Witness Parameter
1. Scroll to the **Private Witness Vault (Left Panel)**.
2. Type in your secret increment or salary allocation parameter (`secretSalaryIncrement`), or click one of the quick preset buttons (`+1`, `+5`, `+10`, `+25`).
3. Notice the lock indicator: 🔒 *"100% Client-Side — Never sent to RPC or blockchain"*. Your secret parameter stays exclusively in your local browser memory.

### Step 4: Execute Zero-Knowledge Proof & On-Chain Settlement
1. Click **Generate ZK Proof & Submit**.
2. Watch the **Real-Time ZK Execution Pipeline** progress across 3 automated stages:
   - **Stage 1 (Local Witness Input)**: Reads parameter in local browser memory.
   - **Stage 2 (Browser ZK-SNARK Prover)**: Calculates cryptographic proof locally.
   - **Stage 3 (On-Chain Verification)**: Submits proof and disclosed state output to Midnight Preprod.
3. Within seconds, the **Public Ledger State (Right Panel)** updates automatically, and a confirmed transaction hash appears in your on-chain history feed.

---

## What Gets Proved (and What Stays Private)

| Item | Visibility | Where It Resides |
| :--- | :--- | :--- |
| **Updated Public Counter State (`counter`)** | 🌐 **PUBLIC (On-Chain)** | Midnight Preprod Ledger |
| **Verified Zero-Knowledge Proof (`ZK-SNARK`)** | 🌐 **PUBLIC (On-Chain)** | Midnight Preprod Ledger |
| **Secret Salary Parameter (`secretSalaryIncrement`)** | 🔒 **PRIVATE (Off-Chain)** | Local Client Browser Memory Only |
| **Wallet Seeds & Private Keys** | 🔒 **PRIVATE (Off-Chain)** | Client Lace Wallet Extension |

---

## Troubleshooting

### Issue: "Lace Wallet Extension Not Detected"
- **Solution**: Ensure the Lace Wallet extension is enabled in your browser extensions manager. Press **F5 (Refresh)** on the webpage after enabling the extension.

### Issue: "Network Mismatch"
- **Solution**: Open Lace Wallet ➔ Settings ⚙️ ➔ Network ➔ Switch network to **Midnight Preprod Testnet**.

### Issue: "Transaction Submission Timeout"
- **Solution**: Ensure your wallet has testnet `tNIGHT` tokens from the [Preprod Faucet](https://midnight-tmnight-preprod.nethermind.dev).
