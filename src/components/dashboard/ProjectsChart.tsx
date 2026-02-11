import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "مكتملة", value: 34, color: "hsl(160, 97%, 40%)" },
  { name: "قيد التنفيذ", value: 22, color: "hsl(35, 50%, 65%)" },
  { name: "متأخرة", value: 8, color: "hsl(8, 70%, 62%)" },
  { name: "مخطط لها", value: 15, color: "hsl(190, 40%, 55%)" },
];

const ProjectsChart = () => {
  return (
    <div className="h-full flex flex-col rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg overflow-hidden min-h-0">
      <div className="px-5 py-3 border-b border-white/10 flex-shrink-0">
        <h2 className="text-sm font-semibold text-white">حالة المشاريع</h2>
      </div>
      <div className="flex-1 min-h-0 p-2" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="38%"
              outerRadius="62%"
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [value, name]}
              contentStyle={{
                fontFamily: "Alexandria",
                direction: "rtl",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                fontSize: 12,
                backdropFilter: "blur(12px)",
              }}
              itemStyle={{ color: "white" }}
            />
            <Legend
              formatter={(value) => (
                <span style={{ fontFamily: "Alexandria", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectsChart;
