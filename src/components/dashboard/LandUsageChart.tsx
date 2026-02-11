import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "سكني", value: 45200, color: "hsl(160, 97%, 24%)" },
  { name: "تجاري", value: 28300, color: "hsl(35, 38%, 63%)" },
  { name: "صناعي", value: 15800, color: "hsl(210, 15%, 35%)" },
  { name: "زراعي", value: 32100, color: "hsl(190, 26%, 52%)" },
  { name: "حكومي", value: 12400, color: "hsl(22, 24%, 28%)" },
  { name: "صحي", value: 6700, color: "hsl(8, 70%, 62%)" },
];

const LandUsageChart = () => {
  return (
    <Card className="h-full flex flex-col min-h-0">
      <CardHeader className="pb-1 flex-shrink-0">
        <CardTitle className="text-sm font-semibold">توزيع استخدامات الأراضي</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 pb-2">
        <div className="h-full w-full" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 15%, 88%)" />
              <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(210, 10%, 45%)" }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 11, fill: "hsl(210, 18%, 20%)" }}
                width={45}
              />
              <Tooltip
                formatter={(value: number) => [value.toLocaleString("ar-SA"), "هكتار"]}
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(35, 15%, 88%)",
                  borderRadius: "8px",
                  fontFamily: "Alexandria",
                  direction: "rtl",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandUsageChart;
