"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Phase = "read" | "apply" | "complete";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function OfferEngineeringLesson() {
  const [phase, setPhase] = useState<Phase>("read");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleComplete = () => {
    const key = "ecommerce_completed_lessons";
    const stored = JSON.parse(localStorage.getItem(key) || "[]") as string[];

    if (!stored.includes("offer-engineering")) {
      stored.push("offer-engineering");
      localStorage.setItem(key, JSON.stringify(stored));
    }

    setPhase("complete");
  };

  const handleNext = () => {
    router.push("/dashboard/courses/ecommerce/offer-engineering");
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
            E-commerce • Offer Engineering
          </span>

          <h1 className="text-4xl font-semibold">
            Offer Engineering
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
                ? "border-blue-400 text-blue-400"
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
                className="px-4 py-2 rounded-lg bg-blue-500 text-black text-sm font-medium hover:opacity-90 transition"
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
            <p className="text-muted">
              Ask questions about positioning, clarity, or service offers.
            </p>
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

        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask the operator…"
            className="flex-1 rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none"
          />

          <button
            onClick={handleSend}
            className="px-3 py-2 rounded-lg bg-blue-500 text-black text-sm font-medium"
          >
            Send
          </button>
        </div>
      </aside>
    </section>
  );
} 