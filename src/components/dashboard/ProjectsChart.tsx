import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "مكتملة", value: 34, color: "hsl(160, 97%, 24%)" },
  { name: "قيد التنفيذ", value: 22, color: "hsl(35, 38%, 63%)" },
  { name: "متأخرة", value: 8, color: "hsl(8, 70%, 62%)" },
  { name: "مخطط لها", value: 15, color: "hsl(190, 26%, 52%)" },
];

const ProjectsChart = () => {
  return (
    <Card className="h-full flex flex-col min-h-0">
      <CardHeader className="pb-1 flex-shrink-0">
        <CardTitle className="text-sm font-semibold">حالة المشاريع</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 flex flex-col items-center justify-center pb-2">
        <div className="w-full flex-1 min-h-0" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="65%"
                paddingAngle={3}
                dataKey="value"
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
                  border: "1px solid hsl(35, 15%, 88%)",
                  fontSize: 12,
                }}
              />
              <Legend
                formatter={(value) => <span style={{ fontFamily: "Alexandria", fontSize: 11 }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsChart;
