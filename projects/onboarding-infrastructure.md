---
type: project
title: "Onboarding Infrastructure (R1-Acqui)"
tags: [project, onboarding, infra, api-decomp, compliance]
created: 2026-05-20
---

# Onboarding Infrastructure (R1-Acqui)

> Platform team responsible for KYC infrastructure, API decomposition from monolith, merchant onboarding experience, and compliance tooling.

## Current Status (June 2026)

- **Phase:** Active execution on FY27 OKRs
- **PM:** [[people/vrajesh-iyengar]]
- **EM:** [[people/kailash-atal]]
- **Manager:** [[people/sagar-agarwal]]

## FY27 Q1-Q2 Roadmap

### API Decomposition (L0: Achieve 100%)
| Service | Status | ETA |
|---------|--------|-----|
| NC (Network Centricity) | 100% ramped, 1 P0 pending | Jun 23 |
| User Service | Delayed | Jul 20 |
| Activation Service | Stalled (Elan reassigned) | TBD |
| ASV Decomp | Completed | Done |
| Org Service | Not started | Jun end (at risk) |
| Workflow Service | Tech spec in progress | Jun end (at risk) |
| Demerger | Scoping pending | Q2 |

### Compliance (L0: 100% Compliance)
- Address Verification: DataSutram live, Quick Commerce NDA pending
- CKYC Upload: Deprioritized, PRD needed
- Auto Re-KYC: Not started

### Funnel Improvement (L0)
- Auto-Decision Rate: 81.5% (declining from 83.6%, target 90%)
- 1-Click Onboarding: AOA/MOA/COI from IDFY done, MSME from Authbridge pending
- PE to MTU: Remove liveness checks — pending

### Merchant Experience (L0: Reduce Disastrous Experiences)
- PSE Tickets: 225/month (target <15) — spiked due to MSME go-live
- PSE SLA Resolution: 93.2% (target 95%) — good trajectory
- USL Page Load Latency: 3s (target 1s) — Owner: [[people/kailash-atal]]

## Key People

| Role | Person |
|------|--------|
| PM | [[people/vrajesh-iyengar]] |
| EM | [[people/kailash-atal]] |
| Manager | [[people/sagar-agarwal]] |
| Skip | [[people/tejas-gowda]] |

## Open Blockers
- [ ] Activation Service decomp stalled — Elan switched to SV Reduction
- [ ] Org Service + Workflow Service at risk — not started
- [ ] PSE ticket spike (225) needs RCA on MSME go-live issues
- [ ] Auto-Decision Rate declining — needs OCR accuracy investigation

[Source: OKR Sheet (SME_Payments_OKRs.xlsx), 2026-06-17]

---

## Timeline
- **2026-05-20** | Page created in brain

## Related Meetings
- [[meetings/2026-06-08-sprint_planning_-_growth]] (2026-06-08)
- [[meetings/2026-06-08-subscription_issues_-_connect]] (2026-06-08)
- [[meetings/2026-06-08-subscriptions_daily_sync-12]] (2026-06-08)
- [[meetings/2026-06-08-vrm___ai_calling_-_kt__session_1]] (2026-06-08)
- [[meetings/2026-06-08-vrm_clm_-_anurag___vrajesh]] (2026-06-08)
- [[meetings/2026-04-28-vrm_-_auth___security_considerations.]] (2026-04-28)
- [[meetings/2026-04-24-bitscale_nda___saas_order_form]] (2026-04-24)
- [[meetings/2026-04-01-imp__ownership_allignment___path_forward]] (2026-04-01)
- [[meetings/2026-03-16-growth_pod_weekly_check-in]] (2026-03-16)

## Linked Entities
- [[people/kailash-atal]]
- [[people/sagar-agarwal]]
- [[people/tejas-gowda]]
- [[people/vrajesh-iyengar]]
