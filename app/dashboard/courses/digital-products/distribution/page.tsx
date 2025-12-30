"use client";

import { useRouter } from "next/navigation";

export default function DistributionModulePage() {
  const router = useRouter();

  return (
    <div className="module-shell">
      <header className="module-hero">
        <span className="module-eyebrow">DIGITAL PRODUCTS · DISTRIBUTION</span>
        <h1 className="module-title">Distribution Systems</h1>
        <p className="module-subtitle">
          Learn how to reliably get your product in front of the right people,
          validate demand, and scale traffic without guesswork.
        </p>
      </header>

      <section className="module-lessons">
        <button
          className="lesson-card"
          onClick={() =>
            router.push(
              "/dashboard/courses/digital-products/distribution/channel-selection"
            )
          }
        >
          <span>01</span>
          <div>
            <h3>Channel Selection</h3>
            <p>Choose the right distribution channels before spending money.</p>
          </div>
        </button>

        <button
          className="lesson-card"
          onClick={() =>
            router.push(
              "/dashboard/courses/digital-products/distribution/validation-loops"
            )
          }
        >
          <span>02</span>
          <div>
            <h3>Validation Loops</h3>
            <p>Test demand and messaging with minimal risk.</p>
          </div>
        </button>

        <button
          className="lesson-card"
          onClick={() =>
            router.push(
              "/dashboard/courses/digital-products/distribution/scaling-traffic"
            )
          }
        >
          <span>03</span>
          <div>
            <h3>Scaling Traffic</h3>
            <p>Increase volume only after signal is proven.</p>
          </div>
        </button>
      </section>

      <style jsx>{`
        .module-shell {
          max-width: 1100px;
          margin: 0 auto;
          padding: 56px 24px 160px;
        }

        .module-eyebrow {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(220, 70, 70, 0.85);
          display: inline-block;
          margin-bottom: 18px;
        }

        .module-title {
          font-size: 44px;
          margin-bottom: 18px;
        }

        .module-subtitle {
          max-width: 720px;
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.8;
        }

        .module-lessons {
          display: grid;
          gap: 22px;
          margin-top: 72px;
        }

        .lesson-card {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 26px;
          background: linear-gradient(180deg, #0b0c10, #050506);
          border: 1px solid rgba(220, 70, 70, 0.25);
          border-radius: 22px;
          cursor: pointer;
          text-align: left;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .lesson-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
        }

        .lesson-card span {
          font-size: 12px;
          letter-spacing: 0.22em;
          color: rgba(220, 70, 70, 0.85);
          margin-top: 4px;
        }

        .lesson-card h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }

        .lesson-card p {
          font-size: 15px;
          opacity: 0.75;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
