import { MapPin } from "lucide-react";

const MapPlaceholder = () => {
  return (
    <div className="h-full flex flex-col rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
        <h2 className="text-sm font-semibold text-white">خريطة منطقة حائل</h2>
        <div className="flex gap-2">
          <select className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white/30 appearance-none">
            <option className="text-black">جميع المحافظات</option>
            <option className="text-black">حائل</option>
            <option className="text-black">بقعاء</option>
            <option className="text-black">الغزالة</option>
            <option className="text-black">الشنان</option>
            <option className="text-black">موقق</option>
            <option className="text-black">السليمي</option>
            <option className="text-black">الحائط</option>
            <option className="text-black">سميراء</option>
          </select>
          <select className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white/30 appearance-none">
            <option className="text-black">جميع الطبقات</option>
            <option className="text-black">استخدامات أراضي</option>
            <option className="text-black">مشاريع</option>
            <option className="text-black">خدمات</option>
          </select>
        </div>
      </div>
      <div className="flex-1 min-h-0 relative flex flex-col items-center justify-center gap-4 m-3 rounded-lg bg-white/5 border border-white/10">
        <div className="rounded-full bg-white/10 p-4">
          <MapPin className="h-10 w-10 text-white/40" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-white/70">خريطة ArcGIS تفاعلية</p>
          <p className="text-xs text-white/40 mt-1">سيتم ربط خريطة ArcGIS JavaScript SDK هنا</p>
        </div>
        {/* Map legend */}
        <div className="absolute bottom-4 start-4 flex flex-wrap gap-2">
          {[
            { label: "سكني", color: "bg-primary" },
            { label: "تجاري", color: "bg-secondary" },
            { label: "صناعي", color: "bg-brand-slate" },
            { label: "زراعي", color: "bg-brand-teal" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 rounded-md bg-black/30 backdrop-blur-sm px-2 py-1 text-xs border border-white/10">
              <div className={`h-2.5 w-2.5 rounded-sm ${item.color}`} />
              <span className="text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
