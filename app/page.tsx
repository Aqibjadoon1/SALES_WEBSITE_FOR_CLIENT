import type { Metadata } from "next";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductRange } from "@/components/home/ProductRange";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { StatsSection } from "@/components/home/StatsSection";
import { StrategicProjects } from "@/components/home/StrategicProjects";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, homeFaqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "New Murtaza Asif Traders | Appliances Sales & Services",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
          homeFaqJsonLd,
        ]}
      />
      <HeroSection />
      <StatsSection />
      <CategoryGrid />
      <StrategicProjects />
      <ProductRange />
      <FeaturedProducts />
      <ServiceHighlights />
      <section className="section-shell pb-20 pt-8">
        <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-primary/10 p-8 shadow-glow md:p-12">
          <div className="absolute inset-0 bg-neon-mesh opacity-70" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-black uppercase text-primary">Inquiry & Orders</p>
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Need quotations or project appliance support?</h2>
            <p className="mt-4 text-lg leading-8 text-textSecondary">
              Contact New Murtaza Asif Traders for residential appliance requirements, institutional supply,
              installation, commissioning and maintenance support.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 font-black text-white shadow-glow transition hover:bg-primaryDark"
              >
                Order Now
              </a>
              <a
                href="tel:+923333900862"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 font-black text-white transition hover:border-primary hover:text-primary"
              >
                Call 0333 3900862
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
