import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Garasi Retro — Restorasi & Sparepart Mobil Klasik",
  description:
    "Restorasi dan sparepart untuk mobil klasik JDM dan pasar Indonesia. Berbasis di Cimahi, melayani Bandung Raya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${oswald.variable} ${inter.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
