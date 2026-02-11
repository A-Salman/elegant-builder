import logo from "@/assets/logo-white.svg";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl border-b border-white/10 flex-shrink-0" dir="rtl">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-brand-gold/20 rounded-full blur-md" />
          <img
            src={logo}
            alt="هيئة تطوير منطقة حائل"
            className="relative h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(203,168,119,0.3)]"
          />
        </div>
        <div className="flex flex-col border-r border-white/15 pr-2 sm:pr-4">
          <h1 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight tracking-wide">
            هيئة تطوير منطقة حائل
          </h1>
          <span className="text-[8px] sm:text-[10px] md:text-xs text-brand-gold/80 font-light tracking-widest">
            Hail Region Development Authority
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 border border-white/10">
        <span className="text-[10px] sm:text-xs text-white/50">آخر تحديث:</span>
        <span className="text-[10px] sm:text-xs font-medium text-brand-gold">١٤٤٧/٠٧/١٤</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
