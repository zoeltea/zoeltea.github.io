---
company: "PT Eigerindo Multi Produk Industri (EIGER)"
role: "Senior QA Engineer"
period: "Jan 2026 – Present"
location: "Bandung / Jakarta, Indonesia (Hybrid)"
type: "Contract"
order: 1
featured: true
summary: "Leading quality engineering architecture, automated validation, and distributed performance benchmarking for omnichannel retail and marketplace integration."
highlights:
  - "Led end-to-end automated testing and state reconciliation for the migration of TikTok Shop order fulfillment from UFFOS to the CARE platform, cutting channel sync latency by 68% with zero dropped orders during flash-sale bursts."
  - "Designed distributed k6 load testing suites in CI/CD pipelines, validating API throughput and resilience at 10,000+ concurrent requests per minute."
  - "Defined test scenarios for the Blind Counting initiative, keeping stock consistent across POS, store cashiers, and OMS, and reducing inventory discrepancies by 42% across 25+ retail outlets."
  - "Built k6 load tests for voucher and coupon claim spikes, isolating concurrency bottlenecks and setting latency benchmarks."
stack:
  - "Go"
  - "Node.js / TypeScript"
  - "Redis"
  - "PostgreSQL"
  - "k6"
  - "Docker"
  - "Kubernetes"
  - "Robot Framework"
  - "Postman"
---

### Key Initiatives & Quality Architecture Focus

#### 1. TikTok Shop Order Fulfillment: UFFOS to CARE Migration
- **Context & Risk:** The legacy UFFOS (Unified Fulfillment Order System) suffered from tightly coupled monolith dependencies, high tail latency during flash sales, and opaque error states when synchronizing marketplace webhooks.
- **Quality Assurance & Verification:** Led comprehensive end-to-end testing, webhook reliability validation, and cutover monitoring. Verified Redis distributed locks for idempotency and transaction boundaries around stock reservation to prevent overselling.
- **Impact:** Achieved **0% order loss** during major live shopping campaigns; reduced order state sync time from an average of 4.2 seconds to under 800 milliseconds (68% reduction).

#### 2. Blind Counting Retail Stock Reconciliation
- **Design & Verification:** Validated blind multi-pass barcode scan workflows on ruggedized Android handhelds, removing human bias and confirmation heuristics during store inventory audits.
- **Test Scenarios:** Formulated edge cases around conflict resolution, offline scan queuing, batch sync thresholds, and automated variance audit trails across POS, store cashiers, and OMS.
- **Result:** Decreased physical stock audit duration by 35% while increasing inventory discrepancy detection accuracy by 42% across 25+ retail outlets.

#### 3. Continuous Performance Verification (k6)
- Standardized scenario-based distributed load testing simulating real-world flash sale surges (ramp-up, steady peak, instant drop).
- Enforced automated latency budgets as gating checks before deploying critical marketplace adapter updates.
