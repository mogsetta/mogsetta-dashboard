"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";
import { getResumePath } from "@/lib/progress";

/*
  OFFER CLARITY LESSON PAGE
  Part of Service Systems Course
  Purpose: Teach clear offer definition to reduce scope creep
*/

export default function OfferClarityLessonPage() {
  const router = useRouter();
  const [completed, setCompleted] = useState(false);
  const [phase, setPhase] = useState("start");

  const handleStart = () => {
    router.push("/dashboard/courses/service-systems/client-acquisition");
  };

  const handleResume = () => {
    const resumePath = getResumePath(
      "service-systems",
      "client-acquisition"
    );

    router.push(
      resumePath ?? "/dashboard/courses/service-systems/client-acquisition"
    );
  };

  const handleComplete = () => {
    setProgress({
      system: "service-systems",
      module: "client-acquisition",
      lesson: "offer-clarity",
    });

    setPhase("complete");
  };

  return (
    <div className="lesson-page">
      <h2>Offer Clarity</h2>
      <p>Define clear outcomes, scope boundaries, and pricing logic before delivery begins.</p>

      <button onClick={handleComplete} disabled={phase === "complete"}>
        {phase === "complete" ? "Completed" : "Mark as Complete"}
      </button>

      <style jsx>{`
        .lesson-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        h2 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        button {
          margin-top: 30px;
          padding: 12px 24px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          background-color: #7c6cff;
          color: white;
          cursor: pointer;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}