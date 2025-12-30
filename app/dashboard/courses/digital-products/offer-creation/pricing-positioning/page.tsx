"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";
import CoachLayout from "@/components/CoachLayout";

export default function PricingPositioningLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "digital-products",
      module: "offer-creation",
      lesson: "pricing-positioning",
    });

    setPhase("complete");
  };

  return (
    <>
      <CoachLayout
        title="Pricing & Positioning"
        system="digital-products"
        description="Anchor value and frame price so your offer feels obvious, not expensive."
        lessonContext={{
          system: "digital-products",
          module: "offer-creation",
          lesson: "pricing-positioning",
        }}
      >
        {phase === "lesson" && (
          <>
            <header className="lesson-header">
              <span className="lesson-eyebrow">DIGITAL PRODUCTS · OFFER CREATION</span>
              <h1 className="lesson-title">Pricing & Positioning</h1>
              <p className="lesson-subtitle">
                Learn how to anchor value, frame price, and position your offer so it feels obvious — not expensive.
              </p>
            </header>

            <section className="lesson-content">
              <h2>Why pricing is perception</h2>
              <p>
                Pricing is not math — it’s messaging. The same offer can feel cheap or premium depending on how it’s framed.
              </p>

              <h2>Position before price</h2>
              <p>
                Your price only makes sense once the buyer understands:
              </p>
              <ul>
                <li>Who the offer is for</li>
                <li>What problem it eliminates</li>
                <li>What alternative paths cost them</li>
              </ul>

              <h2>Anchoring correctly</h2>
              <p>
                Always anchor against a larger cost: time, complexity, failure, or lost opportunity — never against other creators.
              </p>

              <h2>Action</h2>
              <p>
                Write one sentence that explains why your offer is cheaper than the alternative it replaces.
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
          <p>You’ve locked in pricing fundamentals. Ready to continue?</p>

          <div className="lesson-complete-actions">
            <button
              className="secondary"
              onClick={() => router.push("/dashboard/courses/digital-products/offer-creation")}
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
    </>
  );
}
