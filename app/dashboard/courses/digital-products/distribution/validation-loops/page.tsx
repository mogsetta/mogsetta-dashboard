"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

export default function ValidationLoopsLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "digital-products",
      module: "distribution",
      lesson: "validation-loops",
    });

    setPhase("complete");
  };

  return (
    <div className="lesson-shell">
      {phase === "lesson" && (
        <>
          <header className="lesson-header">
            <span className="lesson-eyebrow">
              DIGITAL PRODUCTS · DISTRIBUTION
            </span>
            <h1 className="lesson-title">Validation Loops</h1>
            <p className="lesson-subtitle">
              Validate demand, messaging, and pricing with fast feedback loops
              before scaling traffic.
            </p>
          </header>

          <section className="lesson-content">
            <h2>Why validation comes first</h2>
            <p>
              Scaling without validation amplifies mistakes. Validation loops
              protect capital and clarify signal before commitment.
            </p>

            <h2>What to validate</h2>
            <ul>
              <li>Problem-message resonance</li>
              <li>Offer clarity and pricing tolerance</li>
              <li>Channel responsiveness</li>
            </ul>

            <h2>Designing fast loops</h2>
            <p>
              A good validation loop is cheap, fast, and directional. The goal
              is not perfection — it’s clarity.
            </p>

            <h2>Action</h2>
            <p>
              Define one experiment you can run this week to test demand with
              minimal spend.
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
          <p>You’ve built a repeatable validation process.</p>

          <div className="lesson-complete-actions">
            <button
              className="secondary"
              onClick={() =>
                router.push(
                  "/dashboard/courses/digital-products/distribution"
                )
              }
            >
              Back to Module
            </button>
            <button
              className="primary"
              onClick={() =>
                router.push("/dashboard/courses/digital-products")
              }
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
          color: rgba(220, 70, 70, 0.85);
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
          background: linear-gradient(135deg, #dc4646, #b83838);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 22px;
          font-weight: 600;
          cursor: pointer;
        }

        .secondary {
          background: transparent;
          border: 1px solid rgba(220, 70, 70, 0.4);
          color: rgba(220, 70, 70, 0.9);
          border-radius: 14px;
          padding: 14px 22px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
