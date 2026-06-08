---
title: Onboarding Infrastructure (R1-Acqui)
type: project
tags: [project, onboarding, merchant-identity, kyc, r1-acqui]
---

# Onboarding Infrastructure

**Charter:** R1-Acqui — Razorpay's merchant onboarding pipeline, identity verification, and KYC infrastructure.
**PM:** [[people/vrajesh-iyengar]]
**EM:** [[people/kailash-atal]]
**Previous PM:** Yameni Dhankar
**DevRev Sprint Board:** [vista-405](https://app.devrev.ai/razorpay/vistas/vista-405)

**Key Slack channels:** #unified-onboarding-infra, #r1-merchant-identity, #api_decomposition, #sme-onboarding

---

## Scope

- Merchant identity verification and KYC flows
- Document collection and validation (MSME, MOA, AOA, etc.)
- API decomposition for onboarding services
- SME onboarding optimization
- On-call and incident management for onboarding infra
- BVS (Business Verification Service) system reliability
- Pre-release review and on-call roster management

---

## Active Tracks (2026-06)

- **MSME Number & MSME Doc go-live** — Completed ~22 June. PSE ticket surge post-go-live under monitoring.
- **BVS System Failure Rate** — RCA in progress for increased failure rate on artefact_type: moa.
- **reKYC timeout consistency** — Aligning reKYC timeout with MKYC across all document types.
- **Merchant switching in X Dashboard** — Ongoing issue with merchants unable to switch successfully.
- **Incident AI backlog** — Reduced from 32 to 3 open incident AIs in Sprint 2 Q1'26, currently 6 open.
- **On-call roster** — Shared and managed via Google Sheets (Pre Release Review and On Call for Onboarding Infra and Agentic Onboarding).

---

## Team Members

- Pankaj Kumar, Padhiyar Satvik Lokeshkumar, Anurag Gupta, Ashutosh Kumar Yadav, Machunuru Subbaiah, Fahad Ali, Ravinuthala Sai Phanidhar, Mayank Mohan, Arshpreet Singh Wadehra, Manuj Vyas, Ridhima Aggarwal, Priyanshu Agarwal, Vishwesh Bajpai, Manuj Dixit, Diyala Bharathi

---

## See Also

- [[projects/conversational-onboarding]]
- [[people/kailash-atal]]
- [[okrs/fy26-q2]]
