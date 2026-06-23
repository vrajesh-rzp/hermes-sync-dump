import { useState } from "react";
import { GripVertical, Plus, Check, X } from "lucide-react";
import { PrioritiesData, Priority } from "../lib/data";

interface PrioritiesViewProps {
  data: PrioritiesData | null;
  onSave: (data: PrioritiesData) => void;
}

export default function PrioritiesView({ data, onSave }: PrioritiesViewProps) {
  const [weekly, setWeekly] = useState<Priority[]>(data?.weekly || []);
  const [monthly, setMonthly] = useState<Priority[]>(data?.monthly || []);
  const [addingTo, setAddingTo] = useState<"weekly" | "monthly" | null>(null);
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = (section: "weekly" | "monthly") => {
    if (!newTitle.trim()) return;
    const item: Priority = { id: `p-${Date.now()}`, title: newTitle.trim(), status: "pending" };
    if (section === "weekly") setWeekly([...weekly, item]);
    else setMonthly([...monthly, item]);
    setNewTitle("");
    setAddingTo(null);
  };

  const handleToggle = (section: "weekly" | "monthly", id: string) => {
    const update = (items: Priority[]) =>
      items.map((p) => (p.id === id ? { ...p, status: p.status === "done" ? "pending" as const : "done" as const } : p));
    if (section === "weekly") setWeekly(update(weekly));
    else setMonthly(update(monthly));
  };

  const handleRemove = (section: "weekly" | "monthly", id: string) => {
    if (section === "weekly") setWeekly(weekly.filter((p) => p.id !== id));
    else setMonthly(monthly.filter((p) => p.id !== id));
  };

  const handleSave = () => {
    onSave({ weekly, monthly, updated_at: new Date().toISOString() });
  };

  const hasChanges =
    JSON.stringify(weekly) !== JSON.stringify(data?.weekly || []) ||
    JSON.stringify(monthly) !== JSON.stringify(data?.monthly || []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-warm-800">Priorities</h2>
        {hasChanges && (
          <button
            onClick={handleSave}
            className="text-xs bg-amber-500 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-amber-600 transition-colors"
          >
            Save Changes
          </button>
        )}
      </div>

      <PrioritySection
        title="This Week"
        items={weekly}
        section="weekly"
        isAdding={addingTo === "weekly"}
        newTitle={newTitle}
        onToggle={handleToggle}
        onRemove={handleRemove}
        onStartAdd={() => setAddingTo("weekly")}
        onNewTitleChange={setNewTitle}
        onAdd={() => handleAdd("weekly")}
        onCancelAdd={() => setAddingTo(null)}
      />

      <PrioritySection
        title="This Month"
        items={monthly}
        section="monthly"
        isAdding={addingTo === "monthly"}
        newTitle={newTitle}
        onToggle={handleToggle}
        onRemove={handleRemove}
        onStartAdd={() => setAddingTo("monthly")}
        onNewTitleChange={setNewTitle}
        onAdd={() => handleAdd("monthly")}
        onCancelAdd={() => setAddingTo(null)}
      />
    </div>
  );
}

interface PrioritySectionProps {
  title: string;
  items: Priority[];
  section: "weekly" | "monthly";
  isAdding: boolean;
  newTitle: string;
  onToggle: (section: "weekly" | "monthly", id: string) => void;
  onRemove: (section: "weekly" | "monthly", id: string) => void;
  onStartAdd: () => void;
  onNewTitleChange: (v: string) => void;
  onAdd: () => void;
  onCancelAdd: () => void;
}

function PrioritySection({
  title,
  items,
  section,
  isAdding,
  newTitle,
  onToggle,
  onRemove,
  onStartAdd,
  onNewTitleChange,
  onAdd,
  onCancelAdd,
}: PrioritySectionProps) {
  return (
    <section>
      <h3 className="text-sm font-medium text-warm-600 mb-3">{title}</h3>
      <div className="bg-white rounded-xl border border-warm-150 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 px-4 py-3 ${
              index < items.length - 1 ? "border-b border-warm-100" : ""
            } group`}
          >
            <GripVertical size={12} className="text-warm-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
            <span className="text-xs text-warm-400 font-mono w-4">{index + 1}.</span>
            <button onClick={() => onToggle(section, item.id)} className="shrink-0">
              <div
                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                  item.status === "done"
                    ? "bg-green-500 border-green-500"
                    : "border-warm-300 hover:border-amber-400"
                }`}
              >
                {item.status === "done" && <Check size={10} className="text-white" />}
              </div>
            </button>
            <span
              className={`flex-1 text-sm ${
                item.status === "done" ? "text-warm-400 line-through" : "text-warm-700"
              }`}
            >
              {item.title}
            </span>
            <button
              onClick={() => onRemove(section, item.id)}
              className="text-warm-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        {isAdding ? (
          <div className="flex items-center gap-2 px-4 py-3 border-t border-warm-100">
            <input
              type="text"
              className="flex-1 text-sm border border-warm-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-200"
              placeholder="Priority title..."
              value={newTitle}
              onChange={(e) => onNewTitleChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onAdd()}
              autoFocus
            />
            <button onClick={onAdd} className="text-xs bg-amber-500 text-white px-2.5 py-1.5 rounded-lg">Add</button>
            <button onClick={onCancelAdd} className="text-xs text-warm-400 px-2 py-1.5">Cancel</button>
          </div>
        ) : (
          <button
            onClick={onStartAdd}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-warm-400 hover:text-warm-600 hover:bg-warm-50 transition-colors border-t border-warm-100"
          >
            <Plus size={12} /> Add priority
          </button>
        )}
      </div>
    </section>
  );
}
