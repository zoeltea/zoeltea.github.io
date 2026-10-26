---
company: "Bukalapak"
role: "Senior Software Engineer (Fintech & Commerce Systems)"
period: "Oct 2023 – Dec 2024"
location: "Bandung / Jakarta, Indonesia"
type: "Full-time"
order: 3
featured: true
summary: "Core engineer for financial calculation engines, dynamic fee computation, and high-frequency digital goods checkout pipelines across Bukalapak & Lapakgaming."
highlights:
  - "Built and maintained the Dynamic Service Fee engine across Desktop, Mobile Web, Android, iOS, and Mitra Bukalapak, a core revenue stream with sub-15ms multi-rule evaluation."
  - "Optimized product retrieval and checkout APIs in the Lapakgaming Reseller System, cutting latency from ~40s to ~5s (87.5% reduction)."
  - "Built Cashback and Mix-Payment transaction mechanisms for the Lapakgaming platform."
  - "Wrote technical RFCs, architecture flowcharts, and sequence diagrams for new transactional features."
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
