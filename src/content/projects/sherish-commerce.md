---
title: "Sherish Commerce Omnichannel Retail Backbone"
description: "Resilient e-commerce platform and inventory sync service designed for multi-warehouse routing, real-time stock sync, and localized payment gateway orchestration."
period: "2024 - 2025"
category: "Platform & Core Backend"
order: 4
featured: false
impactMetrics:
  - "99.98% platform uptime across operational lifecycle"
  - "Multi-warehouse split routing logic with sub-100ms calculation"
  - "Unified order orchestration across Web, POS, and Marketplaces"
stack:
  - "TypeScript"
  - "Next.js / Node.js"
  - "PostgreSQL"
  - "Prisma ORM"
  - "Redis"
  - "Midtrans / Xendit APIs"
---

### System Architecture

Sherish Commerce was designed to bridge modern digital retail with multi-branch physical stores:
- **Intelligent Order Routing:** Dynamically assesses delivery distance, branch stock availability, and shipping costs to split or route orders to the optimal fulfillment hub.
- **Unified Inventory Ledger:** Double-entry stock ledger recording every reservation, decrement, transfer, and restock event to prevent state drift between POS counters and online storefronts.
- **Payment Gateway Orchestrator:** Resilient wrapper around Indonesian payment providers (QRIS, Virtual Accounts, e-Wallets) with automated fallback, idempotent transaction recording, and instant status polling.
