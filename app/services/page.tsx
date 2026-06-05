import type { Metadata } from "next";
import Link from "next/link";
import { PackageCheck, Settings, Wrench } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Expert appliance installation, strategic supply and maintenance support for home, commercial and institutional clients in Peshawar.",
});

const services = [
  {
    title: "Expert Installation",
    icon: Wrench,
    copy: "Precise appliance setup for kitchens, laundry rooms, offices, institutional messes and commercial environments.",
    points: ["Site-ready setup", "Commissioning checks", "Usage guidance"],
  },
  {
    title: "Strategic Supply",
    icon: PackageCheck,
    copy: "Quote-based procurement for homes, offices, Army units, TIKA projects and commercial facilities.",
    points: ["Bulk sourcing", "Brand comparison", "Delivery planning"],
  },
  {
    title: "Maintenance Support",
    icon: Settings,
    copy: "After-sales support for long-term performance, dependable appliance care and technical coordination.",
    points: ["Diagnostics", "Repair coordination", "Preventive care"],
  },
];

export default function ServicesPage() {
  return (
    <main className="section-shell pb-20 pt-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-primary">Professional Services</p>
        <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">Supply, installation and support that stays with the project</h1>
        <p className="mt-5 text-lg leading-8 text-textSecondary">
          Every appliance purchase can include the practical support needed to get it delivered, installed and performing.
        </p>
      </header>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="glass-card p-6">
              <div className="grid h-14 w-14 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 text-2xl font-black text-white">{service.title}</h2>
              <p className="mt-3 leading-7 text-textSecondary">{service.copy}</p>
              <ul className="mt-5 grid gap-2">
                {service.points.map((point) => (
                  <li key={point} className="text-sm font-semibold text-white">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <section className="mt-12 rounded-lg border border-primary/30 bg-primary/10 p-8">
        <h2 className="text-3xl font-black text-white">Need a project quote?</h2>
        <p className="mt-3 max-w-2xl leading-7 text-textSecondary">
          Share appliance quantities, preferred brands and installation location so the team can prepare a practical quote.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 font-black text-white shadow-glow transition hover:bg-primaryDark"
        >
          Contact Sales
        </Link>
      </section>
    </main>
  );
}
