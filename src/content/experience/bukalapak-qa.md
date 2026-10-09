---
company: "Bukalapak"
role: "Lead Software Quality Assurance / SDET"
period: "2020 - 2024"
location: "Jakarta, Indonesia"
type: "Full-time"
order: 3
featured: true
summary: "Spearheaded test architecture, developer self-service automation tooling, API security signature mocking, and CI/CD quality gate enforcement across Bukalapak payment and transaction tribes."
highlights:
  - "Built an internal developer-centric HMAC signature generation and payload tampering platform, saving 150+ monthly engineering hours for team members testing signed banking API webhooks."
  - "Constructed automated Slack-integrated regression dashboards and failure triaging bots, reporting real-time smoke and regression status directly into squad deployment pipelines."
  - "Championed the 'Shift-Left' testing culture, mentoring 35+ backend and frontend engineers in authoring resilient contract and integration test suites."
  - "Integrated automated k6 and Locust load testing scenarios into GitLab CI pipelines, establishing automated performance threshold gates before production deployment."
stack:
  - "Go"
  - "Ruby"
  - "Python"
  - "Postman / Newman"
  - "k6"
  - "Docker"
  - "GitLab CI"
  - "Slack Bolt API"
---

### Test Architecture & Tooling Engineering

#### Internal HMAC & Webhook Simulation Suite
Bank APIs and fintech payment partners require cryptographic signatures (e.g., HMAC-SHA256, RSA asymmetric keys) for incoming and outgoing callbacks. Manual verification created high friction and staging environment bottlenecks.
- Engineered a lightweight internal microservice and CLI generating valid and mutated signatures on the fly.
- Allowed software engineers and QA to inject mock payment states (success, pending, chargeback, expired) with cryptographically valid headers to test edge cases safely.

#### Developer Self-Service Automation Culture
- Moved squads away from monolithic end-to-end UI testing toward high-leverage contract and API test suites.
- Standardized test coverage metrics across microservices, reducing pre-release regression verification cycles from 2 full working days to under 45 minutes of automated pipeline execution.
