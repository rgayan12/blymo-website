import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  LifeBuoy,
  Lock,
  Mail,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const snapflexEmail = "support@blymo.co.uk";

export function SnapFlexHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/25">
            <ReceiptText className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-slate-950">
            SnapFlex
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link className="transition hover:text-emerald-600" href="/privacy">
            Privacy
          </Link>
          <Link className="transition hover:text-emerald-600" href="/support">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SnapFlexFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} BLYMO Ltd. SnapFlex is a BLYMO product.</p>
        <div className="flex gap-5">
          <Link className="transition hover:text-emerald-600" href="/privacy">
            Privacy
          </Link>
          <Link className="transition hover:text-emerald-600" href="/support">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function SnapFlexShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-950">
      <SnapFlexHeader />
      {children}
      <SnapFlexFooter />
    </div>
  );
}

export function PhoneMockup() {
  const rows = [
    { label: "Meals", amount: "£9.12", color: "bg-emerald-400" },
    { label: "Travel", amount: "£9.12", color: "bg-blue-500" },
  ];

  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[2.5rem] border border-white/70 bg-slate-100 p-4 shadow-2xl shadow-emerald-950/20">
      <div className="rounded-[2rem] bg-[#f7f8fb] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-slate-200">SnapFlex</p>
            <p className="mt-1 text-sm font-semibold text-slate-400">
              Camera, OCR, review, ka-ching.
            </p>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-500 shadow-sm">
            <Camera className="h-6 w-6" />
          </span>
        </div>

        <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-5 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25">
          <Camera className="h-5 w-5" />
          Snap Receipt
        </button>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["Logged", "2"],
            ["Deductions", "£18.24"],
            ["Synced", "0"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-2 text-xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-2xl font-bold">Summary</p>
              <p className="text-sm text-slate-400">Your deductions by category.</p>
            </div>
            <BarChart3 className="h-7 w-7 text-emerald-500" />
          </div>
          <div className="mt-5 space-y-4">
            {rows.map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-sm font-semibold">
                  <span>{row.label}</span>
                  <span>{row.amount}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className={`h-2 rounded-full ${row.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const featureCards = [
  {
    title: "Snap receipts fast",
    description: "Capture paper receipts and turn them into clean expense records.",
    icon: Camera,
  },
  {
    title: "Review deductions",
    description: "Keep an eye on categories, totals, and records before filing.",
    icon: BarChart3,
  },
  {
    title: "Built for privacy",
    description: "Clear app support and privacy pages for App Store review.",
    icon: ShieldCheck,
  },
];

export const supportCards = [
  {
    title: "Email support",
    description: "Send us your question and we will get back to you as soon as possible.",
    icon: Mail,
  },
  {
    title: "App help",
    description: "Need help scanning, reviewing, or managing receipts? We can guide you.",
    icon: LifeBuoy,
  },
  {
    title: "Data questions",
    description: "For privacy or account data questions, contact BLYMO directly.",
    icon: Lock,
  },
];

export { ArrowRight, CheckCircle2, LifeBuoy, Lock, ShieldCheck, Sparkles };
