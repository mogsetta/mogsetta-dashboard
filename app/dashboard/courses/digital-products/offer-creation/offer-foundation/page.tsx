"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function OfferFoundationLesson() {
  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const handleComplete = () => {
    const key = "digital_completed_lessons";
    const stored = JSON.parse(localStorage.getItem(key) || "[]") as string[];

    if (!stored.includes("offer-foundation")) {
      stored.push("offer-foundation");
      localStorage.setItem(key, JSON.stringify(stored));
    }

    setCompleted(true);
  };

  const handleNext = () => {
    router.push("/dashboard/courses/digital-products/offer-creation");
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

          <h1 className="text-4xl font-semibold">Offer Creation</h1>

          <p className="text-lg text-muted max-w-2xl">
            Design a digital product offer that people actually want to buy
            before building or launching anything.
          </p>
        </header>

        <div className="space-y-6 text-base leading-relaxed">
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
            className="px-4 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/5 transition"
          >
            {completed ? "Completed ✓" : "Mark as Complete"}
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-red-500 text-black text-sm font-medium hover:opacity-90 transition"
          >
            Back to Module →
          </button>
        </div>
      </div>

      {/* AI Operator */}
      <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col">
        <header className="mb-4">
          <h2 className="text-lg font-medium">AI Operator</h2>
          <p className="text-sm text-muted">
            Context: Digital Products • Offer Creation • Offer Foundation
          </p>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto text-sm">
          {messages.length === 0 && (
            <p className="text-muted">
              Ask questions about demand validation, pricing, or positioning.
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
            className="px-3 py-2 rounded-lg bg-red-500 text-black text-sm font-medium"
          >
            Send
          </button>
        </div>
      </aside>
    </section>
  );
}