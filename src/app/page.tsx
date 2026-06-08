"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ServicePopUp from "@/app/partials/servicePopUp";
import ScrollToTopButton from "@/app/partials/moveToTopBtn";
import CarouselComponent from "@/components/CarouselComponent";
import "/public/css/home-page.css";

export default function Home() {
  const [isModalOpen, changeModelStatus] = useState(false);
  const [selectedUserId, setUserId] = useState(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("page");

  useEffect(() => {
    const scrollToSection = () => {
      // Index 2 is now the Services section after inserting PapaTime at Index 1
      if (search === "services" && sectionsRef.current[2]) {
        const element = sectionsRef.current[2];
        const offsetTop =
          element.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    scrollToSection();

    // Premium IntersectionObserver for hardware-accelerated smooth reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Reveal once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [search]);

  const selectMember = (id: any) => {
    setUserId(id);
    changeModelStatus(true);
  };

  const props = {
    changeModelStatus,
    isModalOpen,
    selectedUserId,
  };

  return (
    <>
      <div>
        {/* Outcome-Focused Hero Section */}
        <section className="relative w-full p-4 flex flex-wrap items-center justify-center h-[calc(100vh-5rem)] min-h-[calc(100vh-5rem)] font-poppins bg-slate-950">
          <div className="absolute inset-0 w-full h-full">
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              src="/home-screen/header-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            {/* Elegant premium dark-to-teal overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.28),transparent_34%),radial-gradient(circle_at_72%_28%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(115deg,rgba(2,6,23,0.98),rgba(15,23,42,0.86)_48%,rgba(4,47,46,0.58))]"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4">
            <span className="inline-block px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-300 rounded-full border border-teal-500/20 mb-6">
              Research-Led Venture Studio
            </span>
            <h1 className="mb-6 head-title text-4xl sm:text-5xl md:text-6xl text-white font-poppins font-semibold tracking-tight leading-[1.1]">
              We turn research into <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-300 bg-clip-text text-transparent">
                ventures that change lives.
              </span>
            </h1>
            <div className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed">
              Research-driven engineering. Production-grade delivery. From evidence to product to market, we build technology that scales impact.
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/papatime">
                <button className="w-full sm:w-auto px-8 py-4 font-poppins font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-xl transition duration-200 shadow-lg shadow-teal-500/25">
                  Explore PapaTime (Flagship Product)
                </button>
              </Link>
              <Link href="contact-us">
                <button className="w-full sm:w-auto px-8 py-4 font-poppins font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900/80 rounded-xl border border-slate-700/50 transition duration-200 backdrop-blur-sm">
                  Partner With Us
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          data-index={0}
          className="reveal bg-[#F7FFFF] dark:bg-gray-950 py-16 lg:py-24 border-y border-gray-100/30 dark:border-gray-900/30"
        >
          <div className="px-6 mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-sm font-semibold tracking-wider text-teal-600 uppercase">
                  Who We Are
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">
                  Bridging academic research and technology.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="mb-8 font-normal text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
                  At BLYMO, we believe that technology should serve human connection and positive social change. Backed by experience in world-class research environments like the University of Oxford, we co-create evidence-based solutions that address real-world challenges in early years, behavioral change, and digital innovation.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-poppins leading-relaxed">
                  Our model combines venture incubation with advanced software delivery. We partner with founders, research specialists, and public services to turn research-grounded ideas into robust, scalable platforms that foster engagement and leave a lasting legacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Venture Showcase (PapaTime) */}
        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          data-index={1}
          className="reveal bg-white dark:bg-gray-900 py-16 lg:py-24 px-4 border-b border-gray-100/30 dark:border-gray-900/30"
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 md:p-12 lg:p-16 border border-slate-800/80 shadow-2xl">
              {/* Background gradient glowing blob */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 mb-6">
                    Flagship Venture • UKRI Proposal Phase 1
                  </span>
                  <h2 className="text-4xl md:text-5xl font-poppins font-semibold mb-6 tracking-tight">
                    PapaTime
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-8 font-light leading-relaxed">
                    A mobile-first, gamified behavioural platform helping fathers build stronger, more consistent engagement with their children through timely nudges, guided micro-actions, and lifetime memory preservation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Behavioral Nudges</h4>
                        <p className="text-sm text-slate-400">Context-aware triggers fitting into work routines and child developmental milestones.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Moment Preservation</h4>
                        <p className="text-sm text-slate-400">Voice logs, photos, and micro-memories saved securely in a lifetime digital keepsake book.</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/papatime">
                    <button className="px-6 py-3 font-poppins font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-xl transition duration-200 shadow-lg shadow-teal-500/20">
                      Explore PapaTime Proposal & Roadmap →
                    </button>
                  </Link>
                </div>

                <div className="lg:col-span-5 relative flex justify-center">
                  {/* Visual representation of mobile screen / timeline */}
                  <div className="w-64 h-96 bg-gradient-to-b from-teal-950 to-slate-950 rounded-3xl border-4 border-slate-800 shadow-2xl overflow-hidden relative p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs text-teal-400/80">
                      <span>9:41 AM</span>
                      <span>🔋</span>
                    </div>

                    {/* Mock Nudge */}
                    <div className="bg-slate-900/85 backdrop-blur border border-teal-500/30 p-3 rounded-xl shadow-md my-auto">
                      <p className="text-[10px] text-teal-400 font-bold uppercase tracking-wider mb-1">✨ Bedtime Nudge</p>
                      <p className="text-xs text-white font-medium">"Hey Bastiyan, 10 mins to storytime. Read 'The Little Spaceman' tonight?"</p>
                      <div className="mt-2 flex gap-1 justify-end">
                        <button className="px-2 py-0.5 rounded bg-teal-500 text-[10px] text-white">Start Activity</button>
                      </div>
                    </div>

                    {/* Mock Milestone */}
                    <div className="bg-slate-900/85 backdrop-blur border border-slate-800 p-3 rounded-xl shadow-md">
                      <p className="text-[10px] text-slate-400 font-semibold mb-1">🏆 Milestone Unlocked</p>
                      <p className="text-xs text-white font-medium">10-Day Bedtime Reading Streak!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          data-index={2}
          className="reveal relative z-20 bg-white dark:bg-gray-950 pt-16 lg:pt-24 pb-0 -mb-28 lg:-mb-40"
        >
          <div className="pt-8 pb-0 px-4 mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-screen-xl text-left mb-8 lg:mb-16">
              <span className="text-sm font-semibold tracking-wider text-teal-600 uppercase">
                Core Capabilities
              </span>
              <h2 className="max-w-2xl mt-2 mb-4 text-3xl sm:text-4xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">
                Our Services
              </h2>
              <p className="text-gray-500 text-lg dark:text-gray-400">
                Custom software engineering and design for venture-backed projects.
              </p>
            </div>

            {/* Carousel  */}
            <CarouselComponent selectMember={selectMember} />
          </div>
        </section>

        {/* Clients Section */}
        <section
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          data-index={3}
          className="reveal relative z-10 bg-gradient-to-b from-[#F7FFFF] via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 pt-48 lg:pt-64 pb-16 lg:pb-24 border-y border-gray-100/30 dark:border-gray-900/30"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div>
              <span className="text-sm font-semibold tracking-wider text-teal-600 uppercase">
                Success Stories
              </span>
              <h2 className="mt-2 max-w-2xl lg:mb-8 mb-4 text-3xl sm:text-4xl font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">
                Our Clients
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
                <div className="bg-white/85 dark:bg-gray-900/90 shadow-xl shadow-teal-950/5 hover:shadow-2xl hover:shadow-teal-950/10 transition-shadow p-8 rounded-2xl border border-teal-100/70 dark:border-gray-800/70 backdrop-blur">
                  <p className="text-gray-600 dark:text-gray-300 text-lg italic leading-relaxed">
                    "BLYMO helped us shape Heyoo with the speed, care, and product thinking an early-stage company needs. They understood the vision quickly, translated it into a polished digital experience, and stayed close to the details that matter."
                  </p>
                  <div className="flex items-center gap-5 mt-6 border-t border-gray-100/80 dark:border-gray-800/80 pt-4">
                    <Image
                      src="/logo/heyoo-logo.svg"
                      width={90}
                      height={90}
                      alt="heyoo-logo"
                      className="h-auto w-auto"
                    />
                    <div className="flex flex-col">
                      <p className="text-gray-900 dark:text-white font-medium text-lg">
                        Jamie Clifton
                      </p>
                      <p className="text-gray-500 text-sm">
                        Founder - Heyoo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 items-center justify-around bg-white/70 dark:bg-gray-900/80 rounded-2xl p-8 border border-teal-100/70 dark:border-gray-800/70 shadow-xl shadow-teal-950/5 backdrop-blur">
                  <div className="transition duration-200 cursor-pointer opacity-70 hover:opacity-100">
                    <Image
                      src="/logo/s5-logo-new.png"
                      width={100}
                      height={100}
                      alt="s5-logo"
                    />
                  </div>
                  <div className="transition duration-200 cursor-pointer opacity-70 hover:opacity-100">
                    <Image
                      src="/logo/lawnops-logo.webp"
                      width={100}
                      height={100}
                      alt="lawnops-logo"
                    />
                  </div>
                  <div className="transition duration-200 cursor-pointer opacity-70 hover:opacity-100">
                    <Image
                      src="/logo/idcc-logo.png"
                      width={100}
                      height={100}
                      alt="idcc-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research-Driven Process Section */}
        <section
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          data-index={4}
          className="reveal bg-slate-950 py-16 lg:py-28"
        >
          <div className="px-6 mx-auto max-w-screen-xl">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">
                Research-Driven Methodology
              </span>
              <h2 className="max-w-3xl mx-auto mt-3 mb-4 text-3xl sm:text-4xl font-poppins font-semibold tracking-tight text-white">
                From evidence to impact — our process
              </h2>
              <p className="text-slate-400 sm:text-lg max-w-2xl mx-auto">
                Every venture we build starts with real-world evidence and follows a rigorous, research-led delivery pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-0">
              {[
                {
                  step: "01",
                  title: "Research & Evidence",
                  desc: "Literature reviews, stakeholder interviews, and sector analysis to identify evidence-backed opportunities.",
                },
                {
                  step: "02",
                  title: "Co-Design",
                  desc: "Participatory design with end users — structured workshops, personas, and validated user journeys.",
                },
                {
                  step: "03",
                  title: "Prototype & Test",
                  desc: "Rapid prototyping with usability testing cycles. Build, measure, learn — grounded in behavioural science.",
                },
                {
                  step: "04",
                  title: "Engineer & Ship",
                  desc: "Production-grade development with CI/CD, accessibility compliance, and scalable cloud infrastructure.",
                },
                {
                  step: "05",
                  title: "Evaluate & Iterate",
                  desc: "Post-launch evaluation using quantitative outcomes and qualitative feedback to drive continuous improvement.",
                },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center px-4 py-8 md:py-0">
                  {/* Connector line (hidden on first item and on mobile) */}
                  {i > 0 && (
                    <div className="hidden md:block absolute top-6 -left-[1px] w-full h-px bg-gradient-to-r from-teal-500/40 to-transparent -z-0" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono font-bold text-sm mb-5 relative z-10">
                    {item.step}
                  </div>
                  <h4 className="font-semibold font-poppins text-white text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
          data-index={5}
          className="reveal relative overflow-hidden bg-slate-950 py-16 lg:py-24 text-center border-b border-teal-500/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.24),transparent_42%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(4,47,46,0.72),rgba(2,6,23,1))]" />
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
            <span className="relative text-sm font-semibold tracking-wider text-teal-300 uppercase">
              Start a Conversation
            </span>
            <h2 className="relative mt-2 text-3xl sm:text-4xl font-poppins font-semibold mb-6 tracking-tight text-white">
              Have a venture idea or research project?
            </h2>
            <div className="relative text-lg text-slate-300 max-w-xl mx-auto mb-8 font-light">
              We partner with researchers, founders, and public services to build evidence-based technology. Let's explore what we can build together.
            </div>
            <Link href="contact-us">
              <button
                className="relative px-8 py-4 font-poppins font-medium text-white bg-teal-500 hover:bg-teal-400 rounded-xl transition duration-200 shadow-lg shadow-teal-500/25"
                type="button"
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </section>
        <ScrollToTopButton />
        <ServicePopUp props={props} />
      </div>
    </>
  );
}
