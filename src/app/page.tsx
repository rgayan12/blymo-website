'use client';

import Image from "next/image";
import NavLinks from "./nav-links";
import { Carousel } from "flowbite-react";
import HomePageServiceCard from "./partials/home-page-service-card";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";

import { test } from "./data/services";

export default function Home() {

  const services = test;

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
      slides: {
        perView: 3.3,
        spacing: 15,


      },
    },

    [

      // add plugins here
    ]
  )


  return (
    <div>

      {/* Hero Area */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:bg-gray-900 mt-0">
        <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-[160px] lg:px-12">


          <h1 className="mb-4 text-6xl tracking-tight shadow-blue-150 leading-30 text-gray-900 md:text-5xl lg:text-5xl dark:text-white line">Brilliantly Lighting
            <span className="mb-4 mt-9 text-2xl tracking-tight leading-30 transition delay-150 duration-300 ease-in-out text-gray-900 md:text-5xl lg:text-8xl dark:text-white line block">Your Mind&apos;s Opportunities</span>
          </h1>
        </div>


      </section>

      {/* end of hero area */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-5 px-2 mx-auto text-center max-w-screen-xl lg:py-16 lg:px-8">
          <p className="mb-8 text-lg font-light text-gray-600 lg:text-3xl sm:px-16 xl:px-15 dark:text-gray-400">Man kind has one ability that separates it from all other species: our ability to create. Our vision is to be a guiding post for those who seek to create and leave the world a better place than they found it.</p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

          <div className="lg:mt-0 lg:col-span-6 lg:flex shadow-md">
            <Image src="/homepage-feature-image.svg" width={1900} height={1800} alt="hero image" />
          </div>

          <div className="ml-8 lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Product Development for Startups & Forward Thinking Companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-xl lg:pt-8 dark:text-gray-400">From Web Development, Product Design to Development. We will provide you the technologies backing you need to launch an awesome startup. the technologies backing you need to launch an awesome startup
              the technologies backing you need to launch an awesome startup
              the technologies backing you need to launch an awesome startup</p>

            <a href="#" className="inline-flex px-5 mt-3 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Read More
            </a>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-xl text-left mb-8 lg:mb-16">
            <h2 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Our Services</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Learn more about our services. We are here to help you with all your needs realted to web</p>
          </div>

          {/* Start of Card 1  */}

          <div className="">
            <div ref={sliderRef} className="keen-slider">
              {services.map((service) => (
                <div className="keen-slider__slide  max-w-80" key={service.name} >
                  <HomePageServiceCard title={service.name} description={service.description} image={service.image} />
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Our Process</h2>
          <p className="lg:mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-1 dark:text-gray-400">Here at blymo we focus on markets where technology, innovation, and capital can unlock long-term value.</p>

          <div className="grid grid-cols-3">
            <div className="item">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                <p className="text-white">01</p>
              </div>
              <div className="text-gray-400 mt-3 w-[300px]">
                <h3>Research</h3>
                <div></div>
                <p className="mt-1">This is where we understand the project</p>
              </div>
            </div>

            <div className="item">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                <p className="text-white">02</p>
              </div>
              <div className="text-gray-400 mt-3 w-[300px]">
                <h3>Design</h3>
                <div></div>
                <p className="mt-1">This is where we understand the project</p>
              </div>
            </div>

            <div className="item">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                <p className="text-white">03</p>
              </div>
              <div className="text-gray-400 mt-3 w-[300px]">
                <h3>Develop</h3>
                <div></div>
                <p className="mt-1">This is where we understand the project</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:mt-5">
            <div className="item mt-[60px]">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                <p className="text-white">06</p>
              </div>
              <div className="text-gray-400 mt-3 w-[300px]">
                <h3>Research</h3>
                <div></div>
                <p className="mt-1">This is where we understand the project</p>
              </div>
            </div>

            <div className="item lg:mt-[60px]">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                <p className="text-white">05</p>
              </div>
              <div className="text-gray-400 mt-3 w-[300px]">
                <h3>Design</h3>
                <div></div>
                <p className="mt-1">This is where we understand the project</p>
              </div>
            </div>

            <div className="item lg:mt-[60px]">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-400 rounded-full">
                <p className="text-white">04</p>
              </div>
              <div className="text-gray-400 mt-3 w-[300px]">
                <h3>Develop</h3>
                <div></div>
                <p className="mt-1">This is where we understand the project</p>
              </div>
            </div>
          </div>

        </div>


      </section >

      <section class="bg-gray-200 dark:bg-gray-900">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">


          <div className="grid grid-cols-2 gap-4">

            <div>
              <h2 class="mb-8 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">You’ll be in good company</h2>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-1 dark:text-gray-400">Our community trusts us to bring their visions to life.</p>
            </div>

            <div class=" text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">

              <div className="grid grid-cols-3 gap-8">
                <a href="#">
                  <Image src="/logo1.png" width={500} height={1800} alt="hero image" style={{}} />
                </a>
                <a href="#">
                  <Image src="/logo2.png" width={500} height={1800} alt="hero image" style={{}} />
                </a>
                <a href="#">
                  <Image src="/logo3.png" width={100} height={1800} alt="hero image" style={{}} />
                </a>
                <a href="#">
                  <Image src="/logo4.svg" width={500} height={1800} alt="hero image" style={{}} />
                </a>

              </div>



            </div>
          </div>
        </div>
      </section>


    </div >
  );
}
