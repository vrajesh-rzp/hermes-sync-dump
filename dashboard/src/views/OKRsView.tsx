import { useState } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { OKRMetric } from "../lib/data";

interface OKRsViewProps {
  metrics: Record<string, OKRMetric> | null;
  generatedAt: string;
}

type TimeRange = "daily" | "weekly" | "monthly";

const metricMeta: Record<string, { label: string; unit: string; higherIsBetter: boolean }> = {
  adr: { label: "Auto-Decision Rate", unit: "%", higherIsBetter: true },
  m0_activation: { label: "Signup → PE (M0)", unit: "%", higherIsBetter: true },
  ckyc_rate: { label: "CKYC Coverage (Reg Biz)", unit: "%", higherIsBetter: true },
  pse_tickets: { label: "PSE Tickets / Month", unit: "", higherIsBetter: false },
};

export default function OKRsView({ metrics, generatedAt }: OKRsViewProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>("weekly");

  if (!metrics || Object.keys(metrics).length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-sm text-warm-600">No OKR metrics data yet.</p>
          <p className="text-xs text-warm-400 mt-2">Run <code className="bg-warm-100 px-1.5 py-0.5 rounded">/cc:metrics</code> to pull live data from Trino.</p>
          <p className="text-xs text-warm-400 mt-1">Or ensure <code className="bg-warm-100 px-1.5 py-0.5 rounded">command-center/okr-metrics.json</code> exists.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-warm-800">OKR Scorecard</h2>
          <p className="text-xs text-warm-400 mt-0.5">
            Last refreshed: {generatedAt ? new Date(generatedAt).toLocaleDateString() : "—"}
          </p>
        </div>
        <div className="flex bg-warm-100 rounded-lg p-0.5">
          {(["daily", "weekly", "monthly"] as TimeRange[]).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                timeRange === range ? "bg-white text-warm-800 shadow-sm" : "text-warm-500"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(metrics).map(([key, metric]) => {
          const meta = metricMeta[key] || { label: key, unit: "", higherIsBetter: true };
          return (
            <MetricCard
              key={key}
              metric={metric}
              meta={meta}
              timeRange={timeRange}
            />
          );
        })}
      </div>
    </div>
  );
}

function MetricCard({
  metric,
  meta,
  timeRange,
}: {
  metric: OKRMetric;
  meta: { label: string; unit: string; higherIsBetter: boolean };
  timeRange: TimeRange;
}) {
  const data = metric[timeRange] || [];
  const current = metric.current;
  const target = metric.target_q2;

  const prevValue = data.length > 1 ? data[data.length - 2]?.value : null;
  const delta = prevValue != null ? current - prevValue : 0;
  const isGood = meta.higherIsBetter ? current >= target : current <= target;
  const isImproving = meta.higherIsBetter ? delta > 0 : delta < 0;

  const TrendIcon = delta === 0 ? Minus : isImproving ? TrendingUp : TrendingDown;
  const statusColor = isGood ? "text-green-600" : "text-red-600";
  const statusBg = isGood ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100";

  return (
    <div className={`rounded-xl border p-4 ${statusBg}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-warm-600">{meta.label}</span>
        <TrendIcon size={14} className={isImproving ? "text-green-500" : "text-red-500"} />
      </div>

      <div className="flex items-baseline gap-2">
        <span className={`text-2xl font-bold ${statusColor}`}>
          {current}{meta.unit}
        </span>
        <span className="text-xs text-warm-400">/ {target}{meta.unit} target</span>
      </div>

      {delta !== 0 && prevValue != null && (
        <div className={`text-xs mt-1 ${isImproving ? "text-green-600" : "text-red-600"}`}>
          {delta > 0 ? "+" : ""}{delta.toFixed(1)}{meta.unit} vs prev
        </div>
      )}

      {/* Sparkline (simple bar chart) */}
      {data.length > 0 && (
        <div className="flex items-end gap-0.5 mt-3 h-8">
          {data.slice(-8).map((d, i) => {
            const max = Math.max(...data.slice(-8).map((x) => x.value));
            const min = Math.min(...data.slice(-8).map((x) => x.value));
            const range = max - min || 1;
            const height = ((d.value - min) / range) * 100;
            return (
              <div
                key={i}
                className="flex-1 rounded-sm bg-current opacity-20 hover:opacity-40 transition-opacity"
                style={{ height: `${Math.max(height, 10)}%` }}
                title={`${d.value}${meta.unit}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
