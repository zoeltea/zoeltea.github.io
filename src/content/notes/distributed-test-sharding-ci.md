---
title: "Distributed Test Sharding: Cutting E2E CI Times from 40m to 5m"
description: "How we analyzed test duration telemetry to dynamically shard E2E browser test suites across containerized runners, enabling continuous 10x faster PR feedback."
pubDate: 2026-02-10
readingTime: "5 min read"
tags:
  - "Testing"
  - "CI/CD"
  - "Kubernetes"
  - "Architecture"
featured: false
---

A 40-minute CI pipeline destroys developer flow. When engineers have to wait nearly an hour to know if their changes broke a regression test, they batch changes, switch contexts, and ship fewer, riskier deploys.

Here is how we redesigned our test orchestration at scale.

## The Strategy: Dynamic Duration-Weighted Bin Packing

Naive test splitting (e.g., dividing 100 test files into 4 runners with 25 files each) always fails because test durations follow a Pareto distribution: 10% of tests take 60% of total runtime.

We implemented:
1. **Automated Runtime Telemetry:** Each test run recorded its duration and flakiness coefficient to a lightweight storage backend.
2. **Karmarkar-Karp Bin Packing Algorithm:** Before spinning up CI runners, an orchestrator grouped test suites such that each container node received roughly equal projected execution time.
3. **Ephemeral Pod Scaling:** In GitLab CI / Kubernetes, we provisioned 8-16 parallel lightweight agent pods on demand.

## Results
- Total regression runtime dropped from **40+ minutes** to **under 5 minutes**.
- PR review throughput increased by 3.2x across squads.
