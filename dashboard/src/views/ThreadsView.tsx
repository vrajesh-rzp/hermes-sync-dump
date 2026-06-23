import { useState } from "react";
import { Clock, MessageCircle, Mail, GitBranch, Calendar, FileText, AlertCircle, ExternalLink, Send, CheckCircle2, Loader2, ChevronDown, ChevronRight } from "lucide-react";
import { ThreadItem, ThreadUpdate, ActionRecord } from "../lib/data";
import { formatDistanceToNow } from "date-fns";

interface ThreadDetail extends ThreadItem {
  updates?: ThreadUpdate[];
  actions?: ActionRecord[];
}

interface ThreadsViewProps {
  threads: ThreadDetail[];
  counts: { active: number; watching: number; due_today: number };
  onAction: (threadId: string, action: string, payload?: string) => void;
}

const sourceIcons: Record<string, typeof MessageCircle> = {
  slack: MessageCircle,
  gmail: Mail,
  devrev: GitBranch,
  calendar: Calendar,
  drive: FileText,
};

const sourceColors: Record<string, string> = {
  slack: "text-purple-500",
  gmail: "text-red-400",
  devrev: "text-blue-500",
  calendar: "text-green-500",
  drive: "text-yellow-600",
};

const etaColors: Record<string, string> = {
  urgent: "bg-red-50 text-red-700 border-red-200",
  today: "bg-amber-50 text-amber-700 border-amber-200",
  "this-week": "bg-blue-50 text-blue-700 border-blue-200",
  "no-rush": "bg-warm-50 text-warm-600 border-warm-200",
};

const etaBorders: Record<string, string> = {
  urgent: "border-l-red-400",
  today: "border-l-amber-400",
  "this-week": "border-l-blue-400",
  "no-rush": "border-l-warm-300",
};

