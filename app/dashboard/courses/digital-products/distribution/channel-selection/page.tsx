"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setProgress } from "@/lib/progress";

export default function ChannelSelectionLesson() {
  const router = useRouter();
  const [phase, setPhase] = useState<"lesson" | "complete">("lesson");

  const handleComplete = () => {
    setProgress({
      system: "digital-products",
      module: "distribution",
      lesson: "channel-selection",
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
            <h1 className="lesson-title">Channel Selection</h1>
            <p className="lesson-subtitle">
              Choose the right distribution channels before spending time or
              money so growth is signal-driven, not guesswork.
            </p>
          </header>

          <section className="lesson-content">
            <h2>Why channels matter</h2>
            <p>
              Most failed digital products don’t fail because the offer is bad —
              they fail because the product is shown in the wrong place.
            </p>

            <h2>Audience-first selection</h2>
            <p>
              Choose channels based on where your audience already pays
              attention, not where traffic is cheapest.
            </p>
            <ul>
              <li>Search intent platforms</li>
              <li>Owned attention channels</li>
              <li>Borrowed distribution</li>
            </ul>

            <h2>One channel at a time</h2>
            <p>
              Focus on mastering one channel before expanding. Signal clarity
              beats channel diversification early.
            </p>

            <h2>Action</h2>
            <p>
              Write down the single channel where your ideal buyer is most
              likely to discover your product today.
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
          <p>You’ve selected a clear distribution entry point.</p>

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
