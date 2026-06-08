"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BehaviourInterest() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 bg-slate-950 text-white min-h-[45vh] flex items-center">
          {/* Glowing teal background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92)_50%,rgba(4,47,46,0.65))]"></div>
          
          <div className="relative mx-auto w-full max-w-screen-xl">
            <div className="py-2">
              <BreadcrumbComponent pageName="Behaviour" parentName="Interests" parentHref="#" />
            </div>
            <div className="mt-8">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-200 rounded-full border border-teal-300/20 mb-6">
                Behavioural Engineering
              </span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold font-poppins tracking-tight leading-tight">
                Behaviour.
              </h1>
              <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                Applying behavioural science to software interfaces. We build features that form habits, nudge positive actions, and foster meaningful long-term user engagement.
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
                  We believe that the most successful products don't just solve problems; they <span className="text-teal-600 dark:text-teal-400 font-medium">reshape habits</span> and establish positive engagement loops.
                </p>
                <Separator className="my-8 border-slate-100 dark:border-slate-800" />
                <p className="text-left font-normal font-poppins text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Through behavioural engineering, we design custom systems that deliver context-appropriate notifications, scaffold user onboarding through progressive discovery, and reinforce consistency through reward loops. Our methodologies ensure software becomes a natural extension of a user's day-to-day routine.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Showcase Case Study (PapaTime) */}
        <section className="pb-16 lg:pb-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 md:p-12 border border-slate-800/80 shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 mb-6">
                    Case Study in Action
                  </span>
                  <h3 className="text-3xl md:text-4xl font-poppins font-semibold mb-4 tracking-tight">
                    PapaTime Flagship Venture
                  </h3>
                  <p className="text-base md:text-lg text-slate-300 mb-6 font-light leading-relaxed">
                    PapaTime is a mobile behavioural platform that helps fathers build stronger engagement with their children through timely nudges and guided micro-actions. It is a prime example of BLYMO's capability to build software aligned with rigorous research frameworks.
                  </p>
                  <Link href="/papatime">
                    <button className="px-5 py-2.5 font-poppins font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition duration-200 text-sm">
                      Read PapaTime Proposal →
                    </button>
                  </Link>
                </div>
                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-44 h-80 bg-gradient-to-b from-teal-950 to-slate-950 rounded-2xl border-4 border-slate-800 p-3 flex flex-col justify-between text-xs relative overflow-hidden">
                    <div className="flex justify-between items-center text-[10px] text-teal-400">
                      <span>9:41 AM</span>
                      <span>🔋</span>
                    </div>
                    <div className="bg-slate-900/80 backdrop-blur border border-teal-500/20 p-2.5 rounded-lg my-auto">
                      <p className="text-[8px] text-teal-400 font-bold uppercase tracking-wider mb-0.5">✨ Daily Nudge</p>
                      <p className="text-[10px] text-white">"5 minutes to bedtime. Read 'The Little Spaceman' tonight?"</p>
                    </div>
                    <div className="bg-slate-900/80 backdrop-blur border border-slate-800 p-2.5 rounded-lg text-center">
                      <p className="text-[9px] text-white font-medium">🔥 10-Day Streak!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we deliver behaviour design */}
        <section className="bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900 py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-12">
              <span className="text-sm font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                Methodologies
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold font-poppins tracking-tight">
                Our Behavioural Core
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Item 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Contextual Nudges
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Spamming notifications leads to app uninstalls. We model custom notification algorithms that evaluate context, user timezones, past actions, and calendar windows to deliver the nudge at the precise moment it will drive action.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Guided Micro-Actions
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Complex user processes are intimidating. We break down macro objectives (like completing compliance or setting up parenting plans) into simple 2-minute tasks that reduce user friction and trigger sense-of-completion dopamine markers.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m5-5H7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Streak & Retention Gamification
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Retaining users over months is a primary challenge. We build light, outcome-focused gamification elements like streaks, timelines of accomplishments, and milestones to create an investment effect, where leaving the app means losing visual records.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/5 border border-teal-500/20 dark:border-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-slate-900 dark:text-white mb-3">
                    Evidence-Based Iteration
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our interfaces align with clinical and cognitive frameworks. We analyze user analytics to identify drops in activity and iterate layouts to keep cognitive load to a minimum, ensuring accessible and research-driven product cycles.
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
