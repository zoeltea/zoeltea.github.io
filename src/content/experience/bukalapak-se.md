---
company: "Bukalapak"
role: "Senior Software Engineer (Fintech & Commerce Systems)"
period: "2023 - 2024"
location: "Jakarta, Indonesia"
type: "Full-time"
order: 2
featured: true
summary: "Core engineer for financial calculation engines, dynamic fee computation, and high-frequency digital goods checkout pipelines across Bukalapak & Lapakgaming."
highlights:
  - "Architected and delivered the Dynamic Service Fee engine, executing sub-15ms multi-rule fee evaluations for millions of daily active transactions across varied merchant categories."
  - "Refactored checkout and payment reconciliation workflows for Lapakgaming, reducing end-to-end checkout API latency from ~40s under high voucher load down to ~5s ($87.5\\%$ reduction)."
  - "Engineered automated real-time cashback calculation pipelines supporting granular promotion matrices, multi-tiered buyer loyalty programs, and fraud prevention locks."
  - "Eliminated critical concurrency race conditions during flash promo redemption using distributed lock leases and optimistic concurrency control in MySQL/PostgreSQL."
stack:
  - "Ruby on Rails"
  - "Go"
  - "MySQL"
  - "Redis Cluster"
  - "Kafka"
  - "gRPC"
  - "Datadog"
---

### Engineering Deep-Dive

#### Dynamic Service Fee Engine
In e-commerce at scale, transaction fees are dynamic functions of seller tier, category commission rates, payment method processing costs, buyer coupon subsidies, and regulatory compliance requirements.

- Built a modular rule engine in Go and Ruby that evaluates complex combinatorial pricing trees in **$<15\text{ms}$ execution time**.
- Implemented multi-layered caching with cache-invalidation tags triggered by merchant tier changes and campaign updates.
- Designed audit logs recording snapshot calculations for every invoice, ensuring zero variance during financial auditing and reporting.

#### Lapakgaming Checkout Latency Optimization ($40\text{s} \to 5\text{s}$)
- **Root Cause Analysis:** Identified deep N+1 external API calls to downstream payment gateway checkers, synchronous voucher eligibility validation in the web request loop, and unindexed database queries during inventory lock acquisition.
- **Remediation Strategy:**
  1. Converted sequential validation calls into concurrent worker pools (`errgroup` / async promises).
  2. Moved non-critical third-party analytics and loyalty point notifications to asynchronous Kafka event streams.
  3. Optimized relational queries with composite indexing and short-lived Redis session states.
- **Outcome:** Lowered $p_{99}$ checkout latency from 40+ seconds during peak gamer voucher drops to under 5 seconds, resulting in a **14% increase in completed checkout conversion**.
