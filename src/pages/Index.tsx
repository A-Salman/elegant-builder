import { Building2, Users, MapPin, TrendingUp, Landmark, TreePine } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KpiCard from "@/components/dashboard/KpiCard";
import LandUsageChart from "@/components/dashboard/LandUsageChart";
import ProjectsChart from "@/components/dashboard/ProjectsChart";
import MapPlaceholder from "@/components/dashboard/MapPlaceholder";
import StatsTable from "@/components/dashboard/StatsTable";

const kpis = [
  {
    title: "إجمالي المشاريع",
    value: 79,
    unit: "مشروع",
    icon: Building2,
    trend: { value: 12, label: "عن العام الماضي" },
    colorClass: "bg-primary",
  },
  {
    title: "عدد السكان",
    value: "563,462",
    icon: Users,
    trend: { value: 3.2, label: "نمو سنوي" },
    colorClass: "bg-secondary",
  },
  {
    title: "المساحة الإجمالية",
    value: "120,000",
    unit: "كم²",
    icon: MapPin,
    colorClass: "bg-brand-teal",
  },
  {
    title: "نسبة الإنجاز",
    value: "68%",
    icon: TrendingUp,
    trend: { value: 5, label: "عن الربع السابق" },
    colorClass: "bg-primary",
  },
  {
    title: "المحافظات",
    value: 8,
    unit: "محافظة",
    icon: Landmark,
    colorClass: "bg-brand-slate",
  },
  {
    title: "المساحات الخضراء",
    value: "2,340",
    unit: "هكتار",
    icon: TreePine,
    trend: { value: 8, label: "زيادة" },
    colorClass: "bg-primary",
  },
];

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
      <DashboardHeader />
      <main className="flex-1 grid grid-rows-[auto_1fr] grid-cols-12 gap-2 p-2 min-h-0">
        {/* KPI Cards Row */}
        <section className="col-span-12 grid grid-cols-6 gap-2">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </section>

        {/* Main content area */}
        <div className="col-span-8 min-h-0">
          <MapPlaceholder />
        </div>

        {/* Right sidebar panels */}
        <div className="col-span-4 grid grid-rows-2 gap-2 min-h-0">
          <ProjectsChart />
          <LandUsageChart />
        </div>
      </main>
    </div>
  );
};

export default Index;
