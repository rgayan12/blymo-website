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
  });

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

  return (
    <footer className="font-poppins bg-[#484848]">
      <div className="max-w-screen-xl mx-auto w-full py-6 lg:py-8 mb-4 md:mb-8">
        {showMainFooter ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4 px-2">
            <div className="flex flex-col items-center md:items-start justify-center">
              <a href="https://blymo.co.uk/" className="flex items-center mt-5">
                <Image
                  src="/blymo-logo-invert.png"
                  width={60}
                  height={500}
                  alt="Logo"
                />
                <span className="text-3xl font-semibold whitespace-nowrap ml-2 text-[#E3E3E3]">
                  BLYMO
                </span>
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-xl font-medium text-[#E3E3E3]">Contact Us</h1>
              <div className="grid grid-cols-[auto,1fr] gap-4 items-center justify-center md:justify-start max-w-[200px] md:max-w-full mt-5 text-[#E3E3E3]">
                <Image
                  src="/footer/phone-call.svg"
                  width={20}
                  height={20}
                  alt="Phone"
                  className="mx-auto md:mx-0"
                />
                <p className="text-sm font-normal">+44 749 332 5738</p>

                <Image
                  src="/footer/envelope.svg"
                  width={20}
                  height={20}
                  alt="Email"
                  className="mx-auto md:mx-0"
                />
                <p className="text-sm font-normal">info@blymo.co.uk</p>

                <Image
                  src="/footer/marker.svg"
                  width={20}
                  height={20}
                  alt="Address"
                  className="mx-auto md:mx-0"
                />
                <p className="text-sm font-normal">
                  BLYMO Ltd, International House, 142 Cromwell Road, London, SW7
                  4EF
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-[150px]">
              <h1 className="text-xl font-medium text-[#E3E3E3]">Sitemap</h1>
              <div className="flex flex-col items-center md:items-start gap-4 mt-5 text-[#E3E3E3] text-sm">
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/community">Community</Link>
                <Link href="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-[110px]">
              <h1 className="text-xl font-medium text-[#E3E3E3]">Socials</h1>
              <div className="flex justify-center md:justify-start mt-5 gap-4">
                <div className="flex items-center justify-center">
                  <img
                    src="/footer/facebook.svg"
                    alt="Facebook"
                    className="w-8 h-8"
                    style={{
                      padding: "8px",
                      background: "#8C8C8C4D",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/footer/linkedin.svg"
                    alt="LinkedIn"
                    className="w-8 h-8"
                    style={{
                      padding: "8px",
                      background: "#8C8C8C4D",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
              <div className="mt-auto py-8 md:py-0">
                <Image
                  src="/footer/FSB-Member-Logo-White.png"
                  width={100}
                  height={100}
                  alt="FSB Member Logo"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[80%,20%] lg:gap-8 max-w-screen-sm md:max-w-screen-xl p-10 md:p-0 text-[#FFF]">
            <div className="text-center lg:text-start mt-5">
              <h1 className="mb-4 text-2xl md:text-2xl">
                Ready to Validate Your Idea?
              </h1>
              {paragraphContent}
            </div>
            <div className="text-center lg:text-left">
              <button
                className="mt-12 font-medium rounded-full bg-[#31afa9] py-3 px-10 text-white"
                type="button"
                onClick={handleResetAndRedirect}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        )}
      </div>
      {/* <hr className="border-[#9C9C9C] dark:border-gray-700 max-w-screen-xl mx-auto" /> */}
      <div className="w-full bg-[#343434] px-2">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto py-8">
          <div className="py-4 text-sm text-[#E3E3E3] text-center lg:text-left dark:text-gray-400">
            © 2023{" "}
            <a href="https://blymo.co.uk/" className="hover:underline">
              BLYMO
            </a>
            . All Rights Reserved.
          </div>
          <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-8 items-center justify-between">
            <div className="pt-4 text-sm text-[#E3E3E3] text-center lg:text-left dark:text-gray-400">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="pt-4 text-sm text-[#E3E3E3] text-center lg:text-left dark:text-gray-400">
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
