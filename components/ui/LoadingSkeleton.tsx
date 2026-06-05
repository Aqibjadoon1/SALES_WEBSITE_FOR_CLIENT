export function LoadingSkeleton({ cards = 6 }: { cards?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: cards }).map((_, index) => (
        <div key={index} className="glass-card overflow-hidden p-4">
          <div className="shimmer h-52 animate-shimmer rounded-md" />
          <div className="mt-5 h-4 w-24 animate-shimmer rounded bg-surfaceHigh" />
          <div className="mt-3 h-6 w-3/4 animate-shimmer rounded bg-surfaceHigh" />
          <div className="mt-3 h-4 w-full animate-shimmer rounded bg-surfaceHigh" />
          <div className="mt-2 h-4 w-2/3 animate-shimmer rounded bg-surfaceHigh" />
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="h-11 animate-shimmer rounded-md bg-surfaceHigh" />
            <div className="h-11 animate-shimmer rounded-md bg-surfaceHigh" />
          </div>
        </div>
      ))}
    </div>
  );
}
