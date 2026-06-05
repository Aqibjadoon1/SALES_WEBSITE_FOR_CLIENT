import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export default function CategoryLoading() {
  return (
    <main className="section-shell pb-20 pt-32">
      <div className="mb-8">
        <div className="shimmer h-12 w-72 animate-shimmer rounded" />
        <div className="shimmer mt-4 h-6 w-full max-w-xl animate-shimmer rounded" />
      </div>
      <LoadingSkeleton cards={6} />
    </main>
  );
}
