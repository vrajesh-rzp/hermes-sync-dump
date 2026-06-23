---
title: Merchant Lifecycle (M0–M12)
type: concept
tags: [concept, vrm, retention, merchants]
created: 2026-05-20
---

## Stages

The merchant lifecycle at Razorpay is segmented by months-since-activation (M0 onwards). Each stage has distinct goals, failure modes, and intervention types.

### M0 — Onboarding
The merchant has signed up and is going through KYC, integration, and setup. The primary risk here is **drop-off before first transaction**. Success = merchant completes integration and processes their first live payment.

### M1–M2 — Activation
The merchant is live but still in the "habit formation" phase. They are testing Razorpay, comparing with alternatives, and deciding whether to commit. The primary risk is **low engagement / low GMV** — the merchant is live but not leaning in. Success = merchant establishes a regular transaction pattern and starts using at least one core product deeply.

### M3–M12 — Retention
The merchant is established. By M3, the relationship is either healthy or showing early warning signs. This is the **VRM North Star window** — interventions here directly affect whether a merchant becomes a long-term Razorpay customer or churns. Success = merchant is growing GMV on Razorpay, has multi-product adoption, and would recommend Razorpay to peers.

---

## Key Signals per Stage

| Stage | Positive Signals | Risk Signals |
|---|---|---|
| **M0 (Onboarding)** | KYC submitted, integration docs accessed, test transaction fired | KYC stalled >3 days, no API calls after sign-up, support ticket on integration |
| **M1–M2 (Activation)** | First live txn, GMV trending up week-on-week, product feature enabled | Only 1 txn in first 2 weeks, GMV flat, no login in 7+ days |
| **M3–M12 (Retention)** | GMV growing, multi-product adoption, repeat NPS positive | GMV dropping >20% MoM, competitor mentions in support tickets, payment method removed |

---

## Where VRM plays

VRM's primary focus is **M3–M12 retention**, but signals from M0–M2 feed VRM's model for predicting which merchants are likely to churn later:

- **M0:** VRM ingests onboarding completion signals to flag merchants who are slow to activate — early intervention can prevent later churn.
- **M1–M2:** VRM monitors activation quality; a merchant who activates weakly is statistically more likely to churn at M3–M6.
- **M3–M12:** VRM's core operating zone. This is where AI-driven outreach, proactive check-ins, and upsell interventions are deployed. See [[concepts/vrm-signal-detection]] for the detection layer.

---

## Related

- [[projects/vrm]]
- [[concepts/vrm-signal-detection]]

---

## Timeline
- **2026-06-08** | Discussed in Sprint Planning - Growth
- **2026-06-08** | Discussed in VRM CLM - Anurag / Vrajesh
- **2026-05-19** | Discussed in VRM Weekly Sync
- **2026-05-12** | Discussed in [IMP] VRM <> DevOps
- **2026-05-12** | Discussed in VRM Weekly Sync

## Related Meetings
- [[meetings/2026-06-08-sprint_planning_-_growth]] (2026-06-08)
- [[meetings/2026-06-08-vrm_clm_-_anurag___vrajesh]] (2026-06-08)
- [[meetings/2026-05-19-vrm_weekly_sync-1]] (2026-05-19)
- [[meetings/2026-05-12-imp__vrm____devops]] (2026-05-12)
- [[meetings/2026-05-12-vrm_weekly_sync]] (2026-05-12)
- [[meetings/2026-04-24-bitscale_nda___saas_order_form]] (2026-04-24)
- [[meetings/2026-04-01-imp__ownership_allignment___path_forward]] (2026-04-01)
- [[meetings/2026-03-16-growth_pod_weekly_check-in]] (2026-03-16)
