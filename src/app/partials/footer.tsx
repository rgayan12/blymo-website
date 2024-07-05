"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from "react";

export default function Footer() {

  const router = usePathname();
  const URLSegments = router.split('/');
  const [showMainFooter, setShowMainFooter] = useState(true);
  useEffect(() => {
    if(URLSegments[1] === 'services') {
      setShowMainFooter(false);
    }
  })
  

  return (
    <footer style={{ backgroundColor: "#343434" }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-14">
        {showMainFooter ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-8 sm:gap-2 md:grid-cols-3">
              <div className="text-start">
                <h2 className="text-md text-white dark:text-white">
                  Tel: +44 (0)12 1234 1234
                </h2>
                <h2 className="mb-10 text-md text-white dark:text-white">
                  Email: info@blymo.co.uk
                </h2>
                <h2 className="text-md text-white dark:text-white">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </h2>
              </div>
              <div></div>
              <div className="text-center">
                <ul className="text-gray-100 dark:text-gray-400 font-medium">
                  <li className="mb-4 flex items-center gap-2">
                    <img
                      className="object-cover h-full w-full rounded-l-lg"
                      src="/logo/facebook.svg"
                      alt="fb-logo"
                      style={{
                        width: "22px",
                      }}
                    />
                    <a
                      href="https://www.facebook.com/profile.php?id=61558966886637"
                      className="hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4 flex items-center gap-2">
                    <img
                      className="object-cover h-full w-full rounded-l-lg"
                      src="/logo/linkedin.svg"
                      alt="li-logo"
                      style={{
                        width: "25px",
                      }}
                    />
                    <a
                      href="https://www.linkedin.com/company/blymo/"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto">
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
                  <span className="text-3xl font-semibold whitespace-nowrap ml-2 text-white dark:text-white">
                    BLYMO
                  </span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="columns-auto font-poppins text-white grid grid-cols-1 lg:grid-cols-[80%,20%] lg:gap-8">
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
                <button className="mt-9 head-button" type="button">
                  GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div
        style={{ backgroundColor: "#E5E5E5", width: "100%", height: "50px" }}
      >
        <div className="ms-10 pt-4 text-sm text-gray-500 text-center lg:text-left dark:text-gray-400">
          © 2023{" "}
          <a href="https://blymo.co.uk/" className="hover:underline">
            BLYMO
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
