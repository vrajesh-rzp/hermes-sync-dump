---
name: metrics
description: Refresh OKR metrics by querying Trino via the analytics-agent. Pulls daily/weekly/monthly values for Auto-Decision Rate, M0 Activation, CKYC Coverage, and PSE Tickets, then updates command-center/okr-metrics.json for the dashboard.
---

# cc:metrics — Refresh OKR Metrics

Pull live metric data from Trino and update the Command Center OKR dashboard.

## Metrics to Query

Use the `/analytics-agent:analytics-query` skill (or Trino MCP directly) for each:

### 1. Auto-Decision Rate (ADR)
```sql
SELECT DATE_FORMAT(DATE_TRUNC('week', CAST(mf.l2_submitted_date AS DATE)), '%Y-%m-%d') AS week_start,
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN (mf.activated_flag = 'Auto Activated' AND mf.amp_deprecation_flag = 0) OR f.is_black_list = 'Y' OR f.is_risk_dedupe = 'Y' OR f.is_fee_gated = 'Y' THEN mf.merchant_id END) / NULLIF(COUNT(DISTINCT mf.merchant_id), 0), 1) AS adr_pct
FROM hive.aggregate_pa.merchant_fact_hourly_incremental mf
JOIN hive.aggregate_pa.pg_acquisition_product_signup_to_mtu_fact f ON mf.merchant_id = f.merchant_id
WHERE mf.l2_submitted_date >= DATE_ADD('week', -12, CURRENT_DATE)
  AND mf.is_vas = 0 AND mf.l2_submitted_date IS NOT NULL
  AND mf.merchant_category NOT IN ('Backend - Org_Submerchant','Self-Serve - Org_Submerchant')
GROUP BY 1 ORDER BY 1
```

### 2. M0 Activation (Signup → PE)
Query the signup-to-mtu fact table for weekly activation rates.

### 3. CKYC Coverage (Registered Businesses)
Query ckyc_flag rates for registered business classifications.

### 4. PSE Tickets
Query DevRev API for ticket count by month (tag: PSE).

## Output

Write results to `~/Desktop/repos/hermes-sync-dump/command-center/okr-metrics.json`:
```json
{
  "generated_at": "<now>",
  "metrics": {
    "adr": { "current": X, "target_q2": 65, "target_eofy": 90, "daily": [...], "weekly": [...], "monthly": [...] },
    "m0_activation": { ... },
    "ckyc_rate": { ... },
    "pse_tickets": { ... }
  }
}
```

## After Running
- Commit the updated JSON: `cd ~/Desktop/repos/hermes-sync-dump && git add command-center/okr-metrics.json && git commit -m "metrics: refresh OKR data" && git push`
- The dashboard will show the new data on next page load
