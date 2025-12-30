

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

export default function AudienceDefinitionLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "service-systems",
      module: "client-acquisition",
      lesson: "audience-definition",
    });

    setPhase("complete");
  };

  return (
    <div className="lesson-shell">
      {phase === "lesson" && (
        <>
          <header className="lesson-header">
            <span className="lesson-eyebrow">
              SERVICE SYSTEMS · CLIENT ACQUISITION
            </span>
            <h1 className="lesson-title">Audience Definition</h1>
            <p className="lesson-subtitle">
              Define who your service is for with precision so acquisition,
              messaging, and delivery stay aligned as you scale.
            </p>
          </header>

          <section className="lesson-content">
            <h2>Why vague audiences fail</h2>
            <p>
              Most service businesses struggle because they try to serve
              everyone. Clarity in audience definition creates leverage in
              messaging, pricing, and acquisition.
            </p>

            <h2>Jobs, pains, and triggers</h2>
            <p>
              Your audience should be defined by what they are actively trying
              to solve, not demographic labels alone.
            </p>
            <ul>
              <li>The job they want done</li>
              <li>The pain of not solving it</li>
              <li>The moment that pushes them to act</li>
            </ul>

            <h2>Exclude to grow</h2>
            <p>
              Strong positioning requires exclusion. Defining who your service
              is NOT for increases trust and conversion.
            </p>

            <h2>Action</h2>
            <p>
              Write one sentence that clearly states who your service is for and
              what problem it solves better than alternatives.
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
          <p>You’ve defined a clear, actionable audience.</p>

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
        .lesson-shell {
          max-width: 880px;
          margin: 0 auto;
          padding: 56px 24px 160px;
        }

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
    </div>
  );
}