export default function ThreadsView({ threads, counts, onAction }: ThreadsViewProps) {
  const [expandedThread, setExpandedThread] = useState<string | null>(null);
  const [responseText, setResponseText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const active = threads.filter((t) => t.status === "active");
  const watching = threads.filter((t) => t.status === "watching");

  const handleToggleExpand = (threadId: string) => {
    setExpandedThread(expandedThread === threadId ? null : threadId);
    setResponseText("");
  };

  const handleSubmitResponse = async (threadId: string) => {
    if (!responseText.trim()) return;
    setSubmitting(true);
    await onAction(threadId, "respond", responseText.trim());
    setResponseText("");
    setSubmitting(false);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Pulse strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <PulseCard value={counts.active} label="Active" color="text-amber-600" />
        <PulseCard value={counts.watching} label="Watching" color="text-warm-600" />
        <PulseCard value={counts.due_today} label="Due Today" color="text-red-600" />
        <PulseCard value={active.length + watching.length} label="Total" color="text-warm-500" />
      </div>

      {/* Active threads */}
      {active.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-warm-700 mb-3 flex items-center gap-2">
            <AlertCircle size={14} className="text-amber-500" />
            Needs Action ({active.length})
          </h2>
          <div className="space-y-2">
            {active.map((thread) => (
              <ThreadCard
                key={thread.id}
                thread={thread}
                isExpanded={expandedThread === thread.id}
                onToggle={() => handleToggleExpand(thread.id)}
                responseText={expandedThread === thread.id ? responseText : ""}
                onResponseChange={setResponseText}
                onSubmit={() => handleSubmitResponse(thread.id)}
                onDefer={() => onAction(thread.id, "defer")}
                onReject={() => onAction(thread.id, "reject")}
                submitting={submitting}
              />
            ))}
          </div>
        </section>
      )}

      {/* Watching threads */}
      {watching.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-warm-500 mb-3">
            Watching ({watching.length})
          </h2>
          <div className="space-y-1.5">
            {watching.map((thread) => (
              <ThreadCard
                key={thread.id}
                thread={thread}
                isExpanded={expandedThread === thread.id}
                onToggle={() => handleToggleExpand(thread.id)}
                responseText={expandedThread === thread.id ? responseText : ""}
                onResponseChange={setResponseText}
                onSubmit={() => handleSubmitResponse(thread.id)}
                onDefer={() => onAction(thread.id, "defer")}
                onReject={() => onAction(thread.id, "reject")}
                submitting={submitting}
                compact
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function PulseCard({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="bg-white rounded-xl border border-warm-150 px-4 py-3 text-center">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-[11px] text-warm-500 mt-0.5">{label}</div>
    </div>
  );
}

interface ThreadCardProps {
  thread: ThreadDetail;
  isExpanded: boolean;
  onToggle: () => void;
  responseText: string;
  onResponseChange: (v: string) => void;
  onSubmit: () => void;
  onDefer: () => void;
  onReject: () => void;
  submitting: boolean;
  compact?: boolean;
}

function ThreadCard({ thread, isExpanded, onToggle, responseText, onResponseChange, onSubmit, onDefer, onReject, submitting, compact }: ThreadCardProps) {
  const Icon = sourceIcons[thread.source] || FileText;
  const iconColor = sourceColors[thread.source] || "text-warm-400";
  const borderClass = compact ? "border-l-warm-200" : (etaBorders[thread.response_eta] || etaBorders["no-rush"]);
  const etaClass = etaColors[thread.response_eta] || etaColors["no-rush"];

  const timeAgo = thread.last_update
    ? formatDistanceToNow(new Date(thread.last_update), { addSuffix: true })
    : "";

  return (
    <div className={`bg-white rounded-xl border border-warm-150 border-l-4 ${borderClass} overflow-hidden transition-all`}>
      {/* Header — always visible, clickable */}
      <div className="p-4 cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0">
            <Icon size={16} className={iconColor} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              {isExpanded ? <ChevronDown size={12} className="text-warm-400 shrink-0" /> : <ChevronRight size={12} className="text-warm-400 shrink-0" />}
              <span className="text-sm font-medium text-warm-800 truncate">{thread.title}</span>
            </div>
            {!compact && (
              <div className="flex items-center gap-2 flex-wrap mt-1">
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${etaClass}`}>
                  {thread.response_eta}
                </span>
                <span className="text-[11px] text-warm-400">{timeAgo}</span>
                {thread.update_count > 1 && (
                  <span className="text-[10px] bg-warm-100 text-warm-500 px-1.5 py-0.5 rounded-full">
                    {thread.update_count} updates
                  </span>
                )}
              </div>
            )}
            {compact && (
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] text-warm-400">{timeAgo}</span>
                {thread.update_count > 1 && (
                  <span className="text-[10px] bg-warm-100 text-warm-500 px-1.5 py-0.5 rounded-full">{thread.update_count}</span>
                )}
              </div>
            )}
          </div>
          {!compact && !isExpanded && (
            <div className="flex gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
              <ActionButton label="Review" variant="primary" onClick={onToggle} />
              <ActionButton label="Defer" variant="secondary" onClick={onDefer} />
            </div>
          )}
        </div>
      </div>

      {/* Expanded: full thread timeline */}
      {isExpanded && (
        <div className="border-t border-warm-100 px-4 pb-4">
          {/* Summary */}
          {thread.summary && (
            <div className="py-3 border-b border-warm-50">
              <p className="text-sm text-warm-700">{thread.summary}</p>
            </div>
          )}

          {/* Updates timeline */}
          <div className="py-3 space-y-3">
            <h4 className="text-xs font-semibold text-warm-500 uppercase tracking-wide">Thread Timeline</h4>
            {(thread.updates || []).length > 0 ? (
              <div className="space-y-2">
                {(thread.updates || []).map((update, i) => (
                  <UpdateItem key={i} update={update} />
                ))}
              </div>
            ) : (
              <p className="text-xs text-warm-400 italic">No detailed updates available. Run /cc:process to enrich.</p>
            )}
          </div>

          {/* Previous actions on this thread */}
          {(thread.actions || []).length > 0 && (
            <div className="py-3 border-t border-warm-50 space-y-2">
              <h4 className="text-xs font-semibold text-warm-500 uppercase tracking-wide">Actions Taken</h4>
              {(thread.actions || []).map((action) => (
                <ActionItem key={action.id} action={action} />
              ))}
            </div>
          )}

          {/* Response input */}
          <div className="pt-3 border-t border-warm-50">
            {/* Suggestion bubbles */}
            <SuggestionBubbles thread={thread} onSelect={onResponseChange} />
            <div className="flex gap-2">
              <textarea
                className="flex-1 text-sm border border-warm-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-200 resize-none min-h-[60px] placeholder:text-warm-400"
                rows={2}
                placeholder="Type your response or instruction for Claude Code to execute..."
                value={responseText}
                onChange={(e) => onResponseChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.metaKey) onSubmit();
                }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-warm-400">⌘+Enter to submit</span>
              <div className="flex gap-2">
                <ActionButton label="Dismiss" variant="ghost" onClick={onReject} />
                <ActionButton label="Defer" variant="secondary" onClick={onDefer} />
                <button
                  onClick={onSubmit}
                  disabled={!responseText.trim() || submitting}
                  className="flex items-center gap-1.5 text-xs font-medium bg-amber-500 text-white px-3 py-1.5 rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {submitting ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UpdateItem({ update }: { update: ThreadUpdate }) {
  const Icon = sourceIcons[update.source] || FileText;
  const iconColor = sourceColors[update.source] || "text-warm-300";

  return (
    <div className="flex gap-3 items-start">
      <div className="mt-1 shrink-0">
        <Icon size={12} className={iconColor} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-warm-700">{update.content}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] text-warm-400">{update.timestamp}</span>
          {update.source_url && (
            <a
              href={update.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-blue-500 hover:text-blue-600 flex items-center gap-0.5"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={9} /> Open source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ActionItem({ action }: { action: ActionRecord }) {
  const statusIcon = action.status === "executed" ? (
    <CheckCircle2 size={12} className="text-green-500" />
  ) : action.status === "pending" ? (
    <Clock size={12} className="text-amber-500 pulse-indicator" />
  ) : (
    <AlertCircle size={12} className="text-red-500" />
  );

  const statusLabel = action.status === "executed"
    ? "Executed"
    : action.status === "pending"
    ? "Pending execution"
    : "Failed";

  // Message can be at action.message (in-memory) or action.payload.message (from disk)
  const message = action.message || (action as any).payload?.message || action.action || "No message";

  return (
    <div className="bg-warm-50 rounded-lg p-3 border border-warm-100">
      <div className="flex items-start gap-2">
        {statusIcon}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-warm-700 font-medium">{message}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-warm-100 text-warm-500">{action.action}</span>
            <span className="text-[10px] text-warm-400">{statusLabel}</span>
            <span className="text-[10px] text-warm-400">
              {action.executed_at
                ? `Executed ${formatDistanceToNow(new Date(action.executed_at), { addSuffix: true })}`
                : action.created_at
                ? `Queued ${formatDistanceToNow(new Date(action.created_at), { addSuffix: true })}`
                : ""}
            </span>
          </div>
          {action.result && (
            <p className="text-[11px] text-green-700 bg-green-50 rounded px-2 py-1 mt-1.5">{action.result}</p>
          )}
        </div>
      </div>
    </div>
  );
}

interface Suggestion {
  label: string;
  prompt: string;
  icon?: string;
}

function getSuggestionsForThread(thread: ThreadDetail): Suggestion[] {
  const suggestions: Suggestion[] = [];

  // Source-specific suggestions
  if (thread.source === "calendar") {
    suggestions.push(
      { label: "Accept", prompt: "Accept this meeting invite", icon: "✓" },
      { label: "Decline", prompt: "Decline this meeting and send a polite note that I have a conflict", icon: "✗" },
      { label: "Decline all future", prompt: "Decline this meeting for all future occurrences and remove from calendar", icon: "🚫" },
      { label: "Reschedule", prompt: "Reply suggesting to reschedule to next week, same time slot", icon: "📅" },
    );
  } else if (thread.source === "slack") {
    suggestions.push(
      { label: "Reply: Acknowledged", prompt: "Reply in the Slack thread: 'Noted, will take a look today'", icon: "👍" },
      { label: "Reply: Need more context", prompt: "Reply in the Slack thread asking for more context on the blocker and expected timeline", icon: "❓" },
      { label: "Tag someone", prompt: "Reply in the Slack thread tagging the relevant engineering owner to investigate", icon: "🏷" },
      { label: "Create DevRev issue", prompt: "Create a DevRev issue from this Slack thread with the key details and assign to me", icon: "📋" },
    );
  } else if (thread.source === "gmail") {
    suggestions.push(
      { label: "Reply: Acknowledged", prompt: "Draft a reply: 'Thanks, reviewing this. Will get back by EOD.'", icon: "✉️" },
      { label: "Reply: Approve", prompt: "Reply approving the request as-is with no changes needed", icon: "✓" },
      { label: "Reply: Push back", prompt: "Draft a polite reply pushing back — need more data before committing to this", icon: "⏸" },
      { label: "Forward to team", prompt: "Forward this email to the pod Slack channel for visibility", icon: "↗" },
    );
  } else if (thread.source === "devrev") {
    suggestions.push(
      { label: "Update status", prompt: "Update the DevRev issue status to 'In Progress' with a comment on current approach", icon: "🔄" },
      { label: "Add blocker", prompt: "Add a comment flagging the blocker and tag the relevant owner for unblocking", icon: "🚧" },
      { label: "Post meeting notes", prompt: "Post the latest standup notes relevant to this enhancement on the DevRev ticket", icon: "📝" },
      { label: "Close/resolve", prompt: "Mark this DevRev issue as resolved with a summary comment", icon: "✅" },
    );
  } else if (thread.source === "drive") {
    suggestions.push(
      { label: "Review & comment", prompt: "Open this doc and add my review comments on the key sections", icon: "💬" },
      { label: "Summarize changes", prompt: "Summarize what changed in this document since last week", icon: "📊" },
      { label: "Share with pod", prompt: "Share this document update in the pod Slack channel with a brief summary", icon: "↗" },
    );
  }

  // Universal suggestions
  suggestions.push(
    { label: "Snooze 1 day", prompt: "Snooze this thread — remind me tomorrow morning", icon: "⏰" },
  );

  return suggestions;
}

function SuggestionBubbles({ thread, onSelect }: { thread: ThreadDetail; onSelect: (text: string) => void }) {
  const suggestions = getSuggestionsForThread(thread);

  return (
    <div className="flex flex-wrap gap-1.5 mb-3">
      {suggestions.map((s, i) => (
        <button
          key={i}
          onClick={() => onSelect(s.prompt)}
          className="text-[11px] px-2.5 py-1.5 rounded-full border border-warm-200 bg-white text-warm-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all"
        >
          {s.icon && <span className="mr-1">{s.icon}</span>}
          {s.label}
        </button>
      ))}
    </div>
  );
}

function ActionButton({ label, variant, onClick }: { label: string; variant: "primary" | "secondary" | "ghost"; onClick: () => void }) {
  const classes = {
    primary: "bg-amber-500 text-white hover:bg-amber-600 px-3",
    secondary: "bg-warm-100 text-warm-600 hover:bg-warm-200 px-2.5",
    ghost: "text-warm-400 hover:text-warm-600 px-2",
  };
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`text-xs font-medium py-1.5 rounded-lg transition-all ${classes[variant]}`}
    >
      {label}
    </button>
  );
}
