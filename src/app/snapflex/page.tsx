import Link from "next/link";
import {
  ArrowRight,
  PhoneMockup,
  SnapFlexShell,
  Sparkles,
  featureCards,
} from "./components";

export const metadata = {
  title: "SnapFlex - Receipt Scanner & Expense Tracker",
  description:
    "SnapFlex is a simple iOS expense tracker for snapping receipts, reviewing deductions, and keeping records organised.",
};

export default function SnapFlexPage() {
  return (
    <SnapFlexShell>
      <>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,197,94,0.22),transparent_34%),radial-gradient(circle_at_84%_20%,rgba(14,165,233,0.12),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                iOS expense tracker
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Snap receipts. Review spend. Keep deductions tidy.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                SnapFlex helps you capture receipts, organise expenses by
                category, and keep a clear archive for day-to-day business
                records.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
                >
                  Get support
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Privacy policy
                </Link>
              </div>
            </div>
            <PhoneMockup />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {featureCards.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-950/5"
                  >
                    <Icon className="h-8 w-8 text-emerald-500" />
                    <h2 className="mt-5 text-xl font-semibold tracking-tight">
                      {feature.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    </SnapFlexShell>
  );
}
