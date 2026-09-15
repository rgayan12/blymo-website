import Link from "next/link";
import { CheckCircle2, Crown, SnapFlexShell, snapflexEmail } from "../components";

export const metadata = {
  title: "SnapFlex Terms of Use",
  description: "Terms of Use for SnapFlex, the iOS receipt scanner and expense tracker by BLYMO.",
};

const terms = [
  {
    title: "Use of SnapFlex",
    body: "SnapFlex is designed to help you capture receipts, organise expense records, export data, and use supported accounting integrations. You are responsible for reviewing saved details before relying on them for bookkeeping, tax, or business records.",
  },
  {
    title: "Receipt recognition",
    body: "SnapFlex may extract text such as merchant, date, total, VAT, currency, and category suggestions. Automated recognition can make mistakes, so you should check and edit details before saving or syncing an expense.",
  },
  {
    title: "Cloud backup and integrations",
    body: "Cloud backup and accounting delivery features require an account and network access. Connected accounting services, including Xero, are provided by third parties and may be subject to their own terms.",
  },
  {
    title: "Subscriptions",
    body: "SnapFlex Pro subscriptions are purchased and managed through your Apple ID. Pricing, renewal terms, cancellation, and restore-purchase options are shown in the app and managed by Apple.",
  },
  {
    title: "Account deletion",
    body: "You can request or perform account deletion from inside the app where available. Apple subscriptions are managed separately by Apple and should be cancelled through your Apple ID if needed.",
  },
  {
    title: "Support",
    body: "If something is not working as expected, contact BLYMO support and include enough detail for us to understand the issue.",
  },
];

export default function SnapFlexTermsPage() {
  return (
    <SnapFlexShell>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <Crown className="h-3.5 w-3.5" />
            Terms
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            SnapFlex Terms of Use
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Last updated: 15 September 2026
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These terms explain the basic conditions for using SnapFlex, an iOS
            receipt scanner and expense tracker provided by BLYMO Ltd.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className="grid gap-5">
            {terms.map((term) => (
              <article
                key={term.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-950/5"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-500" />
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                      {term.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">{term.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
            <h2 className="text-2xl font-semibold tracking-tight">
              Questions about these terms?
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Email{" "}
              <a className="text-emerald-300 underline" href={`mailto:${snapflexEmail}`}>
                {snapflexEmail}
              </a>
              .
            </p>
            <Link
              href="/privacy"
              className="mt-5 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-400"
            >
              Read privacy policy
            </Link>
          </div>
        </div>
      </section>
    </SnapFlexShell>
  );
}
