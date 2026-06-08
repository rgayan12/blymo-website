"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProductionReadyApplications() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[50vh] flex items-center">
          {/* Glowing background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="Production-Ready Applications" />
            </div>
            <div className="mt-8">
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold tracking-tight">
                Production-Ready Applications
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-slate-300 font-light font-poppins leading-relaxed">
                Build high-availability applications that scale with your enterprise expansion.
              </p>

              {/* Hero Image Container */}
              <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative pb-[45%] md:pb-[35%] bg-slate-900">
                  <Image
                    src="/services_cards/production_ready/production_ready.png"
                    alt="production ready applications hero"
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
                  Are you <span className="text-teal-600 dark:text-teal-400 font-medium">ready to expand</span> your venture? Whether you've outgrown your current codebase or are engineering a new, high-concurrency system from the ground up, we build platforms that scale.
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  BLYMO is your technical engineering partner. We combine robust cloud infrastructure, modular backends, and modular frontends to deliver software that handles thousands of requests per second with high availability and durability.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-16">
              <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                Methodology
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold font-poppins tracking-tight">
                Our Production Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 p-6 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold rounded-lg border border-teal-500/20 mb-6">
                  01
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-slate-950">
                  <Image
                    src="/services_cards/production_ready/research.png"
                    alt="research stage"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  Research & Scoping
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We analyze user metrics and system traffic profiles. We scope database transaction rates and API scaling boundaries before write phase.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 p-6 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold rounded-lg border border-teal-500/20 mb-6">
                  02
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-slate-950">
                  <Image
                    src="/services_cards/production_ready/design.png"
                    alt="design stage"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  System Architecture
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We model clean database structures, design REST/GraphQL APIs, configure load-balancing triggers, and lock down authentication.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 p-6 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold rounded-lg border border-teal-500/20 mb-6">
                  03
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-slate-950">
                  <Image
                    src="/services_cards/production_ready/development.png"
                    alt="development stage"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  Clean Engineering
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our developers construct application frontends and backends using TypeScript, compiling code with high type-safety and unit test coverage.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 p-6 rounded-2xl shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold rounded-lg border border-teal-500/20 mb-6">
                  04
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-slate-950">
                  <Image
                    src="/services_cards/production_ready/test.png"
                    alt="testing stage"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  Verification & Launch
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We perform stress testing, cross-browser compatibility checks, and load diagnostics to audit availability before deploy.
                </p>
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
                      Autoscaling Architecture
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We configure server parameters and databases to scale automatically with traffic fluctuations, preventing resource starvation.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Agile Deployment Loops
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We automate release workflows through staging environments, ensuring smooth features rolling updates with zero downtime.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Long-Term Tech Partnership
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We support systems past release, checking diagnostics, running code audits, and adapting components as user demands expand.
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
