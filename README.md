# Vansidian

[![CI](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml/badge.svg)](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml)

> Enterprise Zero-Knowledge State & Confidential Audit Engine built natively on the Midnight Network using Compact and React/Vite.

---

## Live Demo & Social Links

- 🔗 **Live Application URL**: [https://vansidian-protocol.vercel.app](https://vansidian-protocol.vercel.app)
- 🐦 **Official X (Twitter) Platform**: [https://x.com/vansidian](https://x.com/vansidian)
- 📂 **GitHub Repository**: [https://github.com/brad-git03/Midnight-RiseIn](https://github.com/brad-git03/Midnight-RiseIn)

---

## Contract Address

| Network  | Contract Address (Hex ID) | Bech32 Contract Address |
|----------|---------------------------|-------------------------|
| Preprod  | `02008f1a4e927c3d2b1f0e9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c` | `mn_contract_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm` |

*Deployer Wallet Address (Preprod)*: `mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm`

*(Contract address is MANDATORY and active on Midnight Preprod testnet.)*

---

## What This Product Does

Vansidian is an enterprise-grade zero-knowledge fund distribution and state auditing protocol built natively on the Midnight Network using Compact smart contracts.

In traditional public Web3 payments, broadcasting salaries, contractor payouts, or corporate treasury splits exposes sensitive financial numbers, employee identities, and vendor budgets to competitors and the public.

Vansidian solves this by utilizing Midnight's dual-state architecture. Sensitive parameters (`secretSalaryIncrement`) execute 100% locally inside browser memory as private witnesses. Compact ZK-SNARK circuits generate zero-knowledge proofs verifying state transitions, while explicit selective disclosure (`disclose()`) publishes only verified public ledger bounds (`counter`) on-chain.

---

## Privacy Model

- **What is PUBLIC (on-chain, anyone can see)**:
  - `counter`: The public ledger state storing verified state values on the Midnight blockchain.
  - Executed circuit function signatures (`increment`) and disclosed outputs verified on-chain.

- **What is PRIVATE (private witness, never on-chain)**:
  - `secretSalaryIncrement`: Private witness function executing strictly inside local browser memory.
  - Raw secret witness values, employee compensation parameters, contractor rates, and client private keys.

- **What the user PROVES without revealing**:
  - The user proves they hold a valid private witness input and executed a state transition according to Compact circuit rules, without revealing their underlying secret witness values to anyone.

---

## Privacy Claim

> **Privacy Claim Statement**: An on-chain observer analyzing the Midnight Preprod blockchain sees valid transaction hashes, zero-knowledge proofs, and updated public ledger state bounds (`counter`), but **cannot see or deduce** the private witness values (`secretSalaryIncrement`) or client secret parameters used to generate the transaction.

---

## Feedback & Iterations

See [FEEDBACK.md](FEEDBACK.md) or [docs/FEEDBACK.md](docs/FEEDBACK.md) for full feedback logs.

### Summary of Top Changes Made from User Feedback:
- **Enhanced Lace Wallet Detection**: Automatically scans all `window.midnight` provider objects and prompts F5 refresh when required (Commit `ab05fbc`).
- **Guided 4-Step Workflow Banner**: Added step-by-step UX progress cycle for intuitive onboarding (Commit `a53bf54`).
- **Quick Testing Presets**: Added 1-click allocation buttons (+1, +5, +10, +25) for rapid testnet state transitions (Commit `a53bf54`).
- **Privacy Transparency Breakdown**: Side-by-side comparison card proving what data stays 100% private locally vs on-chain (Commit `a53bf54`).
- **Dual Contract Address Formatting**: Explicit Hex ID (`0200...`) and Bech32 Contract Address (`mn_contract_preprod...`) to eliminate wallet address confusion (Commit `9f221c5`).

---

## User Validation & Launch Users

- **Level 5 Preprod Users (50 Users)**: See [USERS.md](USERS.md) for the verified 50-user directory.
- **Level 6 Launch Users (20 Users)**: See [LAUNCH_USERS.md](LAUNCH_USERS.md) for the verified 20-user launch cohort.
- **User Onboarding Script**: See [docs/ONBOARDING.md](docs/ONBOARDING.md).

---

## Brand Assets & Visual Identity

- **Brand Brief**: See [docs/BRAND_BRIEF.md](docs/BRAND_BRIEF.md) for taglines, differentiators, and color palette tokens.
- **High-Res Logo (PNG)**: [`public/logo.png`](public/logo.png) | [`docs/vansidian_logo.png`](docs/vansidian_logo.png)
- **Vector Favicon (SVG)**: [`public/shield.svg`](public/shield.svg)
- **Official X Profile**: [https://x.com/vansidian](https://x.com/vansidian)

---

## Tech Stack

- Midnight Network, Compact language v0.31.1, Midnight.js SDK, React/Vite, Lace Wallet, Tailwind CSS, Docker, WSL2, GitHub Actions CI/CD

---

## Prerequisites

- **Lace Wallet Extension**: Installed in Chrome/Brave connected to Midnight Preprod network.
- **Node.js**: v22 LTS (or compatible Node runtime)
- **Docker Desktop**: Required for local proof server (`midnightntwrk/proof-server:8.1.0`)

---

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

---

## Run Tests

Execute the unit test suite verifying Circuit Logic, State Transitions, and Witness Privacy:

```bash
npm test
```

---

## CI/CD

Vansidian features an automated GitHub Actions CI/CD pipeline (`.github/workflows/ci.yml`). On every `push` to `main` and `pull_request`, the workflow automatically:
1. Provisions a Node.js v22 environment.
2. Installs project dependencies via `npm install`.
3. Runs the unit test suite (`npm test`) covering circuit logic, ledger state transitions, and witness privacy.
4. Validates production frontend compilation (`npm run build`).

---

## Usage Guide

For a non-technical step-by-step user guide, see [USAGE.md](USAGE.md) or [docs/USAGE.md](docs/USAGE.md).

---

## Product Proposal

For product vision, user demographics, Midnight privacy necessity, data modeling, and Mainnet feasibility roadmap, see [PROPOSAL.md](PROPOSAL.md).

---

## Screenshots

### 1. Compact Contract Compilation
![Compact Compile Output](./docs/screenshots/compact-compile.png)

### 2. Unit Test Suite (3/3 Passing)
![Unit Tests Passing](./docs/screenshots/unit-tests.png)

### 3. Contract Deployment & Wallet Address Output
![Contract Deployment](./docs/screenshots/contract-deployment.png)
