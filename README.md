# Vansidian

[![CI](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml/badge.svg)](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml)

> Enterprise Zero-Knowledge State & Confidential Audit Engine built on the Midnight Network using Compact and React/Vite.

## Live Demo

🔗 **Live Application URL**: [https://vansidian-protocol.vercel.app](https://vansidian-protocol.vercel.app)

## Contract Address

| Network  | Address                              |
|----------|--------------------------------------|
| Preprod  | `mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm` |

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

## Level 5 — User Validation

- **Target**: 50 Preprod testnet users
- **Current Count**: **50 / 50 Verified Preprod Users**
- **User Directory**: See [USERS.md](USERS.md) for the verified Preprod wallet address directory.
- **Feedback & Iterations Log**: See [docs/FEEDBACK.md](docs/FEEDBACK.md) for feedback collection, themes, and implemented product changes.

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
