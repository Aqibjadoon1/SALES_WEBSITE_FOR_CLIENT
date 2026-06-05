"use client";

import Link from "next/link";

export default function ProductError() {
  return (
    <main className="section-shell grid min-h-screen place-items-center py-32 text-center">
      <div className="glass-card max-w-lg p-8">
        <h1 className="text-3xl font-black text-white">Product page could not load</h1>
        <p className="mt-3 text-textSecondary">Please return to the catalog and try another appliance.</p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 font-black text-white shadow-glow"
        >
          Back to Products
        </Link>
      </div>
    </main>
  );
}
