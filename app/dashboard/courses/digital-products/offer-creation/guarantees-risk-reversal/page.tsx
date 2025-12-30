"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

export default function GuaranteesRiskReversalLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "digital-products",
      module: "offer-creation",
      lesson: "guarantees-risk-reversal",
    });

    setPhase("complete");
  };

  return (
    <div className="lesson-shell">
      {phase === "lesson" && (
        <>
          <header className="lesson-header">
            <span className="lesson-eyebrow">DIGITAL PRODUCTS · OFFER CREATION</span>
            <h1 className="lesson-title">Guarantees & Risk Reversal</h1>
            <p className="lesson-subtitle">
              Remove fear, reduce hesitation, and shift risk away from the buyer
              without exposing yourself to real downside.
            </p>
          </header>

          <section className="lesson-content">
            <h2>Why people hesitate</h2>
            <p>
              Most buyers don’t doubt the value — they doubt the risk. Guarantees
              exist to neutralize uncertainty at the decision point.
            </p>

            <h2>Strong vs weak guarantees</h2>
            <p>
              Weak guarantees are vague. Strong guarantees are specific,
              time-bound, and outcome-focused.
            </p>
            <ul>
              <li>Clear timeframe</li>
              <li>Defined outcome</li>
              <li>Simple execution</li>
            </ul>

            <h2>Risk reversal psychology</h2>
            <p>
              When the seller takes on risk, the buyer perceives confidence.
              Confidence increases conversion.
            </p>

            <h2>Action</h2>
            <p>
              Write one guarantee that removes the biggest fear your buyer has
              before purchasing.
            </p>
          </section>

          <footer className="lesson-actions">
            <button className="primary" onClick={handleComplete}>
              Mark Lesson Complete
            </button>
          </footer>
        </>
      )}

      {phase === "complete" && (
        <div className="lesson-complete">
          <h2>Lesson complete</h2>
          <p>You’ve reduced buyer risk and increased trust.</p>

          <div className="lesson-complete-actions">
            <button
              className="secondary"
              onClick={() =>
                router.push("/dashboard/courses/digital-products/offer-creation")
              }
            >
              Back to Module
            </button>
            <button
              className="primary"
              onClick={() => router.push("/dashboard/courses/digital-products")}
            >
              View Course Progress
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .lesson-shell {
          max-width: 880px;
          margin: 0 auto;
          padding: 56px 24px 160px;
        }

        .lesson-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(220, 80, 80, 0.85);
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
          background: linear-gradient(135deg, #c43d3d, #8f2626);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 22px;
          font-weight: 600;
          cursor: pointer;
        }

        .secondary {
          background: transparent;
          border: 1px solid rgba(220, 80, 80, 0.4);
          color: rgba(220, 80, 80, 0.9);
          border-radius: 14px;
          padding: 14px 22px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
