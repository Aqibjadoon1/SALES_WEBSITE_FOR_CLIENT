"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { business, featuredProducts } from "@/lib/products";

const ticker = [
  "Quality",
  "Reliability",
  "Installation",
  "Support",
  "360 Service",
  "Institutional Supply",
  "Home & Commercial Solutions",
];

export function HeroSection() {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const salesVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [backgroundVideoRef.current, salesVideoRef.current].forEach((video) => {
      if (!video) {
        return;
      }

      video.muted = true;
      video.load();
      void video.play().catch(() => undefined);
    });
  }, []);

  return (
    <section className="relative isolate overflow-hidden pt-20">
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-[0.72] saturate-125"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/products/cleaned/pdf-air-conditioner-dawlance-chrome-inverter-series-ac-milky-white-plain-panel.png"
        aria-label="Appliance showroom lifestyle video background"
      >
        <source src="/videos/2.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/videos/1.mp4" type="video/mp4" media="(min-width: 768px)" />
        Your browser can display the New Murtaza Asif Traders premium appliance background video.
      </video>
      <div className="absolute inset-0 -z-10 animate-mesh bg-neon-mesh opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/5 via-background/36 to-background/88" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/78 via-background/28 to-background/32" />

      <div className="section-shell grid min-h-[calc(100svh-76px)] items-center gap-8 py-10 sm:py-14 md:min-h-[84vh] lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <div className="drop-shadow-[0_12px_42px_rgba(0,0,0,0.9)]">
          <div
            className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-primary/10 px-3 py-2 text-sm font-black text-white"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            Quality Appliances for Peshawar and Pakistan
          </div>

          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-7xl">
            Premium Appliances{" "}
            <span className="block text-primary">for Homes, Businesses & Institutions</span>
          </h1>

          <p
            className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8"
          >
            {business.name} supplies, installs and maintains premium appliances with dedicated support for
            residential clients, commercial teams and institutional procurement.
          </p>

          <div
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-black text-white shadow-glow transition hover:bg-primaryDark"
            >
              Order Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-6 font-black text-white transition hover:border-primary hover:text-primary"
            >
              Get a Quote
            </Link>
          </div>

          <div className="mt-6 grid max-w-2xl gap-2 rounded-lg border border-white/10 bg-black/35 p-3 text-sm text-white/86 backdrop-blur sm:grid-cols-3">
            <a href={business.phoneHref} className="flex items-center gap-2 transition hover:text-primary">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <span className="font-black">{business.phone}</span>
            </a>
            <span className="flex items-center gap-2">
              <UserRound className="h-4 w-4 shrink-0 text-primary" />
              {business.contactPerson}
            </span>
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {business.address}
            </span>
          </div>

          <div
            className="mt-5 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {["360 Supply to Support", "TIKA Bio-Geyser Projects", "Army Institutional Service"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <BadgeCheck className="mb-2 h-5 w-5 text-primary" />
                <p className="text-sm font-black text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[520px] md:block">
          <div className="absolute inset-0 rounded-lg border border-primary/20 bg-black/20 shadow-glow-violet backdrop-blur-sm" />
          <div className="absolute left-0 top-7 h-[62%] w-[78%] overflow-hidden rounded-lg border border-primary/35 bg-black shadow-[0_30px_90px_rgba(255,30,110,0.28)] transition duration-300 hover:shadow-[0_38px_110px_rgba(255,30,110,0.42)]">
            <video
              ref={salesVideoRef}
              className="h-full w-full object-cover opacity-95"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/products/cleaned/pdf-refrigerator-dawlance-dw-900-gd-dfd-double-french-series-refrigerator.png"
              aria-label="Premium appliance sales video"
            >
              <source src="/videos/2.mp4" type="video/mp4" media="(max-width: 767px)" />
              <source src="/videos/1.mp4" type="video/mp4" media="(min-width: 768px)" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 z-10 max-w-[58%]">
              <p className="text-xs font-black uppercase text-primary">Premium Sales Video</p>
              <p className="mt-1 text-2xl font-black text-white">Quality appliances in motion</p>
            </div>
          </div>
          {featuredProducts.slice(0, 3).map((product, index) => (
            <motion.div
              key={product.id}
              className="absolute overflow-hidden rounded-lg border border-white/10 bg-surface shadow-card transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(255,30,110,0.36)]"
              style={{
                width: index === 0 ? "38%" : "33%",
                height: index === 0 ? "36%" : "32%",
                left: index === 0 ? "60%" : index === 1 ? "66%" : "10%",
                top: index === 0 ? "12%" : index === 1 ? "54%" : "68%",
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            >
              <Image
                src={product.image}
                alt={`${product.name} floating product mockup`}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-contain p-3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-lg font-black text-white">{product.name}</p>
            </motion.div>
          ))}
          <div className="absolute bottom-5 right-5 rounded-md border border-primary/35 bg-background/80 px-4 py-3 shadow-glow backdrop-blur">
            <p className="text-sm font-black text-primary">Call Now</p>
            <p className="text-xl font-black text-white">{business.phone}</p>
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-black/30 py-4">
        <div className="flex overflow-hidden">
          <div className="flex min-w-max animate-marquee gap-8 pr-8">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`} className="text-sm font-black uppercase text-white">
                {item} <span className="ml-8 text-primary">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
