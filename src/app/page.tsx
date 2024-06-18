"use client";
import { useState } from "react";
import Image from "next/image";
import HomePageServiceCard from "./partials/home-page-service-card";
import { services } from "./data/services";
import ServicePopUp from "./partials/servicePopUp";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import "@animxyz/core";
import '/public/css/home-page.css';
import CarouselComponent from "@/components/CarouselComponent";

export default function Home() {
  const companyServices = services;
  const [isModalOpen, changeModelStatus] = useState(false);
  const [selectedUserId, setUserId] = useState(null);

  const selectMember = (id: any) => {
      setUserId(id);
      changeModelStatus(true);
  };

   const props = {
     changeModelStatus,
     isModalOpen,
     selectedUserId,
   };

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      breakpoints: {
        "(min-width: 800px)": {
          loop: false,
          slides: {
            perView: 3.3,
            spacing: 15,
          },
        },
      },
      loop: true,
      slides: {
        perView: 1.3,
        spacing: 15,
      },
    },

    [
      // add plugins here
    ]
  );

  return (
    <>
      <div>
        {/* Hero Area */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:bg-gray-900 mt-0 h-dvh flex items-center h-screen">
          <div className="text-center lg:text-left mx-auto p-6">
            <h1 className="mb-4 head-title">
              Brilliantly <span style={{ color: "#31AFA9" }}>lighting</span>
              <div>your mind&apos;s opportunities</div>
            </h1>
            <button className="mt-9 head-button" type="button">
              Get in touch
            </button>
          </div>
        </section>

        {/* end of hero area */}
        {/* <section className="bg-white dark:bg-gray-900">
          <div className="py-5 px-2 mx-auto text-center max-w-screen-xl lg:py-16 lg:px-8">
            <p className="mb-8 text-lg font-light text-gray-600 lg:text-3xl sm:px-16 xl:px-15 dark:text-gray-400">
              Man kind has one ability that separates it from all other species:
              our ability to create. Our vision is to be a guiding post for
              those who seek to create and leave the world a better place than
              they found it.
            </p>
          </div>
        </section> */}

        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 lg:py-16 mx-auto grid-cols-1 lg:grid-cols-2">
            <div>
              <Image
                src="/home-screen/product-development.png"
                width={1900}
                height={1800}
                alt="hero image"
                className="shadow-md rounded-lg"
              />
            </div>

            <div className="md:ml-8">
              <h1
                className="max-w-2xl mb-4 mt-8 lg:mt-2 text-4xl md:text-5xl xl:text-4xl tracking-tight dark:text-white tracking-wide"
                style={{ lineHeight: "50px" }}
              >
                Product Development For Startups & Forward Thinking Companies
              </h1>
              <p
                className="max-w-2xl mb-6 lg:mb-0 lg:pt-5 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 font-poppins-light"
                style={{ color: "#3a3a3a", fontWeight: "lighter" }}
              >
                Our team embodies our vision, comprising passionate designers,
                ingenious developers, and imaginative thinkers. Each member
                brings their unique talents and perspectives, united by a common
                goal-to craft a brighter future.Through our collective efforts,
                we transform our vision into reality.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-xl text-left mb-8 lg:mb-16">
              <h2 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
                Services
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Discover what best suits your needs.
              </p>
            </div>

            {/* Carousel  */}
            <CarouselComponent selectMember={selectMember} />
        
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl text-gray-900 dark:text-white">
              Strategic Consulting
            </h2>
            <p className="lg:mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-1 dark:text-gray-400">
              Our Process: Embracing a Strict, Agile Way of Working.
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
                    strategic roadmap to pave the way for a successful project.
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
                    At this stage, we tirelessly test the product, hunting down
                    those pesky bugs.
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
                    After thorough testing, we deploy the product into the live
                    environment.
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
                    to gather feedback, evaluate success, and anticipate future
                    requirements to sustain the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 dark:bg-gray-900">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h2 className="mb-8 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
                  You&apos;ll be in good company
                </h2>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-1 dark:text-gray-400">
                  Our community trusts us to bring their visions to life.
                </p>
              </div>

              <div className=" text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <div className="grid grid-cols-3 gap-8">
                  <a href="#">
                    <Image
                      src="/logo4.svg"
                      width={500}
                      height={1800}
                      alt="hero image"
                      style={{}}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/logo2.png"
                      width={500}
                      height={1800}
                      alt="hero image"
                      style={{}}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/logo3.png"
                      width={100}
                      height={1800}
                      alt="hero image"
                      style={{}}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ServicePopUp props={props} />
    </>
  );
}
