"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";
import CoachLayout from "@/components/CoachLayout";

export default function EcommerceChannelSelectionLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "ecommerce",
      module: "offer-engineering",
      lesson: "channel-selection",
    });

    setPhase("complete");
  };

  return (
    <>
      <CoachLayout
        title="Channel Selection"
        system="ecommerce"
        description="Select traffic channels that match offer maturity and buying intent."
        lessonContext={{
          system: "ecommerce",
          module: "offer-engineering",
          lesson: "channel-selection",
        }}
      >
        {phase === "lesson" && (
          <>
            <header className="lesson-header">
              <span className="lesson-eyebrow">
                E‑COMMERCE · OFFER ENGINEERING
              </span>
              <h1 className="lesson-title">Channel Selection</h1>
              <p className="lesson-subtitle">
                Select traffic channels that match your offer maturity and buying
                intent before spending aggressively.
              </p>
            </header>

            <section className="lesson-content">
              <h2>Why channel choice comes after the offer</h2>
              <p>
                In e‑commerce, traffic amplifies whatever exists underneath.
                Without offer clarity, no channel will save you.
              </p>

              <h2>Channel maturity levels</h2>
              <ul>
                <li>Cold traffic (paid social, search)</li>
                <li>Warm traffic (email, retargeting)</li>
                <li>Owned audiences (repeat buyers)</li>
              </ul>

              <h2>Matching channel to signal</h2>
              <p>
                Early offers require fast feedback. Later-stage offers can
                tolerate scale and volatility.
              </p>

              <h2>Action</h2>
              <p>
                Identify the single channel that best matches your current offer
                maturity.
              </p>
            </section>

            <footer className="lesson-actions">
              <button className="primary" onClick={handleComplete}>
                Mark Lesson Complete
              </button>
            </footer>
          </>
        )}
      </CoachLayout>

      {phase === "complete" && (
        <div className="lesson-complete">
          <h2>Lesson complete</h2>
          <p>You’ve aligned your traffic channel with offer readiness.</p>

          <div className="lesson-complete-actions">
            <button
              className="secondary"
              onClick={() =>
                router.push(
                  "/dashboard/courses/ecommerce/offer-engineering"
                )
              }
            >
              Back to Module
            </button>
            <button
              className="primary"
              onClick={() =>
                router.push("/dashboard/courses/ecommerce")
              }
            >
              View Course Progress
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .lesson-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(0, 120, 255, 0.85);
          display: inline-block;
          margin-bottom: 18px;
        }

        .lesson-title {
          font-size: 42px;
          margin-bottom: 18px;
        }

        .lesson-subtitle {
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.8;
          margin-bottom: 56px;
        }

        .lesson-content h2 {
          margin-top: 48px;
          margin-bottom: 12px;
          font-size: 22px;
        }

        .lesson-content p,
        .lesson-content li {
          font-size: 16px;
          line-height: 1.8;
          opacity: 0.85;
        }

        ul {
          padding-left: 18px;
          margin-top: 12px;
        }

        .lesson-actions {
          margin-top: 72px;
        }

        .lesson-complete {
          text-align: center;
          padding-top: 120px;
        }

        .lesson-complete-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 32px;
        }

        .primary {
          background: linear-gradient(135deg, #1f7cff, #0b5ed7);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 22px;
          font-weight: 600;
          cursor: pointer;
        }

        .secondary {
          background: transparent;
          border: 1px solid rgba(0, 120, 255, 0.4);
          color: rgba(0, 120, 255, 0.9);
          border-radius: 14px;
          padding: 14px 22px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
