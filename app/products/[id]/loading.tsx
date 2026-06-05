import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export default function ProductLoading() {
  return (
    <main className="section-shell pb-20 pt-32">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="shimmer h-[560px] animate-shimmer rounded-lg" />
        <div className="space-y-5">
          <div className="shimmer h-10 w-44 animate-shimmer rounded" />
          <div className="shimmer h-16 w-full animate-shimmer rounded" />
          <div className="shimmer h-32 w-full animate-shimmer rounded" />
          <LoadingSkeleton cards={2} />
        </div>
      </div>
    </main>
  );
}
