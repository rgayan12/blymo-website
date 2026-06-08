"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProductDesign() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[50vh] flex items-center">
          {/* Glowing background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="Product Design" />
            </div>
            <div className="mt-8">
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold tracking-tight">
                Product Design
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-slate-300 font-light font-poppins leading-relaxed">
                Converting brilliant ideas into intuitive digital interfaces.
              </p>

              {/* Hero Image Container */}
              <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative pb-[45%] md:pb-[35%] bg-slate-900">
                  <Image
                    src="/services_cards/product_design/product-design.png"
                    alt="product design hero"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-95"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Block */}
        <section className="py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <Card className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md rounded-2xl p-8 md:p-12">
              <CardContent className="p-0">
                <p className="text-left text-xl font-light font-poppins md:text-3xl text-slate-700 dark:text-slate-200 leading-relaxed">
                  Have you ever envisioned a groundbreaking concept but struggled to translate it into a <span className="text-teal-600 dark:text-teal-400 font-medium">tangible product?</span>
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  At BLYMO, we specialize in turning your brilliant ideas into reality through innovative product design solutions.
                </p>
                
                <div className="mt-16">
                  <h3 className="text-2xl md:text-3xl font-medium font-poppins text-teal-600 dark:text-teal-400">
                    Our Approach
                  </h3>
                  <Separator className="my-6 border-slate-100 dark:border-slate-800" />
                  <p className="font-light font-poppins text-lg md:text-2xl text-slate-600 dark:text-slate-350 leading-relaxed">
                    Collaboration is at the heart of our design process. Our team of UX Engineers partners closely with you to distill complex ideas into clean, user-focused workflows and layouts. Here is how we build consistency:
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Detail Grid */}
        <section className="bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl space-y-20">
            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                <Image
                  src="/card/design-card-1.png"
                  alt="Wireframing wireframes"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover w-full h-auto hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Step 01</span>
                <h3 className="text-2xl sm:text-3xl font-semibold font-poppins">
                  Wireframing
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
                  Wireframing lays the structural groundwork for your application, focusing purely on content hierarchy and functional flows rather than aesthetics.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
                  We create clear blueprints, mapping user workflows to ensure every feature has an intuitive and natural placement.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-4 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                  <Image
                    src="/card/design-card-2.png"
                    alt="High-Fidelity prototypes"
                    width={600}
                    height={450}
                    className="rounded-2xl object-cover w-full h-auto hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 lg:order-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Step 02</span>
                <h3 className="text-2xl sm:text-3xl font-semibold font-poppins">
                  High-Fidelity Prototypes
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
                  As the layout stabilizes, we transition to high-fidelity interactive mockups that match the final styling details.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
                  Detailed typography, custom color systems, and animation transitions provide a comprehensive preview of the actual app experience before coding starts.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                <Image
                  src="/card/design-card-3.jpeg"
                  alt="Revisioning details"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover w-full h-auto hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Step 03</span>
                <h3 className="text-2xl sm:text-3xl font-semibold font-poppins">
                  Revisioning & Testing
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
                  We run mock workflows through user tests to reveal bottlenecks or hidden friction points.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
                  Our iterative cycle ensures the interface maps perfectly to user expectations and scales easily during implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why BLYMO */}
        <section className="py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <Card className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md rounded-2xl p-8 md:p-12">
              <CardContent className="p-0">
                <h3 className="text-2xl md:text-3xl font-semibold font-poppins text-slate-900 dark:text-white mb-8">
                  Why choose BLYMO?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Comprehensive Testing
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We conduct interactive user testing to identify layout challenges early, refining controls for seamless conversion paths.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Effective Communication
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      Our mockups double as interactive presentations that align development teams, investors, and partners around the final vision.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      De-risked Code Phases
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      Resolving design constraints beforehand prevents costly database structure refactors or feature re-writes during engineering.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
