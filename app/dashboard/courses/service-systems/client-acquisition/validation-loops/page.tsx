"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";
import CoachLayout from "@/components/CoachLayout";

export default function ValidationLoopsServiceLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "service-systems",
      module: "client-acquisition",
      lesson: "validation-loops",
    });

    setPhase("complete");
  };

  return (
    <>
      <CoachLayout
        title="Validation Loops"
        system="service-systems"
        description="Test demand, messaging, and outreach quickly before scaling acquisition."
        lessonContext={{
          system: "service-systems",
          module: "client-acquisition",
          lesson: "validation-loops",
        }}
      >
        {phase === "lesson" && (
          <>
            <header className="lesson-header">
              <span className="lesson-eyebrow">
                SERVICE SYSTEMS · CLIENT ACQUISITION
              </span>
              <h1 className="lesson-title">Validation Loops</h1>
              <p className="lesson-subtitle">
                Test demand, messaging, and outreach quickly so you don’t scale a
                broken acquisition system.
              </p>
            </header>

            <section className="lesson-content">
              <h2>Why validation matters for services</h2>
              <p>
                In services, reputation compounds. Validating messaging and
                targeting early prevents wasted outreach and damaged trust.
              </p>

              <h2>What to validate</h2>
              <ul>
                <li>Problem clarity</li>
                <li>Offer resonance</li>
                <li>Response quality, not volume</li>
              </ul>

              <h2>Designing small tests</h2>
              <p>
                Strong validation loops are small, fast, and directional. You’re
                looking for signal — not scale.
              </p>

              <h2>Action</h2>
              <p>
                Define one small outreach or messaging test you can run this week
                to validate demand.
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
          <p>You’ve built a fast feedback loop for acquisition.</p>

          <div className="lesson-complete-actions">
            <button
              className="secondary"
              onClick={() =>
                router.push(
                  "/dashboard/courses/service-systems/client-acquisition"
                )
              }
            >
              Back to Module
            </button>
            <button
              className="primary"
              onClick={() =>
                router.push("/dashboard/courses/service-systems")
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
          color: rgba(170, 120, 255, 0.85);
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
          background: linear-gradient(135deg, #7a5cff, #5a3fe0);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 22px;
          font-weight: 600;
          cursor: pointer;
        }

        .secondary {
          background: transparent;
          border: 1px solid rgba(170, 120, 255, 0.4);
          color: rgba(170, 120, 255, 0.9);
          border-radius: 14px;
          padding: 14px 22px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
