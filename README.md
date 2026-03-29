# Stellar Nexus - Advanced Web3 dApp 🚀

A complete end-to-end dApp built for the Level 4 Challenge. This project demonstrates advanced contract patterns, custom token creation, realtime event streaming, CI/CD pipeline, and mobile responsiveness.

## 🌟 Features

- **Custom Token Creation:** Dynamically generates a new issuing account on Stellar Testnet, funds it via Friendbot, creates an asset trustline using Freighter, and mints tokens directly to the user's wallet.
- **Advanced Event Streaming (Real-time):** Listens to live transactions on the Stellar Testnet using Server-Sent Events (SSE). 
- **Production Ready:** Configured with an automated GitHub Actions CI/CD pipeline.
- **Mobile Responsive Design:** Modern UI with glassmorphism design, vibrant gradients, and fully fluid layouts for all devices.

## 🔗 Live Demo & Deployment

- **Live Demo Link:** [https://frontend-tau-blue-73.vercel.app](https://frontend-tau-blue-73.vercel.app)
- **GitHub Repository:** [https://github.com/thanchanb/Stellar-Nexus](https://github.com/thanchanb/Stellar-Nexus)

## 🖼️ Media & Evidence

- **Screenshot: Mobile Responsive View:**  
  ![Mobile View](docs/mobile-view.png)
- **Screenshot/Badge: CI/CD pipeline running:**  
  [![CI/CD Pipeline](https://github.com/thanchanb/Stellar-Nexus/actions/workflows/ci.yml/badge.svg)](https://github.com/thanchanb/Stellar-Nexus/actions)
- **Token Code Example:** `RISEIN`
- **Asset Issuer (Example):** `GDQ... (dynamically generated per mint)`

## 🏗️ Soroban Smart Contracts

This repository now includes the advanced Soroban contracts required for Level 4:

- **📜 Voting Contract (`contracts/voting`):** Implements secure, authorized voting logic with state management and protection against double-voting.
- **📜 Hello World (`contracts/hello_world`):** A canonical Soroban verification contract.
- **🛠️ Cargo Workspace:** Fully configured for parallel development and building via the root-level `Cargo.toml`.

To build all contracts:
```bash
cargo build --target wasm32-unknown-unknown --release
```

## 🛠️ Technology Stack
- **Frontend Framework:** React + Vite (TypeScript)
- **Stellar Integration:** `@stellar/stellar-sdk` & `@stellar/freighter-api`
- **Styling:** Vanilla CSS (Glassmorphism & Full CSS Variables mapping)
- **CI/CD:** GitHub Actions

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed. Download [Freighter Wallet](https://freighter.app/) extension and switch it to Testnet.

### Installation & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/thanchanb/Stellar-Nexus.git
   cd Stellar-Nexus/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## ✅ Requirements Checklist Fulfilled
- [x] Inter-contract call working / Custom Token Deployed 
- [x] Advanced event streaming (real-time) via Horizon SSE
- [x] CI/CD running
- [x] Mobile responsive Web3 CSS Glassmorphism
- [x] Minimum 8+ meaningful commits

---
*Built with ❤️ for Rise-In Web3 Challenge*
