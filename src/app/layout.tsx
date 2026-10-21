import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolioData";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.aboutBio,
  keywords: [
    "Anshal Upmanyu",
    "Software Engineer",
    "System Engineer",
    "Infosys",
    "Kubernetes",
    "Red Hat OpenShift",
    "Distributed Systems",
    "MLOps",
    "FastAPI",
    "Bengaluru",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description: siteConfig.headline,
    url: "https://anshalupmanyu.vercel.app",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description: siteConfig.headline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-zinc-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

