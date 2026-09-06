import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";

const proposalBody = Manrope({
  subsets: ["latin"],
  variable: "--font-proposal-body",
});

const proposalDisplay = Oswald({
  subsets: ["latin"],
  variable: "--font-proposal-display",
});

export const metadata: Metadata = {
  title: "Private Collection Platform — BLYMO Proposal",
  description: "A confidential proposal prepared by BLYMO.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ProposalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${proposalBody.variable} ${proposalDisplay.variable}`}>
      {children}
    </div>
  );
}
