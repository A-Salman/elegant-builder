import { Building2, LayoutGrid, ShoppingCart, CheckCircle, DollarSign, MapPin } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import bgImage from "@/assets/background.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const kpis = [
  { title: "عدد قطع المرحلة الأولى", value: "1,267", icon: LayoutGrid, colorClass: "bg-primary" },
  { title: "عدد قطع المرحلة الثانية", value: "983", icon: LayoutGrid, colorClass: "bg-secondary" },
  { title: "عدد القطع المتاحة", value: "549", icon: MapPin, colorClass: "bg-brand-teal" },
  { title: "عدد القطع المباعة", value: "1,378", icon: ShoppingCart, colorClass: "bg-brand-copper" },
  { title: "عدد القطع المخصصة", value: "323", icon: CheckCircle, colorClass: "bg-brand-slate" },
];

const landUsageData = [
  { name: "سكني", value: 882551.7, color: "hsl(50, 80%, 60%)" },
  { name: "تجاري سكني", value: 306713.2, color: "hsl(340, 60%, 55%)" },
  { name: "مشروع داون تاون", value: 644128.2, color: "hsl(160, 97%, 40%)" },
  { name: "فراغات مفتوحة", value: 275269.3, color: "hsl(120, 40%, 50%)" },
  { name: "مرفق تعليمي", value: 143750.6, color: "hsl(200, 50%, 50%)" },
  { name: "مركز تجاري", value: 102930.1, color: "hsl(280, 40%, 55%)" },
  { name: "تجاري إداري", value: 99818.1, color: "hsl(190, 40%, 55%)" },
  { name: "تجاري", value: 73309.7, color: "hsl(8, 70%, 62%)" },
  { name: "مسجد", value: 69466.5, color: "hsl(35, 50%, 65%)" },
  { name: "تجاري داخلي", value: 25736.7, color: "hsl(30, 70%, 50%)" },
  { name: "مرفق حكومي", value: 22887.1, color: "hsl(210, 15%, 50%)" },
  { name: "مكتب بريد", value: 15847.2, color: "hsl(330, 50%, 50%)" },
  { name: "محطة كهرباء", value: 4441.6, color: "hsl(45, 60%, 50%)" },
  { name: "صحي", value: 3771.2, color: "hsl(0, 60%, 50%)" },
  { name: "سكن مؤذن", value: 3070.2, color: "hsl(270, 30%, 60%)" },
];

const categoryCards = [
  { name: "سكني", value: 1823 },
  { name: "تجاري سكني", value: 186 },
  { name: "تجاري داخلي", value: 13 },
  { name: "مسجد", value: 12 },
  { name: "مرفق تعليمي", value: 14 },
  { name: "مرفق متنزه", value: 105 },
  { name: "مكتب بريد", value: 2 },
  { name: "تجاري", value: 28 },
  { name: "صحي", value: 1 },
  { name: "سكن مؤذن", value: 6 },
  { name: "مشروع داون تاون", value: 24 },
  { name: "محطة كهرباء", value: 3 },
  { name: "تجاري اداري", value: 30 },
  { name: "مركز تجاري", value: 2 },
  { name: "مرفق حكومي", value: 1 },
];

const landUsageLegend = [
  { name: "سكن مؤذن", color: "hsl(270, 30%, 60%)" },
  { name: "مكتب بريد", color: "hsl(330, 50%, 50%)" },
  { name: "تجاري", color: "hsl(8, 70%, 62%)" },
  { name: "تجاري إداري", color: "hsl(190, 40%, 55%)" },
  { name: "تجاري داخلي", color: "hsl(30, 70%, 50%)" },
  { name: "تجاري سكني", color: "hsl(340, 60%, 55%)" },
  { name: "سكني", color: "hsl(50, 80%, 60%)" },
];

