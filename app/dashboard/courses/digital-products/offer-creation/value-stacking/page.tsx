

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

export default function ValueStackingLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "digital-products",
      module: "offer-creation",
      lesson: "value-stacking",
    });

    setPhase("complete");
  };

  return (
    <div className="lesson-shell">
      {phase === "lesson" && (
        <>
          <header className="lesson-header">
            <span className="lesson-eyebrow">DIGITAL PRODUCTS · OFFER CREATION</span>
            <h1 className="lesson-title">Value Stacking</h1>
            <p className="lesson-subtitle">
              Learn how to stack perceived value so your offer feels overwhelming in value — without increasing delivery complexity.
            </p>
          </header>

          <section className="lesson-content">
            <h2>What value stacking really is</h2>
            <p>
              Value stacking is the art of increasing perceived value without increasing cost. You are not adding more work — you are clarifying outcomes.
            </p>

            <h2>Core vs supporting value</h2>
            <p>
              Every strong offer has one primary outcome and several supporting components that remove doubt, friction, or risk.
            </p>
            <ul>
              <li>The core result the buyer wants</li>
              <li>Frameworks or tools that make execution easier</li>
              <li>Guidance that reduces uncertainty</li>
            </ul>

            <h2>Avoid fake bonuses</h2>
            <p>
              Bonuses should directly support the core outcome. Irrelevant bonuses reduce trust instead of increasing value.
            </p>

            <h2>Action</h2>
            <p>
              Write out your core outcome, then list three supporting elements that make achieving it faster or more certain.
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
          <p>You’ve stacked value correctly. Ready to continue?</p>

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