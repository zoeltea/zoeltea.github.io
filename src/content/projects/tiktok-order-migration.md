---
title: "TikTok Shop Order Fulfillment Migration (UFFOS to CARE)"
description: "Architected the zero-downtime migration of high-throughput TikTok Shop order webhooks to the CARE omnichannel engine, cutting sync latency by 68% and eliminating order dropouts during flash sale spikes."
period: "2026"
category: "E-Commerce Infrastructure"
order: 1
featured: true
impactMetrics:
  - "0% order dropout during 11.11 / 12.12 flash sale surges"
  - "68% reduction in webhook ingestion-to-processing latency"
  - "100% idempotent retry pipeline with Redis-backed distributed locks"
stack:
  - "Go (Golang)"
  - "Redis"
  - "RabbitMQ"
  - "PostgreSQL"
  - "Docker"
  - "k6"
---

## 1. Executive Context & Problem Statement

At Eigerindo (EIGER), live streaming sales events (TikTok Shop live flash sales) generate sudden, sharp spikes in order traffic — jumping from nominal rates to thousands of concurrent webhook events per minute.

The legacy order ingestion pipeline (**UFFOS - Unified Fulfillment Order System**) suffered from:
1. **Tight Monolithic Coupling:** Webhook handlers attempted direct synchronous writes to legacy ERP and WMS databases.
2. **Lock Contention & Race Conditions:** Concurrent webhook deliveries for the same order caused duplicate inventory deductions or race conditions.
3. **High Latency & Dropped Payloads:** TikTok Shop requires webhook acknowledgments within 3 seconds. Slow downstream responses led to timeouts, repeated retries from TikTok, and eventual dropped order events.

```
[TikTok Shop Webhook] 
       │ (HTTP POST /webhooks/orders)
       ▼
[Edge Ingestion API (Go)] ──▶ [Redis Lock / Deduplication]
       │
       ▼
[RabbitMQ Exchange (Buffered Ingestion)]
       │
       ▼
[CARE Worker Pipeline] ──▶ [Omnichannel Stock Reservation (PostgreSQL)] ──▶ [WMS/ERP Integration]
```

## 2. Architectural Solution

We designed and implemented the migration to **CARE (Customer & Retail Omnichannel Engine)**:

### A. Sub-Millisecond Ingestion & Acknowledgement
- Deployed a lightweight, high-performance Go ingestion service.
- When an order webhook arrives, the payload hash and `order_id` are verified against Redis for deduplication in < 2ms.
- Immediately returns `200 OK` to TikTok while publishing the raw payload into a durable RabbitMQ message queue.

### B. Distributed Locking & Idempotency
- Used Redis distributed locks (`SET key val NX PX`) keyed by order reference during state transitions.
- Enforced strict state-machine validation (`UNPAID` -> `PAID` -> `PROCESSING` -> `SHIPPED`) to prevent out-of-order webhook delivery from corrupting order status.

### C. Dead-Letter Queue (DLQ) & Exponential Backoff
- Failed downstream synchronization steps are diverted to retry queues with exponential backoff and jitter, preventing downstream system cascading failures.

## 3. Performance Verification & Results

We validated the new architecture using distributed **k6 load test scripts** simulating 15,000 requests per minute with jitter:

- **Order Loss Rate:** Reduced from ~0.4% during peak flash events to **0.00%**.
- **Ingestion Latency:** p99 latency dropped from 4,200ms to **140ms**.
- **Operational Clarity:** Real-time Grafana dashboards displaying consumer lag and queue depths provided immediate telemetry for on-call engineers.
