"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EfficiencyInterest() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[45vh] flex items-center">
          {/* Glowing teal background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="Efficiency" parentName="Interests" parentHref="#" />
            </div>
            <div className="mt-8">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-200 rounded-full border border-teal-300/20 mb-6">
                System Engineering
              </span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold font-poppins tracking-tight leading-tight">
                Efficiency.
              </h1>
              <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                Engineering high-performance, cost-optimized systems. We build software that performs cleanly, scales intelligently, and minimizes operational overhead.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Card Section */}
        <section className="py-12 lg:py-20 px-6">
          <div className="mx-auto max-w-screen-xl">
            <Card className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md rounded-2xl p-8 md:p-12">
              <CardContent className="p-0">
                <p className="text-left text-xl font-light font-poppins md:text-3xl text-slate-700 dark:text-slate-200 leading-relaxed">
                  We believe that <span className="text-teal-600 dark:text-teal-400 font-medium">software efficiency</span> is a core competitive advantage. Redundant code, oversized dependencies, and unoptimized queries translate directly to slow experiences and high server bills.
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  BLYMO applies rigorous engineering principles to streamline development pipelines and optimize runtime workloads. We focus on lightweight web architectures, automated build systems, serverless infrastructure, and high-performance databases to ensure your digital ventures run at peak efficiency from Day 1.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-12">
              <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                Focus Areas
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold font-poppins tracking-tight">
                How we deliver efficiency
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Item 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Performance Engineering
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We optimize application bundles, lazy load heavy resources, and audit runtime render lifecycles. By utilizing fast servers, local storage strategies, and CDN caching, we guarantee near-instant loading states and stellar Web Vitals metrics.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Cloud & Cost Optimization
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Hosting bills can scale unpredictably. We size database instances, customize autoscaling triggers, and optimize Docker and serverless functions to only consume compute power when requested. Zero-bloat infrastructure saves thousands in monthly operational costs.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Automated Workflows
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Efficiency is also about developer velocity. We set up robust CI/CD pipelines with comprehensive automated testing, lint checking, and automatic staging builds. This eliminates manual regression testing and speeds up ship times.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Robust Code Architecture
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    By enforcing type safety, modular component systems, and design tokens, we make sure that our applications are easily readable by any engineer. Code cleanups are built into our routine, avoiding technical debt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
