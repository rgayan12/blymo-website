'use server';
import Image from "next/image";
import NavLinks from "./nav-links";
import { Carousel } from "flowbite-react";
import HomePageServiceCard from "./partials/home-page-service-card";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import Header from "../partials/header";
import { test } from "./data/services";
import Testimonial from "../partials/testimonial";
import LetsTalk from "../partials/lets-talk";
import { teamMembers } from "../data/team-members";
import StaffMember from "../partials/staffMember";
import OurProcessAccordion from "../partials/our-process";

export default async function About() {

    const teamMemberss = teamMembers;

    return (
        <div>
            {/* Hero Area */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:bg-gray-900 mt-0">
                <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-[160px] lg:px-12">
                    <h1 className="mb-4 text-6xl tracking-tight shadow-blue-150 leading-30 text-gray-900 md:text-5xl lg:text-5xl dark:text-white line">Brilliantly Lighting
                        <span className="mb-4 mt-9 text-2xl tracking-tight leading-30 transition delay-150 duration-300 ease-in-out text-gray-900 md:text-5xl lg:text-8xl dark:text-white line block">Your Mind&apos;s Opportunities</span>
                    </h1>
                </div>
            </section >


            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <div className="grid md:grid-cols-2 flex-row justify-center">
                        <div className="col-span-1"> <h2 className="mb-8 lg:mb-8 md:text-5xl text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Our Vision</h2></div>
                        <div className="col-span-2 lg:ml-9">
                            <p className="mb-8 text-lg font-normal text-gray-800 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">Man kind has one ability that separates it from all other species: our ability to create. Our vision is to be a guiding post for those who seek to create and leave the world a better place than they found it.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section background-color="white" className="bg-white dark:bg-gray-900">
                <div className="relative border border-gray-80 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 h-[380px] p-4" style={{ backgroundImage: `url(/our-vision.jpeg)`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-gray-800 opacity-10"></div>
                    <div className="relative">
                        <div>
                            <p className="font-normal text-white dark:text-gray-400 align-text-bottom"></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <div className="flex flex-row justify-center">
                        <div className="basis-2/4"> <p className="mb-8 text-lg font-normal text-gray-600 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">To help 300 founders and entrepreneurs bring their ideas to life by 2027</p>
                        </div>
                        <div className="basis-1/4 lg:ml-9">
                            <h2 className="mb-8 lg:mb-8 text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Mission</h2></div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl text-4xl dark:text-white">Our Values</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">

                        <div className="h-[206px] text-center" style={{
                            background: '#FBFBFB 0% 0% no-repeat padding-box',
                            boxShadow: '0px 3px 6px #00000029',
                            borderRadius: '30px',
                            opacity: 1
                        }}>
                            <div className="flex justify-center pt-5">
                                <Image src="/intergrity.svg" width={65} height={100} alt="our values - integrity" className="text-center" />
                            </div>
                            <p className="text-lg font-normal text-teal-500 lg:text-2xl sm:px-16 xl:px-1 pt-7 dark:text-gray-400">Integrity</p>


                        </div>
                        <div className="h-[206px] text-center " style={{
                            background: '#FBFBFB 0% 0% no-repeat padding-box',
                            boxShadow: '0px 3px 6px #00000029',
                            borderRadius: '30px',
                            opacity: 1
                        }}>
                            <div className="flex justify-center pt-5">
                                <Image src="/inclusivity.svg" width={65} height={100} alt="our values - integrity" className="text-center" />
                            </div>
                            <p className="text-lg font-normal text-teal-500 lg:text-2xl sm:px-16 xl:px-1  pt-7 dark:text-gray-400">Inclusivity / Diversity</p>

                        </div>
                        <div className="h-[206px] text-center" style={{
                            background: '#FBFBFB 0% 0% no-repeat padding-box',
                            boxShadow: '0px 3px 6px #00000029',
                            borderRadius: '30px',
                            opacity: 1
                        }}>
                            <div className="flex justify-center pt-5">
                                <Image src="/resourcefulness.svg" width={65} height={100} alt="our values - integrity" className="text-center" />
                            </div>
                            <p className="text-lg font-normal text-teal-500 lg:text-2xl sm:px-16 xl:px-1  pt-7 dark:text-gray-400">Resourcefulness</p>

                        </div>
                        <div className="h-[206px] text-center" style={{
                            background: '#FBFBFB 0% 0% no-repeat padding-box',
                            boxShadow: '0px 3px 6px #00000029',
                            borderRadius: '30px',
                            opacity: 1
                        }}>
                            <div className="flex justify-center pt-5">
                                <Image src="/transparency.svg" width={65} height={100} alt="our values - integrity" className="text-center" />
                            </div>
                            <p className="text-lg font-normal pt-7 text-teal-500 lg:text-2xl sm:px-16 xl:px-1 dark:text-gray-400">Transparency</p>

                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 className="max-w-2xl lg:mb-8 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Meet the Team</h2>
                    <div className="grid md:grid-cols-3 gap-10 items-center justify-center">
                        {teamMemberss.map((team) => (
                            <div className="keen-slider__slide  max-w-80 pt-4" key={team.id}>
                                <StaffMember title={team.title} name={team.name} image={team.image} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <div className="grid grid-flow-row-dense grid-cols-1 justify-center">
                        <div className="col-span-2">
                            <h2 className="mb-8 lg:mb-8 text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">A Process For Success</h2>
                        </div>
                        <div className="col-span-2">
                            <OurProcessAccordion />
                            
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />

            <LetsTalk title="Get to know us" description="Discover how we can help bring your project to life. Our team of dedicated professionals is ready to collaborate with you." />

        </div>
    )
}
