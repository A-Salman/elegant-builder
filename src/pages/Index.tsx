import { Building2, LayoutGrid, ShoppingCart, CheckCircle, DollarSign } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KpiCard from "@/components/dashboard/KpiCard";
import LandUsageChart from "@/components/dashboard/LandUsageChart";
import ProjectsChart from "@/components/dashboard/ProjectsChart";
import MapPlaceholder from "@/components/dashboard/MapPlaceholder";
import bgImage from "@/assets/background.png";

const kpis = [
  {
    title: "إجمالي المشاريع",
    value: 79,
    unit: "مشروع",
    icon: Building2,
    colorClass: "bg-primary",
  },
  {
    title: "عدد قطع المرحلة الأولى",
    value: "1,245",
    unit: "قطعة",
    icon: LayoutGrid,
    colorClass: "bg-secondary",
  },
  {
    title: "عدد قطع المرحلة الثانية",
    value: "862",
    unit: "قطعة",
    icon: LayoutGrid,
    colorClass: "bg-brand-teal",
  },
  {
    title: "إجمالي سعر البيع - المرحلة الثانية",
    value: "48.5",
    unit: "مليون ر.س",
    icon: DollarSign,
    colorClass: "bg-brand-copper",
  },
  {
    title: "عدد القطع المباعة",
    value: "1,680",
    unit: "قطعة",
    icon: ShoppingCart,
    colorClass: "bg-primary",
  },
  {
    title: "عدد القطع المخصصة",
    value: "427",
    unit: "قطعة",
    icon: CheckCircle,
    colorClass: "bg-brand-slate",
  },
];

const Index = () => {
  return (
    <div
      className="h-screen w-screen overflow-hidden flex flex-col relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <DashboardHeader />
        <main className="flex-1 grid grid-rows-[auto_1fr] grid-cols-12 gap-3 p-3 min-h-0">
          {/* KPI Cards Row */}
          <section className="col-span-12 grid grid-cols-6 gap-3">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.title} {...kpi} />
            ))}
          </section>

          {/* Main content area */}
          <div className="col-span-8 min-h-0">
            <MapPlaceholder />
          </div>

          {/* Right sidebar panels */}
          <div className="col-span-4 grid grid-rows-2 gap-3 min-h-0">
            <ProjectsChart />
            <LandUsageChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
