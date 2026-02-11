import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MapPlaceholder = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">خريطة منطقة حائل</CardTitle>
          <div className="flex gap-2">
            <select className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
              <option>جميع المحافظات</option>
              <option>حائل</option>
              <option>بقعاء</option>
              <option>الغزالة</option>
              <option>الشنان</option>
              <option>موقق</option>
              <option>السليمي</option>
              <option>الحائط</option>
              <option>سميراء</option>
            </select>
            <select className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
              <option>جميع الطبقات</option>
              <option>استخدامات أراضي</option>
              <option>مشاريع</option>
              <option>خدمات</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 pb-4">
        <div className="relative h-full w-full rounded-lg bg-gradient-to-br from-muted to-muted/50 border border-border flex flex-col items-center justify-center gap-4">
          <div className="rounded-full bg-primary/10 p-4">
            <MapPin className="h-10 w-10 text-primary" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">خريطة ArcGIS تفاعلية</p>
            <p className="text-xs text-muted-foreground mt-1">
              سيتم ربط خريطة ArcGIS JavaScript SDK هنا
            </p>
          </div>
          <div className="absolute bottom-4 start-4 flex flex-wrap gap-2">
            {[
              { label: "سكني", color: "bg-primary" },
              { label: "تجاري", color: "bg-secondary" },
              { label: "صناعي", color: "bg-brand-slate" },
              { label: "زراعي", color: "bg-brand-teal" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 rounded-md bg-card/80 backdrop-blur-sm px-2 py-1 text-xs border border-border">
                <div className={`h-2.5 w-2.5 rounded-sm ${item.color}`} />
                <span className="text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapPlaceholder;
