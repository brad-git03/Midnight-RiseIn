# AegisVault Protocol

> Enterprise Zero-Knowledge State & Confidential Audit Engine built on the Midnight Network using the Compact language.

## Contract Address

| Network  | Address                          |
|----------|----------------------------------|
| Preview  | `mn_addr_preview1ahxfavzu58myd7mje72crey7nv2vc7hjd57e73zhpndaegwhvs4q2jm5ch` |
| Preprod  | `mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm` |

## What This Does

AegisVault Protocol implements an enterprise-grade privacy-preserving counter and audit log mechanism on the Midnight blockchain. It allows organizations to update an on-chain ledger state while processing sensitive witness calculations locally, ensuring client inputs remain strictly private while publicly recording verified state transitions.

## Privacy Model

- **What is PUBLIC (on-chain, visible to anyone)**:
  - `counter`: The public ledger state storing state values on the Midnight blockchain.
  - Executed circuit function signatures (`increment`) and disclosed calculated outputs.

- **What is PRIVATE (private witness, never on-chain)**:
  - `secretIncrement`: Private witness function executing strictly within the client's local execution context.
  - Raw witness keys and secret inputs that are never broadcast across the network.

- **What the user PROVES without revealing**:
  - The user proves they hold a valid private witness input and executed a state update in accordance with Compact circuit rules, without revealing their underlying secret witness values.

## Tech Stack

- Midnight network, Compact language, Node.js v22, Docker, WSL2

## Prerequisites

- **Node.js**: v22 LTS (or compatible Node runtime)
- **Docker Desktop**: Required for the local proof server container (`midnightntwrk/proof-server:8.1.0`)
- **Compact Compiler**: Installed via official Midnight toolchain (`compact` v0.31.1 / CLI v0.5.1)
- **WSL2 (Windows Subsystem for Linux)**: Required on Windows environments for running the Compact compiler toolchain

## Setup

1. **Clone the repository & install dependencies**:
   ```bash
   git clone https://github.com/brad-git03/Midnight-RiseIn.git
   cd Midnight-RiseIn
   npm install
   ```

2. **Start the Proof Server (Docker)**:
   ```bash
   docker pull midnightntwrk/proof-server:8.1.0
   docker run -d -p 6300:6300 midnightntwrk/proof-server:8.1.0 midnight-proof-server -v
   ```

3. **Compile the Compact Contract**:
   ```bash
   npm run compile
   ```

4. **Deploy to Preview / Preprod Network**:
   ```bash
   $env:NODE_OPTIONS="--max-old-space-size=12288"; npm run deploy -- --network preprod
   ```

## Run Tests

Execute the unit test suite covering circuit logic, state transitions, and witness privacy:

```bash
npm test
```

## Initial Idea

### Project Concept: AegisVault Protocol — Enterprise Zero-Knowledge State & Audit Engine
AegisVault Protocol explores zero-knowledge state updates on the Midnight Network. In traditional public blockchains, state transitions require full disclosure of underlying parameters. By combining Midnight's dual-state architecture with Compact smart contracts:
- Sensitive client inputs remain client-side as **private witnesses**.
- On-chain consensus only verifies zero-knowledge proofs and updates public ledger state (`counter`) via explicit `disclose()` bounds.
- Future iterations will expand this architecture into confidential voting, anonymous rate-limiting, and privacy-preserving enterprise audit logs.

## Screenshots

### 1. Compact Contract Compilation
![Compact Compile Output](./docs/screenshots/compact-compile.png)

### 2. Unit Test Suite (3/3 Passing)
![Unit Tests Passing](./docs/screenshots/unit-tests.png)

### 3. Contract Deployment & Wallet Address Output
![Contract Deployment](./docs/screenshots/contract-deployment.png)
