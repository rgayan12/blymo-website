"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";
import { lockProposal } from "./actions";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "control", label: "Control" },
  { id: "intelligence", label: "Intelligence" },
  { id: "architecture", label: "Architecture" },
  { id: "delivery", label: "Plan" },
  { id: "investment", label: "Investment" },
  { id: "next-steps", label: "Next steps" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b89654]">
      {children}
    </p>
  );
}

export default function ProposalExperience() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    track("proposal_opened", { proposal: "private-collection" });

    const viewed = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");

          const section = entry.target.getAttribute("data-proposal-section");
          if (section && !viewed.has(section)) {
            viewed.add(section);
            track("proposal_section_viewed", {
              proposal: "private-collection",
              section,
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("[data-proposal-section]").forEach((element) =>
      observer.observe(element)
    );

    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    let wheelLocked = false;
    let wheelUnlockTimer: ReturnType<typeof setTimeout> | undefined;

    const handleWheel = (event: WheelEvent) => {
      if (!window.matchMedia("(min-width: 1280px)").matches || event.ctrlKey) return;
      if (Math.abs(event.deltaY) < 12 || wheelLocked) return;

      const slides = Array.from(
        document.querySelectorAll<HTMLElement>("[data-proposal-slide]")
      );
      if (!slides.length) return;

      const marker = window.scrollY + window.innerHeight * 0.3;
      let currentIndex = 0;
      slides.forEach((slide, index) => {
        if (slide.offsetTop <= marker) currentIndex = index;
      });

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(slides.length - 1, currentIndex + direction));
      if (nextIndex === currentIndex) return;

      event.preventDefault();
      wheelLocked = true;
      window.scrollTo({
        top: Math.max(0, slides[nextIndex].offsetTop - 64),
        behavior: "smooth",
      });
      wheelUnlockTimer = setTimeout(() => {
        wheelLocked = false;
      }, 850);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("wheel", handleWheel);
      if (wheelUnlockTimer) clearTimeout(wheelUnlockTimer);
    };
  }, []);

  return (
    <main className="min-h-screen scroll-smooth bg-[#f4f0e7] text-[#0b0b0a] [font-family:var(--font-proposal-body)]">
      <div
        className="fixed left-0 top-0 z-[80] h-[3px] bg-[#c3a464] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0a]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c3a464]"
          >
            <span className="relative h-9 w-9 overflow-hidden border border-[#c3a464]/50 xl:hidden">
              <Image
                src="/proposals/private-collection/hero-portrait.png"
                alt=""
                fill
                className="object-cover object-center"
              />
            </span>
            <span>Private Collection Proposal</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Proposal sections">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-xs uppercase tracking-[0.16em] text-stone-400 transition hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </nav>
          <form action={lockProposal}>
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.16em] text-stone-400 transition hover:text-white"
            >
              Lock proposal
            </button>
          </form>
        </div>
      </header>

      <aside
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 top-16 z-20 hidden w-[30vw] overflow-hidden bg-[#0b0b0a] xl:block"
      >
        <Image
          src="/proposals/private-collection/hero-portrait.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0b0a]/85 to-transparent" />
        <p className="absolute bottom-8 left-8 text-xs font-bold uppercase tracking-[0.24em] text-[#c3a464]">
          Exceptional objects · Privately presented
        </p>
      </aside>

      <section data-proposal-slide id="top" className="relative min-h-screen scroll-mt-16 overflow-hidden bg-[#0b0b0a] text-white xl:mr-[30vw]">
        <Image
          src="/proposals/private-collection/hero-portrait.png"
          alt="A prominent emerald with fine jewellery on black velvet"
          fill
          priority
          className="object-cover object-center xl:hidden"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,10,0.98)_0%,rgba(11,11,10,0.92)_42%,rgba(11,11,10,0.12)_78%)] xl:bg-[#0b0b0a]" />
        <div className="relative mx-auto flex min-h-screen max-w-screen-2xl items-center px-6 pb-16 pt-28 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <SectionLabel>Private Collection Platform</SectionLabel>
            <h1 className="mt-7 text-5xl font-light uppercase leading-[0.98] tracking-[-0.025em] sm:text-7xl lg:text-[6.5rem] [font-family:var(--font-proposal-display)]">
              A discreet digital room for exceptional objects.
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              Invitation-only access. Curated presentation. Secure administration.
              Meaningful client intelligence from launch.
            </p>
            <a
              href="#experience"
              className="mt-12 inline-flex border-b border-[#c3a464] pb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#d6bb7e] transition hover:text-white"
            >
              Enter the proposal ↓
            </a>
          </div>
        </div>
      </section>

      <section
        data-proposal-slide
        id="experience"
        data-proposal-section="experience"
        className="scroll-mt-16 opacity-0 translate-y-8 transition duration-1000 ease-out xl:mr-[30vw]"
      >
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 py-24 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-36">
          <div>
            <SectionLabel>The experience</SectionLabel>
            <h2 className="mt-6 max-w-xl text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] sm:text-6xl [font-family:var(--font-proposal-display)]">
              A private room, not a public catalogue.
            </h2>
          </div>
          <div className="max-w-2xl lg:pt-14">
            <p className="text-2xl leading-10 text-stone-700">
              Selected clients enter a refined environment where every collection
              has been intentionally shared with them.
            </p>
            <div className="mt-12 grid gap-px border-y border-stone-300 bg-stone-300 sm:grid-cols-3">
              {[
                "No public pricing or ecommerce",
                "High-resolution objects and certificates",
                "Responsive across every device",
              ].map((item, index) => (
                <div key={item} className="bg-[#f4f0e7] px-5 py-7">
                  <span className="text-xs font-bold text-[#b89654]">0{index + 1}</span>
                  <p className="mt-5 text-base leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-proposal-slide
        id="control"
        data-proposal-section="control"
        className="scroll-mt-16 opacity-0 translate-y-8 bg-[#12382f] text-white transition duration-1000 ease-out xl:mr-[30vw]"
      >
        <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:px-12 lg:px-16 lg:py-36">
          <SectionLabel>Private by design</SectionLabel>
          <h2 className="mt-6 max-w-4xl text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] sm:text-6xl [font-family:var(--font-proposal-display)]">
            Each client sees only what is shared.
          </h2>

          <div className="mt-16 grid border-y border-white/15 md:grid-cols-3 md:divide-x md:divide-white/15">
            {[
              ["01", "Invite", "Create private client accounts and control their lifecycle."],
              ["02", "Authorise", "Grant or revoke access at both collection and object level."],
              ["03", "Present", "Reveal only approved objects, imagery and documents."],
            ].map(([number, title, copy]) => (
              <article key={number} className="border-b border-white/15 py-9 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
                <span className="text-xs font-bold text-[#c3a464]">{number}</span>
                <h3 className="mt-7 text-3xl uppercase [font-family:var(--font-proposal-display)]">{title}</h3>
                <p className="mt-5 max-w-xs leading-7 text-stone-300">{copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c3a464]">Collection administration</p>
              <ul className="mt-7 space-y-4 text-lg text-stone-200">
                <li>Create, edit and archive collections</li>
                <li>Add objects, imagery and certificates</li>
                <li>Choose cover imagery and presentation order</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c3a464]">Client administration</p>
              <ul className="mt-7 space-y-4 text-lg text-stone-200">
                <li>Invite, activate and deactivate accounts</li>
                <li>Grant or revoke selected collections</li>
                <li>View collection, object and return-visit activity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        data-proposal-slide
        id="intelligence"
        data-proposal-section="intelligence"
        className="scroll-mt-16 opacity-0 translate-y-8 transition duration-1000 ease-out xl:mr-[30vw]"
      >
        <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:px-12 lg:px-16 lg:py-36">
          <SectionLabel>Commercial intelligence</SectionLabel>
          <h2 className="mt-6 max-w-4xl text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] sm:text-6xl [font-family:var(--font-proposal-display)]">
            Viewing intelligence starts at launch.
          </h2>

          <div className="mt-16 grid gap-px bg-stone-300 lg:grid-cols-3">
            <article className="bg-[#12382f] p-8 text-white sm:p-10">
              <span className="text-xs font-bold text-[#c3a464]">Included in the MVP</span>
              <ul className="mt-10 space-y-5 text-xl">
                <li>Collection views</li>
                <li>Object views</li>
                <li>Return visits and last viewed</li>
                <li>Linked enquiry activity</li>
              </ul>
            </article>
            <article className="bg-[#eee9df] p-8 sm:p-10">
              <span className="text-xs font-bold text-[#8b867e]">Advanced intelligence</span>
              <ul className="mt-10 space-y-5 text-xl">
                <li>Viewing-time analysis</li>
                <li>Engagement scoring</li>
                <li>Trend dashboards and alerts</li>
              </ul>
            </article>
            <article className="bg-[#eee9df] p-8 sm:p-10">
              <span className="text-xs font-bold text-[#8b867e]">Future relationships</span>
              <ul className="mt-10 space-y-5 text-xl">
                <li>Viewer watermarking</li>
                <li>Access expiry controls</li>
                <li>Viewing requests and CRM</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        data-proposal-slide
        id="architecture"
        data-proposal-section="architecture"
        className="scroll-mt-16 opacity-0 translate-y-8 bg-[#151412] text-white transition duration-1000 ease-out xl:mr-[30vw]"
      >
        <div className="mx-auto grid min-h-screen max-w-screen-2xl items-center gap-16 px-6 py-24 sm:px-12 lg:grid-cols-[0.78fr_1.22fr] lg:px-16 lg:py-32">
          <div>
            <SectionLabel>High-level architecture</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] sm:text-6xl [font-family:var(--font-proposal-display)]">
              Secure at the edge. Simple at the centre.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-300">
              A focused architecture keeps private access, collection management,
              media and viewing intelligence clearly separated while remaining easy to extend.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Private clients", "Invitation-only collection experience"],
                ["Administrators", "Collections, objects and access control"],
              ].map(([title, copy]) => (
                <div key={title} className="border border-white/15 bg-white/[0.04] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c3a464]">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{copy}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto h-8 w-px bg-[#c3a464]/60" />

            <div className="border border-[#c3a464]/50 bg-[#12382f] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6bb7e]">Secure application layer</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Identity & permissions",
                  "Private presentation",
                  "Viewing intelligence",
                ].map((item) => (
                  <div key={item} className="border border-white/15 bg-black/10 px-4 py-4 text-sm leading-5 text-stone-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-[#c3a464]/60" />

            <div className="grid grid-cols-3 gap-3">
              {[
                ["Data", "Collections & access"],
                ["Media", "Images & documents"],
                ["Operations", "Hosting & monitoring"],
              ].map(([title, copy]) => (
                <div key={title} className="border border-white/15 bg-white/[0.04] p-4 sm:p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em]">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-stone-400">{copy}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-xs uppercase tracking-[0.16em] text-stone-500">
              Encrypted transport · Role-based access · Audit-ready activity
            </p>
          </div>
        </div>
      </section>

      <section
        data-proposal-slide
        id="delivery"
        data-proposal-section="delivery"
        className="scroll-mt-16 opacity-0 translate-y-8 bg-[#e9e3d8] transition duration-1000 ease-out xl:mr-[30vw]"
      >
        <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:px-12 lg:px-16 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>Implementation plan</SectionLabel>
              <h2 className="mt-6 text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] sm:text-6xl [font-family:var(--font-proposal-display)]">
                Four weeks. Four decisive stages.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:pt-12">
              {[
                ["3", "initial collections"],
                ["30", "objects or lots"],
                ["1 year", "hosting included"],
              ].map(([value, label]) => (
                <div key={label} className="border border-stone-300 bg-[#f8f5ef] p-7">
                  <div className="text-6xl text-[#12382f] [font-family:var(--font-proposal-display)]">{value}</div>
                  <p className="mt-9 text-sm font-bold uppercase tracking-[0.12em]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <SectionLabel>Four-week delivery</SectionLabel>
            <div className="mt-8 grid gap-px bg-stone-300 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Week 1", "Foundation", "Scope confirmation · Architecture · Production UX"],
                ["Week 2", "Core platform", "Authentication · Collections · Object permissions"],
                ["Week 3", "Intelligence", "Administration · Viewer activity · Initial content"],
                ["Week 4", "Release", "Acceptance testing · Launch · Handover"],
              ].map(([weeks, title, copy]) => (
                <article key={weeks} className="bg-[#f4f0e7] p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#b89654]">{weeks}</span>
                  <h3 className="mt-7 text-3xl uppercase [font-family:var(--font-proposal-display)]">{title}</h3>
                  <p className="mt-5 leading-7 text-stone-600">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-proposal-slide
        id="investment"
        data-proposal-section="investment"
        className="scroll-mt-16 opacity-0 translate-y-8 bg-[#0b0b0a] text-white transition duration-1000 ease-out xl:mr-[30vw]"
      >
        <div className="mx-auto grid max-w-screen-2xl gap-16 px-6 py-24 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-36">
          <div>
            <SectionLabel>Investment</SectionLabel>
            <h2 className="mt-6 max-w-xl text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] sm:text-6xl [font-family:var(--font-proposal-display)]">
              One fixed fee, tied to delivery.
            </h2>
            <p className="mt-10 text-7xl text-[#c3a464] sm:text-8xl [font-family:var(--font-proposal-display)]">£7,500</p>
            <p className="mt-9 max-w-lg leading-7 text-stone-400">
              Hosting is included for the first year. The client is responsible
              for purchasing the chosen domain. Material changes are estimated and approved in writing.
            </p>
          </div>

          <div className="bg-[#f4f0e7] p-8 text-[#0b0b0a] sm:p-12">
            {[
              ["40%", "£3,000", "On acceptance and commencement"],
              ["40%", "£3,000", "Feature-complete staging"],
              ["20%", "£1,500", "Production launch and handover"],
            ].map(([percentage, amount, timing], index) => (
              <div key={timing} className={index ? "border-t border-stone-300 py-9" : "pb-9"}>
                <div className="flex items-baseline justify-between gap-5">
                  <span className="text-3xl font-bold text-[#12382f]">{percentage}</span>
                  <span className="text-4xl [font-family:var(--font-proposal-display)]">{amount}</span>
                </div>
                <p className="mt-5 text-stone-600">{timing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-proposal-slide
        id="next-steps"
        data-proposal-section="next-step"
        className="scroll-mt-16 opacity-0 translate-y-8 bg-[#12382f] text-white transition duration-1000 ease-out xl:mr-[30vw]"
      >
        <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:px-12 lg:px-16 lg:py-36">
          <SectionLabel>Next steps</SectionLabel>
          <div className="mt-7 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] sm:text-7xl [font-family:var(--font-proposal-display)]">
              From approval to delivery in four weeks.
            </h2>
            <a
              href="mailto:info@blymo.co.uk?subject=Private%20Collection%20Platform%20Proposal"
              onClick={() =>
                track("proposal_cta_clicked", {
                  proposal: "private-collection",
                  action: "discuss-proposal",
                })
              }
              className="inline-flex min-h-14 items-center justify-center bg-[#c3a464] px-8 text-sm font-bold uppercase tracking-[0.16em] text-[#0b0b0a] transition hover:bg-[#d6bb7e]"
            >
              Discuss the proposal →
            </a>
          </div>
          <ol className="mt-16 grid gap-px bg-white/15 sm:grid-cols-2 xl:grid-cols-5">
            {[
              ["01", "Proposal approval"],
              ["02", "Contracts signed"],
              ["03", "In-person meeting"],
              ["04", "Work commencement"],
              ["05", "Delivery", "Within four weeks"],
            ].map(([number, title, detail]) => (
              <li key={number} className="bg-[#12382f] p-6">
                <span className="text-xs font-bold text-[#c3a464]">{number}</span>
                <p className="mt-6 text-lg font-semibold uppercase tracking-[0.04em]">{title}</p>
                {detail && <p className="mt-3 text-sm text-stone-300">{detail}</p>}
              </li>
            ))}
          </ol>
          <p className="mt-16 max-w-3xl leading-7 text-stone-300">
            The supplied client brief and this proposal define the agreed MVP.
            Any material change is estimated and approved in writing before work begins.
          </p>
          <div className="mt-20 border-t border-white/15 pt-7 text-xs uppercase tracking-[0.18em] text-stone-500">
            Private Collection Platform · Commercially confidential
          </div>
        </div>
      </section>
    </main>
  );
}
