---
type: deliverable
title: Merchant Onboarding Flows by Business Type — AIDocs Deliverable
ingested_via: 'mcp:put_page'
ingested_at: '2026-06-17T13:40:24.311Z'
source_kind: 'mcp:put_page'
tags:
  - aidocs
  - bvs
  - documentation
  - mco
  - onboarding
created: 2026-05-20
---

## Delivered: 2026-06-17

**AIDocs URL:** https://aidocs.concierge.razorpay.com/app/d/doc_tr3mhri7geq425tq
**Local file:** ~/Desktop/onboarding-flows-by-business-type.html

## What it covers
- 12 tabbed business type flows (Individual, Proprietorship, Partnership, Pvt Ltd, Public Ltd, LLP, Trust, Society, HUF, NGO, Section 8, Government)
- BVS architecture deep dive (Twirp/HTTP, 31+ providers, sync+async, retry logic)
- Color-coded comparison matrix
- Cross-validation findings (code vs Slash responses)

## Sources
- 6 successful A2A threads with @Slash on #vraj-ai-scratchpad
- Direct code analysis of MCO (pg-onboarding-service) and BVS repos
- Key insight: all business types share unified journey; differences are BMC-category-driven

## Key Findings
1. CIN only checks company name — does NOT verify incorporation_date or status
2. COI OCR is non-blocking (is_required: false)
3. Trust/Society/HUF/NGO/Government have NO entity-specific BVS verification beyond business_pan + bank_account
4. Signatory verification rule is currently COMMENTED OUT in code
5. Public Limited gets auto-whitelist upgrade that Private Limited doesn't
6. 26 subcategories are excluded from auto-activation (forced manual review)

---

## Timeline
- **2026-05-20** | Page created in brain
