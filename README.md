# Stellar Nexus: Advanced Web3 Nexus 🚀
![Deployed on Testnet](https://img.shields.io/badge/Soroban-Deployed_on_Testnet-blue?style=for-the-badge&logo=stellar)


A high-performance, production-grade Web3 application built for the **Stellar Advanced Contract Patterns Challenge**. This project integrates Soroban smart contracts, real-time data streaming, and complex asset mechanics into a unified glassmorphism interface.

## 🌟 Advanced Features

### 1. Soroban Inter-Contract Calls (Cross-Contract Logic)
- **📜 Voting Engine (`contracts/voting`):** Implements a sophisticated **Inter-Contract Call Pattern** utilizing the `contractclient` macro.
- **Mechanics:** When a vote is cast, the `VoteContract` dynamically initializes a client for an external `HelloService` and invokes a greeting function across the contract boundary.
- **Security:** Leverages `voter.require_auth()` and persistent storage checks to enforce a strict "one-person-one-vote" policy.
- **Contract Code:** [lib.rs](./contracts/voting/src/lib.rs)

### 2. Digital Asset Factory (Custom Token Generator)
- **💎 Automated Issuance:** A full implementation of the Stellar Classic Asset protocol with automated trustline management.
- **Workflow:**
  1. **Dynamic Issuer:** Generates unique, ephemeral issuing accounts.
  2. **Automated Funding:** Integrated with the Stellar Testnet Friendbot.
  3. **Trustline Orchestration:** Handles `ChangeTrust` operations via Freighter wallet.
  4. **Minting & Transfer:** Executes precise payments from issuer to user in a single cohesive flow.

### 3. High-Performance Event Streaming
- **⚡ Real-time Horizon Feed:** Utilizes Server-Sent Events (SSE) via the Horizon API to stream global payment activity directly to the UI.
- **Reactive UI:** Demonstrates low-latency Web3 data handling with a sliding window of historical and live network events.

### 4. Production Readiness & CI/CD
- **🤖 Automated Pipeline:** Full GitHub Actions CI/CD pipeline ([`.github/workflows/ci.yml`](./.github/workflows/ci.yml)) that validates frontend builds on every push to Ensure zero regressions.
- **🎨 Glassmorphism UI:** A premium, "neomorphic" design built with **Vanilla CSS**, featuring vibrant HSL gradients, backdrop filters, and subtle micro-animations.

---

## 🔗 Live Implementation

- **🌐 Live Demo (Vercel):** [Check out Stellar Nexus](https://frontend-tau-blue-73.vercel.app)
- **📁 GitHub Repository:** [thanchanb/Stellar-Nexus](https://github.com/thanchanb/Stellar-Nexus)

---

## 🚀 Deployment Details (Stellar Testnet)

The following smart contracts have been successfully deployed to the Stellar Testnet:

| Detail | Voting Engine (Caller) | Hello Service (Target) |
| :--- | :--- | :--- |
| **Contract ID** | `CCJASXSXLIJJSJKTX63ATX5DAAOUE5E5QSHV55I64LY3J3JNY7KFH2FT` | `CCUZJMO6EXKV3Q62OLM7LJZKNKTAERF7HHCNRYR6KZLT5TVLX4GNYTKU` |
| **Transaction Hash** | `0ee80526f903a9882f6dc9538928bc9fedfe1685fba0d9f64e8ddf2bfc9cc604` | `717d0f2743da962839305b58ddf5d00a26aa5216377109cf73710e1695bce76b` |
| **Network** | `Stellar Testnet` | `Stellar Testnet` |
| **Explorer Link** | [View on Stellar.expert](https://stellar.expert/explorer/testnet/tx/0ee80526f903a9882f6dc9538928bc9fedfe1685fba0d9f64e8ddf2bfc9cc604) | [View on Stellar.expert](https://stellar.expert/explorer/testnet/tx/717d0f2743da962839305b58ddf5d00a26aa5216377109cf73710e1695bce76b) |

---

## 📸 Media Evidence

### Mobile Responsive Architecture
*The Nexus interface scales fluently from mobile handsets to ultra-wide displays.*
![Mobile View](docs/mobile-view.png)

### Automated Stability (CI/CD)
*Continuous Integration badge confirming build health.*
[![CI/CD Pipeline](https://github.com/thanchanb/Stellar-Nexus/actions/workflows/ci.yml/badge.svg)](https://github.com/thanchanb/Stellar-Nexus/actions)

---

## 🛠️ Soroban Workspace Structure

Managed as a high-efficiency Cargo workspace:

| Contract | Location | Primary Pattern | Deployed ID |
| :--- | :--- | :--- | :--- |
| **Voting Engine** | `/contracts/voting` | Inter-contract Calls, Auth, Storage | `CCJASXSXLIJJSJKTX6...` |
| **Hello Service** | `/contracts/hello_world` | Target service for cross-contract logic | `CCUZJMO6EXKV3Q62...` |

### Local Development
```bash
# Build all WASM targets
cargo build --target wasm32-unknown-unknown --release

# Run cross-contract logic tests
cargo test --manifest-path contracts/voting/Cargo.toml
```

---

## ✅ Submission Checklist Verification

- [x] **Advanced Patterns:** Inter-contract call verified in `contracts/voting/src/lib.rs`.
- [x] **Asset Mechanics:** Custom token generator fully functional in `App.tsx`.
- [x] **CI/CD Integration:** Configured via GitHub Actions and verified with build badge.
- [x] **UX/UI Excellence:** Premium design with full mobile responsiveness.
- [x] **Meaningful History:** Project built through iterative, well-documented commits.

---
*Authored by Thanchandrumij for the Rise-In Advanced Stellar Challenge.*
