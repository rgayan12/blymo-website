"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  // Add state to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (menuState = !isMenuOpen) => {
    setIsMenuOpen(menuState);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-40 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/blymo-logo-full.png"
            width={150}
            height={400}
            alt="Logo"
          />
        </a>
        <button
          onClick={() => handleMenuToggle()} // Handle click to toggle menu
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen} // Use state to control aria-expanded
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 text-gray-900 ${
                  pathname === "/" ? "text-teal-400" : ""
                }  rounded md:bg-transparent md:p-0 dark:text-white hover:text-teal-500`}
                aria-current="page"
                onClick={() => handleMenuToggle()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about-us"
                className={`block py-2 px-3 text-gray-900 ${
                  pathname === "/about-us" ? "text-teal-400" : ""
                }  rounded md:bg-transparent md:p-0 dark:text-white hover:text-teal-500`}
                onClick={() => handleMenuToggle()}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="community"
                className={`block py-2 px-3 text-gray-900 ${
                  pathname === "/community" ? "text-teal-400" : ""
                }  rounded md:bg-transparent md:p-0 dark:text-white hover:text-teal-500`}
                onClick={() => handleMenuToggle()}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="contact-us"
                className={`block py-2 px-3 text-gray-900 ${
                  pathname === "/contact-us" ? "text-teal-400" : ""
                }  rounded md:bg-transparent md:p-0 dark:text-white hover:text-teal-500`}
                onClick={() => handleMenuToggle()}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
