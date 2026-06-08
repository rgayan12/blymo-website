"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Footer() {
  const router = useRouter();
  const path = usePathname();
  const URLSegments = path.split("/");
  const [showMainFooter, setShowMainFooter] = useState(true);
  const currentYear = new Date().getFullYear();

  const handleResetAndRedirect = () => {
    // Reset the current URL by navigating to the current pathname
    router.replace(window.location.pathname);
    // Then navigate to the new page
    router.push("/contact-us");
  };

  useEffect(() => {
    if (URLSegments[1] === "services") {
      setShowMainFooter(false);
    } else {
      setShowMainFooter(true);
    }
  }, [path]);

  let paragraphContent;

  switch (URLSegments[2]) {
    case "production-ready-applications":
      paragraphContent = (
        <p>
          Let's embark on this journey together. Contact us today to discuss
          your product development needs and take the first step towards turning
          your vision into reality.
        </p>
      );
      break;
    case "ai-integration":
      paragraphContent = (
        <p>
          Let's embark on this journey together. Contact us today to discuss
          your AI Integration needs and take the first step towards turning your
          vision into reality.
        </p>
      );
      break;
    case "data-visualization":
      paragraphContent = (
        <p>
          Let's embark on this journey together. Contact us today to discuss
          your data visualization needs and take the first step towards turning
          your vision into reality.
        </p>
      );
      break;
    case "websites":
      paragraphContent = (
        <p>
          Let's embark on this journey together. Contact us today to discuss
          your website needs and take the first step towards turning your vision
          into reality.
        </p>
      );
      break;
    case "product-design":
      paragraphContent = (
        <p>
          Let's embark on this journey together. Contact us today to discuss
          your product design needs and take the first step towards turning your vision
          into reality.
        </p>
      );
      break;
    default:
      paragraphContent = (
        <p>
          Let's embark on this journey together. Contact us today to discuss
          your MVP development needs and take the first step towards turning
          your vision into reality.
        </p>
      );
      break;
  }

  const sitemapLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/?page=services" },
    { label: "Community", href: "/community" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer className="font-poppins bg-slate-950 text-slate-300">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
      <div className="max-w-screen-xl mx-auto w-full px-6 py-14 lg:py-20">
        {showMainFooter ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_0.75fr_0.9fr_0.7fr]">
            <div className="max-w-sm">
              <a href="https://blymo.co.uk/" className="inline-flex items-center">
                <Image
                  src="/blymo-logo-invert.png"
                  width={60}
                  height={60}
                  alt="Logo"
                  className="h-12 w-auto"
                />
                <span className="text-3xl font-semibold whitespace-nowrap ml-3 text-white">
                  BLYMO
                </span>
              </a>
              <p className="mt-6 text-sm leading-7 text-slate-400">
                Research-driven software, venture incubation, and product delivery
                for teams building technology with measurable human impact.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-teal-300/50 hover:bg-teal-400/10"
                >
                  <Image
                    src="/footer/facebook.svg"
                    width={18}
                    height={18}
                    alt=""
                    className="icon-white"
                  />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-teal-300/50 hover:bg-teal-400/10"
                >
                  <Image
                    src="/footer/linkedin.svg"
                    width={18}
                    height={18}
                    alt=""
                    className="icon-white"
                  />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h2>
              <div className="mt-6 grid grid-cols-[auto,1fr] gap-x-4 gap-y-5 text-sm text-slate-400">
                <Image
                  src="/footer/phone-call.svg"
                  width={18}
                  height={18}
                  alt="Phone"
                  className="icon-white opacity-70"
                />
                <p>+44 749 332 5738</p>

                <Image
                  src="/footer/envelope.svg"
                  width={18}
                  height={18}
                  alt="Email"
                  className="icon-white opacity-70"
                />
                <p>info@blymo.co.uk</p>

                <Image
                  src="/footer/marker.svg"
                  width={18}
                  height={18}
                  alt="Address"
                  className="icon-white opacity-70"
                />
                <p className="leading-6">
                  BLYMO Ltd, International House, 142 Cromwell Road, London, SW7
                  4EF
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                Sitemap
              </h2>
              <div className="mt-6 grid gap-3 text-sm">
                {sitemapLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-teal-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Legal
                </h2>
                <div className="mt-6 grid gap-3 text-sm">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition hover:text-teal-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Image
                src="/footer/FSB-Member-Logo-White.png"
                width={100}
                height={100}
                alt="FSB Member Logo"
                className="h-auto w-24 opacity-80"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                Ready to Validate Your Idea?
              </span>
              <div className="mt-3 max-w-3xl text-slate-300">
                {paragraphContent}
              </div>
            </div>
            <button
              className="w-full rounded-xl bg-teal-500 px-8 py-4 font-medium text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-400 sm:w-auto"
              type="button"
              onClick={handleResetAndRedirect}
            >
              Get in Touch
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-white/10 bg-slate-950/90 px-6">
        <div className="flex flex-col gap-4 py-7 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between max-w-screen-xl mx-auto">
          <div>
            © {currentYear}{" "}
            <a href="https://blymo.co.uk/" className="text-slate-300 transition hover:text-teal-300">
              BLYMO
            </a>
            . All Rights Reserved.
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-teal-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
