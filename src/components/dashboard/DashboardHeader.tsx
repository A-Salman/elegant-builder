import logo from "@/assets/logo-white.png";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2.5 bg-white/10 backdrop-blur-xl border-b border-white/10 flex-shrink-0">
      <div className="flex items-center gap-3">
        <img src={logo} alt="هيئة تطوير منطقة حائل" className="h-10" />
        <div className="flex flex-col">
          <h1 className="text-sm font-bold text-white leading-tight">هيئة تطوير منطقة حائل</h1>
          <span className="text-[10px] text-white/60">Hail Region Development Authority</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
        <span className="text-xs text-white/60">آخر تحديث:</span>
        <span className="text-xs font-medium text-white">١٤٤٧/٠٧/١٤</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
