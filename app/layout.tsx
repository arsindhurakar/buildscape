import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/app/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${siteConfig.name} - ${siteConfig.role}`;

export const metadata: Metadata = {
  title,
  description: siteConfig.tagline,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  keywords: [
    "frontend engineer",
    "react",
    "next.js",
    "typescript",
    "web developer",
    "portfolio",
    "kathmandu",
  ],
  openGraph: {
    title,
    description: siteConfig.tagline,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1120",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#0B1120] leading-relaxed text-slate-400 leading-relaxed antialiased selection:bg-blue-400 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
