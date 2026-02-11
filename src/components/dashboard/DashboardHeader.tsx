import logo from "@/assets/logo.png";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-card border-b border-border shadow-sm">
      <div className="flex items-center gap-4">
        <img src={logo} alt="هيئة تطوير منطقة حائل" className="h-14" />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-foreground">هيئة تطوير منطقة حائل</h1>
          <span className="text-xs text-muted-foreground">Hail Region Development Authority</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
          <span className="text-sm text-muted-foreground">آخر تحديث:</span>
          <span className="text-sm font-medium text-foreground">١٤٤٧/٠٧/١٤</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
