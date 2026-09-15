import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  PhoneMockup,
  PlugZap,
  RefreshCw,
  SnapFlexShell,
  Sparkles,
  featureCards,
  proFeatures,
  workflowSteps,
} from "./components";

export const metadata = {
  title: "SnapFlex - Receipt Scanner & Expense Tracker",
  description:
    "SnapFlex is a simple expense tracker for snapping receipts, reviewing deductions, and keeping records organised.",
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
                Expense tracker
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Snap receipts. Keep records. Stay ready.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                SnapFlex turns paper receipts into organised expense records in
                seconds. Capture a receipt, check the details, and keep your
                paperwork ready for bookkeeping, tax time, and connected
                accounting workflows.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
                >
                  Download on the App Store
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

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                Built for the working day
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Helpful for busy people and useful for their accountants.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you are filling up the van, buying materials, meeting a
                client, or paying for business supplies, SnapFlex helps you save
                the record while it is still fresh. Your accountant gets cleaner
                exports. You get fewer lost receipts.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-950/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight">
                    {step.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                Less typing. Fewer missing receipts.
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Everything you need to turn receipts into usable records.
              </h2>
            </div>
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

        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-emerald-950/20">
              <PlugZap className="h-10 w-10 text-emerald-300" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Connect SnapFlex to Xero.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                SnapFlex Pro can send completed expenses directly to your chosen
                Xero organisation. Choose draft bills for review, or approved
                bills for trusted repeat workflows.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
              <div className="grid gap-4">
                {[
                  "Create or match the supplier",
                  "Create the bill and check totals",
                  "Attach the original receipt image",
                  "Continue sync through the SnapFlex backend",
                  "Disconnect your Xero organisation whenever you want",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                    <p className="font-medium text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-100 p-7 shadow-xl shadow-emerald-950/5">
              <RefreshCw className="h-9 w-9 text-emerald-500" />
              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                Know what happened to every expense.
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                SnapFlex tracks each accounting delivery so you can see whether
                an expense is waiting, processing, synced, or needs attention.
                Duplicate protection helps prevent repeated sync attempts from
                creating the same bill twice.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 p-7 shadow-xl shadow-emerald-950/5">
              <Crown className="h-9 w-9 text-emerald-500" />
              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                SnapFlex Pro
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Upgrade to unlock connected accounting features, including
                automatic Xero delivery. Pricing is displayed in the app before
                purchase and subscriptions are managed securely through your
                Apple ID.
              </p>
              <div className="mt-5 grid gap-3">
                {proFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Snap it now. Sort it once.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Receipts rarely arrive when you are sitting behind a desk.
              SnapFlex gives you a quick way to capture them wherever work
              happens, then turns them into records your business can actually
              use.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Read our Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Read our Terms of Use
              </Link>
            </div>
          </div>
        </section>
      </>
    </SnapFlexShell>
  );
}
