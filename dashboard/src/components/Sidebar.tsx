import { MessageSquare, BarChart3, Target, LogOut } from "lucide-react";
import { logout } from "../lib/auth";

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  activeCounts: { active: number; watching: number };
}

export default function Sidebar({ activeView, onNavigate, activeCounts }: SidebarProps) {
  const navItems = [
    { id: "threads", label: "Threads", icon: MessageSquare, badge: activeCounts.active || undefined },
    { id: "okrs", label: "OKRs", icon: BarChart3 },
    { id: "priorities", label: "Priorities", icon: Target },
  ];

  return (
    <aside className="w-56 min-h-screen border-r border-warm-200 bg-white/50 px-3 py-6 flex flex-col">
      <div className="mb-8 px-3">
        <h1 className="text-base font-semibold text-warm-900">Command Center</h1>
        <p className="text-xs text-warm-500 mt-0.5">Vrajesh Iyengar</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                isActive
                  ? "bg-amber-50 text-amber-800 font-medium"
                  : "text-warm-600 hover:bg-warm-50 hover:text-warm-800"
              }`}
            >
              <Icon size={16} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-2 px-3 py-2 text-sm text-warm-500 hover:text-warm-700 transition-colors mt-4"
      >
        <LogOut size={14} />
        <span>Sign out</span>
      </button>
    </aside>
  );
}
