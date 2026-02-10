import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TawkWidget from "@/components/TawkWidget";
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
  title: "FIRMA | Sovereign Digital Lettering Protocol",
  description: "Secure, verifiable, and tamper-proof institutional communication for government ministries and enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <TawkWidget />
      </body>
    </html>
  );
}
