import { MessageCircle } from "lucide-react";
import { business } from "@/lib/products";

export function WhatsAppButton() {
  return (
    <a
      href={business.whatsapp}
      className="fixed bottom-20 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-md bg-green-500 text-white shadow-[0_0_28px_rgba(34,197,94,0.45)] transition hover:bg-green-400 md:bottom-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
