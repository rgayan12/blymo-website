"use client";

import { useMemo, useState } from "react";
import { Bug, Lightbulb, MessageSquare, Send } from "lucide-react";
import { snapflexEmail } from "../components";

const requestTypes = [
  {
    label: "Bug",
    description: "Something is broken or not behaving as expected.",
    icon: Bug,
  },
  {
    label: "Feature Request",
    description: "An idea that would make SnapFlex more useful.",
    icon: Lightbulb,
  },
  {
    label: "Message",
    description: "Send us a general note or question.",
    icon: MessageSquare,
  },
] as const;

type RequestType = (typeof requestTypes)[number]["label"];

export default function SupportForm() {
  const [requestType, setRequestType] = useState<RequestType>("Message");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const emailUrl = useMemo(() => {
    const subjectLine = [
      "SnapFlex support",
      requestType,
      subject.trim(),
    ]
      .filter(Boolean)
      .join(" - ");

    const body = [
      `Type: ${requestType}`,
      subject.trim() ? `Subject: ${subject.trim()}` : "",
      "",
      "Message:",
      message.trim(),
      "",
      "--",
      "Sent from the SnapFlex support page.",
    ]
      .filter((line, index, lines) => line || lines[index - 1] !== "")
      .join("\n");

    return `mailto:${snapflexEmail}?subject=${encodeURIComponent(
      subjectLine,
    )}&body=${encodeURIComponent(body)}`;
  }, [message, requestType, subject]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      setError("Add a short message first.");
      return;
    }

    setError("");
    window.location.href = emailUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/5 sm:p-7"
    >
      <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
        <span>SnapFlex</span>
        <span className="text-slate-300">/</span>
        <span>Support</span>
      </div>

      <div className="mt-7">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Request type
        </p>
        <div className="mt-3 grid gap-3">
          {requestTypes.map((type) => {
            const Icon = type.icon;
            const isActive = requestType === type.label;

            return (
              <button
                key={type.label}
                type="button"
                onClick={() => setRequestType(type.label)}
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? "border-emerald-300 bg-emerald-50 text-slate-950 shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isActive
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold">{type.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">
                    {type.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <label className="mt-7 block">
        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Subject
        </span>
        <input
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Short summary"
          className="mt-3 w-full border-0 border-b border-slate-200 bg-transparent px-0 py-3 text-xl font-semibold text-slate-950 outline-none transition placeholder:text-slate-300 focus:border-emerald-400"
        />
      </label>

      <label className="mt-7 block">
        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Message
        </span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write the details here. For bugs, include what happened and what you expected."
          rows={8}
          className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 leading-7 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-100"
        />
      </label>

      {error ? <p className="mt-3 text-sm font-medium text-red-500">{error}</p> : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500">
          For v1 this opens an email draft. We can plug in SMTP later.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-emerald-600"
        >
          Send message
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
