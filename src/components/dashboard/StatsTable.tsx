import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const governorates = [
  { name: "حائل", population: "412,758", area: "6,800", projects: 28, completion: 78 },
  { name: "بقعاء", population: "52,314", area: "3,200", projects: 12, completion: 65 },
  { name: "الغزالة", population: "18,290", area: "1,800", projects: 8, completion: 82 },
  { name: "الشنان", population: "15,100", area: "2,100", projects: 6, completion: 55 },
  { name: "موقق", population: "27,800", area: "4,500", projects: 10, completion: 70 },
  { name: "السليمي", population: "8,600", area: "5,200", projects: 5, completion: 40 },
  { name: "الحائط", population: "22,400", area: "3,800", projects: 7, completion: 60 },
  { name: "سميراء", population: "6,200", area: "2,900", projects: 3, completion: 45 },
];

const StatsTable = () => {
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">إحصائيات المحافظات</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">المحافظة</TableHead>
              <TableHead className="text-right">عدد السكان</TableHead>
              <TableHead className="text-right">المساحة (كم²)</TableHead>
              <TableHead className="text-right">المشاريع</TableHead>
              <TableHead className="text-right">نسبة الإنجاز</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {governorates.map((gov) => (
              <TableRow key={gov.name}>
                <TableCell className="font-medium">{gov.name}</TableCell>
                <TableCell>{gov.population}</TableCell>
                <TableCell>{gov.area}</TableCell>
                <TableCell>{gov.projects}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${gov.completion}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{gov.completion}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StatsTable;
