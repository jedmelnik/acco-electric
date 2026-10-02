import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Oswald({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | San Anselmo Electricians`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Acco Electric: trusted, licensed, and insured electricians in San Anselmo for residential work, panels, EV chargers, lighting, and remodels. Call (415) 971-2857 for a free quote.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-body pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
