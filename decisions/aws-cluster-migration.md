---
title: Migrate VRM to RSPL AWS Cluster
type: decision
tags: [decision, infra, vrm]
status: in-progress
created: 2026-05-13
---

## Decision

Migrate VRM's backend infrastructure from the current private cluster to the RSPL (Razorpay) AWS cluster to unblock scaling to 1,000+ merchants.

---

## Context

VRM currently runs on a **private cluster** that was set up for early prototyping and internal pilots. As VRM moves toward broader merchant rollout (target: 1,000 merchants live by end of May 2026), the private cluster is a hard blocker:

- The private cluster lacks the reliability, observability, and access controls required for production-grade merchant-facing workloads.
- Razorpay's standard infra policy requires production services to run on the approved RSPL AWS cluster.
- **DevOps approval** is needed to provision and configure the RSPL environment for VRM's workloads.
- **Security review** is required before any merchant data is processed on the new cluster (data residency, encryption at rest/in transit, IAM policies).
- Until migration is complete, the team cannot confidently onboard new merchants at scale.

This is the **#1 open blocker** for the VRM project as of May 2026.

---

## Options Considered

| Option | Pros | Cons |
|---|---|---|
| **Stay on private cluster** | No migration effort, no approvals needed | Not scalable, not policy-compliant, can't onboard at scale |
| **Migrate to RSPL AWS cluster** ✅ | Policy-compliant, scalable, supported by DevOps | Migration effort, approval lead time, potential downtime risk |
| **Adopt a third-party managed service (e.g., GCP Vertex AI)** | Managed infra, less ops burden | Not aligned with Razorpay's internal cloud strategy, data compliance complexity |

---

## Decision Made

**Migrate to RSPL AWS cluster.**

This is the only option that is both policy-compliant and scalable to the May 2026 target. The migration will be led by [[people/rishav-loomba]] with support from the Razorpay DevOps and Security teams.

---

## Owner

[[people/rishav-loomba]]

---

## Status

**In Progress**

Pending:
- [ ] DevOps cluster provisioning approved
- [ ] Security review completed and sign-off received
- [ ] Data pipeline cutover tested in staging
- [ ] Production cutover with rollback plan
- [ ] Post-migration stability check (48 hrs)

---

## Date

2026-05

---

## Timeline
- **2026-05-13** | Page created in brain

## Linked Entities
- [[people/rishav-loomba]]
- [[projects/vrm]]
