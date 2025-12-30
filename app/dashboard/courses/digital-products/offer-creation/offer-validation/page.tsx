import React, { useState } from "react";
import CoachLayout from "@/components/CoachLayout";

export default function Page() {
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  return (
    <>
      <CoachLayout
        title="Offer Validation"
        system="digital-products"
        description="Validate demand, messaging, and pricing before scaling or building further."
        lessonContext={{
          system: "digital-products",
          module: "offer-creation",
          lesson: "offer-validation",
        }}
      >
        {phase === "lesson" && (
          <>
            <h1>Offer Validation</h1>
            <p>
              Before you invest in building or scaling your offer, it’s critical to validate demand, messaging, and pricing.
            </p>
            {/* Lesson content here */}
            <button onClick={() => setPhase("complete")}>Mark Complete</button>
          </>
        )}
      </CoachLayout>

      {phase === "complete" && (
        <div className="lesson-complete">
          <h2>Lesson Complete</h2>
          <p>Great job validating your offer! You’re ready to move on to the next step.</p>
        </div>
      )}
    </>
  );
}

// Removed .lesson-shell style block as instructed.
