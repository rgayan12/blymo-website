import Link from "next/link";
import { CheckCircle2, Lock, ShieldCheck, SnapFlexShell, snapflexEmail } from "../components";

export const metadata = {
  title: "SnapFlex Privacy Policy",
  description:
    "Privacy policy for SnapFlex, the iOS receipt scanner and expense tracker by BLYMO.",
};

const sections = [
  {
    title: "Information you provide",
    body: "SnapFlex may process information you choose to enter or capture in the app, such as receipt details, expense categories, dates, totals, and notes.",
  },
  {
    title: "Receipt images and expense data",
    body: "Receipt images and extracted text are used to help create and organise your expense records. The app is intended to support your own record keeping and review workflow.",
  },
  {
    title: "Support communications",
    body: "If you contact us for support, we may receive your name, email address, message, and any details you choose to share so we can respond to your request.",
  },
  {
    title: "How information is used",
    body: "Information is used to operate SnapFlex, provide support, improve the app experience, troubleshoot issues, and comply with legal or platform requirements.",
  },
  {
    title: "Sharing",
    body: "We do not sell your personal information. We may use trusted service providers where needed to operate the app, provide support, or maintain app infrastructure.",
  },
  {
    title: "Your choices",
    body: "You can contact us to ask questions about your data, request support, or raise a privacy concern using the contact details below.",
  },
];

export default function SnapFlexPrivacyPage() {
  return (
    <SnapFlexShell>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Privacy
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            SnapFlex Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Last updated: 13 September 2026
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            SnapFlex is an iOS receipt scanner and expense tracker provided by
            BLYMO Ltd. This policy explains how information may be handled when
            you use the app or contact us for support.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-950/5"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-500" />
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                      {section.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
            <Lock className="h-7 w-7 text-emerald-300" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Contact
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              For privacy questions, email{" "}
              <a className="text-emerald-300 underline" href={`mailto:${snapflexEmail}`}>
                {snapflexEmail}
              </a>
              .
            </p>
            <Link
              href="/support"
              className="mt-5 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400"
            >
              Visit support
            </Link>
          </div>
        </div>
      </section>
    </SnapFlexShell>
  );
}
