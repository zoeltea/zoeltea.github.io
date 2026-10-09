---
title: "Designing Reliable Order Processing for Flash-Sale Traffic Surges"
description: "Practical engineering patterns for zero-loss webhook ingestion, Redis-backed idempotency keys, and asynchronous stock reservation."
pubDate: 2026-03-15
readingTime: "7 min read"
tags:
  - "Backend Architecture"
  - "Distributed Systems"
  - "Go"
  - "Redis"
  - "E-Commerce"
featured: true
---

Flash sales and marketplace live-streaming events present one of the harshest testing grounds for backend systems. Traffic doesn't ramp up linearly—it explodes instantaneously when a streamer drops a discount code.

Here are the hard-won architecture patterns I use to guarantee **zero dropped orders** and maintain deterministic inventory states under extreme concurrency.

---

### 1. The Ingestion Trap: Never Do Heavy Work in the Webhook Handler

When external marketplace webhooks (such as TikTok Shop or Shopee) hit your endpoints, your immediate obligation is rapid acknowledgement with cryptographic verification.

```go
// Bad: Synchronous order creation in webhook handler
func HandleWebhook(w http.ResponseWriter, r *http.Request) {
    payload := parsePayload(r)
    db.CreateOrder(payload)           // DB lock contention!
    erp.SyncWarehouse(payload)        // Downstream timeout!
    w.WriteHeader(http.StatusOK)
}

// Good: Edge verification + Immediate Queue Enqueue
func HandleWebhook(w http.ResponseWriter, r *http.Request) {
    if !verifyHMACSignature(r) {
        http.Error(w, "Unauthorized", http.StatusUnauthorized)
        return
    }
    
    eventID := r.Header.Get("X-Event-ID")
    if !redis.SetNX(ctx, "webhook_lock:"+eventID, "1", 24*time.Hour).Val() {
        // Already received and processing/processed
        w.WriteHeader(http.StatusOK)
        return
    }
    
    rabbitMQ.Publish("orders.raw", r.Body)
    w.WriteHeader(http.StatusOK)
}
```

By confining the web handler to:
1. Header signature verification (CPU-bound, ~1ms)
2. Atomic deduplication key check (`SETNX` in Redis, ~1ms)
3. Enqueueing to a message broker (RabbitMQ/Kafka, ~2ms)

Your edge proxy can easily sustain 20,000+ incoming RPM on minimal server compute without thread exhaustion.

---

### 2. Idempotency at the Database Layer

Network blips cause upstream platforms to retry webhooks repeatedly. Even with Redis caching, cache eviction or restart can let a duplicate through.

Your relational schema must enforce an **idempotency constraint**:

```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    channel VARCHAR(32) NOT NULL,
    external_order_id VARCHAR(64) NOT NULL,
    status VARCHAR(32) NOT NULL,
    total_amount NUMERIC(15, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT uq_channel_order_id UNIQUE (channel, external_order_id)
);
```

Using `ON CONFLICT (channel, external_order_id) DO NOTHING` or upsert patterns guarantees that even if a worker crashes midway, re-delivery will never result in duplicate financial charges or double inventory decrements.

---

### 3. Distributed Inventory Leases

The ultimate failure mode in flash sales is **overselling**. Decrementing a single stock row across 500 concurrent threads leads to severe row-lock queuing in relational databases.

To mitigate this:
- Maintain an atomic cache counter in Redis (`DECRBY`) that represents the available reservation pool.
- If Redis decrements below 0, immediately reject the order at the worker level before opening a PostgreSQL transaction.
- When an order confirms, a background reconciliation worker drains the reservation queue and updates master database tables in micro-batches.

### Summary Takeaway

1. **Decouple Ingestion from Processing:** Never execute database or third-party network calls inside synchronous webhook handlers.
2. **Layered Idempotency:** Guard the edge with Redis `SETNX` and guard storage with strict unique constraints.
3. **Protect the Database with Memory Leases:** Isolate relational stock decrements behind atomic in-memory reservation tokens.
