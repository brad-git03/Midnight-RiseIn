# Vansidian

[![CI](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml/badge.svg)](https://github.com/brad-git03/Midnight-RiseIn/actions/workflows/ci.yml)

> Enterprise Zero-Knowledge State & Confidential Audit Engine built on the Midnight Network using Compact and React/Vite.

## Live Demo

🔗 **Live Application URL**: [https://vansidian-protocol.vercel.app](https://vansidian-protocol.vercel.app)

## Contract Address

| Network  | Address                          |
|----------|----------------------------------|
| Preprod  | `mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm` |

*(Contract address is MANDATORY and active on Midnight Preprod testnet.)*

## What This Does

Vansidian provides an enterprise-grade privacy-preserving DApp interface. Users can connect their Lace Wallet, execute zero-knowledge circuit transitions directly in their web browser, and record verified state updates on the Midnight Preprod blockchain while keeping private witness parameters completely confidential.

## Privacy Model

- **PUBLIC**:
  - `counter`: The public ledger state storing verified state values on the Midnight blockchain.
  - Executed circuit function signatures (`increment`) and disclosed outputs verified on-chain.

- **PRIVATE**:
  - `secretIncrement`: Private witness function executing strictly inside local browser memory.
  - Raw secret witness values and client secret keys that are never broadcast across the network.

- **PROVED without revealing**:
  - The user proves they hold a valid private witness input and executed a state transition according to Compact circuit rules, without revealing their underlying secret witness values to anyone.

## Privacy Claim

> **Privacy Claim Statement**: An on-chain observer analyzing the Midnight Preprod blockchain sees valid transaction hashes, zero-knowledge proofs, and updated public ledger state bounds (`counter`), but **cannot see or deduce** the private witness values (`secretIncrement`) or client secret parameters used to generate the transaction.

## Tech Stack

- Midnight Network, Compact language, Midnight.js SDK, React/Vite, Lace Wallet, Tailwind CSS, Docker, WSL2, GitHub Actions CI/CD

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
