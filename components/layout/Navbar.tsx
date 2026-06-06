"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { BrandMark } from "@/components/ui/BrandMark";
import { business, categoryDefinitions } from "@/lib/products";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", hasMega: true },
  { href: "/institutional", label: "Institutional" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="flex min-w-0 items-center rounded-md transition hover:opacity-90"
      aria-label={`${business.name} home`}
    >
      <BrandMark className="max-w-[196px] sm:max-w-[300px]" />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-white/10 bg-background/86 shadow-card backdrop-blur-xl"
          : "border-transparent bg-background/30 backdrop-blur-md",
      )}
    >
      <nav className="section-shell flex h-[76px] items-center justify-between gap-3 md:h-20" aria-label="Main navigation">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-bold text-textSecondary transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
                {link.hasMega ? <ChevronDown className="h-4 w-4" /> : null}
              </Link>
              {link.hasMega ? (
                <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="glass-card grid grid-cols-2 gap-2 p-3">
                    {categoryDefinitions.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="rounded-md border border-transparent p-3 transition hover:border-primary/50 hover:bg-primary/10"
                      >
                        <span className="block text-sm font-black text-white">{category.name}</span>
                        <span className="mt-1 line-clamp-2 block text-xs text-textSecondary">
                          {category.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/products"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
            aria-label="Search products"
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
            aria-label="Open inquiry cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {totalItems ? (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-xs font-black text-white">
                {totalItems}
              </span>
            ) : null}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-black text-white shadow-glow transition hover:bg-primaryDark"
          >
            Order Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={openCart}
            className="relative hidden h-10 w-10 place-items-center rounded-md border border-white/10 text-white md:grid"
            aria-label="Open inquiry cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {totalItems ? (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-xs font-black text-white">
                {totalItems}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white"
            aria-label="Toggle mobile navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="border-t border-white/10 bg-background/96 px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="mx-auto grid max-w-md gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md border border-white/10 px-4 py-3 font-bold text-white transition hover:border-primary hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 font-black text-white shadow-glow"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
