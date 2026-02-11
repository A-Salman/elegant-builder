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
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">{title}</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-bold text-foreground">{value}</span>
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
          {trend && (
            <span className={cn(
              "text-xs font-medium mt-1",
              trend.value >= 0 ? "text-primary" : "text-destructive"
            )}>
              {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value)}% {trend.label}
            </span>
          )}
        </div>
        <div className={cn("rounded-lg p-2.5", colorClass)}>
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
      <div className={cn("absolute bottom-0 start-0 h-1 w-full opacity-60", colorClass)} />
    </div>
  );
};

export default KpiCard;
