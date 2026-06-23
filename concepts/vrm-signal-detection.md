---
title: VRM Signal Detection
type: concept
tags: [concept, vrm, ai]
created: 2026-05-20
---

## What it is

**Signal detection** is the capability within VRM that monitors merchant behaviour and surfaces actionable health signals in real time. Rather than waiting for a merchant to churn or reach out, VRM proactively watches for three classes of signal:

1. **Churn Signals** — Drop in transaction volume, payment failures trending up, merchant not logging in, support tickets spiking. These indicate a merchant may be drifting toward inactivity or switching to a competitor.

2. **Activation Gaps** — Merchant has signed up but hasn't completed key setup steps (e.g., not enabled a payment method, hasn't done first live transaction, hasn't integrated a relevant product). These are opportunities for timely nudges to unlock value.

3. **Upsell Moments** — Merchant hitting volume thresholds, launching a new product category, or showing patterns consistent with needing a new Razorpay product (e.g., RazorpayX, Payroll, Capital). These are expansion revenue opportunities.

---

## Why it matters for VRM

VRM's value proposition is *proactive* relationship management. Without signal detection, VRM is reactive — it can only respond when a merchant reaches out. Signal detection transforms VRM into a true AI RM that acts before problems escalate or opportunities are missed.

Concretely, signal detection:
- Feeds the intervention engine with *what to say* and *when to say it*
- Prioritises which merchants the AI (or a human RM assisted by AI) should contact today
- Closes the feedback loop: once an intervention is made, signal detection tells us if it worked
- Directly drives the North Star metric — catching churn signals early is the primary lever for M3–M12 retention

---

## Open Questions

- [ ] What is the minimum viable signal set for v1? Can we start with just 3–5 high-signal features?
- [ ] How do we handle signal lag — Razorpay data pipelines have varying freshness; what's acceptable latency for a churn signal to be actionable?
- [ ] Who owns the signal taxonomy — PM + Data Science, or the ML team independently?
- [ ] How do we avoid signal fatigue for RMs if we surface too many low-confidence signals?
- [ ] Can we use LLM-based pattern recognition over unstructured merchant data (e.g., support tickets) to generate soft signals?

---

## Related

- [[projects/vrm]]
- [[concepts/merchant-lifecycle]]

---

## Timeline
- **2026-05-20** | Page created in brain

## Related Meetings
- [[meetings/2026-05-12-vrm_weekly_sync]] (2026-05-12)
