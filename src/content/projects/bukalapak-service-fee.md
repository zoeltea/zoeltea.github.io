---
title: "Dynamic Service Fee & Real-Time Financial Engine"
description: "High-throughput financial computation engine evaluating multi-tier fee matrices and promotional cashback rules in sub-15ms execution time."
period: "2023 - 2024"
category: "Fintech & Payments"
order: 2
featured: true
impactMetrics:
  - "< 15ms calculation latency per multi-item invoice"
  - "Processed millions of daily active marketplace transactions"
  - "Zero financial calculation discrepancies across quarterly audits"
  - "87.5% latency reduction on Lapakgaming checkout"
stack:
  - "Go"
  - "Ruby on Rails"
  - "MySQL"
  - "Redis"
  - "Kafka"
  - "Datadog"
---

### Architecture & Challenges

Modern marketplace fee structures are not static percentages. They depend on:
1. **Merchant Tier & Badge Status** (Super Seller, Official Partner, Regular).
2. **Product Category & Sub-category Rates** (Digital items vs physical apparel).
3. **Payment Method Processing Surcharges** (Virtual Accounts, QRIS, Credit Cards, PayLater).
4. **Platform & Merchant Co-funding Subsidies** (Vouchers, cashback credits, coins).

```
[ Checkout Request ]
         │
         ▼
┌─────────────────────────────────┐
│ Dynamic Service Fee Calculator  │
│ ┌─────────────────────────────┐ │
│ │ Category Rate Resolver      │ │
│ ├─────────────────────────────┤ │
│ │ Payment Channel Surcharge   │ │
│ ├─────────────────────────────┤ │
│ │ Merchant Subsidy Deductor   │ │
│ └─────────────────────────────┘ │
└────────────────┬────────────────┘
                 │
         ┌───────┴───────┐
         ▼               ▼
┌─────────────────┐ ┌─────────────────┐
│ Fast Response   │ │ Financial Audit │
│ (< 15ms payload)│ │ Snapshot (Kafka)│
└─────────────────┘ └─────────────────┘
```

### Engineering Highlights

- **Rule Evaluator Design:** Designed a composite rule pattern in Go and Ruby where calculation rules are composable, stateless, and independently testable with comprehensive unit suites.
- **Snapshot Immutability:** Generated deterministic cryptographic snapshot hashes for calculated fee breakdowns. When an order transitions to paid or refunded, reconciliation workers re-verify the snapshot rather than recalculating from mutating master tables.
- **Lapakgaming Checkout Optimization:** Decomposed monolithic checkout queries, converted synchronous external validations to concurrent worker pools, reducing response times from 40s to ~5s under flash sales.
