"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const router = usePathname();
  const URLSegments = router.split("/");
  const [showMainFooter, setShowMainFooter] = useState(true);
  useEffect(() => {
    if (URLSegments[1] === "services") {
      setShowMainFooter(false);
    }else{
      setShowMainFooter(true);
    }
  });

  return (
    <footer className="font-poppins bg-[#343434]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {showMainFooter ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-2">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <a
                    href="https://blymo.co.uk/"
                    className="flex items-center mt-5"
                  >
                    <Image
                      src="/blymo-logo-invert.png"
                      width={60}
                      height={500}
                      alt="Logo"
                    />
                    <span className="text-3xl font-semibold whitespace-nowrap ml-2 text-[#E3E3E3] dark:text-[#E3E3E3]">
                      BLYMO
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-medium text-center text-[#E3E3E3] dark:text-[#E3E3E3]">
                  Contact Us
                </h1>
                <div className="w-full flex items-center mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <div className="w-[30%]">
                    <Image
                      src="/footer/phone-call.svg"
                      width={20}
                      height={20}
                      alt="Logo"
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-sm font-normal w-[80%]">
                    +44 749 332 5738
                  </p>
                </div>
                <div className="w-full flex items-center mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <div className="w-[30%]">
                    <Image
                      src="/footer/envelope.svg"
                      width={20}
                      height={20}
                      alt="Logo"
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-sm font-normal w-[80%]">
                    info@blymo.co.uk
                  </p>
                </div>
                <div className="w-full flex items-center mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <div className="w-[30%]">
                    <Image
                      src="/footer/marker.svg"
                      width={20}
                      height={20}
                      alt="Logo"
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-sm font-normal w-[80%]">
                    BLYMO Ltd, International House, 142 Cromwell Road, London,
                    SW7 4EF
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col"
                style={{ position: "relative", left: "135px" }}
              >
                <h1 className="text-xl font-medium text-left text-[#E3E3E3] dark:text-[#E3E3E3]">
                  Sitemap
                </h1>
                <div className="text-sm w-full text-left mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <Link href="/">Home</Link>
                </div>
                <div className="text-sm w-full text-left mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <Link href="/about-us">About Us</Link>
                </div>{" "}
                <div className="text-sm w-full text-left mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <Link href="/services">Services</Link>
                </div>
                <div className="text-sm w-full text-left mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <Link href="/community">Community</Link>
                </div>
                <div className="text-sm w-full text-left mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <Link href="/contact-us">Contact Us</Link>
                </div>
              </div>
              <div
                className="flex flex-col items-left"
                style={{ position: "relative", left: "100px" }}
              >
                <h1 className="text-xl font-medium text-left text-[#E3E3E3] dark:text-[#E3E3E3]">
                  Socials
                </h1>
                <div className="w-full flex justify-left mt-5 gap-4 text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <div>
                    <img
                      className="object-cover h-full w-full rounded-l-lg"
                      src="/footer/facebook.svg"
                      alt="fb-logo"
                      style={{
                        padding: "10px",
                        background: "#8C8C8C4D",
                        borderRadius: "50%",
                        width: "40px",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover h-full w-full rounded-l-lg"
                      src="/footer/linkedin.svg"
                      alt="li-logo"
                      style={{
                        padding: "10px",
                        background: "#8C8C8C4D",
                        borderRadius: "50%",
                        width: "40px",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full h-full flex items-end justify-left text-[#E3E3E3] dark:text-[#E3E3E3]">
                  <Image
                    src="/footer/FSB-Member-Logo-White.png"
                    width={100}
                    height={100}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="columns-auto font-poppins text-[#E3E3E3] grid grid-cols-1 lg:grid-cols-[80%,20%] lg:gap-8">
            <div className="text-start">
              <h1 className="mb-4 text-3xl md:text-2xl lg:text-3xl">
                Ready to Validate Your Idea?
              </h1>
              Ready to ValiLet's embark on this journey together. Contact us
              today to discuss your MVP development needs and take the first
              step towards turning your vision into reality.date Your Idea?
            </div>
            <div>
              <Link href="contact-us">
                <button
                  className="mt-12 font-medium rounded-full bg-[#31afa9] py-3 px-10 text-white"
                  type="button"
                >
                  GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <hr className="border-gray-200 dark:border-gray-700 max-w-screen-xl mx-auto" />
      <div className="flex justify-between items-center p-6 mx-2">
        <div className="ms-10 pt-4 text-sm text-[#E3E3E3] text-center lg:text-left dark:text-gray-400">
          © 2023{" "}
          <a href="https://blymo.co.uk/" className="hover:underline">
            BLYMO
          </a>
          . All Rights Reserved.
        </div>
        <div className="flex gap-8 px-4 lg:px-8 items-center justify-between">
          <div className="ms-10 pt-4 text-sm text-[#E3E3E3] text-center lg:text-left dark:text-gray-400">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="ms-10 pt-4 text-sm text-[#E3E3E3] text-center lg:text-left dark:text-gray-400">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
