import { MessageCircle } from "lucide-react";
import { business } from "@/lib/products";

export function WhatsAppButton() {
  return (
    <a
      href={business.whatsapp}
      className="fixed bottom-6 right-4 z-40 hidden h-12 w-12 items-center justify-center rounded-md bg-green-500 text-white shadow-[0_0_28px_rgba(34,197,94,0.45)] transition hover:bg-green-400 md:inline-flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
