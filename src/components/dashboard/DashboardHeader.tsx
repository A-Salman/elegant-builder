import logo from "@/assets/logo.png";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2 bg-card border-b border-border shadow-sm flex-shrink-0">
      <div className="flex items-center gap-3">
        <img src={logo} alt="هيئة تطوير منطقة حائل" className="h-10" />
        <div className="flex flex-col">
          <h1 className="text-sm font-bold text-foreground leading-tight">هيئة تطوير منطقة حائل</h1>
          <span className="text-[10px] text-muted-foreground">Hail Region Development Authority</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5">
        <span className="text-xs text-muted-foreground">آخر تحديث:</span>
        <span className="text-xs font-medium text-foreground">١٤٤٧/٠٧/١٤</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
