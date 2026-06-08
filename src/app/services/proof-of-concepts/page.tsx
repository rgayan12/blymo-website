"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProofOfConcepts() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[50vh] flex items-center">
          {/* Glowing background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="Proof of Concepts / MVP" />
            </div>
            <div className="mt-8">
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold tracking-tight">
                Proof of Concepts & MVPs
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-slate-300 font-light font-poppins leading-relaxed">
                Test market assumptions quickly with high-performance, custom-built prototypes.
              </p>

              {/* Hero Image Container */}
              <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative pb-[45%] md:pb-[35%] bg-slate-900">
                  <Image
                    src="/services_cards/proof_of_concept/proof-of-concepts.jpg"
                    alt="MVP proof of concept hero"
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

        {/* Intro Card */}
        <section className="py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <Card className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md rounded-2xl p-8 md:p-12">
              <CardContent className="p-0">
                <p className="text-left text-xl font-light font-poppins md:text-3xl text-slate-700 dark:text-slate-200 leading-relaxed">
                  Are you eager to validate a <span className="text-teal-600 dark:text-teal-400 font-medium">groundbreaking concept</span> in the market without allocating months of full-team development resources? Have no-code solutions fallen short of the scaling limits you require?
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  BLYMO is your implementation partner. We build lean, production-grade Minimum Viable Products (MVPs) quickly. Our approach centers on custom architectures that validate your core business thesis, without building technical debt.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline Process */}
        <section className="bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-16 text-center md:text-left">
              <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                The Roadmap
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold font-poppins tracking-tight">
                Our Prototyping Process
              </h2>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:border-l-2 before:border-dashed before:border-teal-500/30">
              
              {/* Step 1 */}
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-500/40 bg-white dark:bg-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="rounded-full w-2.5 h-2.5 bg-teal-500"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h3 className="text-xl font-semibold font-poppins mb-2 ml-4">
                    Boil it Down
                  </h3>
                  <div className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-teal-500/10 p-6 md:p-8 rounded-2xl shadow-md text-slate-650 dark:text-slate-400 leading-relaxed">
                    We partner with you to distill your product ideas down to the core features that prove validation. Our goal is to create a lean, single-metric focused prototype that minimizes time-to-market.
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-500/40 bg-white dark:bg-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="rounded-full w-2.5 h-2.5 bg-teal-500"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h3 className="text-xl font-semibold font-poppins mb-2 ml-4">
                    Tailored Tech Stack
                  </h3>
                  <div className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-teal-500/10 p-6 md:p-8 rounded-2xl shadow-md text-slate-650 dark:text-slate-400 leading-relaxed">
                    We choose frameworks built for scaling rather than visual builders. We utilize tools that provide a solid code backbone, setting a smooth transition pathway as you secure funding rounds.
                  </div>
                  <div className="mt-4 px-4 block md:hidden">
                    <Image
                      src="/services_cards/proof_of_concept/tech-stack.jpg"
                      alt="tech-stack illustration"
                      height={300}
                      width={400}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="absolute hidden md:block md:pl-[calc(55%-0.5rem)] md:pt-6">
                  <Image
                    src="/services_cards/proof_of_concept/tech-stack.jpg"
                    alt="tech-stack illustration desktop"
                    height={260}
                    width={350}
                    className="rounded-xl object-cover shadow-lg border border-slate-200/50 dark:border-slate-800/80"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-500/40 bg-white dark:bg-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="rounded-full w-2.5 h-2.5 bg-teal-500"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h3 className="text-xl font-semibold font-poppins mb-2 ml-4">
                    Agile Execution
                  </h3>
                  <div className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-teal-500/10 p-6 md:p-8 rounded-2xl shadow-md text-slate-650 dark:text-slate-400 leading-relaxed">
                    We coordinate using 1-2 week sprints, checking design models against system code frequently. This agile cadence keeps stakeholders aligned and adapts quickly as we gather feedback from early cohorts.
                  </div>
                  <div className="mt-4 px-4 block md:hidden">
                    <Image
                      src="/services_cards/proof_of_concept/agile.png"
                      alt="agile development process"
                      height={300}
                      width={400}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="absolute hidden md:block md:pr-[calc(60%-0.5rem)] md:pt-6">
                  <Image
                    src="/services_cards/proof_of_concept/agile.png"
                    alt="agile development process desktop"
                    height={260}
                    width={350}
                    className="rounded-xl object-cover shadow-lg border border-slate-200/50 dark:border-slate-800/80"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-500/40 bg-white dark:bg-slate-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="rounded-full w-2.5 h-2.5 bg-teal-500"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <h3 className="text-xl font-semibold font-poppins mb-2 ml-4">
                    API & Service Integration
                  </h3>
                  <div className="bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-teal-500/10 p-6 md:p-8 rounded-2xl shadow-md text-slate-650 dark:text-slate-400 leading-relaxed">
                    Speed is critical. We hook in reliable third-party infrastructure (Stripe, Auth0, Twilio) for secondary support features, rather than building custom backends, focusing all effort on your primary product hook.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why choose BLYMO */}
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
                      Speed to Validation
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      Our boilerplate libraries and automation templates allow us to launch your prototype weeks ahead of typical agency timelines.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Capital Efficiency
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We optimize features and resource allocation to align with initial angel funding, keeping budgets lean and iterations high.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Investment Readiness
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We lay structural foundations matching enterprise standards, demonstrating tech competency to VCs and institutional auditors.
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
