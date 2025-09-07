import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: "Restaurante Delizia - Experiencia Culinaria Única",
  description: "Una experiencia culinaria única donde cada plato cuenta una historia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}