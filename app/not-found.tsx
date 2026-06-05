import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell grid min-h-screen place-items-center py-32 text-center">
      <div className="glass-card max-w-lg p-8">
        <p className="text-sm font-black uppercase text-primary">Page Not Found</p>
        <h1 className="mt-2 text-4xl font-black text-white">This appliance page is unavailable</h1>
        <p className="mt-3 text-textSecondary">Return to the catalog or contact the team for a quote.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/products" className="rounded-md bg-primary px-5 py-3 font-black text-white shadow-glow">
            Browse Products
          </Link>
          <Link href="/contact" className="rounded-md border border-white/10 px-5 py-3 font-black text-white">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
