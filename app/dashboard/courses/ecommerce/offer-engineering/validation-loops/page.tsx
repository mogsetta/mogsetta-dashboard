"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";
import CoachLayout from "@/components/CoachLayout";

export default function EcommerceValidationLoopsLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "ecommerce",
      module: "offer-engineering",
      lesson: "validation-loops",
    });

    setPhase("complete");
  };

  return (
    <>
      <CoachLayout
        title="Validation Loops"
        system="ecommerce"
        description="Validate demand, messaging, and price sensitivity before scaling traffic or inventory."
        lessonContext={{
          system: "ecommerce",
          module: "offer-engineering",
          lesson: "validation-loops",
        }}
      >
        {phase === "lesson" && (
          <>
            <header className="lesson-header">
              <span className="lesson-eyebrow">
                E-COMMERCE · OFFER ENGINEERING
              </span>
              <h1 className="lesson-title">Validation Loops</h1>
              <p className="lesson-subtitle">
                Validate demand, messaging, and price sensitivity before scaling
                traffic or inventory.
              </p>
            </header>

            <section className="lesson-content">
              <h2>Why validation protects margin</h2>
              <p>
                In e-commerce, scaling without validation amplifies losses. Fast
                validation protects cash flow and inventory risk.
              </p>

              <h2>What to validate</h2>
              <ul>
                <li>Problem–offer resonance</li>
                <li>Price elasticity</li>
                <li>Creative-message alignment</li>
              </ul>

              <h2>Fast feedback methods</h2>
              <p>
                Use small ad spends, landing tests, or pre-orders to gather signal
                quickly without committing to scale.
              </p>

              <h2>Action</h2>
              <p>
                Define one low-cost experiment you can run this week to validate
                demand.
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
          <p>You’ve established a repeatable validation loop.</p>

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
