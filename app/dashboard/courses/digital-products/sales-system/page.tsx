

import Link from "next/link";

export default function SalesSystemModulePage() {
  const startPath =
    "/dashboard/courses/digital-products/sales-system/pricing-positioning";

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", paddingBottom: 120 }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Module
      </div>

      <h1 style={{ fontSize: 36, marginBottom: 16 }}>
        Sales System
      </h1>

      <p style={{ fontSize: 18, lineHeight: 1.7, opacity: 0.85 }}>
        A strong offer fails without a clean sales system. This module teaches
        you how to move buyers from interest to payment without friction,
        confusion, or unnecessary persuasion.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <Link
          href={startPath}
          style={{
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.15)",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Start Module →
        </Link>

        <Link
          href="/dashboard/courses/digital-products"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.08)",
            opacity: 0.8,
            textDecoration: "none",
          }}
        >
          Back to Course
        </Link>
      </div>

      <div style={{ marginTop: 48 }}>
        <div style={{ marginBottom: 24 }}>
          <strong style={{ fontSize: 14, opacity: 0.6 }}>
            LESSONS
          </strong>
        </div>

        <div style={{ display: "grid", gap: 16 }}>
          <Link
            href="/dashboard/courses/digital-products/sales-system/pricing-positioning"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                padding: 16,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
              }}
            >
              <strong>01 · Pricing & Positioning</strong>
              <p style={{ marginTop: 6, opacity: 0.75 }}>
                Price your product to reinforce value, confidence, and market position.
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/courses/digital-products/sales-system/objection-handling"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                padding: 16,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
              }}
            >
              <strong>02 · Objection Handling</strong>
              <p style={{ marginTop: 6, opacity: 0.75 }}>
                Neutralize buyer concerns before they create friction or doubt.
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/courses/digital-products/sales-system/closing"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                padding: 16,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
              }}
            >
              <strong>03 · Closing</strong>
              <p style={{ marginTop: 6, opacity: 0.75 }}>
                Guide confident buyers to action without pressure or hesitation.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}