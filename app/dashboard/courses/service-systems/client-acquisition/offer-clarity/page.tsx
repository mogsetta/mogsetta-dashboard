"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

type Phase = "read" | "apply" | "complete";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function OfferClarityLesson() {
  // Placeholder for future multi-lesson flow
  const nextLessonSlug: string | null = null;
  const [phase, setPhase] = useState<Phase>("read");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleComplete = () => {
    setPhase("complete");
  };

  const handleNext = () => {
    router.push(
      nextLessonSlug
        ? `/dashboard/courses/service-systems/client-acquisition/${nextLessonSlug}`
        : "/dashboard/courses/service-systems/client-acquisition"
    );
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    const aiMessage: ChatMessage = {
      role: "assistant",
      content:
        "Operator response (mock): Clarify who the service is for, the core pain, and the measurable outcome.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 max-w-6xl">
      <div className="space-y-10">
        {/* Lesson Header */}
        <header className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-muted">
            Service Systems • Client Acquisition
          </span>

          <h1 className="text-4xl font-semibold">
            Offer Clarity
          </h1>

          <p className="text-lg text-muted max-w-2xl">
            Define a clear, compelling service offer that instantly communicates value
            and converts the right clients.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <span className={`px-3 py-1 rounded-full text-xs border ${
              phase === "read"
                ? "border-white/30 text-white"
                : "border-white/10 text-muted"
            }`}>
              Read
            </span>
            <span className={`px-3 py-1 rounded-full text-xs border ${
              phase === "apply"
                ? "border-gold text-gold"
                : "border-white/10 text-muted"
            }`}>
              Apply
            </span>
            <span className={`px-3 py-1 rounded-full text-xs border ${
              phase === "complete"
                ? "border-green-400 text-green-400"
                : "border-white/10 text-muted"
            }`}>
              Complete
            </span>
          </div>
        </header>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-muted">
            <span className="font-medium text-white">How to use this lesson:</span>
            Read the guidance below, define your service offer in your own words, then use the Operator to pressure-test clarity before marking complete.
          </p>
        </div>

        {/* Core Lesson Content */}
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-medium">
              Why Offer Clarity Matters
            </h2>

            <p className="text-muted leading-relaxed">
              Most service businesses struggle not because of lack of skill, but because
              their offer is vague. If a prospect cannot immediately understand who you
              help, what problem you solve, and the outcome you deliver — conversion drops.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium">
              The 3-Part High-Converting Offer
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-muted">
              <li>
                <strong className="text-white">Target Client:</strong> Who this service is
                specifically for.
              </li>
              <li>
                <strong className="text-white">Core Problem:</strong> The painful issue they
                actively want solved.
              </li>
              <li>
                <strong className="text-white">Outcome:</strong> The tangible result they
                get after working with you.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium">
              Example
            </h2>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-muted">
              “We help <strong className="text-white">local service businesses</strong> get
              <strong className="text-white"> 10–20 booked calls per month</strong> using a
              <strong className="text-white"> simple outbound acquisition system</strong> —
              without ads.”
            </div>
          </section>
        </div>

        {/* Action Section */}
        <footer className="flex items-center justify-between pt-6 border-t border-white/10">
          <span className="text-sm text-muted">
            Apply this framework before moving forward.
          </span>

          <div className="flex gap-3">
            {phase === "read" && (
              <button
                onClick={() => setPhase("apply")}
                className="px-4 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/5 transition"
              >
                Apply with Operator →
              </button>
            )}

            {phase === "apply" && (
              <button
                onClick={handleComplete}
                className="px-4 py-2 rounded-lg bg-gold text-black text-sm font-medium hover:opacity-90 transition"
              >
                Mark Complete
              </button>
            )}

            {phase === "complete" && (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium"
              >
                Back to Module →
              </button>
            )}
          </div>
        </footer>
      </div>

      <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col">
        <header className="mb-4">
          <h2 className="text-lg font-medium">AI Operator</h2>
          <p className="text-sm text-muted">
            Use the operator to pressure-test and refine your offer before moving on.
          </p>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto text-sm">
          {messages.length === 0 && (
            <div className="space-y-3 text-muted">
              <p className="text-sm">Suggested prompts:</p>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>Who is the exact client for this service?</li>
                <li>What problem are they actively trying to solve?</li>
                <li>What outcome do they get after working with me?</li>
                <li>Why should they choose this service over alternatives?</li>
              </ul>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={
                m.role === "user"
                  ? "text-right text-white"
                  : "text-left text-muted"
              }
            >
              <p>{m.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {[
              "Define the client",
              "Clarify the outcome",
              "Pressure-test differentiation",
            ].map((label) => (
              <button
                key={label}
                onClick={() => setInput(label)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs hover:bg-white/[0.08] transition"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the operator…"
              className="flex-1 rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none"
            />

            <button
              onClick={handleSend}
              className="px-3 py-2 rounded-lg bg-gold text-black text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}