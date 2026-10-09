---
company: "Eigerindo Multi Produk Industri (EIGER)"
role: "Senior Software Engineer / Omnichannel Tech Lead"
period: "2026 - Present"
location: "Bandung / Jakarta (Hybrid), Indonesia"
type: "Full-time"
order: 1
featured: true
summary: "Leading omnichannel order processing migrations, high-throughput retail sync engines, and automated performance benchmarking across physical stores and major marketplace channels."
highlights:
  - "Architected the seamless migration of TikTok Shop order fulfillment from legacy UFFOS service to CARE platform, cutting channel sync latency by 68% with zero dropped orders during flash-sale bursts."
  - "Designed and implemented the 'Blind Counting' mobile and handheld inventory verification workflow for retail store stocktaking, cutting reconciliation discrepancies by 42% across flagship retail branches."
  - "Constructed automated k6 distributed performance testing suites integrated into CI/CD pipelines, validating service SLAs under 10,000+ concurrent RPM order generation scenarios."
  - "Engineered idempotent webhook consumer pipelines with Redis-backed deduplication and exponential backoff retry queues for handling TikTok Shop API rate-limiting spikes."
stack:
  - "Go (Golang)"
  - "Node.js / TypeScript"
  - "Redis"
  - "PostgreSQL"
  - "k6"
  - "Docker"
  - "Kubernetes"
  - "RabbitMQ"
---

### Key Initiatives & Architectural Focus

#### 1. TikTok Shop Order Fulfillment: UFFOS to CARE Migration
- **Problem Statement:** The legacy UFFOS (Unified Fulfillment Order System) suffered from tightly coupled monolith dependencies, high tail latency during 11.11 / 12.12 live streaming flash sales, and opaque error states when synchronizing TikTok Shop marketplace webhooks.
- **Solution & Delivery:** Designed an event-driven ingestion pipeline decoupling order capture from downstream warehouse management systems (WMS). Utilized Redis distributed locks for idempotency and transaction boundaries around stock reservation to prevent overselling.
- **Impact:** Achieved **0% order loss** during major live shopping events; reduced order state sync time from an average of 4.2 seconds to under 800 milliseconds.

#### 2. Blind Counting Retail Stock Reconciliation
- **Design:** Removed human bias and confirmation heuristics during store inventory audits by enforcing blind multi-pass barcode scans on ruggedized Android handhelds.
- **Backend Architecture:** Built conflict-resolution workers aggregating asynchronous scan batches, applying variance thresholds, and generating automated variance audit trails for store managers and ERP sync.
- **Result:** Decreased physical stock audit duration by 35% while increasing inventory discrepancy detection accuracy by 42%.

#### 3. Continuous Performance Verification (k6)
- Standardized scenario-based load testing simulating real-world flash sale surges (ramp-up, steady peak, instant drop).
- Enforced automated latency budgets ($p_{95} < 350\text{ms}$, $p_{99} < 800\text{ms}$) as gating checks before deploying critical marketplace adapter updates.
