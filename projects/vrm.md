---
title: VRM — Virtual Relationship Manager
type: project
tags: [project, vrm, ai, retention]
created: 2026-05-20
---

> VRM is an AI-powered account manager that proactively engages merchants at the right moment to drive activation, retention, and growth — replacing manual relationship management at scale.

---

## Vision

Build an always-on AI relationship manager that acts like a high-quality human RM — anticipating merchant needs, surfacing the right nudge at the right time, and ensuring every merchant on Razorpay feels supported through their entire lifecycle. The long-term vision is to make human RMs 10x more effective by augmenting them with AI, and eventually to serve the long tail of merchants who would never get a dedicated RM at all.

---

## North Star Metric

**M3–M12 Merchant Retention**

The primary signal VRM optimises for is whether merchants who have been active for 3 months are still active at 12 months. All product decisions — which signals to surface, which interventions to trigger, which channels to use — are evaluated against this metric.

---

## Current Status

- **Phase:** Early scaling / onboarding ramp
- **Live Goal:** 1,000 merchants live by end of May 2026
- **Current Blocker:** Infrastructure migration (private cluster → RSPL AWS cluster). See [[decisions/aws-cluster-migration]].
- **Stage:** Moving from pilot cohort to broader rollout; engineering focus on cluster migration and stability.

---

## Key People

| Role | Person |
|---|---|
| Owner / Full-Stack AI Builder | Vrajesh Iyengar |
| Direct Manager | [[people/sagar-agarwal]] |
| Skip Manager | [[people/tejas-gowda]] |
| VP | [[people/khilan-haria]] |
| CEO | [[people/harshil-mathur]] |
| Key Engineer | [[people/rishav-loomba]] |

---

## Open Blockers

- [ ] **AWS Cluster Migration** — VRM currently runs on a private cluster; must migrate to RSPL AWS cluster before scaling. Requires DevOps + Security sign-off. See [[decisions/aws-cluster-migration]].
- [ ] **Merchant Onboarding Pipeline** — Need a reliable, low-friction flow to onboard the next batch of merchants to hit the 1,000 live goal by May 2026.

---

## Key Decisions

- *(none recorded yet)*

---

## Timeline
- **2026-06-08** | Discussed in Shubham x nikhil x vrajesh
- **2026-06-08** | Discussed in Sprint Planning - Growth
- **2026-06-08** | Discussed in VRM / AI Calling - KT (Session 1)
- **2026-06-08** | Discussed in VRM CLM - Anurag / Vrajesh
- **2026-05-26** | Discussed in VRM Weekly Sync
---

## Related Meetings
- [[meetings/2026-06-08-shubham_x_nikhil_x_vrajesh]] (2026-06-08)
- [[meetings/2026-06-08-sprint_planning_-_growth]] (2026-06-08)
- [[meetings/2026-06-08-vrm___ai_calling_-_kt__session_1]] (2026-06-08)
- [[meetings/2026-06-08-vrm_clm_-_anurag___vrajesh]] (2026-06-08)
- [[meetings/2026-05-26-vrm_weekly_sync]] (2026-05-26)
- [[meetings/2026-05-26-vrm_x_agentic_dashboard_-_architecture___use-case_breakout]] (2026-05-26)
- [[meetings/2026-05-25-vrm_memory_layer_-_anurag___vrajesh]] (2026-05-25)
- [[meetings/2026-05-19-vrm_weekly_sync-1]] (2026-05-19)
- [[meetings/2026-05-19-vrm_weekly_sync]] (2026-05-19)
- [[meetings/2026-05-14-vrm_weekly_sync]] (2026-05-14)

## Linked Entities
- [[decisions/aws-cluster-migration]]
- [[people/harshil-mathur]]
- [[people/khilan-haria]]
- [[people/rishav-loomba]]
- [[people/sagar-agarwal]]
- [[people/tejas-gowda]]
- [[people/vrajesh-iyengar]]
