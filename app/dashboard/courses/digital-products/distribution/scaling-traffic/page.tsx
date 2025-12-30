"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";
import CoachLayout from "@/components/CoachLayout";

export default function ScalingTrafficLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "digital-products",
      module: "distribution",
      lesson: "scaling-traffic",
    });

    setPhase("complete");
  };

  return (
    <>
      <CoachLayout
        title="Scaling Traffic"
        system="digital-products"
        description="Scale traffic only after signal is proven, systems are stable, and economics make sense."
        lessonContext={{
          system: "digital-products",
          module: "distribution",
          lesson: "scaling-traffic",
        }}
      >
        {phase === "lesson" && (
          <>
            <header className="lesson-header">
              <span className="lesson-eyebrow">
                DIGITAL PRODUCTS · DISTRIBUTION
              </span>
              <h1 className="lesson-title">Scaling Traffic</h1>
              <p className="lesson-subtitle">
                Scale traffic only after signal is proven, systems are stable, and
                economics make sense.
              </p>
            </header>

            <section className="lesson-content">
              <h2>When scaling breaks businesses</h2>
              <p>
                Most products fail at scale because they scale too early. Volume
                amplifies both wins and losses.
              </p>

              <h2>Signals required before scaling</h2>
              <ul>
                <li>Consistent conversion rates</li>
                <li>Stable acquisition costs</li>
                <li>Positive unit economics</li>
              </ul>

              <h2>Controlled expansion</h2>
              <p>
                Scaling should be incremental. Increase spend in steps, monitor
                performance, and pull back at the first sign of degradation.
              </p>

              <h2>Action</h2>
              <p>
                Identify one metric you will monitor closely before increasing
                traffic spend.
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
          <p>You’re ready to scale traffic responsibly.</p>

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
    </>
  );
}
