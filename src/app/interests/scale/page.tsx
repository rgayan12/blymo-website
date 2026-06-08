"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ScaleInterest() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[45vh] flex items-center">
          {/* Glowing teal background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="Scale" parentName="Interests" parentHref="#" />
            </div>
            <div className="mt-8">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-200 rounded-full border border-teal-300/20 mb-6">
                Distributed Engineering
              </span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold font-poppins tracking-tight leading-tight">
                Scale.
              </h1>
              <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                Building applications ready for massive concurrency and enterprise growth. We design software architectures that support expansion, security, and high availability.
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
                  Moving from a prototype to a production platform with <span className="text-teal-600 dark:text-teal-400 font-medium">millions of requests</span> requires structured systems planning. 
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  At BLYMO, we guide ventures through key architectural scaling gates. We replace single-node systems with decoupled cloud patterns, scale out database clusters, and design robust APIs. This ensures that when a product takes off or completes a funding round, the technology stands ready to absorb the demand.
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
                Architecture
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold font-poppins tracking-tight">
                Systems built to expand
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Item 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Distributed Infrastructure
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We deploy containers and serverless applications across globally distributed cloud networks (AWS/GCP). Utilizing multi-region configurations, automatic load balancing, and edge caching, we safeguard system availability during traffic spikes.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    High-Concurrency Databases
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Databases are typically the first bottleneck. We implement caching layers (Redis), set up write-primary / read-replica databases, structure clean relational schemas, and tune queries to manage concurrent client access seamlessly.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v8a2 2 0 11-4 0V4zm-2 8a2 2 0 114 0v4a2 2 0 11-4 0v-4zm-2 4a2 2 0 114 0v2a2 2 0 11-4 0v-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Venture Scaling Architecture
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We help early stage startups prepare their codebase for future institutional audits. By maintaining strict documentation, environment isolation, and standardized deployment protocols, we ensure that new feature squads can onboard immediately as venture funding rounds close.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Security is not an afterthought. We build secure communication pathways (TLS), implement robust OAuth2 / OpenID authorization schemas, automate static code security checking, and establish strict cloud resource access models.
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
