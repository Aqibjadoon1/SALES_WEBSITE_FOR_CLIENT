"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { CartLine } from "@/components/cart/CartProvider";
import { business } from "@/lib/products";
import { cn } from "@/lib/utils";

type InquiryModalProps = {
  isOpen: boolean;
  items: CartLine[];
  onClose: () => void;
  onSent: () => void;
};

export function InquiryModal({ isOpen, items, onClose, onSent }: InquiryModalProps) {
  const [sent, setSent] = useState(false);
  const productList = useMemo(
    () => items.map((item) => `${item.product.name} x ${item.quantity}`).join("\n"),
    [items],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const field = (name: string) => String(form.get(name) || "").trim();
    const body = [
      "New Murtaza Asif Traders - Website Order",
      "",
      `Name: ${field("name") || "Website visitor"}`,
      `Phone: ${field("phone")}`,
      `Email: ${field("email") || "Not provided"}`,
      `City: ${field("city") || "Not provided"}`,
      "",
      "Products:",
      productList || "General quotation request",
      "",
      "Message:",
      field("message") || "No extra message",
    ].join("\n");

    const whatsappUrl = `${business.whatsapp}?text=${encodeURIComponent(body)}`;
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = whatsappUrl;
    }

    setSent(true);
    onSent();
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-card w-full max-w-2xl overflow-hidden border-white/10"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 18 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <p className="text-sm font-semibold text-primary">Inquiry & Orders</p>
                <h2 className="text-2xl font-black text-white">Send your order on WhatsApp</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white transition hover:border-primary hover:text-primary"
                aria-label="Close inquiry form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 p-5 sm:grid-cols-2">
              {[
                ["name", "Name", "text"],
                ["phone", "Phone", "tel"],
                ["email", "Email", "email"],
                ["city", "City", "text"],
              ].map(([name, label, type]) => (
                <label key={name} className="text-sm font-semibold text-white">
                  {label}
                  <input
                    required={name === "name" || name === "phone"}
                    name={name}
                    type={type}
                    className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-textSecondary transition focus:border-primary"
                    placeholder={label}
                  />
                </label>
              ))}

              <label className="text-sm font-semibold text-white sm:col-span-2">
                Products Interested
                <textarea
                  readOnly
                  value={productList || "General quote request"}
                  className="mt-2 h-24 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-textSecondary"
                />
              </label>

              <label className="text-sm font-semibold text-white sm:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-textSecondary transition focus:border-primary"
                  placeholder="Tell us about quantity, delivery city, installation needs or preferred brands."
                />
              </label>

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-black text-white shadow-glow transition hover:bg-primaryDark"
                >
                  <Send className="h-4 w-4" />
                  Send on WhatsApp
                </button>
                <a
                  href={business.phoneHref}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 font-black text-white transition hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  Call {business.phone}
                </a>
              </div>

              <p
                className={cn(
                  "hidden items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-white sm:col-span-2",
                  sent && "flex",
              )}
            >
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp is opening with your order details ready to send to {business.whatsappDisplay}.
              </p>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
