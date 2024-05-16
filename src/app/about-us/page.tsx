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

export default async function About() {
    return (
        <div>
            {/* Hero Area */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:bg-gray-900 mt-0">
                <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-[160px] lg:px-12">
                    <h1 className="mb-4 text-6xl tracking-tight shadow-blue-150 leading-30 text-gray-900 md:text-5xl lg:text-5xl dark:text-white line">Brilliantly Lighting
                        <span className="mb-4 mt-9 text-2xl tracking-tight leading-30 transition delay-150 duration-300 ease-in-out text-gray-900 md:text-5xl lg:text-8xl dark:text-white line block">Your Mind's Opportunities</span>
                    </h1>
                </div>
            </section >
        </div >

    )
}
