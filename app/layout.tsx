import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOPORTECK HN | Soporte técnico y periféricos en San Pedro Sula",
  description:
    "Soporte técnico especializado y venta de periféricos gaming en San Pedro Sula, Honduras.",
  keywords: [
    "soporte técnico",
    "mantenimiento de computadoras",
    "instalación de Windows",
    "periféricos gaming",
    "San Pedro Sula",
    "Honduras",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
