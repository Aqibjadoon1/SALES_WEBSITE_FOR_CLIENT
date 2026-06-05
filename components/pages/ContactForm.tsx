"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { business } from "@/lib/products";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `City: ${form.get("city")}`,
      `Products Interested: ${form.get("products")}`,
      "",
      `Message: ${form.get("message")}`,
    ].join("\n");

    setSent(true);
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent("Website quote request")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card grid gap-4 p-5 sm:grid-cols-2">
      {[
        ["name", "Name", "text"],
        ["phone", "Phone", "tel"],
        ["email", "Email", "email"],
        ["city", "City", "text"],
      ].map(([name, label, type]) => (
        <label key={name} className="text-sm font-black text-white">
          {label}
          <input
            required={name === "name" || name === "phone"}
            name={name}
            type={type}
            placeholder={label}
            className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 font-semibold text-white placeholder:text-textSecondary transition focus:border-primary"
          />
        </label>
      ))}
      <label className="text-sm font-black text-white sm:col-span-2">
        Products Interested
        <input
          name="products"
          placeholder="AC, refrigerators, dishwashers, dispensers, small appliances"
          className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 font-semibold text-white placeholder:text-textSecondary transition focus:border-primary"
        />
      </label>
      <label className="text-sm font-black text-white sm:col-span-2">
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about quantities, brands, delivery city and installation needs."
          className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-4 py-3 font-semibold text-white placeholder:text-textSecondary transition focus:border-primary"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 font-black text-white shadow-glow transition hover:bg-primaryDark sm:col-span-2"
      >
        <Send className="h-4 w-4" />
        Submit Quote Request
      </button>
      {sent ? (
        <p className="rounded-md border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-white sm:col-span-2">
          Your email app is opening with the quote request.
        </p>
      ) : null}
    </form>
  );
}
