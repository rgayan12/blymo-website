import Link from "next/link";
import { ArrowRight, LifeBuoy, SnapFlexShell, snapflexEmail, supportCards } from "../components";

export const metadata = {
  title: "SnapFlex Support",
  description:
    "Support page for SnapFlex, the iOS receipt scanner and expense tracker by BLYMO.",
};

export default function SnapFlexSupportPage() {
  return (
    <SnapFlexShell>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,197,94,0.28),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(4,47,46,0.72))]" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-200">
            <LifeBuoy className="h-3.5 w-3.5" />
            Support
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Need help with SnapFlex?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            For app help, receipt scanning questions, privacy requests, or
            general support, contact the BLYMO team.
          </p>
          <a
            href={`mailto:${snapflexEmail}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
          >
            Email support
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {supportCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-950/5"
                >
                  <Icon className="h-8 w-8 text-emerald-500" />
                  <h2 className="mt-5 text-xl font-semibold tracking-tight">
                    {card.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-emerald-950/5">
            <h2 className="text-2xl font-semibold tracking-tight">
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
