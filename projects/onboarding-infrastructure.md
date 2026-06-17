---
type: project
title: "Onboarding Infrastructure (R1-Acqui)"
tags: [project, onboarding, infra, api-decomp, compliance]
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
