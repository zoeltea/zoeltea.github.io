---
company: "Bukalapak"
role: "Lead QA / Test Engineer (SDET & Test Architecture)"
period: "Jun 2020 – Apr 2024"
location: "Bandung / Jakarta, Indonesia"
type: "Full-time"
order: 4
featured: true
summary: "Spearheaded test architecture, developer self-service automation tooling, API security signature mocking, and CI/CD quality gate enforcement across Bukalapak payment and transaction tribes."
highlights:
  - "Re-architected the core E2E test framework with parallelized container execution on Kubernetes, cutting full regression time from 40 minutes to under 5 minutes (85%+ reduction)."
  - "Built an internal HMAC signature generation and payload tampering tool, saving 150+ engineering hours per month for teams testing signed banking API webhooks."
  - "Stabilized and refactored flaky automation suites across Android, iOS, and Mitra Bukalapak apps."
  - "Built Slack-integrated regression dashboards and failure triage bots that report smoke and regression status into squad deployment pipelines."
  - "Mentored 35+ engineers in writing contract and integration tests through workshops and documentation."
stack:
  - "Go"
  - "TypeScript"
  - "Cypress"
  - "Playwright"
  - "Python"
  - "k6"
  - "Appium"
  - "Docker"
  - "Kubernetes"
  - "GitLab CI"
  - "Slack Bolt API"
---

### Test Architecture & Tooling Engineering

#### 1. Parallel Grid & Test Sharding Architecture
- Re-engineered legacy monolithic E2E test runs into dynamically sharded container jobs running on Kubernetes clusters.
- Balanced test loads based on historical execution metrics, cutting full regression runtimes from 40 minutes to under 5 minutes (85%+ efficiency boost) and eliminating deployment bottlenecks.

#### 2. Internal HMAC & Webhook Simulation Suite
Bank APIs and fintech payment partners require cryptographic signatures (e.g., HMAC-SHA256, RSA asymmetric keys) for incoming and outgoing callbacks. Manual verification created high friction and staging environment bottlenecks.
- Engineered a lightweight internal microservice and CLI generating valid and mutated signatures on the fly.
- Allowed software engineers and QA to inject mock payment states (success, pending, chargeback, expired) with cryptographically valid headers to test edge cases safely.

#### 3. Developer Self-Service Automation Culture
- Moved squads away from monolithic end-to-end UI testing toward high-leverage contract and API test suites.
- Standardized test coverage metrics across microservices, reducing pre-release regression verification cycles from 2 full working days to under 45 minutes of automated pipeline execution.
