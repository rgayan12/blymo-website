"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = (menuState = !isMenuOpen) => {
    setIsMenuOpen(menuState);
  };

  const navLinkBase = "text-sm tracking-wide transition-all duration-300";
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-black/[0.04] border-b border-gray-200/50 dark:border-slate-800/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-4">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image
            src="/blymo-logo-full.png"
            width={120}
            height={310}
            alt="BLYMO"
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className={`${navLinkBase} ${
              isActive("/")
                ? "text-teal-600 dark:text-teal-400 font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/papatime"
            className={`${navLinkBase} flex items-center gap-1.5 ${
              isActive("/papatime")
                ? "text-teal-600 dark:text-teal-400 font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            PapaTime
            <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-300 border border-teal-500/20">
              New
            </span>
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`${navLinkBase} flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 focus:outline-none`}
            >
              Services
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-gray-400 group-hover:text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-100 dark:border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
              {[
                { href: "/services/ai-engineering", label: "AI Engineering" },
                { href: "/services/product-design", label: "Product Design" },
                { href: "/services/proof-of-concepts", label: "Proof of Concepts / MVP" },
                { href: "/services/production-ready-applications", label: "Production-Ready Applications" },
                { href: "/services/data-visualization", label: "Data Visualization" },
              ].map((sublink) => (
                <Link
                  key={sublink.href}
                  href={sublink.href}
                  className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                    isActive(sublink.href)
                      ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium"
                      : "text-gray-700 dark:text-gray-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400"
                  }`}
                >
                  {sublink.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Interests Dropdown */}
          <div className="relative group">
            <button
              className={`${navLinkBase} flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2 focus:outline-none`}
            >
              Interests
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-gray-400 group-hover:text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-44 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-100 dark:border-slate-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
              <Link
                href="/interests/efficiency"
                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                  isActive("/interests/efficiency")
                    ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium"
                    : "text-gray-700 dark:text-gray-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                Efficiency
              </Link>
              <Link
                href="/interests/behaviour"
                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                  isActive("/interests/behaviour")
                    ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium"
                    : "text-gray-700 dark:text-gray-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                Behaviour
              </Link>
              <Link
                href="/interests/scale"
                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                  isActive("/interests/scale")
                    ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium"
                    : "text-gray-700 dark:text-gray-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                Scale
              </Link>
            </div>
          </div>

          <Link
            href="/about-us"
            className={`${navLinkBase} ${
              isActive("/about-us")
                ? "text-teal-600 dark:text-teal-400 font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/community"
            className={`${navLinkBase} ${
              isActive("/community")
                ? "text-teal-600 dark:text-teal-400 font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Community
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-medium px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-teal-600 text-white hover:bg-slate-800 dark:hover:bg-teal-700 transition-all duration-300 shadow-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => handleMenuToggle()}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100/50 dark:text-gray-400 dark:hover:bg-gray-800/50 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          {isMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-gray-100/50 dark:border-slate-800/50`}
        id="mobile-menu"
      >
        <div className="px-6 py-4 space-y-1">
          {[
            { href: "/", label: "Home" },
            { href: "/papatime", label: "PapaTime" },
            { href: "/about-us", label: "About" },
            { href: "/community", label: "Community" },
            { href: "/contact-us", label: "Get in Touch" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2.5 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-teal-600 dark:text-teal-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-teal-600"
              }`}
              onClick={() => handleMenuToggle(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Services Sub-menu */}
          <div className="border-t border-gray-100/50 dark:border-slate-800/50 pt-2.5 mt-2.5">
            <span className="block px-2 text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">
              Services
            </span>
            {[
              { href: "/services/ai-engineering", label: "AI Engineering" },
              { href: "/services/product-design", label: "Product Design" },
              { href: "/services/proof-of-concepts", label: "Proof of Concepts / MVP" },
              { href: "/services/production-ready-applications", label: "Production-Ready Applications" },
              { href: "/services/data-visualization", label: "Data Visualization" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-teal-600"
                }`}
                onClick={() => handleMenuToggle(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Interests Sub-menu */}
          <div className="border-t border-gray-100/50 dark:border-slate-800/50 pt-2.5 mt-2.5">
            <span className="block px-2 text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1">
              Interests
            </span>
            {[
              { href: "/interests/efficiency", label: "Efficiency" },
              { href: "/interests/behaviour", label: "Behaviour" },
              { href: "/interests/scale", label: "Scale" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-4 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-teal-600"
                }`}
                onClick={() => handleMenuToggle(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
