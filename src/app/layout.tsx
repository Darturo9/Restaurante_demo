import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header"; // 🔥 CAMBIAR DE Navbar A Header
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Danilo's Burger - Restaurante Gourmet",
  description:
    "La mejor experiencia gastronómica de Guatemala. Hamburguesas gourmet, alitas, camarones y más. Pedidos online y delivery.",
  keywords: "restaurante, hamburguesas, Guatemala, delivery, comida gourmet",
  authors: [{ name: "Danilo's Burger" }],
  creator: "Danilo's Burger",
  publisher: "Danilo's Burger",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // PWA Metadata
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Danilo's Burger",
  },
  openGraph: {
    type: "website",
    siteName: "Danilo's Burger",
    title: "Danilo's Burger - Restaurante Gourmet",
    description: "La mejor experiencia gastronómica de Guatemala",
  },
  twitter: {
    card: "summary",
    title: "Danilo's Burger - Restaurante Gourmet",
    description: "La mejor experiencia gastronómica de Guatemala",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Danilo's Burger" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Danilo's Burger" />
        <meta
          name="description"
          content="La mejor experiencia gastronómica de Guatemala"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#f97316" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#f97316" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> {/* 🔥 CAMBIAR DE <Navbar /> A <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}