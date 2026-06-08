"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/app/partials/moveToTopBtn";
import "/public/css/home-page.css";

export default function About() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
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
    <>
      <div className="bg-slate-950 text-white min-h-screen">
        {/* Banner Section */}
        <section className="relative px-6 py-20 sm:py-40 lg:px-0 bg-[url('/about-us/our-vision.jpeg')] bg-cover bg-center min-h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-950/70"></div>
          <div className="relative text-center mx-auto max-w-screen-xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 mb-6">
              Our Journey & Ethos
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold tracking-tight text-white">
              Our Story
            </h1>
          </div>
        </section>

        {/* About Us Card Section */}
        <section
          ref={(el) => { sectionsRef.current[0] = el; }}
          className="reveal px-4 mx-auto max-w-screen-xl py-12 lg:py-20"
        >
          <Card className="w-full rounded-2xl bg-slate-900 border-slate-800 text-white overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">
                  Venture Incubator
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold font-poppins tracking-tight leading-tight text-white">
                  About Us
                </h2>
                <p className="mt-6 text-slate-300 text-lg font-light leading-relaxed">
                  Welcome to BLYMO, a London-based software house and venture studio dedicated to bridging world-class academic research and cutting-edge software engineering. 
                </p>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                  Founded in 2021 by Bastiyan Rodrigo—who previously conducted research projects at the University of Oxford—BLYMO was envisioned to build high-impact platforms and software services that are evidence-based, secure, and jargon-free. We make advanced technology accessible and effective for public services, emerging startups, and families.
                </p>
              </div>
              <div className="relative min-h-[300px] md:min-h-full">
                <Image
                  src="/about-us/about-us.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="about-us"
                  className="md:rounded-r-2xl"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Vision & Mission Cards */}
        <section
          ref={(el) => { sectionsRef.current[1] = el; }}
          className="reveal px-4 mx-auto max-w-screen-xl py-8 lg:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="w-full bg-slate-900 border-slate-800 text-white rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <span className="text-teal-400 text-3xl">🔭</span>
                <h2 className="text-2xl font-semibold font-poppins mt-4 mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  Mankind has one ability that separates it from all other species: our capacity to create. Our vision is to be a guiding post and technical incubator for those who seek to create and leave the world a better place than they found it.
                </p>
              </CardContent>
            </Card>
            <Card className="w-full bg-slate-900 border-slate-800 text-white rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <span className="text-teal-400 text-3xl">🚀</span>
                <h2 className="text-2xl font-semibold font-poppins mt-4 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-300 text-base font-light leading-relaxed">
                  To empower and support 300 founders, academic researchers, and social entrepreneurs to bring their high-impact ideas and digital ventures to life by 2027.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values Section */}
        <section
          ref={(el) => { sectionsRef.current[2] = el; }}
          className="reveal bg-slate-900/30 border-y border-slate-900/50 py-16 px-4"
        >
          <div className="mx-auto max-w-screen-xl">
            <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">
              Core Principles
            </span>
            <h2 className="mt-2 mb-8 font-medium font-poppins text-3xl text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-2xl bg-slate-900 border-slate-800 p-8 group cursor-pointer transition duration-300 hover:border-teal-500/30">
                <div className="transition duration-300 group-hover:scale-95 group-hover:opacity-10">
                  <Image
                    src="/about-us/thumbs-up-trust.svg"
                    width={35}
                    height={35}
                    alt="our values - integrity"
                    className="text-center icon-white"
                  />
                </div>
                <p className="font-semibold text-teal-400 text-lg group-hover:opacity-10 transition-opacity">
                  Integrity
                </p>
                <div className="absolute cursor-pointer font-normal text-slate-300 px-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                  Your success is our success. We are committed to delivering high-quality, evidence-backed results that exceed expectations, fostering trust in all partnerships.
                </div>
              </Card>

              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-2xl bg-slate-900 border-slate-800 p-8 group cursor-pointer transition duration-300 hover:border-teal-500/30">
                <div className="transition duration-300 group-hover:scale-95 group-hover:opacity-10">
                  <Image
                    src="/about-us/customer-care.svg"
                    width={35}
                    height={35}
                    alt="our values - inclusivity"
                    className="text-center icon-white"
                  />
                </div>
                <p className="font-semibold text-teal-400 text-lg group-hover:opacity-10 transition-opacity">
                  Inclusivity & Diversity
                </p>
                <div className="absolute cursor-pointer font-normal text-slate-300 px-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                  We embrace inclusivity, valuing unique perspectives and experiences that each team member, client, and child-support practitioner brings.
                </div>
              </Card>

              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-2xl bg-slate-900 border-slate-800 p-8 group cursor-pointer transition duration-300 hover:border-teal-500/30">
                <div className="transition duration-300 group-hover:scale-95 group-hover:opacity-10">
                  <Image
                    src="/about-us/users-gear.svg"
                    width={35}
                    height={35}
                    alt="our values - resourcefulness"
                    className="text-center icon-white"
                  />
                </div>
                <p className="font-semibold text-teal-400 text-lg group-hover:opacity-10 transition-opacity">
                  Resourcefulness
                </p>
                <div className="absolute cursor-pointer font-normal text-slate-300 px-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                  We leverage deep scientific data, spatial analysis, and advanced architectures to solve complex problems and deliver resilient outcomes.
                </div>
              </Card>

              <Card className="relative w-full flex flex-col items-center justify-center gap-4 rounded-2xl bg-slate-900 border-slate-800 p-8 group cursor-pointer transition duration-300 hover:border-teal-500/30">
                <div className="transition duration-300 group-hover:scale-95 group-hover:opacity-10">
                  <Image
                    src="/about-us/hand-sparkles.svg"
                    width={35}
                    height={35}
                    alt="our values - transparency"
                    className="text-center icon-white"
                  />
                </div>
                <p className="font-semibold text-teal-400 text-lg group-hover:opacity-10 transition-opacity">
                  Transparency
                </p>
                <div className="absolute cursor-pointer font-normal text-slate-300 px-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                  Open governance and robust data auditing. We ensure clients have complete visibility over tech architecture and validation methodologies.
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Research-Driven Process Section */}
        <section
          ref={(el) => { sectionsRef.current[3] = el; }}
          className="reveal bg-slate-900/20 py-16 px-4"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">
              Research-Driven Methodology
            </span>
            <h2 className="mt-2 mb-8 font-medium font-poppins text-3xl text-white">
              From Evidence to Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-0">
              {[
                { step: "01", title: "Research & Evidence", desc: "Literature reviews, stakeholder interviews, and sector analysis to identify evidence-backed opportunities." },
                { step: "02", title: "Co-Design", desc: "Participatory design with end users — structured workshops, personas, and validated user journeys." },
                { step: "03", title: "Prototype & Test", desc: "Rapid prototyping with usability testing cycles. Build, measure, learn — grounded in behavioural science." },
                { step: "04", title: "Engineer & Ship", desc: "Production-grade development with CI/CD, accessibility compliance, and scalable cloud infrastructure." },
                { step: "05", title: "Evaluate & Iterate", desc: "Post-launch evaluation using quantitative outcomes and qualitative feedback to drive continuous improvement." },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center px-4 py-8 md:py-0">
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

        {/* Testimonials Section */}
        <section
          ref={(el) => { sectionsRef.current[4] = el; }}
          className="reveal px-4 mx-auto max-w-screen-xl py-16 lg:py-24"
        >
          <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 mb-8 font-medium font-poppins text-3xl text-white">
            Don't Just Take Our Word for it
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="w-full bg-slate-900 border-slate-800 text-white rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <p className="text-slate-300 text-lg font-light leading-relaxed italic">
                  "We needed a simple website for our maintenance company, and I couldn’t be more excited about the result. The website’s clean, simple, and easy-to-use design perfectly fits our needs. BLYMO’s customer support is top-notch; they instantly act on my requests."
                </p>
                <div className="flex items-center gap-5 pt-8 border-t border-slate-800/80 mt-6">
                  <Image
                    src="/logo/s5-logo-new.png"
                    width={70}
                    height={70}
                    alt="s5-logo"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-medium text-md">
                      Anton Shaw
                    </p>
                    <p className="text-slate-500 text-sm">
                      (CEO) - S5 Maintenance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full bg-slate-900 border-slate-800 text-white rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <p className="text-slate-300 text-lg font-light leading-relaxed italic">
                  "Thank you so much for the incredible work you've done on our brand. The new branding has not just met but surpassed our expectations, taking our foundation in a fresh, modern direction that fits perfectly with our vision."
                </p>
                <div className="flex items-center gap-5 pt-8 border-t border-slate-800/80 mt-6">
                  <Image
                    src="/logo/leo-logo.png"
                    width={70}
                    height={70}
                    alt="leo-logo"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-medium text-md">
                      Leo Arachchi
                    </p>
                    <p className="text-slate-500 text-sm">
                      (The Founder) - Arachchi Foundation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={(el) => { sectionsRef.current[5] = el; }}
          className="reveal py-16 px-4 text-center border-t border-slate-800/60"
        >
          <div className="max-w-screen-xl mx-auto">
            <span className="text-sm font-semibold tracking-wider text-teal-400 uppercase">
              Get Started
            </span>
            <h2 className="mt-2 text-3xl font-poppins font-semibold mb-6 text-white">
              Get to know us
            </h2>
            <div className="text-slate-400 text-lg max-w-xl mx-auto mb-8 font-light">
              Discover how we can help bring your project or research-backed venture to life.
            </div>
            <Link href="contact-us">
              <button
                className="px-8 py-4 font-poppins font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-xl transition duration-200 shadow-lg shadow-teal-500/25"
                type="button"
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </>
  );
}
