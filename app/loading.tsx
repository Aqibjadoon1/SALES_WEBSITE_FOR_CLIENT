import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export default function Loading() {
  return (
    <main className="section-shell pb-20 pt-32">
      <LoadingSkeleton cards={6} />
    </main>
  );
}
