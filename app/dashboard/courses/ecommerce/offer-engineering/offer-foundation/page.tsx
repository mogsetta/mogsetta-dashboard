"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

export default function OfferClarityLesson() {
  const [phase, setPhase] = useState<"intro" | "complete">("intro");
  const router = useRouter();

  const handleComplete = () => {
    setProgress({
      system: "ecommerce",
      module: "offer-engineering",
      lesson: "offer-foundation",
    });

    setPhase("complete");
  };

  const handleNext = () => {
    router.push("/dashboard/courses/ecommerce/offer-engineering");
  };

  return (
    <section className="space-y-8 max-w-4xl">
      <header>
        <h1 className="text-3xl font-semibold">Offer Clarity</h1>
        <p className="text-muted mt-2">
          Define your offer clearly to attract the right clients.
        </p>
      </header>

      {phase === "intro" && (
        <>
          <p>
            This lesson will help you clarify your offer to ensure it resonates
            with your ideal clients.
          </p>

          <button
            onClick={handleComplete}
            className="px-4 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/5 transition"
          >
            Mark as Complete
          </button>
        </>
      )}

      {phase === "complete" && (
        <>
          <p>Lesson completed! You can now proceed to the next step.</p>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-blue-500 text-black text-sm font-medium hover:opacity-90 transition"
          >
            Next Lesson →
          </button>
        </>
      )}
    </section>
  );
}
