"use client";

import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { business } from "@/lib/products";

export function MobileBottomBar() {
  const { openCart, totalItems } = useCart();

  return (
    <div className="fixed inset-x-5 bottom-3 z-40 rounded-lg border border-white/10 bg-background/95 p-1.5 shadow-card backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={business.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 text-sm font-black text-white"
        >
          <Phone className="h-4 w-4 text-primary" />
          Call
        </a>
        <a
          href={business.whatsapp}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 text-sm font-black text-white"
        >
          <MessageCircle className="h-4 w-4 text-green-400" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={openCart}
          className="relative inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary text-sm font-black text-white"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden min-[430px]:inline">Cart</span>
          {totalItems ? (
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-xs text-primary">
              {totalItems}
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
}
