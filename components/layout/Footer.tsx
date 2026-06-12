import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BrandMark } from "@/components/ui/BrandMark";
import { business, categoryDefinitions } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-[linear-gradient(90deg,#fafbfc_0%,#f3f5f7_50%,#c4d0d8_100%)] pb-24 pt-14 md:pb-8">
      <div className="absolute inset-0 bg-neon-mesh opacity-45" />
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <BrandMark className="max-w-[310px]" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-textSecondary">
            Premium home and commercial appliance supply, installation and maintenance for Peshawar households,
            businesses and national institutions.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={business.facebook}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href={business.instagram}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href={business.tiktok}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
              aria-label="TikTok"
            >
              <FaTiktok className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-white">Categories</h2>
          <div className="mt-4 grid gap-2">
            {categoryDefinitions.slice(0, 10).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-sm text-textSecondary transition hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-white">Services</h2>
          <div className="mt-4 grid gap-2">
            {["Expert Installation", "Strategic Supply", "Maintenance Support", "Institutional Commissioning"].map(
              (service) => (
                <Link key={service} href="/services" className="text-sm text-textSecondary transition hover:text-primary">
                  {service}
                </Link>
              ),
            )}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-white">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-textSecondary">
            <a href={business.phoneHref} className="flex items-center gap-2 transition hover:text-primary">
              <Phone className="h-4 w-4 text-primary" />
              {business.phone}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-2 transition hover:text-primary">
              <Mail className="h-4 w-4 text-primary" />
              {business.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              {business.address}
            </p>
          </div>
        </div>
      </div>
      <div className="section-shell relative mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-textSecondary md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 {business.name}. All rights reserved.</p>
        <p>Premium appliances, institutional supply and after-sales support.</p>
      </div>
    </footer>
  );
}
