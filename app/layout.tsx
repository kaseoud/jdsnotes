import type { Metadata } from "next";
import { IBM_Plex_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ReadingProgress from "@/components/ReadingProgress";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingSocial from "@/components/FloatingSocial";
import { Analytics } from "@vercel/analytics/next";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karim Abouel Seoud",
  description: "Product Operations at Commure",
  metadataBase: new URL("https://jaidevjayakumar.com"),
  openGraph: {
    title: "Karim Abouel Seoud",
    description: "Product Operations at Commure",
    url: "https://jaidevjayakumar.com",
    siteName: "Karim Abouel Seoud",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karim Abouel Seoud",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Abouel Seoud",
    description: "Product Operations at Commure",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${libreBaskerville.variable}`}>
      <body className="font-mono antialiased bg-background text-foreground">
        <ScrollProgress />
        <Header />
        <Breadcrumbs />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingSocial />
        <ReadingProgress />
        <Analytics />
      </body>
    </html>
  );
}
