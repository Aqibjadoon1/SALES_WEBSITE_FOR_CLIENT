import { business } from "@/lib/products";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div className={cn("flex min-w-0 items-center gap-2.5 text-left sm:gap-3", className)}>
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-gold/80 bg-gradient-to-br from-[#08192f] via-[#102f5c] to-[#3a1323] shadow-[0_0_28px_rgba(201,168,76,0.34)] sm:h-12 sm:w-12">
        <span className="absolute inset-1 rounded-full border border-gold/30" />
        <span className="relative font-serif text-lg font-black tracking-[-0.12em] text-gold sm:text-xl">
          MA
        </span>
      </span>

      <span className="min-w-0">
        <span className="block text-[9px] font-black uppercase tracking-[0.24em] text-gold sm:text-[10px]">
          New
        </span>
        <span className="flex min-w-0 flex-wrap items-baseline gap-x-1 leading-none">
          <span className="truncate text-[17px] font-black uppercase tracking-[-0.02em] text-accent sm:text-[22px] lg:text-2xl">
            Murtaza Asif
          </span>
          <span className="font-serif text-sm font-semibold italic text-primary sm:text-base">Traders</span>
        </span>
        <span className="mt-1 block truncate text-[8px] font-black uppercase tracking-[0.18em] text-textSecondary sm:text-[9px]">
          {business.tagline}
        </span>
      </span>
    </div>
  );
}
