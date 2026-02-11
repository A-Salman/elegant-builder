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
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">حالة المشاريع</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
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
                }}
              />
              <Legend
                formatter={(value) => <span style={{ fontFamily: "Alexandria", fontSize: 12 }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-center">
          <span className="text-3xl font-bold text-foreground">79</span>
          <span className="text-sm text-muted-foreground mr-1">مشروع</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsChart;
