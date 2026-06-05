import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { ContactForm } from "@/components/pages/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/lib/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Contact New Murtaza Asif Traders in Peshawar for appliance quotes, installation, institutional supply and maintenance support.",
});

export default function ContactPage() {
  return (
    <main className="section-shell pb-20 pt-32">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <header className="max-w-3xl">
        <p className="text-sm font-black uppercase text-primary">Contact & Conversion</p>
        <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">Get quotes, installation support and appliance guidance</h1>
        <p className="mt-5 text-lg leading-8 text-textSecondary">
          Reach Muhammad Mubeen Yousaf for residential, commercial and institutional appliance requirements.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="glass-card p-5">
            <Phone className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-xl font-black text-white">Phone</h2>
            <a href={business.phoneHref} className="mt-2 block text-textSecondary transition hover:text-primary">
              {business.phone}
            </a>
          </div>
          <div className="glass-card p-5">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-xl font-black text-white">Email</h2>
            <a href={`mailto:${business.email}`} className="mt-2 block text-textSecondary transition hover:text-primary">
              {business.email}
            </a>
          </div>
          <div className="glass-card p-5">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-xl font-black text-white">Address</h2>
            <p className="mt-2 text-textSecondary">{business.address}</p>
          </div>
          <div className="glass-card p-5">
            <h2 className="text-xl font-black text-white">Social Contact</h2>
            <p className="mt-2 text-sm leading-6 text-textSecondary">Message us on Facebook, Instagram or TikTok.</p>
            <div className="mt-4 flex gap-2">
              <a
                href={business.facebook}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
                aria-label="Contact on Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href={business.instagram}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
                aria-label="Contact on Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href={business.tiktok}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
                aria-label="Contact on TikTok"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="mt-10 overflow-hidden rounded-lg border border-white/10">
        <iframe
          title="New Murtaza Asif Traders map location in Peshawar"
          src="https://www.google.com/maps?q=Q17%20Phase%202%20Muslim%20City%20Peshawar&output=embed"
          className="h-[380px] w-full"
          loading="lazy"
        />
      </section>
    </main>
  );
}
