"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DataVisualization() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[50vh] flex items-center">
          {/* Glowing background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="Data Visualization" />
            </div>
            <div className="mt-8">
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold tracking-tight">
                Data Visualization
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-slate-300 font-light font-poppins leading-relaxed">
                Transforming raw dataset points into interactive, narrative-led business intelligence.
              </p>

              {/* Hero Image Container */}
              <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative pb-[45%] md:pb-[35%] bg-slate-900">
                  <Image
                    src="/services_cards/data-visualization/data-visualization.jpeg"
                    alt="data visualization hero"
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
                  At BLYMO, we are in the business of <span className="text-teal-600 dark:text-teal-400 font-medium">unveiling insight</span> and opportunity hidden within complex structures.
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  We turn unstructured data rows into useful visual assets, including real-time charts, geographical models, and performance indicators. Our custom dashboards enable key stakeholders to track metrics easily, supporting quick data-driven decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                  Our Process
                </span>
                <h2 className="mt-3 mb-6 text-3xl sm:text-4xl font-semibold font-poppins tracking-tight">
                  How does it map out?
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light">
                  We begin engagements by identifying critical questions that data should solve across your operations, including marketing tracking, database logs, or research indicators.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  The outputs transform raw database queries into interactive vector views, auto-updating emails, and prediction metrics integrated straight into your internal tool dashboards.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                <Image
                  src="/services_cards/data-visualization/how_it_work.png"
                  alt="data visualization process workflow"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specific Focus Grid */}
        <section className="py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl space-y-20">
            {/* Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                <Image
                  src="/services_cards/data-visualization/dashboard.jpeg"
                  alt="Interactive Dashboards mockup"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Core Service</span>
                <h3 className="text-2xl sm:text-3xl font-semibold font-poppins">
                  Interactive Dashboards
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-455 leading-relaxed">
                  We construct responsive layouts and client web views that let stakeholders filter, group, and query records dynamically. No static slides, just real-time indicators.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="space-y-4 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                  <Image
                    src="/services_cards/data-visualization/reporting.png"
                    alt="Custom reporting charts"
                    width={600}
                    height={450}
                    className="rounded-2xl object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4 lg:order-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Custom Reports</span>
                <h3 className="text-2xl sm:text-3xl font-semibold font-poppins">
                  Automated Reporting Systems
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-455 leading-relaxed">
                  Get automated metrics digests sent directly to Slack channels or email lists. We connect data streams to email micro-render packages that work across mobile client viewports.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                <Image
                  src="/services_cards/data-visualization/tools.png"
                  alt="supported frameworks logos"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Frameworks</span>
                <h3 className="text-2xl sm:text-3xl font-semibold font-poppins">
                  Proven Analysis Tech
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-455 leading-relaxed">
                  We integrate standard analysis engines tailored to the context, using Python (Pandas/Matplotlib) or R for datasets, D3.js/Chart.js for interactive web layers, and PowerBI or ArcGIS for mapping geographical structures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why BLYMO */}
        <section className="bg-slate-50 dark:bg-slate-900/10 border-t border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <Card className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md rounded-2xl p-8 md:p-12">
              <CardContent className="p-0">
                <h3 className="text-2xl md:text-3xl font-semibold font-poppins text-slate-900 dark:text-white mb-8">
                  Why choose BLYMO?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Spatial & Mapping Experts
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We go beyond normal bar charts. BLYMO has deep experience mapping geographical databases and location vectors into visual models.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Tailored Design Systems
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We style charts to match your brand style guides, ensuring metrics look native inside your client dashboards and reports.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Scalable Ingestion Pipelines
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We write pipeline ingestion rules that process records asynchronously, preventing lag when databases process thousands of points.
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
