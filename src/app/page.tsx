"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ServicePopUp from "@/app/partials/servicePopUp";
import ScrollToTopButton from "@/app/partials/moveToTopBtn";
import CarouselComponent from "@/components/CarouselComponent";
import "/public/css/home-page.css";

export default function Home() {
  const [isModalOpen, changeModelStatus] = useState(false);
  const [selectedUserId, setUserId] = useState(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("page");

  useEffect(() => {
    const scrollToSection = () => {
      if (search === "services" && sectionsRef.current[1]) {
        const element = sectionsRef.current[1];
        const offsetTop =
          element.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    const fadeInOnScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop <= windowHeight - section.offsetHeight / 4) {
          section.classList.add("opacity-100");
          section.classList.remove("opacity-0");
        }
      });
    };

    scrollToSection();
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    return () => {
      window.removeEventListener("scroll", fadeInOnScroll);
    };
  }, [search]);

  const selectMember = (id: any) => {
    setUserId(id);
    changeModelStatus(true);
  };

  const props = {
    changeModelStatus,
    isModalOpen,
    selectedUserId,
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="relative max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-center h-[calc(100vh-5rem)] min-h-[calc(100vh-5rem)] font-poppins">
          <div className="absolute w-full h-0 pb-[56.25%] mt-8">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/home-screen/header-video.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="relative z-10 w-full">
            <h1 className="mb-4 head-title">
              Brilliantly lighting <div>your mind&apos;s opportunities</div>
            </h1>
            <div className="text-3xl mb-12">
              Product Development for Startups & Forward Thinking Companies
            </div>
            <Link href="contact-us" className="font-medium text-xl">
              <div className="flex items-center gap-2 underline underline-offset-8 text-[#31AFA9]">
                <p>Get Started &#160;&#160;</p>
                <Image
                  src="/home-screen/angle-double-small-right.png"
                  alt="arrow right"
                  width={10}
                  height={10}
                  style={{
                    position: "relative",
                    left: "-17px",
                  }}
                />
              </div>
            </Link>
          </div>
        </section>

        {/* Vision Section */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          data-index={0}
          className="opacity-0 transition-opacity duration-[4000ms] ease-in delay-700 bg-[#F7FFFF] dark:bg-gray-900 p-20"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <p className="mb-12 font-medium text-2xl text-[#3A3A3A] font-poppins">
              At BLYMO, we believe that the power of creation is what truly sets
              humanity apart. Inspired by the diverse landscapes, vibrant
              communities, and boundless potential around us, we harness this
              unique creativity to forge meaningful and lasting impacts.
            </p>
            <p className="text-xl text-[#3A3A3A] font-poppins">
              Our vision is to serve those who strive to innovate and make the
              world a better place than they found it. Specialising in product
              development for startups and forward-thinking companies, We
              collaborate with visionaries across various fields, innovative
              placemakers, and emerging brands. Through strategic creativity, we
              turn ideas into captivating experiences, developing modern
              software that drives positive change.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          data-index={1}
          className="opacity-0 transition-opacity duration-[4000ms] ease-in delay-700 bg-white dark:bg-gray-900"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="mx-auto max-w-screen-xl text-left mb-8 lg:mb-16">
              <h2 className="max-w-2xl lg:mb-5 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                Our Services
              </h2>
              <p className="text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Discover what best suits your needs.
              </p>
            </div>

            {/* Carousel  */}
            <CarouselComponent selectMember={selectMember} />
          </div>
        </section>

        {/* Our Process Section */}
        <section
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          data-index={2}
          className="opacity-0 transition-opacity duration-[4000ms] ease-in delay-700 bg-[#F7FFFF] dark:bg-gray-900 p-16"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h2 className="max-w-2xl lg:mb-5 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Embracing a strict, agile way of working.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 my-8 md:my-16">
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/document.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Plan
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    In this stage, we dive deep into thorough research, engage
                    in spirited brainstorming sessions, and carefully craft a
                    strategic roadmap to pave the way for a successful project.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/magic-wand.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Design
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    Our creative team conceptualizes and produces visually
                    captivating and user-friendly designs.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/display-code.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Develop
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    Our developers breathe life into the designs using
                    cutting-edge technologies.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/feedback-review.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Review
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    At this stage, we tirelessly test the product, hunting down
                    those pesky bugs.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/rocket-lunch.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Deploy
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    At this stage, we tirelessly test the product, hunting down
                    those pesky bugs.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#31AFA9] flex items-center justify-center w-10 h-10">
                    <Image
                      src="/about-us/bug.svg"
                      width={20}
                      height={20}
                      alt="our values - integrity"
                      className="text-center"
                    />
                  </div>
                  <p className="font-medium font-poppins text-[#252525] text-xl md:text-2xl">
                    Test
                  </p>
                </div>
                <div>
                  <p className="font-normal font-poppins text-[#252525] text-md my-8">
                    Post-deployment, we conduct a comprehensive project review
                    to gather feedback, evaluate success, and anticipate future
                    requirements to sustain the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          data-index={3}
          className="opacity-0 transition-opacity duration-[4000ms] ease-in delay-700 bg-white dark:bg-gray-900"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div>
              <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                Our Amazing Clients
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className=" bg-white shadow-md opacity-100 p-6 rounded-lg">
                  <p className="text-gray-500 md:text-lg dark:text-gray-400">
                    "We needed a simple website for our maintenance company, and
                    I couldn’t be more excited about the result. The website’s
                    clean, simple, and easy-to-use design perfectly fits our
                    needs. BLYMO’s customer support is top-notch; they instantly
                    act on my update requests and make changes swiftly, thanks
                    to our long-term partnership."
                  </p>
                  <div className="flex items-center gap-5 mt-5">
                    <Image
                      src="/logo/s5-logo-new.png"
                      width={100}
                      height={1800}
                      alt="s5-logo"
                    />
                    <div className="flex flex-col">
                      <p className="text-gray-500 md:text-lg dark:text-gray-400">
                        Anton Shaw
                      </p>
                      <p className="text-gray-500 md:text-lg dark:text-gray-400">
                        (CEO) - S5 Maintenance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 px-4 lg:px-8 items-center justify-between">
                  <div className="transition duration-200 cursor-pointer">
                    <Image
                      src="/logo/lawnops-logo.webp"
                      width={100}
                      height={100}
                      alt="lawnops-logo"
                    />
                  </div>
                  <div className="transition duration-200 cursor-pointer">
                    <Image
                      src="/logo/idcc-logo.png"
                      width={100}
                      height={100}
                      alt="idcc-logo"
                    />
                  </div>
                  <div className="transition duration-200 cursor-pointer">
                    <Image
                      src="/logo/heyoo-logo.svg"
                      width={100}
                      height={100}
                      alt="heyoo-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          data-index={2}
          className="opacity-0 transition-opacity duration-[4000ms] ease-in delay-700 bg-[#F7FFFF] dark:bg-gray-900 p-16 font-poppins"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
            <div className="text-4xl font-medium mb-8">Get to know us</div>
            <div className="text-lg font-medium">
              Discover how we can help bring your project to life.
            </div>
            <Link href="contact-us">
              <button className="mt-12 head-button btn-small" type="button">
                Let's Talk
              </button>
            </Link>
          </div>
        </section>
        <ScrollToTopButton />
        <ServicePopUp props={props} />
      </div>
    </>
  );
}
