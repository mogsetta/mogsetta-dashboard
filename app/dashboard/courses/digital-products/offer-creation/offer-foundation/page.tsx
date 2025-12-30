"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function OfferFoundationLesson() {
  // Placeholder for future multi-lesson flow
  const nextLessonSlug: string | null = null;

  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const handleComplete = () => {
    setProgress({
      system: "digital-products",
      module: "offer-creation",
      lesson: "offer-foundation",
    });

    setCompleted(true);
  };

  const handleNext = () => {
    router.push(
      nextLessonSlug
        ? `/dashboard/courses/digital-products/offer-creation/${nextLessonSlug}`
        : "/dashboard/courses/digital-products/offer-creation"
    );
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    const aiMessage: ChatMessage = {
      role: "assistant",
      content:
        "Operator response (mock): Focus on validating demand, defining the transformation, and simplifying delivery.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 max-w-6xl">
      {/* Lesson Content */}
      <div className="space-y-10">
        <header className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-muted">
            Digital Products • Lesson
          </span>

          <h1 className="text-4xl font-semibold tracking-tight">
            Offer Foundation
          </h1>

          <p className="text-lg text-muted max-w-2xl">
            Design a digital product offer that people actually want to buy
            before building or launching anything.
          </p>
        </header>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-muted">
            <span className="font-medium text-white">How to use this lesson:</span>
            Read the guidance below, answer the prompts in your own words, then use the Operator to pressure‑test your offer before marking complete.
          </p>
        </div>

        <div className="space-y-7 text-[15px] leading-[1.85]">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-muted">
              <span className="font-medium text-white">Objective:</span> Define a clear outcome, promise, and positioning for your digital product before building anything.
            </p>
          </div>

          <p>
            This lesson focuses on defining the transformation your digital
            product provides. Strong digital products are built around outcomes,
            not content volume.
          </p>

          <p>
            You will learn how to validate demand, define the promise, and reduce
            delivery friction.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-6">
          <button
            onClick={handleComplete}
            className="px-4 py-2 rounded-lg border border-white/15 text-sm text-white/90 hover:bg-white/5 transition"
          >
            {completed ? "Completed ✓" : "Mark as Complete"}
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-red-500/90 text-black text-sm font-medium hover:bg-red-500 transition"
          >
            Back to Module →
          </button>
        </div>
      </div>

      {/* AI Operator */}
      <aside className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 flex flex-col">
        <header className="mb-4">
          <h2 className="text-lg font-medium">AI Operator</h2>
          <p className="text-sm text-muted">
            Context: Digital Products • Offer Creation • Offer Foundation
          </p>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto text-sm">
          {messages.length === 0 && (
            <div className="space-y-3 text-muted">
              <p className="text-sm">Suggested prompts:</p>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>Who is the specific buyer for this offer?</li>
                <li>What transformation am I promising?</li>
                <li>Why would someone buy this now?</li>
                <li>What makes this offer different?</li>
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
              "Define the buyer",
              "Clarify the promise",
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
              className="px-3 py-2 rounded-lg bg-red-500 text-black text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}