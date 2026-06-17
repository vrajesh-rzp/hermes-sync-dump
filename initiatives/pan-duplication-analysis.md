# PAN Card Duplication Analysis — Active Merchants

**Date:** 2026-06-17  
**Source:** `hive.realtime_hudi_api.stakeholders` JOIN `hive.aggregate_pa.merchant_fact_hourly_incremental`  
**Scope:** All currently activated merchants | Exact PAN match (uppercase, 10-char, excluding test PANs)  
**Catalog Status:** FROM_SCRATCH (no certified query exists)

---

## Overall Summary

| Metric | Value |
|--------|-------|
| **Total unique PANs** | 1,353,870 |
| **PANs used by only 1 merchant** | 1,218,598 (90.0%) |
| **PANs shared by >1 merchant** | **135,272 (10.0%)** |
| **Merchants using a shared PAN** | 343,238 |

> ~10% of all PANs are shared across multiple active merchants, involving ~343K merchants total.

---

## SME vs Enterprise Split

| Segment | Total Merchants | Unique PANs | Merchants Sharing PANs | % Sharing |
|---------|---:|---:|---:|:---:|
| **SME** | 1,388,003 | 1,222,524 | 165,479 | **11.9%** |
| **Enterprise (ENT)** | 56,904 | 39,889 | 17,015 | **29.9%** |

**Enterprise merchants share PANs at 2.5x the rate of SME merchants** (29.9% vs 11.9%).

---

## Distribution: Merchants per Shared PAN (Overall)

| Merchants sharing a PAN | Number of PANs | Total merchants involved |
|:---:|---:|---:|
| 1 | 1,218,598 | 1,218,598 |
| 2 | 109,977 | 219,954 |
| 3 | 18,812 | 56,436 |
| 4 | 4,919 | 19,676 |
| 5 | 1,844 | 9,220 |
| 6–10 | 1,994 | ~14,500 |
| 11–20 | 527 | ~7,800 |
| >20 | 266 | long tail (up to 5K per PAN) |

The bulk of sharing is at 2 merchants per PAN (81% of shared PANs).

---

## Distribution: SME

| Merchants per PAN | # PANs | Merchants involved |
|:---:|---:|---:|
| 2 | 92,519 | 185,038 |
| 3 | 14,709 | 44,127 |
| 4 | 3,603 | 14,412 |
| 5 | 1,265 | 6,325 |
| 6–10 | 1,160 | ~8,200 |
| 11–20 | 260 | ~3,600 |
| >20 | long tail | — |

## Distribution: Enterprise

| Merchants per PAN | # PANs | Merchants involved |
|:---:|---:|---:|
| 2 | 3,185 | 6,370 |
| 3 | 809 | 2,427 |
| 4 | 392 | 1,568 |
| 5 | 213 | 1,065 |
| 6–10 | 431 | ~3,000 |
| 11–20 | 164 | ~2,400 |
| >20 | ~70+ | heavy tail (up to 32+ per PAN) |

---

## Breakdown by Business Type

| Business Type | Code | Total Merchants | Unique PANs | % Merchants Sharing PANs |
|--------------|:---:|---:|---:|:---:|
| Not Yet Categorized / Individual | 11 | 817,980 | 755,539 | 7.6% |
| Proprietorship | 1 | 418,072 | 382,235 | 8.6% |
| Private Limited | 4 | 170,460 | 141,833 | 16.8% |
| Partnership | 3 | 58,495 | 54,022 | 7.6% |
| Society | 9 | 33,033 | 23,922 | 27.6% |
| LLP | 6 | 27,514 | 25,375 | 7.8% |
| NGO | 10 | 16,682 | 13,991 | 16.1% |
| Public Limited | 5 | 8,163 | 4,445 | 45.5% |
| One Person Company | 17 | 5,954 | 5,413 | 9.1% |
| Government | 14 | 1,884 | 622 | 67.0% |
| Other | 16 | 1,217 | 681 | 44.0% |
| Educational Institution | 15 | 799 | 490 | 38.7% |
| HUF | 13 | 966 | 943 | 2.4% |
| Trust | 7 | 491 | 484 | 1.4% |

---

## Key Insights

1. **Government entities** have the highest PAN sharing rate (67%) — expected since multiple merchant accounts operate under the same government PAN.
2. **Public Limited companies** at 45.5% — also expected (subsidiaries/divisions sharing a parent company PAN).
3. **Societies and NGOs** at 27.6% and 16.1% — likely regional chapters or multiple projects under one registered society.
4. **Private Limited** at 16.8% — multiple merchant accounts for different products/business lines under one company PAN.
5. **Proprietorships and individuals** are at 7.6–8.6% — most interesting from a risk/dedupe perspective since a single PAN should ideally map to fewer accounts.
6. **Enterprise shares at 2.5x the SME rate** — largely legitimate (conglomerates, group companies with multiple MIDs).

---

## Risk Signals & Recommendations

| Insight | SME | Enterprise |
|---------|-----|-----------|
| Most common sharing | 2 merchants per PAN (81% of shared) | 2 merchants per PAN (60% of shared) |
| Heavy sharing (>5 per PAN) | ~1,400 PANs | ~800 PANs |
| Risk signal | Higher — proprietors shouldn't typically need 3+ MIDs | Lower — legitimate multi-entity groups |
| Likely legitimate | Some (multiple businesses by same owner) | Most (conglomerates, group companies) |
| Worth investigating | SME PANs with >5 merchants — potential fraud/abuse | ENT PANs with >20 merchants — verify entity structure |

---

## Caveats & Methodology

- **Test PANs excluded:** `ABCDP1234M`, `ABCPD1234M`, `AAAPL1234C`, `AAAPR1111K` (accounted for ~360K+ phantom merchants)
- **Lowercase PANs excluded** — some records have lowercase PANs (data quality issues); only uppercase (standard format) PANs counted
- **PAN source:** `hive.realtime_hudi_api.stakeholders.poi_identification_number` (promoter/director PAN, not company PAN — company PAN in `merchant_details.company_pan` is PII-masked in the warehouse)
- **Segment source:** `team_owner` field in `merchant_fact_hourly_incremental` (values: SME, ENT)
- **Filter:** `activation_status = 'activated'` / `current_activation_status = 'activated'` only (~2.1M of 15.16M total merchants)
- Some merchants may appear in both segments if migrated between teams — uses current team assignment
