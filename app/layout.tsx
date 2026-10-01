import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Dancing_Script, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Abdelrhman Aboelmagd | Full Stack .NET & Angular",
  description:
    "Portfolio of Abdelrhman Mohamed Ghazy Aboelmagd, Full Stack developer building scalable ASP.NET Core APIs and modern Angular experiences with Clean Architecture.",
  keywords: ["Abdelrhman Mohamed Ghazy Aboelmagd", "Abdelrhman Aboelmagd", "Full Stack Developer", ".NET Developer", "Angular Developer", "C# Developer", "TypeScript", "Portfolio"],
  authors: [{ name: "Abdelrhman Mohamed Ghazy Aboelmagd" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Abdelrhman Aboelmagd | Full Stack .NET & Angular",
    description: "Building scalable APIs with ASP.NET Core and modern frontends with Angular.",
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
    apple: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none'><rect width='64' height='64' rx='14' fill='%23090b10'/><path d='M25 20L15 32L25 44' stroke='%23f4f4f5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/><path d='M39 20L49 32L39 44' stroke='%23f4f4f5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg>",
  },
  // Google Search Console verification
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
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${script.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="flex min-h-full flex-col bg-black font-body text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}