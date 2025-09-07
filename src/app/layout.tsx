import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";  // 🔥 AGREGAR ESTA LÍNEA
import { GA_TRACKING_ID } from '@/lib/gtag'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danilo's Burger - Restaurante Gourmet",
  description: "La mejor experiencia gastronómica de Guatemala. Hamburguesas gourmet, alitas, camarones y más. Pedidos online y delivery.",
  keywords: "restaurante, hamburguesas, Guatemala, delivery, comida gourmet",
  authors: [{ name: "Danilo's Burger" }],
  creator: "Danilo's Burger",
  publisher: "Danilo's Burger",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
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
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Danilo's Burger" />
        <meta name="description" content="La mejor experiencia gastronómica de Guatemala" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#f97316" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-512x512.png" />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Header />
        {children}
        <Footer />

        {/* 🔥 AGREGAR WHATSAPP BUTTON GLOBAL */}
        <WhatsAppButton />
      </body>
    </html>
  );
}