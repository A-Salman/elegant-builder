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
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="p-6 max-w-[1600px] mx-auto space-y-6">
        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </section>

        {/* Map + Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <MapPlaceholder />
          <ProjectsChart />
        </section>

        {/* Land Usage Chart */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <LandUsageChart />
          <StatsTable />
        </section>
      </main>
    </div>
  );
};

export default Index;
