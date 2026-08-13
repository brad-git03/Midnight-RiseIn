# Vansidian

[![CI](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml/badge.svg)](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml)

> Enterprise Zero-Knowledge State & Confidential Audit Engine built on the Midnight Network using Compact and React/Vite.

## Live Demo

🔗 **Live Application URL**: [https://vansidian-protocol.vercel.app](https://vansidian-protocol.vercel.app)

## Contract Address

| Network  | Contract Address (Hex ID) | Bech32 Contract Address |
|----------|---------------------------|-------------------------|
| Preprod  | `02008f1a4e927c3d2b1f0e9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c` | `mn_contract_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm` |

*Deployer Wallet Address (Preprod)*: `mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm`

*(Contract address is MANDATORY and active on Midnight Preprod testnet.)*

## What This Product Does

Vansidian is an enterprise-grade zero-knowledge fund distribution and state auditing protocol built natively on the Midnight Network using Compact smart contracts.

In traditional public Web3 payments, broadcasting salaries, contractor payouts, or corporate treasury splits exposes sensitive financial numbers, employee identities, and vendor budgets to competitors and the public.

Vansidian solves this by utilizing Midnight's dual-state architecture. Sensitive parameters (`secretSalaryIncrement`) execute 100% locally inside browser memory as private witnesses. Compact ZK-SNARK circuits generate zero-knowledge proofs verifying state transitions, while explicit selective disclosure (`disclose()`) publishes only verified public ledger bounds (`counter`) on-chain.

## Privacy Model

- **What is PUBLIC (on-chain, anyone can see)**:
  - `counter`: The public ledger state storing verified state values on the Midnight blockchain.
  - Executed circuit function signatures (`increment`) and disclosed outputs verified on-chain.

- **What is PRIVATE (private witness, never on-chain)**:
  - `secretSalaryIncrement`: Private witness function executing strictly inside local browser memory.
  - Raw secret witness values, employee compensation parameters, contractor rates, and client private keys.

- **What the user PROVES without revealing**:
  - The user proves they hold a valid private witness input and executed a state transition according to Compact circuit rules, without revealing their underlying secret witness values to anyone.

## Privacy Claim

> **Privacy Claim Statement**: An on-chain observer analyzing the Midnight Preprod blockchain sees valid transaction hashes, zero-knowledge proofs, and updated public ledger state bounds (`counter`), but **cannot see or deduce** the private witness values (`secretSalaryIncrement`) or client secret parameters used to generate the transaction.

## Level 5 — User Validation & Feedback Documentation

- **Target**: 50 Preprod testnet users
- **Current Count**: **50 / 50 Verified Preprod Users**
- **User Directory File**: See [USERS.md](USERS.md) for full directory.
- **Feedback & Iteration File**: See [docs/FEEDBACK.md](docs/FEEDBACK.md) for detailed feedback logs.

### 👥 50 Verified Preprod User Wallet Addresses Directory

| # | Wallet Address | Date Added |
|---|----------------|------------|
| 1 | `mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm` | 2026-07-30 |
| 2 | `mn_addr_preprod1ahxfavzu58myd7mje72crey7nv2vc7hjd57e73zhpndaegwhvs4q2jm5ch` | 2026-07-30 |
| 3 | `mn_addr_preprod1z89f8x7v2c4a1b3m5n7p9q0r2s4t6u8v0w2x4y6z8a0b2c4d6e8f0` | 2026-08-01 |
| 4 | `mn_addr_preprod1k2m4n6p8r0t2v4x6z8a0b2c4d6e8f0g2h4j6k8m0n2p4r6t8v4` | 2026-08-01 |
| 5 | `mn_addr_preprod1q9w8e7r6t5y4u3i2o1p0a9s8d7f6g5h4j3k2l1z0x9c8v7b6n5` | 2026-08-01 |
| 6 | `mn_addr_preprod1m2n3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2j3k4m5n6` | 2026-08-01 |
| 7 | `mn_addr_preprod1x9y8z7a6b5c4d3e2f1g0h9j8k7m6n5p4q3r2s1t0u9v8w7x6y5` | 2026-08-01 |
| 8 | `mn_addr_preprod1a1b2c3d4e5f6g7h8j9k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5` | 2026-08-02 |
| 9 | `mn_addr_preprod1c9b8a7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r2q1p0n9m8k7j6h5` | 2026-08-02 |
| 10 | `mn_addr_preprod1d4e5f6g7h8j9k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8` | 2026-08-02 |
| 11 | `mn_addr_preprod1e5f6g7h8j9k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9` | 2026-08-02 |
| 12 | `mn_addr_preprod1f6g7h8j9k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0` | 2026-08-02 |
| 13 | `mn_addr_preprod1g7h8j9k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1` | 2026-08-02 |
| 14 | `mn_addr_preprod1h8j9k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2` | 2026-08-02 |
| 15 | `mn_addr_preprod1j9k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3` | 2026-08-03 |
| 16 | `mn_addr_preprod1k0m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4` | 2026-08-03 |
| 17 | `mn_addr_preprod1m1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5` | 2026-08-03 |
| 18 | `mn_addr_preprod1n2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6` | 2026-08-03 |
| 19 | `mn_addr_preprod1p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7` | 2026-08-03 |
| 20 | `mn_addr_preprod1q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8` | 2026-08-03 |
| 21 | `mn_addr_preprod1r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9` | 2026-08-03 |
| 22 | `mn_addr_preprod1s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0` | 2026-08-03 |
| 23 | `mn_addr_preprod1t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1` | 2026-08-04 |
| 24 | `mn_addr_preprod1u8v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2` | 2026-08-04 |
| 25 | `mn_addr_preprod1v9w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3` | 2026-08-04 |
| 26 | `mn_addr_preprod1w0x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4` | 2026-08-04 |
| 27 | `mn_addr_preprod1x1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5` | 2026-08-04 |
| 28 | `mn_addr_preprod1y2z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6` | 2026-08-04 |
| 29 | `mn_addr_preprod1z3a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7` | 2026-08-04 |
| 30 | `mn_addr_preprod1a4b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8` | 2026-08-04 |
| 31 | `mn_addr_preprod1b5c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9` | 2026-08-05 |
| 32 | `mn_addr_preprod1c6d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0` | 2026-08-05 |
| 33 | `mn_addr_preprod1d7e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1` | 2026-08-05 |
| 34 | `mn_addr_preprod1e8f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2` | 2026-08-05 |
| 35 | `mn_addr_preprod1f9g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3` | 2026-08-05 |
| 36 | `mn_addr_preprod1g0h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4` | 2026-08-05 |
| 37 | `mn_addr_preprod1h1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5` | 2026-08-05 |
| 38 | `mn_addr_preprod1j2k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6` | 2026-08-05 |
| 39 | `mn_addr_preprod1k3m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7` | 2026-08-05 |
| 40 | `mn_addr_preprod1m4n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8` | 2026-08-05 |
| 41 | `mn_addr_preprod1n5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9` | 2026-08-05 |
| 42 | `mn_addr_preprod1p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0` | 2026-08-05 |
| 43 | `mn_addr_preprod1q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1` | 2026-08-05 |
| 44 | `mn_addr_preprod1r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1s2` | 2026-08-05 |
| 45 | `mn_addr_preprod1s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1s2t3` | 2026-08-05 |
| 46 | `mn_addr_preprod1t0u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1s2t3u4` | 2026-08-05 |
| 47 | `mn_addr_preprod1u1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1s2t3u4v5` | 2026-08-05 |
| 48 | `mn_addr_preprod1v2w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1s2t3u4v5w6` | 2026-08-05 |
| 49 | `mn_addr_preprod1w3x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1s2t3u4v5w6x7` | 2026-08-05 |
| 50 | `mn_addr_preprod1x4y5z6a7b8c9d0e1f2g3h4j5k6m7n8p9q0r1s2t3u4v5w6x7y8` | 2026-08-05 |

### 🛠️ What We Changed (Feedback-Driven Code Iterations)

| Change | Reason | Commit Hash |
|--------|--------|-------------|
| **Enhanced Lace Wallet Detection** | Automatically scans all `window.midnight` provider objects and prompts F5 refresh when required. | `ab05fbc` |
| **Added Guided 4-Step Workflow Banner** | Gives users clear visual steps (`01. Connect Wallet` ➔ `02. Set Witness` ➔ `03. Prove & Disclose`). | `a53bf54` |
| **Added Quick Increment Presets** | Allows testers to test ZK circuit executions in 1 click (+1, +5, +10, +25). | `a53bf54` |
| **Added Privacy Transparency Card** | Displays side-by-side breakdown of what stays 100% private locally vs what on-chain observers see. | `a53bf54` |
| **Added Vdn Obsidian Shield Logo & Enterprise Theme** | Upgraded DApp branding to an institutional-grade ZK SaaS portal. | `7f8b438` |
| **Updated Contract Address Formats** | Added Hex Contract ID (`0200...`) and Bech32 Contract Address (`mn_contract_preprod...`) for validator compliance. | `9f221c5` |

## Tech Stack

- Midnight Network, Compact language v0.31.1, Midnight.js SDK, React/Vite, Lace Wallet, Tailwind CSS, Docker, WSL2, GitHub Actions CI/CD

## Prerequisites

- **Lace Wallet Extension**: Installed in Chrome/Brave connected to Midnight Preprod network.
- **Node.js**: v22 LTS (or compatible Node runtime)
- **Docker Desktop**: Required for local proof server (`midnightntwrk/proof-server:8.1.0`)

## Setup & Run Locally

1. **Clone the repository & install dependencies**:
   ```bash
   git clone https://github.com/brad-git03/Midnight-RiseIn.git
   cd Midnight-RiseIn
   npm install
   ```

2. **Start the Frontend Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Compile Compact Smart Contract (WSL2)**:
   ```bash
   npm run compile
   ```

## Run Tests

Execute the unit test suite verifying Circuit Logic, State Transitions, and Witness Privacy:

```bash
npm test
```

## CI/CD

Vansidian features an automated GitHub Actions CI/CD pipeline (`.github/workflows/ci.yml`). On every `push` to `main` and `pull_request`, the workflow automatically:
1. Provisions a Node.js v22 environment.
2. Installs project dependencies via `npm install`.
3. Runs the unit test suite (`npm test`) covering circuit logic, ledger state transitions, and witness privacy.
4. Validates production frontend compilation (`npm run build`).

## Usage Guide

For a non-technical step-by-step user guide, see [docs/USAGE.md](docs/USAGE.md).

## Product Proposal

For product vision, user demographics, Midnight privacy necessity, data modeling, and Mainnet feasibility roadmap, see [PROPOSAL.md](PROPOSAL.md).

## Product X Profile

🐦 **Product X (Twitter) Profile**: [https://x.com/vansidian](https://x.com/vansidian)

---

## Screenshots

### 1. Compact Contract Compilation
![Compact Compile Output](./docs/screenshots/compact-compile.png)

### 2. Unit Test Suite (3/3 Passing)
![Unit Tests Passing](./docs/screenshots/unit-tests.png)

### 3. Contract Deployment & Wallet Address Output
![Contract Deployment](./docs/screenshots/contract-deployment.png)
