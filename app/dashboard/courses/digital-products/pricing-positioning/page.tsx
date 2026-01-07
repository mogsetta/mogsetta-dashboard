"use client";

import Link from "next/link";

export default function PricingPositioningModulePage() {
  const startPath =
    "/dashboard/courses/digital-products/pricing-positioning/pricing-basics";

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", paddingBottom: 140 }}>
      <header style={{ marginBottom: 44 }}>
        <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 10 }}>
          Digital Products · Module
        </div>

        <h1 style={{ fontSize: 34, marginBottom: 12 }}>Pricing &amp; Positioning</h1>

        <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, maxWidth: 860 }}>
          Lock in pricing and positioning so your offer feels obvious, credible,
          and worth paying for. This module focuses on monetization and perception — how price anchors value and positions your offer in the buyer’s mind.
        </p>

        <div style={{ display: "flex", gap: 14, marginTop: 18 }}>
          <Link href={startPath} className="primary-btn">
            Start Module
          </Link>

          <Link href="/dashboard/courses/digital-products" className="secondary-btn">
            Back to Course
          </Link>
        </div>
      </header>

      <section>
        <h2 style={{ fontSize: 20, marginBottom: 14 }}>Lessons</h2>

        <div style={{ display: "grid", gap: 14 }}>
          <Link
            href="/dashboard/courses/digital-products/pricing-positioning/pricing-basics"
            className="lesson-card"
          >
            <div style={{ opacity: 0.65, fontSize: 12, letterSpacing: "0.16em" }}>
              LESSON 01
            </div>
            <div style={{ fontSize: 18, fontWeight: 650, marginTop: 6 }}>
              Pricing Basics
            </div>
            <div style={{ opacity: 0.75, marginTop: 8, lineHeight: 1.6 }}>
              Understand what you are actually pricing, why buyers pay, and how price signals seriousness and outcome level.
            </div>
          </Link>

          <Link
            href="/dashboard/courses/digital-products/pricing-positioning/value-framing"
            className="lesson-card"
          >
            <div style={{ opacity: 0.65, fontSize: 12, letterSpacing: "0.16em" }}>
              LESSON 02
            </div>
            <div style={{ fontSize: 18, fontWeight: 650, marginTop: 6 }}>
              Value Framing
            </div>
            <div style={{ opacity: 0.75, marginTop: 8, lineHeight: 1.6 }}>
              Frame your price so buyers understand the value before they evaluate the cost.
            </div>
          </Link>

          <Link
            href="/dashboard/courses/digital-products/pricing-positioning/price-elasticity"
            className="lesson-card"
          >
            <div style={{ opacity: 0.65, fontSize: 12, letterSpacing: "0.16em" }}>
              LESSON 03
            </div>
            <div style={{ fontSize: 18, fontWeight: 650, marginTop: 6 }}>
              Price Elasticity
            </div>
            <div style={{ opacity: 0.75, marginTop: 8, lineHeight: 1.6 }}>
              Understand how pricing affects demand, urgency, and buyer commitment.
            </div>
          </Link>
        </div>
      </section>

      <footer style={{ marginTop: 56, opacity: 0.85 }}>
        <Link
          href="/dashboard/courses/digital-products"
          style={{ textDecoration: "none" }}
        >
          ← Back to Digital Products
        </Link>
      </footer>

      <style jsx>{`
        .lesson-card {
          display: block;
          padding: 18px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.10);
          text-decoration: none;
          color: inherit;
          background: rgba(255,255,255,0.02);
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        }

        .lesson-card:hover {
          transform: translateY(-2px);
          border-color: rgba(37,99,235,0.35);
          box-shadow: 0 14px 36px rgba(0,0,0,0.45);
        }

        .primary-btn {
          display: inline-block;
          padding: 12px 16px;
          border-radius: 12px;
          background: #2563eb;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }

        .secondary-btn {
          display: inline-block;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          color: inherit;
          text-decoration: none;
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
