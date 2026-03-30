# Stellar Nexus - Advanced Web3 dApp 🚀

A high-performance, production-ready Web3 application built for the **Stellar Advanced Contract Patterns Challenge**. This project integrates Soroban smart contracts, real-time data streaming, and custom asset mechanics into a unified "Nexus" interface.

## 🌟 Advanced Features

### 1. Advanced Contract Patterns (Inter-Contract Calls)
- **📜 Voting Engine (`contracts/voting`):** Beyond simple state management, this contract implements an **Inter-Contract Call Pattern**.
- **Mechanics:** When a user casts a vote, the Voting contract dynamically initializes a client for an external `Hello` service contract (using its `Address`) and invokes a greeting function. this fulfills the "Inter-contract call working" requirement.
- **Security:** Implements `voter.require_auth()` and persistent storage checks to prevent double-voting.

### 2. Custom Token Mechanics
- **💎 Custom Token Generator:** A full implementation of the Stellar Classic Asset protocol.
- **Dynamic Issuance:**
  1. Generates a unique, one-time Issuing Account.
  2. Automates account funding via the Stellar Friendbot.
  3. Establishes a **Trustline** between the user's Freighter wallet and the new asset.
  4. Mints and transfers tokens to the user in a single workflow.

### 3. Real-time Event Streaming
- **⚡ Live Testnet Feed:** Uses Server-Sent Events (SSE) via the Horizon API to stream global payments in real-time. This demonstrates high-performance data handling in a Web3 frontend.

### 4. Production Readiness & CI/CD
- **🤖 Automated Pipeline:** Full GitHub Actions CI/CD pipeline (`.github/workflows/ci.yml`) that validates builds on every push to the `main` branch.
- **🎨 Glassmorphism UI:** A premium, mobile-responsive design built with vanilla CSS, featuring vibrant gradients, blur effects, and smooth animations.

---

## 🔗 Live Links

- **🌐 Live Demo:** [https://frontend-tau-blue-73.vercel.app](https://frontend-tau-blue-73.vercel.app)
- **📁 GitHub Repo:** [https://github.com/thanchanb/Stellar-Nexus](https://github.com/thanchanb/Stellar-Nexus)

## 📸 Media Evidence

### Mobile Responsive View
*Optimized for all screen sizes from smartphones to desktops.*
![Mobile View](docs/mobile-view.png)

### CI/CD Pipeline
*Continuous Integration ensures 100% build stability.*
[![CI/CD Pipeline](https://github.com/thanchanb/Stellar-Nexus/actions/workflows/ci.yml/badge.svg)](https://github.com/thanchanb/Stellar-Nexus/actions)

---

## 🛠️ Soroban Smart Contracts

The project uses a Cargo workspace to manage multiple Soroban contracts:

| Contract | Path | Feature |
| :--- | :--- | :--- |
| **Voting** | `contracts/voting` | Inter-contract Calls, Auth, Persistent Storage |
| **Hello** | `contracts/hello_world` | Service provider for inter-contract tests |

### Build Instructions
```bash
# Build all contracts for production
cargo build --target wasm32-unknown-unknown --release
```

---

## ✅ Submission Checklist Verification

- [x] **Inter-contract call working:** Implemented in `contracts/voting/src/lib.rs` using `HelloClient`.
- [x] **Custom token deployed:** Functional Token Generator in the frontend.
- [x] **CI/CD running:** Configured via GitHub Actions and verified with build badge.
- [x] **Mobile responsive:** Fluid grid system and media queries implemented in `index.css`.
- [x] **8+ meaningful commits:** History contains comprehensive progress logs.

---
*Developed by Thanchandrumij for the Rise-In Advanced Stellar Challenge.*
