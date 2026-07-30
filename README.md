# Midnight Privacy Counter

> A privacy-preserving counter smart contract built on the Midnight Network using the Compact language.

## Contract Address

| Network  | Address                          |
|----------|----------------------------------|
| Preview  | `mn_addr_preview1ahxfavzu58myd7mje72crey7nv2vc7hjd57e73zhpndaegwhvs4q2jm5ch` |
| Preprod  | `mn_addr_preprod14g0smfdj6hjjkcd5hjh43xkra9q78zgfluqh7zzz6gy42y24f3jsc8chvm` |

## What This Does

This smart contract implements a privacy-preserving counter mechanism on the Midnight blockchain. It allows users to update an on-chain counter state while processing witness calculations locally, ensuring sensitive inputs remain completely private while publicly recording verified state transitions.

## Privacy Model

- **What is PUBLIC (on-chain, visible to anyone)**:
  - `counter`: The public ledger state storing the state value on the Midnight blockchain.
  - The executed circuit function signatures (`increment`) and disclosed calculated outputs.

- **What is PRIVATE (private witness, never on-chain)**:
  - `secretIncrement`: Private witness function executing strictly within the client's local execution context.
  - Raw witness keys and secret inputs that are never broadcast across the network.

- **What the user PROVES without revealing**:
  - The user proves they hold a valid private witness input and executed a state update in accordance with Compact circuit rules, without revealing their underlying secret witness values.

## Tech Stack

- Midnight network, Compact language, Node.js v22, Docker

## Prerequisites

- **Node.js**: v22 LTS (or compatible Node runtime)
- **Docker Desktop**: Required for the local proof server container (`midnightntwrk/proof-server:8.1.0`)
- **Compact Compiler**: Installed via official Midnight toolchain (`compact` v0.31.1 / CLI v0.5.1)
- **WSL2 (Windows Subsystem for Linux)**: Required on Windows environments for running the Compact compiler toolchain

## Setup

1. **Clone the repository & install dependencies**:
   ```bash
   git clone <repository-url>
   cd Midnight-Risein
   npm install
   ```

2. **Start the Proof Server (Docker)**:
   ```bash
   docker pull midnightntwrk/proof-server:8.1.0
   docker run -d -p 6300:6300 midnightntwrk/proof-server:8.1.0 midnight-proof-server -v
   ```

3. **Compile the Compact Contract**:
   ```bash
   wsl compact compile contracts/counter.compact managed/counter
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

### Project Concept: Privacy-Preserving Shielded Counter & Audit System
This project explores zero-knowledge state updates on the Midnight Network. In traditional public blockchains, state transitions require full disclosure of underlying parameters. By combining Midnight's dual-state architecture with Compact smart contracts:
- Sensitive client inputs remain client-side as **private witnesses**.
- On-chain consensus only verifies zero-knowledge proofs and updates public ledger state (`counter`) via explicit `disclose()` bounds.
- Future iterations will expand this architecture into confidential voting, anonymous rate-limiting, and privacy-preserving audit logs.

## Screenshots

> [!NOTE]
> *Placeholder guides for submission screenshots. Replace image links below with your uploaded screenshot files.*

### 1. Compact Contract Compilation
![Compact Compile Output](./docs/screenshots/compact-compile.png)
*Instructions: Capture terminal window running `compact compile contracts/counter.compact managed/counter` showing successful compilation.*

### 2. Unit Test Suite (3/3 Passing)
![Unit Tests Passing](./docs/screenshots/unit-tests.png)
*Instructions: Capture terminal window running `npm test` showing 3 passing unit tests for circuit logic, state transitions, and witness privacy.*

### 3. Contract Deployment & Wallet Address Output
![Contract Deployment](./docs/screenshots/contract-deployment.png)
*Instructions: Capture terminal output of `npm run deploy` showing your wallet address and contract deployment status.*
