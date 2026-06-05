import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { StrategicProjects } from "@/components/home/StrategicProjects";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Institutional Supply",
  path: "/institutional",
  description:
    "Institutional appliance supply in Pakistan for Army mess appliances, Dawlance cooling, kitchen appliances, commissioning, delivery and maintenance support.",
  keywords: ["institutional appliance supply Pakistan", "Army mess appliances supplier", "Dawlance commercial appliances"],
});

const capabilities = [
  "Bulk appliance procurement and delivery",
  "Installation and field commissioning",
  "Project documentation and itemized inquiry support",
  "After-sales maintenance coordination",
  "Nationwide delivery planning for units and institutions",
  "Commercial cooling, dishwashing, dispenser and kitchen solutions",
];

export default function InstitutionalPage() {
  return (
    <main className="pb-20 pt-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Institutional Supply", path: "/institutional" },
        ])}
      />
      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-primary">B2B & Institutional</p>
            <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">Army, TIKA and large-scale appliance supply support</h1>
            <p className="mt-5 text-lg leading-8 text-textSecondary">
              From floor-standing cooling to dishwashers, dispensers and compact kitchen appliances, New Murtaza Asif
              Traders supports quote-based procurement with installation and maintenance follow-through.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 font-black text-white shadow-glow transition hover:bg-primaryDark"
            >
              Request Institutional Quote
            </Link>
          </div>
          <div className="glass-card p-6">
            <ShieldCheck className="h-10 w-10 text-primary" />
            <h2 className="mt-4 text-2xl font-black text-white">Project Capabilities</h2>
            <ul className="mt-5 grid gap-3">
              {capabilities.map((capability) => (
                <li key={capability} className="flex gap-3 text-textSecondary">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <StrategicProjects />
    </main>
  );
}
