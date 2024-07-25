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
          <section className="bg-white dark:bg-gray-900 flex items-center h-[calc(100vh-5rem)]">
            <div className="text-center lg:text-left mx-auto p-6">
              <h1 className="mb-4 head-title">
                Brilliantly <span style={{ color: "#31AFA9" }}>lighting</span>
                <div>your mind&apos;s opportunities</div>
              </h1>
              <Link href="contact-us">
                <button className="mt-9 head-button" type="button">
                  Get in touch
                </button>
              </Link>
            </div>
          </section>

          {/* Vision Section */}
          <section
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            data-index={0}
            className="opacity-0 transition-opacity duration-[4000ms] ease-in delay-700 bg-white dark:bg-gray-900"
          >
            <div className="grid max-w-screen-xl px-4 py-8 lg:py-16 mx-auto grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col">
                <Image
                  src="/home-screen/product-development.png"
                  width={1900}
                  height={1800}
                  alt="hero image"
                  className="shadow-md rounded-lg mt-3 object-cover h-full"
                />
              </div>

              <div className="md:ml-8 flex flex-col justify-center">
                <h1
                  className="max-w-2xl text-2xl md:text-3xl tracking-tight dark:text-white"
                  style={{ lineHeight: "50px" }}
                >
                  Product Development for Startups & Forward Thinking Companies
                </h1>
                <p className="max-w-2xl text-left mb-6 lg:mb-0 lg:pt-2 text-gray-500 md:text-lg lg:text-lg dark:text-gray-400">
                  At BLYMO, we believe that the power of creation is what truly
                  sets humanity apart. Inspired by the diverse landscapes,
                  vibrant communities, and boundless potential around us, we
                  harness this unique creativity to forge meaningful and lasting
                  impacts.
                </p>
                <p className="max-w-2xl text-left mb-6 mt-4 lg:mb-0 lg:pt-2 text-gray-500 md:text-lg lg:text-lg dark:text-gray-400">
                  Our vision is to serve those who strive to innovate and make
                  the world a better place than they found it. Specialising in
                  product development for startups and forward-thinking
                  companies, We collaborate with visionaries across various
                  fields, innovative placemakers, and emerging brands,
                  leveraging strategic creativity to captivate audiences and
                  craft compelling visual identities.
                </p>
              </div>
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
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
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
            className="opacity-0 transition-opacity duration-[4000ms] ease-in delay-700 bg-white dark:bg-gray-900"
          >
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <h2 className="max-w-2xl lg:mb-5 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                Our Process
              </h2>
              <p className="text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Embracing a strict, agile way of working.
              </p>

              <div className="grid md:grid-cols-3">
                <div className="item mt-10 lg:mt-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                    <p className="text-white">01</p>
                  </div>
                  <div className="text-gray-400 mt-3 w-[300px]">
                    <h3>Plan</h3>
                    <div></div>
                    <p className="mt-1">
                      In this stage, we dive deep into thorough research, engage
                      in spirited brainstorming sessions, and carefully craft a
                      strategic roadmap to pave the way for a successful
                      project.
                    </p>
                  </div>
                </div>

                <div className="item mt-10 lg:mt-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                    <p className="text-white">02</p>
                  </div>
                  <div className="text-gray-400 mt-3 w-[300px]">
                    <h3>Design</h3>
                    <div></div>
                    <p className="mt-1">
                      Our creative team conceptualises and produces visually
                      captivating and user-friendly designs.
                    </p>
                  </div>
                </div>

                <div className="item mt-10 lg:mt-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                    <p className="text-white">03</p>
                  </div>
                  <div className="text-gray-400 mt-3 w-[300px]">
                    <h3>Develop</h3>
                    <div></div>
                    <p className="mt-1">
                      Our developers breathe life into the designs using
                      cutting-edge technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 lg:mt-5">
                <div className="item  mt-10 lg:mt-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                    <p className="text-white">04</p>
                  </div>
                  <div className="text-gray-400 mt-3 w-[300px]">
                    <h3>Test</h3>
                    <div></div>
                    <p className="mt-1">
                      At this stage, we tirelessly test the product, hunting
                      down those pesky bugs.
                    </p>
                  </div>
                </div>
                <div className="item mt-10 lg:mt-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                    <p className="text-white">05</p>
                  </div>
                  <div className="text-gray-400 mt-3 w-[300px]">
                    <h3>Deploy</h3>
                    <div></div>
                    <p className="mt-1">
                      After thorough testing, we deploy the product into the
                      live environment.
                    </p>
                  </div>
                </div>
                <div className="item   mt-10 lg:mt-10]">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                    <p className="text-white">06</p>
                  </div>
                  <div className="text-gray-400 mt-3 w-[300px]">
                    <h3>Review</h3>
                    <div></div>
                    <p className="mt-1">
                      Post-deployment, we conduct a comprehensive project review
                      to gather feedback, evaluate success, and anticipate
                      future requirements to sustain the project.
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
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div>
                <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                  Our Amazing Clients
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className=" bg-white shadow-md opacity-100 p-6 rounded-lg">
                    <p className="text-gray-500 md:text-lg dark:text-gray-400">
                      "We needed a simple website for our maintenance company,
                      and I couldn’t be more excited about the result. The
                      website’s clean, simple, and easy-to-use design perfectly
                      fits our needs. BLYMO’s customer support is top-notch;
                      they instantly act on my update requests and make changes
                      swiftly, thanks to our long-term partnership."
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
          <ScrollToTopButton />
          <ServicePopUp props={props} />
        </div>
      </>
  );
}
