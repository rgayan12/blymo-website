import { cookies } from "next/headers";
import Image from "next/image";
import { unlockProposal } from "./actions";
import { PROPOSAL_COOKIE, proposalSessionToken } from "./auth";
import ProposalExperience from "./proposal-experience";

export const dynamic = "force-dynamic";

function AccessGate({ invalid }: { invalid: boolean }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0a] text-[#f4f0e7] [font-family:var(--font-proposal-body)]">
      <div className="grid min-h-screen lg:grid-cols-[0.92fr_1.08fr]">
        <section className="relative z-10 flex flex-col justify-between px-6 py-8 sm:px-12 sm:py-12 lg:px-16">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c3a464]">
            BLYMO · Confidential
          </div>

          <div className="my-20 max-w-xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#c3a464]">
              Private Collection Platform
            </p>
            <h1 className="max-w-lg text-5xl font-light uppercase leading-[1.02] tracking-[-0.02em] text-[#f4f0e7] sm:text-6xl lg:text-7xl [font-family:var(--font-proposal-display)]">
              Enter the private room.
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-stone-400">
              This proposal has been prepared exclusively for its intended
              recipient. Enter the supplied password to continue.
            </p>

            <form action={unlockProposal} className="mt-10 max-w-md">
              <label
                htmlFor="proposal-password"
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-stone-400"
              >
                Proposal password
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="proposal-password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="min-h-12 flex-1 border border-white/20 bg-white/[0.04] px-4 text-base text-white outline-none transition placeholder:text-stone-600 focus:border-[#c3a464] focus:ring-1 focus:ring-[#c3a464]"
                  placeholder="Enter password"
                />
                <button
                  type="submit"
                  className="min-h-12 bg-[#c3a464] px-7 text-sm font-bold uppercase tracking-[0.16em] text-[#0b0b0a] transition hover:bg-[#d6bb7e] focus:outline-none focus:ring-2 focus:ring-[#f4f0e7] focus:ring-offset-2 focus:ring-offset-[#0b0b0a]"
                >
                  View proposal
                </button>
              </div>
              {invalid && (
                <p role="alert" className="mt-4 text-sm text-red-300">
                  That password was not recognised. Please check it and try
                  again.
                </p>
              )}
            </form>
          </div>

          <p className="text-xs leading-5 text-stone-600">
            Private and commercially confidential · Access expires after seven
            days
          </p>
        </section>

        <div className="relative hidden min-h-screen lg:block">
          <Image
            src="/proposals/private-collection/hero.webp"
            alt="A prominent emerald with fine jewellery on black velvet"
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0a] via-transparent to-transparent" />
        </div>
      </div>
    </main>
  );
}

export default function PrivateCollectionProposal({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  const expectedToken = proposalSessionToken();
  const suppliedToken = cookies().get(PROPOSAL_COOKIE)?.value;
  const hasAccess = Boolean(
    expectedToken && suppliedToken && suppliedToken === expectedToken
  );

  if (!hasAccess) {
    return <AccessGate invalid={searchParams?.error === "invalid"} />;
  }

  return <ProposalExperience />;
}
