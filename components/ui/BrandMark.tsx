import { business } from "@/lib/products";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div className={cn("flex min-w-0 items-center gap-2.5 text-left sm:gap-3", className)}>
      <span className="relative grid h-11 w-11 shrink-0 place-items-center border border-primary/45 bg-gradient-to-br from-white via-[#dbe6eb] to-[#8fb0c0] shadow-[0_14px_30px_rgba(64,127,157,0.18)] [clip-path:polygon(0_0,75%_0,100%_25%,100%_100%,25%_100%,0_75%)] sm:h-12 sm:w-12">
        <span className="absolute inset-1 border border-[#0a2636]/35 [clip-path:inherit]" />
        <span className="relative text-lg font-black tracking-[-0.12em] text-accent sm:text-xl">
          MA
        </span>
      </span>

      <span className="min-w-0">
        <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-primary sm:text-[9px]">
          Appliances / Supply / Support
        </span>
        <span className="flex min-w-0 flex-wrap items-baseline gap-x-1 leading-none">
          <span className="truncate text-[17px] font-black uppercase tracking-[-0.06em] text-accent sm:text-[22px] lg:text-2xl">
            Murtaza Asif
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary sm:text-xs">Traders</span>
        </span>
        <span className="mt-1 block truncate text-[7px] font-black uppercase tracking-[0.22em] text-textSecondary sm:text-[8px]">
          {business.tagline}
        </span>
      </span>
    </div>
  );
}
