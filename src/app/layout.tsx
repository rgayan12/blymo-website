import type { Metadata } from "next";
import { Suspense } from "react";
import { Poppins as FontSans } from "next/font/google";
import Footer from "@/app/partials/footer";
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

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Suspense>
          <NavLinks />
          {children}
          <Analytics />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
