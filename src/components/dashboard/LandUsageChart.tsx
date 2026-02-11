import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "سكني", value: 45200, color: "hsl(160, 97%, 40%)" },
  { name: "تجاري", value: 28300, color: "hsl(35, 50%, 65%)" },
  { name: "صناعي", value: 15800, color: "hsl(210, 15%, 50%)" },
  { name: "زراعي", value: 32100, color: "hsl(190, 40%, 55%)" },
  { name: "حكومي", value: 12400, color: "hsl(22, 30%, 40%)" },
  { name: "صحي", value: 6700, color: "hsl(8, 70%, 62%)" },
];

const LandUsageChart = () => {
  return (
    <div className="h-full flex flex-col rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg overflow-hidden min-h-0">
      <div className="px-5 py-3 border-b border-white/10 flex-shrink-0">
        <h2 className="text-sm font-semibold text-white">توزيع استخدامات الأراضي</h2>
      </div>
      <div className="flex-1 min-h-0 p-2" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis type="number" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.5)" }} />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 11, fill: "rgba(255,255,255,0.7)" }}
              width={45}
            />
            <Tooltip
              formatter={(value: number) => [value.toLocaleString("ar-SA"), "هكتار"]}
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                fontFamily: "Alexandria",
                direction: "rtl",
                fontSize: 12,
                color: "white",
                backdropFilter: "blur(12px)",
              }}
              itemStyle={{ color: "white" }}
              labelStyle={{ color: "rgba(255,255,255,0.7)" }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={14}>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LandUsageChart;
