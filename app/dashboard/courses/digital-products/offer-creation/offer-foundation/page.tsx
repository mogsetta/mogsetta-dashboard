"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";
import CoachChat from "@/components/CoachChat";

export default function OfferFoundationLesson() {
  // Placeholder for future multi-lesson flow
  const nextLessonSlug: string | null = null;

  const router = useRouter();
  const [completed, setCompleted] = useState(false);

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

      <CoachChat
        coachId="digital-products"
        title="AI Operator"
        description="Pressure-test your offer and validate demand in real time."
        lessonContext={{
          system: "digital-products",
          module: "offer-creation",
          lesson: "offer-foundation",
        }}
      />
    </section>
  );
}