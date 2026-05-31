import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/data";
import { localBusinessSchema } from "@/lib/seo";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Loader } from "@/components/Loader";
import { Cursor } from "@/components/Cursor";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AudioPlayer } from "@/components/AudioPlayer";
import { CookieBanner } from "@/components/CookieBanner";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} · Taller Multimarca en La Albatalía, Murcia`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    "Taller mecánico multimarca en La Albatalía, Murcia. Mecánica general, chapa y pintura, electricidad, aire acondicionado y compraventa de vehículos. Grupo CGA.",
  keywords: [
    "taller mecánico Murcia",
    "taller La Albatalía",
    "Starka Motor",
    "reparación coche Murcia",
    "chapa pintura Murcia",
    "aire acondicionado coche Murcia",
    "compraventa vehículos Murcia",
    "taller multimarca Murcia",
    "Grupo CGA",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: BRAND.url },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} · Taller Multimarca · Grupo CGA`,
    description:
      "Tu taller de confianza en Murcia. Más de 24 años de experiencia en mecánica, chapa, pintura y compraventa de vehículos.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} · Taller Multimarca`,
    description: "Tu taller de confianza en Murcia. Grupo CGA.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${display.variable} ${mono.variable} bg-ink-950 antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans text-bone-100">
        <Loader />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <AudioPlayer />
        </SmoothScroll>
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
