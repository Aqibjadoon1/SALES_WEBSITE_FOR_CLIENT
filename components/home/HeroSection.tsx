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
    <section className="relative isolate overflow-hidden border-b border-primary/20 pt-20">
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center brightness-100 contrast-100 saturate-100"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/products/umar/haier-bed-room-refrigerator-hr-136bss-black-36984-1.webp"
        aria-label="Appliance showroom lifestyle video background"
      >
        <source src="/videos/A.mp4" type="video/mp4" />
        Your browser can display the New Murtaza Asif Traders premium appliance background video.
      </video>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.36)_0%,rgba(243,245,247,0.18)_50%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent to-background/32" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.03]" />

      <div className="section-shell grid min-h-[calc(100svh-76px)] items-center gap-8 py-10 sm:py-14 md:min-h-[84vh] lg:grid-cols-[1fr_0.92fr] lg:py-20">
        <div className="max-w-3xl bg-white/68 p-5 shadow-[0_24px_70px_rgba(32,50,62,0.12)] [clip-path:polygon(0_0,calc(100%_-_24px)_0,100%_24px,100%_100%,24px_100%,0_calc(100%_-_24px))] sm:p-7">
          <div className="mb-8 flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.28em] text-primary/80">
            <span>Collection 01</span>
            <span className="h-px w-12 bg-primary/50" />
            <span>Appliances / 2026</span>
          </div>
          <div className="inline-flex max-w-full items-center gap-2 border border-primary/35 bg-white/70 px-3 py-2 text-left text-[11px] font-black uppercase tracking-[0.12em] text-accent backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Quality Appliances for Peshawar and Pakistan
          </div>

          <h1 className="mt-6 text-balance text-5xl font-black uppercase leading-[0.88] tracking-[-0.085em] text-white sm:text-6xl lg:text-[5.8rem]">
            Built for{" "}
            <span className="block bg-gradient-to-r from-[#111c25] via-primary to-[#9aaab3] bg-clip-text text-transparent">
              everyday
            </span>
            <span className="block">performance.</span>
          </h1>

          <p
            className="mt-6 max-w-xl border-l border-primary/60 pl-4 text-sm leading-7 text-white/78 sm:text-base sm:leading-8"
          >
            {business.name} supplies, installs and maintains premium appliances with dedicated support for
            residential clients, commercial teams and institutional procurement.
          </p>

          <div
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 text-xs font-black uppercase tracking-[0.14em] text-white shadow-glow transition hover:bg-primaryDark"
            >
              Order Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-primary/25 bg-white/72 px-6 text-xs font-black uppercase tracking-[0.14em] text-accent backdrop-blur transition hover:border-primary hover:text-primary"
            >
              Get a Quote
            </Link>
          </div>

          <div className="mt-6 grid max-w-2xl gap-2 border border-primary/15 bg-white/72 p-3 text-xs text-textSecondary backdrop-blur sm:grid-cols-3">
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
              <div key={item} className="border border-primary/15 bg-white/70 p-3">
                <BadgeCheck className="mb-2 h-5 w-5 text-primary" />
                <p className="text-sm font-black text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[520px] md:block">
          <div className="absolute inset-0 border border-primary/20 bg-white/10 shadow-glow-violet [clip-path:polygon(0_0,calc(100%_-_28px)_0,100%_28px,100%_100%,28px_100%,0_calc(100%_-_28px))]" />
          <div className="media-surface absolute left-0 top-7 h-[62%] w-[78%] overflow-hidden border border-primary/35 bg-white shadow-[0_30px_90px_rgba(64,127,157,0.22)] transition duration-300 [clip-path:polygon(0_0,calc(100%_-_22px)_0,100%_22px,100%_100%,22px_100%,0_calc(100%_-_22px))] hover:shadow-[0_38px_110px_rgba(64,127,157,0.28)]">
            <video
              ref={salesVideoRef}
              className="h-full w-full object-cover opacity-100"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/products/umar/haier-bed-room-refrigerator-hr-136bss-black-36984-1.webp"
              aria-label="Premium appliance sales video"
            >
              <source src="/videos/A.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 z-10 max-w-[58%]">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">New Collection / Motion</p>
              <p className="mt-1 text-2xl font-black uppercase text-white">Quality in motion</p>
            </div>
          </div>
          {featuredProducts.slice(0, 3).map((product, index) => (
            <motion.div
              key={product.id}
              className="ice-panel media-surface absolute overflow-hidden border border-white/10 shadow-card transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(74,164,198,0.3)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2635]/75 via-transparent to-white/10" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-black uppercase tracking-[-0.04em] text-white">{product.name}</p>
            </motion.div>
          ))}
          <div className="absolute bottom-5 right-5 border border-primary/35 bg-white/82 px-4 py-3 shadow-glow backdrop-blur">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Direct inquiry</p>
            <p className="text-xl font-black text-white">{business.phone}</p>
          </div>
        </div>
      </div>

      <div className="border-y border-primary/20 bg-white/72 py-4 backdrop-blur">
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
