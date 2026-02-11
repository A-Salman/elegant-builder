import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: { value: number; label: string };
  colorClass?: string;
}

const KpiCard = ({ title, value, unit, icon: Icon, trend, colorClass = "bg-primary" }: KpiCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 p-4 shadow-lg transition-all hover:bg-white/15 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-white/60">{title}</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-white">{value}</span>
            {unit && <span className="text-xs text-white/50">{unit}</span>}
          </div>
          {trend && (
            <span className={cn(
              "text-xs font-medium mt-0.5",
              trend.value >= 0 ? "text-emerald-400" : "text-red-400"
            )}>
              {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value)}% {trend.label}
            </span>
          )}
        </div>
        <div className={cn("rounded-lg p-2", colorClass, "bg-opacity-80")}>
          <Icon className="h-4 w-4 text-white" />
        </div>
      </div>
      <div className={cn("absolute bottom-0 start-0 h-0.5 w-full opacity-50", colorClass)} />
    </div>
  );
};

export default KpiCard;
