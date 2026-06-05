import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export default function ProductsLoading() {
  return (
    <main className="section-shell pb-20 pt-32">
      <div className="mb-8">
        <div className="shimmer h-12 w-80 animate-shimmer rounded" />
        <div className="shimmer mt-4 h-6 w-full max-w-2xl animate-shimmer rounded" />
      </div>
      <LoadingSkeleton cards={9} />
    </main>
  );
}
