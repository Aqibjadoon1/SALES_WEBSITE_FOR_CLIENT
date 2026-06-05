import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business } from "@/lib/products";
import { defaultShareImage, localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "New Murtaza Asif Traders | Appliances Sales & Services",
    template: "%s | New Murtaza Asif Traders",
  },
  description:
    "Buy Dawlance home & commercial appliances in Peshawar. New Murtaza Asif Traders provides sales & services for AC, refrigerators, dishwashers, water dispensers and small appliances. Call 0333 3900862.",
  keywords: [
    "home appliances Peshawar",
    "Dawlance refrigerator Peshawar",
    "Dawlance air conditioner Pakistan",
    "Dawlance dishwasher Peshawar",
    "Dawlance water dispenser Pakistan",
    "small appliances Peshawar",
    "institutional appliance supply Pakistan",
    "Army mess appliances supplier",
    "New Murtaza Asif Traders",
  ],
  alternates: {
    canonical: business.siteUrl,
  },
  openGraph: {
    title: "New Murtaza Asif Traders | Appliances Sales & Services",
    description:
      "Premium home and commercial appliance supply, installation and maintenance in Peshawar with institutional support for Army and TIKA.",
    url: business.siteUrl,
    siteName: business.name,
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: defaultShareImage,
        width: 1200,
        height: 900,
        alt: "New Murtaza Asif Traders appliance portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Murtaza Asif Traders",
    description: "Appliances sales and services for homes, businesses and institutions in Peshawar.",
    images: [defaultShareImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${geistSans.variable} ${geistMono.variable} bg-background font-sans antialiased`}
      >
        <JsonLd data={[organizationJsonLd, localBusinessJsonLd]} />
        <CartProvider>
          <Navbar />
          <CartDrawer />
          {children}
          <Footer />
          <MobileBottomBar />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
