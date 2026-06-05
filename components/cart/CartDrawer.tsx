"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Send, Trash2, X } from "lucide-react";
import { useState } from "react";
import { InquiryModal } from "@/components/cart/InquiryModal";
import { useCart } from "@/components/cart/CartProvider";

export function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, clearCart } = useCart();
  const [isInquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isCartOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/65 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          >
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-background shadow-card"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <div>
                  <p className="text-sm font-semibold text-primary">Inquiry Cart</p>
                  <h2 className="text-2xl font-black text-white">{items.length} selected items</h2>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
                  aria-label="Close inquiry cart"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto p-5">
                {items.length ? (
                  items.map((item) => (
                    <div key={item.product.id} className="glass-card grid grid-cols-[78px_1fr] gap-4 p-3">
                      <div className="relative h-20 overflow-hidden rounded-md bg-surfaceHigh">
                        <Image
                          src={item.product.image}
                          alt={`${item.product.name} inquiry cart image`}
                          fill
                          sizes="78px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <Link
                          href={`/products/${item.product.id}`}
                          onClick={closeCart}
                          className="line-clamp-2 font-bold text-white transition hover:text-primary"
                        >
                          {item.product.name}
                        </Link>
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-md border border-white/10">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="grid h-8 w-8 place-items-center text-white transition hover:text-primary"
                              aria-label={`Decrease ${item.product.name} quantity`}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-white">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="grid h-8 w-8 place-items-center text-white transition hover:text-primary"
                              aria-label={`Increase ${item.product.name} quantity`}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id)}
                            className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-textSecondary transition hover:border-primary hover:text-primary"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="grid h-full place-items-center text-center">
                    <div>
                      <p className="text-xl font-black text-white">No products selected yet</p>
                      <p className="mt-2 text-textSecondary">Add appliances from the catalog to prepare a quote.</p>
                      <Link
                        href="/products"
                        onClick={closeCart}
                        className="mt-5 inline-flex rounded-md bg-primary px-5 py-3 font-black text-white shadow-glow transition hover:bg-primaryDark"
                      >
                        Browse Products
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 p-5">
                <button
                  type="button"
                  onClick={() => setInquiryOpen(true)}
                  disabled={!items.length}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-black text-white shadow-glow transition hover:bg-primaryDark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  Send Order
                </button>
                {items.length ? (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="mt-3 w-full rounded-md border border-white/10 px-5 py-3 font-bold text-textSecondary transition hover:border-primary hover:text-primary"
                  >
                    Clear Cart
                  </button>
                ) : null}
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <InquiryModal
        isOpen={isInquiryOpen}
        items={items}
        onClose={() => setInquiryOpen(false)}
        onSent={() => {
          setInquiryOpen(false);
          closeCart();
        }}
      />
    </>
  );
}
