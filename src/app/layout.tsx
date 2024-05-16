import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./partials/footer";
import NavLinks from "./nav-links";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLYMO - Brilliantly Lighting Your Mind's Opportunities",
  description: "BLYMO is a software house that helps founders and entrepreneurs bring their ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@animxyz/core"></link>
      </head>
      <body className={inter.className}>
          <NavLinks />
          {children}
          <Footer />
        </body>
    </html>
  );
}
