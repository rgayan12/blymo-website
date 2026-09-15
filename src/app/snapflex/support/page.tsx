import Link from "next/link";
import { LifeBuoy, Mail, MessageSquareText } from "lucide-react";
import { SnapFlexShell, snapflexEmail } from "../components";
import SupportForm from "./support-form";

export const metadata = {
  title: "SnapFlex Support",
  description:
    "Support page for SnapFlex, the iOS receipt scanner and expense tracker by BLYMO.",
};

export default function SnapFlexSupportPage() {
  return (
    <SnapFlexShell>
      <section className="relative overflow-hidden bg-[#f7f8fb]">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-50 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:py-20">
          <div className="lg:pt-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
              <LifeBuoy className="h-3.5 w-3.5" />
              SnapFlex support
            </span>
            <h1 className="mt-7 max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Tell us what you need.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Report a bug, suggest a feature, or send us a quick message. Keep
              it simple and we will route it to the right place.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:max-w-md">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <MessageSquareText className="h-5 w-5 text-emerald-500" />
                <span>Choose Bug, Feature Request, or Message.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span>For v1, every request opens a ready-to-send email.</span>
              </div>
            </div>
          </div>

          <SupportForm />

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 lg:col-start-2">
            <h2 className="text-xl font-semibold tracking-tight">
              Contact details
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Email:{" "}
              <a className="font-semibold text-emerald-600 underline" href={`mailto:${snapflexEmail}`}>
                {snapflexEmail}
              </a>
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              Company: BLYMO Ltd, International House, 142 Cromwell Road,
              London, SW7 4EF, United Kingdom.
            </p>
            <Link
              href="/privacy"
              className="mt-5 inline-flex font-semibold text-emerald-600 transition hover:text-emerald-500"
            >
              Read the privacy policy
            </Link>
          </div>
        </div>
      </section>
    </SnapFlexShell>
  );
}
