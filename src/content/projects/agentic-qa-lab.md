---
title: "Agentic QA Lab & Developer Self-Service Platform"
description: "Distributed testing architecture featuring automated HMAC cryptographic signature mocking, Slack-integrated pipeline telemetry, and developer self-service test tooling."
period: "2021 - 2024"
category: "SDET & Automation Architecture"
order: 3
featured: true
impactMetrics:
  - "150+ monthly engineering hours saved across backend squads"
  - "Regression cycle reduced from 2 full days to 45 minutes"
  - "100% adoption across transaction and payment microservices"
  - "Automated security & tamper verification for 20+ banking integrations"
stack:
  - "Go"
  - "Python"
  - "Docker"
  - "GitLab CI / GitHub Actions"
  - "Slack Bolt API"
  - "k6"
  - "Postman / Newman"
---

### Problem & Vision

In large-scale distributed architectures, testing asynchronous financial callbacks (e.g., banking status webhooks, card payment authorizations) is a primary developer friction point:
1. Webhooks require valid HMAC-SHA256 or asymmetric digital signatures.
2. Generating valid mock headers manually in local environments takes 5–10 minutes per test case.
3. Test failures in CI/CD are often noisy and slow to triage without centralized metrics.

```
┌─────────────────┐       ┌────────────────────────────┐
│ Developer / CI  │ ────> │ HMAC & Webhook Engine (Go) │
└─────────────────┘       └─────────────┬──────────────┘
                                        │
                         ┌──────────────┴──────────────┐
                         ▼                             ▼
                 [ Valid Signatures ]          [ Tampered Vectors ]
                         │                             │
                         ▼                             ▼
                 ┌──────────────────────────────────────────────┐
                 │ Backend Ingestion Under Test (Microservices) │
                 └──────────────────────┬───────────────────────┘
                                        │
                                        ▼
                         ┌─────────────────────────────┐
                         │ Slack CI Dashboard Reporter │
                         └─────────────────────────────┘
```

### Key Modules Delivered

#### 1. Instant HMAC Signer CLI & Microservice
- Lightweight Go service exposing both a fast CLI and local mock HTTP endpoint that calculates signatures according to partner specs (BCA, Mandiri, BRI, DANA, OVO, etc.).
- Includes a *Tamper Mode* to generate intentionally corrupted signatures, expired timestamps, and replay payloads to verify server-side rejection logic automatically.

#### 2. Slack-Integrated Real-Time Triaging Engine
- Automatically parses JUnit/Allure test reports generated during CI runs.
- Extracts stack traces, request/response dumps, and correlates failing endpoints with service owners.
- Pushes interactive Slack cards allowing engineers to re-trigger failed runs or view sanitized logs directly within their squad channels.