const Investment = () => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-0" />

      <div className="relative z-10 flex flex-col h-full">
        <DashboardHeader />

        <main className="flex-1 grid grid-rows-[auto_1fr_auto] grid-cols-12 gap-2 p-3 min-h-0" dir="rtl">
          {/* KPI Row */}
          <section className="col-span-12 grid grid-cols-5 gap-2">
            {kpis.map((kpi) => (
              <div key={kpi.title} className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 p-3 shadow-lg transition-all hover:bg-white/15">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-white/60">{kpi.title}</span>
                    <span className="text-xl font-bold text-white">{kpi.value}</span>
                  </div>
                  <div className={`rounded-lg p-1.5 ${kpi.colorClass} bg-opacity-80`}>
                    <kpi.icon className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
                <div className={`absolute bottom-0 start-0 h-0.5 w-full opacity-50 ${kpi.colorClass}`} />
              </div>
            ))}
          </section>

          {/* Middle row: chart + map + legend */}
          <div className="col-span-3 grid grid-rows-[1fr_auto] gap-2 min-h-0">
            {/* Land usage bar chart */}
            <div className="rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg overflow-hidden flex flex-col min-h-0">
              <div className="px-3 py-2 border-b border-white/10 flex-shrink-0">
                <h2 className="text-xs font-semibold text-white">اجمالي مساحات استخدامات الاراضي</h2>
              </div>
              <div className="flex-1 min-h-0 p-1" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={landUsageData} layout="vertical" margin={{ top: 2, right: 15, left: 5, bottom: 2 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis type="number" tick={{ fontSize: 8, fill: "rgba(255,255,255,0.5)" }} />
                    <YAxis dataKey="name" type="category" tick={{ fontSize: 8, fill: "rgba(255,255,255,0.7)" }} width={60} />
                    <Tooltip
                      formatter={(value: number) => [value.toLocaleString("ar-SA"), "م²"]}
                      contentStyle={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "8px",
                        fontFamily: "Alexandria",
                        direction: "rtl",
                        fontSize: 11,
                        color: "white",
                        backdropFilter: "blur(12px)",
                      }}
                      itemStyle={{ color: "white" }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={10}>
                      {landUsageData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Total sale price */}
            <div className="rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg p-3 text-center">
              <span className="text-[10px] text-white/60 block">إجمالي سعر البيع</span>
              <span className="text-lg font-bold text-brand-gold">1,388,610,343.3</span>
              <span className="text-[10px] text-white/50 mr-1">ر.س</span>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="col-span-6 min-h-0">
            <div className="h-full rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg overflow-hidden flex flex-col">
              <div className="flex-1 flex items-center justify-center bg-brand-slate/20">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-white/30 mx-auto mb-2" />
                  <p className="text-white/40 text-sm">خريطة اراضي الاستثمار</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 px-3 py-2 border-t border-white/10 flex-shrink-0">
                <button className="text-[10px] text-white/70 bg-white/10 rounded-full px-3 py-1 hover:bg-white/20 transition-colors">
                  استخدامات الأرض
                </button>
                <button className="text-[10px] text-white/70 bg-white/10 rounded-full px-3 py-1 hover:bg-white/20 transition-colors">
                  حالة الارض
                </button>
              </div>
            </div>
          </div>

          {/* Right legend panels */}
          <div className="col-span-3 grid grid-rows-2 gap-2 min-h-0">
            {/* Land usage legend */}
            <div className="rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg overflow-hidden flex flex-col min-h-0">
              <div className="px-3 py-2 border-b border-white/10 flex-shrink-0">
                <h2 className="text-xs font-semibold text-white">استخدامات الأراضي</h2>
                <p className="text-[9px] text-white/50">استخدامات ارض الهيئة</p>
              </div>
              <div className="flex-1 overflow-auto p-3 space-y-2">
                {landUsageLegend.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-4 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-[10px] text-white/70">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Allocation status */}
            <div className="rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg overflow-hidden flex flex-col min-h-0">
              <div className="px-3 py-2 border-b border-white/10 flex-shrink-0">
                <h2 className="text-xs font-semibold text-white">حالة التخصيص</h2>
                <p className="text-[9px] text-white/50">حالة التخصيص ارض الهيئة</p>
              </div>
              <div className="flex-1 overflow-auto p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 rounded-sm flex-shrink-0 bg-emerald-400" />
                  <span className="text-[10px] text-white/70">متاح</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom category cards */}
          <section className="col-span-12 grid grid-cols-15 gap-1.5" style={{ gridTemplateColumns: `repeat(${categoryCards.length}, minmax(0, 1fr))` }}>
            {categoryCards.map((cat) => (
              <div key={cat.name} className="rounded-lg bg-white/10 backdrop-blur-xl border border-white/15 p-2 text-center transition-all hover:bg-white/15">
                <span className="text-lg font-bold text-white block">{cat.value}</span>
                <span className="text-[8px] text-white/60 leading-tight block">{cat.name}</span>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Investment;
