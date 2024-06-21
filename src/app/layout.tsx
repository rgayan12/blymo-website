import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import Footer from "./partials/footer";
import NavLinks from "./nav-links";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "BLYMO - Brilliantly Lighting Your Mind's Opportunities",
  description:
    "BLYMO is a software house that helps founders and entrepreneurs bring their ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@animxyz/core"
        ></link>
      </head>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <NavLinks />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
