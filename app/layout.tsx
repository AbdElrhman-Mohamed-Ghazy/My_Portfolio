import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Abdelrhman Aboelmagd | .NET Backend Developer",
  description:
    "Professional portfolio of Abdelrhman Mohamed Ghazy Aboelmagd, specializing in scalable, secure backend systems, and Clean Architecture.",
  keywords: ["Abdelrhman Mohamed Ghazy Aboelmagd","Abdelrhman Aboelmagd","Backend Developer", ".NET Developer", "C# Developer", "Portfolio", "Software Engineer"],
  authors: [{ name: "Abdelrhman Mohamed Ghazy Aboelmagd" }],

  robots: {
    index: true,
    follow: true,
  },

  // 2. للسوشيال ميديا (لينكد إن، واتساب، فيسبوك) - الـ Open Graph
  openGraph: {
    title: "Abdelrhman Aboelmagd | .NET Backend Developer",
    description: "Professional portfolio of Abdelrhman Mohamed Ghazy Aboelmagd, specializing in scalable, secure backend systems.",
    url: "https://abdelrhman-aboelmagd.vercel.app",
    siteName: "Abdelrhman Aboelmagd Portfolio",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: [
      {
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none'><rect width='64' height='64' rx='14' fill='%23090b10'/><path d='M25 20L15 32L25 44' stroke='%23f4f4f5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><path d='M39 20L49 32L39 44' stroke='%23f4f4f5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        type: "image/svg+xml",
      },
    ],
    // الحل البرمجي للموبايلات والآيفون: بنخليه يقرأ نفس الأيقونة الـ SVG كـ Apple Touch Icon
    apple: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none'><rect width='64' height='64' rx='14' fill='%23090b10'/><path d='M25 20L15 32L25 44' stroke='%23f4f4f5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><path d='M39 20L49 32L39 44' stroke='%23f4f4f5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg>",
  },
  // كود التحقق بتاع محرك بحث جوجل (Search Console)
  verification: {
    google: "JI68ujd54ig8Tyd9rsXpDxScwHEVvC0eQFqZ1_YZQw4", 
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}