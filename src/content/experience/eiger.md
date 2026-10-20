---
company: "Eigerindo Multi Produk Industri (EIGER)"
role: "Senior Software Quality Assurance Engineer"
period: "2026 - Present"
location: "Bandung / Jakarta (Hybrid), Indonesia"
type: "Full-time"
order: 1
featured: true
summary: "Leading omnichannel quality engineering architecture, high-throughput automated validation, and distributed performance benchmarking across physical retail stores and marketplace channels."
highlights:
  - "Spearheaded end-to-end testing for the core migration of TikTok Shop order fulfillment from legacy UFFOS service to CARE platform, cutting channel sync latency by 68% with zero dropped orders during flash-sale bursts."
  - "Formulated comprehensive test scenarios ensuring absolute stock consistency across POS, store cashiers, and OMS ('Blind Counting'), cutting reconciliation discrepancies by 42% across flagship retail branches."
  - "Constructed automated k6 distributed performance testing suites integrated into CI/CD pipelines, validating service SLAs under 10,000+ concurrent RPM order generation scenarios."
  - "Engineered automated validation for idempotent webhook consumer pipelines with Redis-backed deduplication and exponential backoff retry queues under API rate-limiting spikes."
stack:
  - "Go (Golang)"
  - "Node.js / TypeScript"
  - "Redis"
  - "PostgreSQL"
  - "k6"
  - "Docker"
  - "Kubernetes"
  - "Robot Framework"
---

### Key Initiatives & Quality Architecture Focus

#### 1. TikTok Shop Order Fulfillment: UFFOS to CARE Migration
- **Context & Risk:** The legacy UFFOS (Unified Fulfillment Order System) suffered from tightly coupled monolith dependencies, high tail latency during 11.11 / 12.12 live streaming flash sales, and opaque error states when synchronizing TikTok Shop marketplace webhooks.
- **Quality Assurance & Verification:** Led comprehensive end-to-end testing, webhook reliability validation, and cutover monitoring. Verified Redis distributed locks for idempotency and transaction boundaries around stock reservation to prevent overselling.
- **Impact:** Achieved **0% order loss** during major live shopping events; reduced order state sync time from an average of 4.2 seconds to under 800 milliseconds.

#### 2. Blind Counting Retail Stock Reconciliation
- **Design & Verification:** Validated blind multi-pass barcode scan workflows on ruggedized Android handhelds, removing human bias and confirmation heuristics during store inventory audits.
- **Test Scenarios:** Formulated edge cases around conflict resolution, offline scan queuing, batch sync thresholds, and automated variance audit trails across POS, store cashiers, and OMS.
- **Result:** Decreased physical stock audit duration by 35% while increasing inventory discrepancy detection accuracy by 42% across 25+ retail outlets.

#### 3. Continuous Performance Verification (k6)
- Standardized scenario-based distributed load testing simulating real-world flash sale surges (ramp-up, steady peak, instant drop).
- Enforced automated latency budgets ($p_{95} < 350\text{ms}$, $p_{99} < 800\text{ms}$) as gating checks before deploying critical marketplace adapter updates.
