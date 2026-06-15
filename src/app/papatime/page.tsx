"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PapaTimePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // IntersectionObserver for smooth reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen font-poppins pb-24">
      {/* Breadcrumb section */}
      <div className="max-w-screen-xl mx-auto px-6 pt-6">
        <BreadcrumbComponent pageName="PapaTime (Flagship)" />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 px-6 max-w-screen-xl mx-auto">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 mb-6">
              UKRI Grant Proposal — Boosting Father Engagement
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">
              PapaTime: A Gamified <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
                Behavior Engine for Fatherhood
              </span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              Helping fathers build stronger, more consistent engagement with their children through context-aware nudges, guided micro-activities, and secure lifetime memory preservation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#milestones" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-xl transition duration-200 text-white font-medium shadow-lg shadow-teal-500/20">
                View 12-Month Roadmap
              </a>
              <Link href="/contact-us" className="px-6 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl transition duration-200 text-slate-300 font-medium">
                Request Partnership
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            {/* Visual Phone Frame for Mockups */}
            <div className="w-72 h-[500px] bg-slate-900 rounded-[36px] border-8 border-slate-800 shadow-2xl overflow-hidden relative p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] text-teal-400/70 font-semibold px-2">
                <span>9:41 AM</span>
                <span>5G 🔋</span>
              </div>
              
              {/* Mock App Content */}
              <div className="my-auto space-y-4">
                {/* Active streak */}
                <div className="bg-gradient-to-r from-teal-950 to-slate-900 border border-teal-500/20 p-4 rounded-2xl shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-teal-400 tracking-wider uppercase">Streak Active</span>
                    <span className="text-xs">🔥 14 Days</span>
                  </div>
                  <p className="text-xs text-slate-300">You read 4 bedtime stories this week. Keep it up, Dad!</p>
                </div>

                {/* Smart nudge */}
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-lg">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                      ⚡
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Suggested Activity</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">2-Min Play: "Make pillow fort"</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end gap-2 text-[10px]">
                    <button className="px-3 py-1 rounded bg-teal-500 text-white">Launch Prompt</button>
                  </div>
                </div>

                {/* Memory vault entry */}
                <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider">Saved Memory</p>
                  <p className="text-[11px] text-white font-medium mt-1">🎙️ Bedtime story voice log: "The Spaceman"</p>
                </div>
              </div>
              
              {/* Bottom Home Indicator */}
              <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mb-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Cards */}
      <section
        ref={(el) => { sectionsRef.current[0] = el; }}
        className="reveal py-12 px-6 max-w-screen-xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur p-6 rounded-2xl text-white">
            <CardContent className="p-0">
              <span className="text-teal-400 text-3xl">🎯</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Project Summary</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                PapaTime is a mobile-first, gamified behavioural platform helping fathers build consistent, high-quality engagement habits with children via timely prompts, AI personalization, and timeline storage.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur p-6 rounded-2xl text-white">
            <CardContent className="p-0">
              <span className="text-teal-400 text-3xl">❤️</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Free for Fathers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Free at the point of use to maximize accessibility and impact. Supported by a premium long-term storage subscription model for memory preservation to ensure commercial viability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur p-6 rounded-2xl text-white">
            <CardContent className="p-0">
              <span className="text-teal-400 text-3xl">🚀</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Scale Route</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Distributed through trusted public service touchpoints like maternity hospitals, midwives, health visitors, early-years practitioners, and family support groups.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why This Project & Theory of Change */}
      <section
        ref={(el) => { sectionsRef.current[1] = el; }}
        className="reveal py-16 px-6 max-w-screen-xl mx-auto border-t border-slate-800/60"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">The Opportunity</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-6">Why PapaTime?</h2>
            <p className="text-slate-300 leading-relaxed font-light mb-6">
              Evidence shows that fathers' active engagement plays a pivotal role in child development, cognitive growth, and home learning environment. However, many fathers encounter practical, cultural, and confidence barriers during early fatherhood.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              PapaTime is designed specifically to reduce these friction points. By breaking down everyday interactions into simple, gamified, and highly timed micro-actions, we make fatherhood engagement rewarding, structured, and friction-free.
            </p>
          </div>
          
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold mb-6">Theory of Change</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold flex-shrink-0 text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-white text-md">Timely Prompts</h4>
                  <p className="text-xs text-slate-400 mt-1">Fathers receive simple, actionable prompts scheduled around their work schedules and child's age.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold flex-shrink-0 text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-white text-md">Micro-Interactions</h4>
                  <p className="text-xs text-slate-400 mt-1">Completed nudges trigger brief, highly engaging interactions (reading, play, learning prompts).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold flex-shrink-0 text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-white text-md">Strengthened Caregiver Identity</h4>
                  <p className="text-xs text-slate-400 mt-1">Repeated success loops build fatherly confidence, bonding, and a healthy caregiving routine.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold flex-shrink-0 text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-white text-md">Optimized Child Outcomes</h4>
                  <p className="text-xs text-slate-400 mt-1">Long-term consistency leads to a richer home learning environment, boosting child development outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users & Onboarding Strategy */}
      <section
        ref={(el) => { sectionsRef.current[2] = el; }}
        className="reveal py-16 px-6 max-w-screen-xl mx-auto border-t border-slate-800/60"
      >
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">Target Audience & Distribution</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">Connecting with Families</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-6 text-teal-300">Target Beneficiaries</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/50">
                <h4 className="font-semibold text-white text-sm">Primary: First-Time & Young Fathers</h4>
                <p className="text-xs text-slate-400 mt-1">Supporting fathers during key initial transition points starting antenatally, specifically targeting young fathers under 25 who face higher isolation.</p>
              </div>
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/50">
                <h4 className="font-semibold text-white text-sm">Primary: Less Visible Fathers</h4>
                <p className="text-xs text-slate-400 mt-1">Engaging shift-workers, separated parents, and ethnic minority families who are frequently hard-to-reach via standard support services.</p>
              </div>
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/50">
                <h4 className="font-semibold text-white text-sm">Secondary: Support Practitioners</h4>
                <p className="text-xs text-slate-400 mt-1">Enabling midwives, maternity units, health visitors, and early-years practitioners to leverage a light data insight layer demonstrating father engagement.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-6 text-teal-300">Trusted Distribution Touchpoints</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-slate-950/80 rounded-xl border border-slate-800/50">
                <span className="text-teal-400 font-bold">QR</span>
                <div>
                  <h4 className="font-semibold text-white text-sm">Antenatal Onboarding</h4>
                  <p className="text-xs text-slate-400 mt-1">Integration via QR codes in maternity discharge packs, inviting fathers to "Start Your Fatherhood Journey" before birth.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start p-4 bg-slate-950/80 rounded-xl border border-slate-800/50">
                <span className="text-teal-400 font-bold">🏥</span>
                <div>
                  <h4 className="font-semibold text-white text-sm">Birth Activation Moments</h4>
                  <p className="text-xs text-slate-400 mt-1">Direct onboarding validation activated by hospital and midwifery staff during birth discharge checkups.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-slate-950/80 rounded-xl border border-slate-800/50">
                <span className="text-teal-400 font-bold">🩺</span>
                <div>
                  <h4 className="font-semibold text-white text-sm">Health Visitor Reinforcement</h4>
                  <p className="text-xs text-slate-400 mt-1">During routine postnatal visits, health visitors encourage active platform usage, validating engagement progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Pricing Model */}
      <section
        ref={(el) => { sectionsRef.current[3] = el; }}
        className="reveal py-16 px-6 max-w-screen-xl mx-auto border-t border-slate-800/60"
      >
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">Sustainability Model</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">The Freemium Model</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-300 mb-2">Free Tier</h3>
            <p className="text-sm text-slate-500 mb-6">Impact-first tier funded by UKRI validation grants.</p>
            <div className="text-3xl font-bold mb-6">£0</div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">✓ AI-based context nudges</li>
              <li className="flex items-center gap-2">✓ 2-Minute bedside reading stories</li>
              <li className="flex items-center gap-2">✓ Play prompts & milestone streaks</li>
              <li className="flex items-center gap-2 text-slate-500">✗ Short-term memory storage (60 days max)</li>
              <li className="flex items-center gap-2 text-slate-500">✗ Voice & keepsake preservation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-teal-950 to-slate-900 border-2 border-teal-500 p-8 rounded-3xl relative">
            <span className="absolute top-4 right-4 bg-teal-500 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
              Lifetime Value
            </span>
            <h3 className="text-xl font-bold text-teal-300 mb-2">Premium Legacy Tier</h3>
            <p className="text-sm text-teal-600/80 mb-6">Focused on legacy, preservation, and identity.</p>
            <div className="text-3xl font-bold mb-6">£4.99 <span className="text-sm font-normal text-slate-400">/ month</span></div>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-2">✓ Lifetime digital memory book</li>
              <li className="flex items-center gap-2">✓ Voice recording & story preservation</li>
              <li className="flex items-center gap-2">✓ Auto-generated print keepsakes</li>
              <li className="flex items-center gap-2">✓ Advanced family analytics dashboard</li>
              <li className="flex items-center gap-2">✓ Long-term storage guarantees</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12-Month UKRI Milestone Delivery Plan */}
      <section
        id="milestones"
        ref={(el) => { sectionsRef.current[4] = el; }}
        className="reveal py-16 px-6 max-w-screen-xl mx-auto border-t border-slate-800/60"
      >
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">Project Timeline</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">12-Month Milestone Delivery Plan</h2>
          <p className="text-slate-400 text-sm mt-3">Milestone-based prototype development and evaluation roadmap.</p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {/* Milestone 1 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 1</span>
                <h4 className="text-md font-semibold text-white mt-1">M1: Design Locked</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Kickoff completed, scope agreed, user journeys & wireframes drafted.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Kickoff and design package accepted.</p>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 2</span>
                <h4 className="text-md font-semibold text-white mt-1">M2: Discovery Finished</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Discovery sessions & interviews with fathers and partner organizations completed, feature priorities validated.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Discovery report approved.</p>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Months 3–4</span>
                <h4 className="text-md font-semibold text-white mt-1">M3: Core MVP Built</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Onboarding flow, core reminder engine, story prompt generator, basic interaction tracker built.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Alpha prototype delivered.</p>
              </div>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 5</span>
                <h4 className="text-md font-semibold text-white mt-1">M4: AI Processing</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Personalization rule engine, AI content recommendation, and safeguarding content filter integrated.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> AI layer integrated and tested internally.</p>
              </div>
            </div>
          </div>

          {/* Milestone 5 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 6</span>
                <h4 className="text-md font-semibold text-white mt-1">M5: Memory Book</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Memory book timeline, saved moments, milestones tracker, and premium-export architecture design.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Memory book module completed.</p>
              </div>
            </div>
          </div>

          {/* Milestone 6 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 7</span>
                <h4 className="text-md font-semibold text-white mt-1">M6: Pilot Readiness</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Pilot partners engaged, safeguarding locks implemented, and user recruitment flows locked.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Pilot readiness confirmed.</p>
              </div>
            </div>
          </div>

          {/* Milestone 7 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Months 8–9</span>
                <h4 className="text-md font-semibold text-white mt-1">M7: Pilot Launch</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Cohort 1 onboarded, nudge feedback loops logged, and user interaction data tracked.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Pilot Round 1 completed.</p>
              </div>
            </div>
          </div>

          {/* Milestone 8 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 10</span>
                <h4 className="text-md font-semibold text-white mt-1">M8: Iteration</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> User feedback from Pilot 1 analyzed, nudge parameters and memory book structures iterated.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Version 2 prototype delivered.</p>
              </div>
            </div>
          </div>

          {/* Milestone 9 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 11</span>
                <h4 className="text-md font-semibold text-white mt-1">M9: Validation</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Cohort 2 pilot tested, engagement and usability validation reports locked.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Validation completed.</p>
              </div>
            </div>
          </div>

          {/* Milestone 10 */}
          <div className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-2 border-slate-950"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <span className="text-xs font-bold text-teal-400">Month 12</span>
                <h4 className="text-md font-semibold text-white mt-1">M10: Phase 2 Pack</h4>
              </div>
              <div className="md:col-span-9 bg-slate-900/30 border border-slate-800/50 p-5 rounded-2xl">
                <p className="text-xs text-slate-400 mb-2"><strong>Deliverables:</strong> Final evaluation report, impact outcomes mapping, and Phase 2 Rollout roadmap locked.</p>
                <p className="text-xs text-slate-400"><strong>Invoice Trigger:</strong> Final report and project close approved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic backing CTA */}
      <section
        ref={(el) => { sectionsRef.current[5] = el; }}
        className="reveal py-16 px-6 max-w-screen-xl mx-auto text-center bg-slate-900/30 border border-slate-800/80 rounded-3xl backdrop-blur"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Academic & Scientific Backing</h3>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8 font-light text-sm md:text-base leading-relaxed">
          Our director previously held positions at the World Class Research Institutes and continues to coordinate with academic, health-service, and behavioral advisory specialists to ensure all activities are developmentally and psychologically structured for early-years impact.
        </p>
        <Link href="/about-us">
          <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 rounded-xl transition duration-200 text-white font-medium">
            Meet Our Advisory Team →
          </button>
        </Link>
      </section>
    </div>
  );
}
