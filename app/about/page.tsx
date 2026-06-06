import type { Metadata } from "next";
import Image from "next/image";
import { Award, BadgeCheck, Users } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { business } from "@/lib/products";
import { breadcrumbJsonLd, homeFaqJsonLd, pageMetadata } from "@/lib/seo";

const aboutImages = [
  {
    src: "/images/products/cleaned/pdf-refrigerator-dawlance-dw-900-gd-dfd-double-french-series-refrigerator.png",
    alt: "Dawlance double French refrigerator supplied by New Murtaza Asif Traders",
  },
  {
    src: "/images/products/cleaned/pdf-air-conditioner-dawlance-glamour-inverter-floor-standing-ac.png",
    alt: "Dawlance floor standing air conditioner supplied by New Murtaza Asif Traders",
  },
  {
    src: "/images/products/cleaned/pdf-dishwasher-dawlance-ddw-1480-inv-dishwasher.png",
    alt: "Dawlance inverter dishwasher supplied for commercial clients",
  },
  {
    src: "/images/products/cleaned/pdf-water-dispenser-dawlance-wd-1051-gd-water-dispenser.png",
    alt: "Dawlance glass door water dispenser appliance solution",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn about New Murtaza Asif Traders, a Peshawar appliance company supporting homes, businesses, Army units and TIKA projects.",
});

export default function AboutPage() {
  return (
    <main className="pb-20 pt-32">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          homeFaqJsonLd,
        ]}
      />
      <section className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <p className="text-sm font-black uppercase text-primary">About {business.name}</p>
          <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">A premium appliance partner for homes and institutions</h1>
          <p className="mt-5 text-lg leading-8 text-textSecondary">
            New Murtaza Asif Traders supplies, installs and maintains high-quality appliances with a practical service
            mindset. The company supports residential buyers, commercial teams and large-scale national institutions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Quality", Award],
              ["Reliability", BadgeCheck],
              ["Support", Users],
            ].map(([label, Icon]) => (
              <div key={String(label)} className="glass-card p-4">
                <Icon className="h-6 w-6 text-primary" />
                <p className="mt-3 font-black text-white">{String(label)}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="glass-card grid grid-cols-2 gap-3 overflow-hidden p-3">
            {aboutImages.map((image, index) => (
              <div key={image.src} className="relative min-h-52 overflow-hidden rounded-md bg-surfaceHigh md:min-h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 44vw, 300px"
                  className="object-contain p-3 transition duration-700 hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="section-shell mt-16">
        <SectionReveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Institutional Confidence",
                copy: "Project experience includes institutional appliance supply and Pak Army commissioning support.",
              },
              {
                title: "Professional Installation",
                copy: "Appliance setup is planned for real use conditions, from homes to commercial kitchens.",
              },
              {
                title: "After-Sales Care",
                copy: "Maintenance and technical support keep appliances dependable after procurement.",
              },
            ].map((item) => (
              <article key={item.title} className="glass-card p-6">
                <h2 className="text-2xl font-black text-white">{item.title}</h2>
                <p className="mt-3 leading-7 text-textSecondary">{item.copy}</p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
