"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AiEngineering() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[50vh] flex items-center">
          {/* Glowing background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="AI Engineering" />
            </div>
            <div className="mt-8">
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold tracking-tight">
                AI Engineering
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-slate-300 font-light font-poppins leading-relaxed">
                Elevating customer experiences and backend logic with cutting-edge artificial intelligence.
              </p>

              {/* Hero Image Container */}
              <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative pb-[45%] md:pb-[35%] bg-slate-900">
                  <Image
                    src="/services_cards/ai/ai.jpeg"
                    alt="AI Engineering hero"
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
                  Do you possess a wealth of <span className="text-teal-600 dark:text-teal-400 font-medium">unstructured data</span> waiting to be unlocked for your customers or operations?
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  At BLYMO, we integrate advanced large language models (LLMs) and custom vector databases to extract insights and build interactive interfaces. We turn raw company documentation, databases, and assets into context-aware systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* RAG Showcase */}
        <section className="bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                  Technology Stack
                </span>
                <h2 className="mt-3 mb-6 text-3xl sm:text-4xl font-semibold font-poppins tracking-tight">
                  Retrieval-Augmented Generation (RAG)
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  RAG optimizes Large Language Models by linking them directly to your internal secure knowledge bases. By feeding verified source documentation alongside prompt contexts, RAG prevents model hallucination and ensures answers remain accurate, compliant, and domain-specific.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-950">
                <Image
                  src="/services_cards/ai/how_it_work.png"
                  alt="RAG process diagram"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* RAG Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins mb-3">
                  01. Vector Indexing
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We ingest files, PDFs, spreadsheets, and database entries, chunking text and embedding them into high-dimensional vector spaces.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins mb-3">
                  02. Context Retrieval
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  When a user enters a query, our backend runs cosine similarity queries to retrieve the exact sentences containing the answer.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-teal-500/10 p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins mb-3">
                  03. Secure Synthesis
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  The LLM constructs a response using the retrieved documentation as constraints, delivering formatted, cited answers securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alexa Section */}
        <section className="py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                  Voice Technology
                </span>
                <h3 className="text-3xl sm:text-4xl font-semibold font-poppins tracking-tight">
                  Alexa Skill Development
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-450 leading-relaxed">
                  Looking to enable hands-free voice operations? BLYMO designs custom voice assistants and Alexa Skills that connect directly to your proprietary company APIs. 
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-455 leading-relaxed font-light">
                  From conversational architecture flows (VUI) to AWS Lambda execution backends, we build reliable skills that respond cleanly to users' queries.
                </p>
              </div>
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-900 w-full max-w-sm">
                  <Image
                    src="/services_cards/ai/alexa.png"
                    alt="Alexa skill integration"
                    width={400}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose BLYMO */}
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
                      Advanced LLM Operations
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We optimize prompting methods, semantic chunk matching, and query caches to minimize model token costs and execution latencies.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      Secure Context Containers
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      Your commercial data is containerized securely, ensuring vectors and files never leak into public model retraining scripts.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-teal-600 dark:text-teal-400 font-poppins">
                      System Integrations
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      We connect model execution pipelines to standard slack integrations, client portals, spreadsheets, and database workflows.
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
