import Link from "next/link";

export default function OfferCreationPage() {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "48px 24px 120px" }}>
      <div style={{ opacity: 0.6, fontSize: 13, marginBottom: 12 }}>
        Digital Products · Module
      </div>

      <h1 style={{ fontSize: 36, marginBottom: 14 }}>Offer Creation</h1>

      <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85, maxWidth: 760 }}>
        This module walks you from a vague idea to a clearly positioned, sellable
        digital offer. You’ll define the problem, validate the audience, engineer
        the offer, and pressure‑test it before launch.
      </p>

      <div
        style={{
          marginTop: 40,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          padding: 28,
        }}
      >
        <Link
          href="/dashboard/courses/digital-products/offer-creation/problem-selection"
          style={{
            display: "inline-block",
            padding: "14px 22px",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: 14,
            textDecoration: "none",
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          Start Module
        </Link>

        <p style={{ opacity: 0.6, fontSize: 14, marginBottom: 28 }}>
          Start at the first lesson and progress in order.
        </p>

        <h2 style={{ fontSize: 20, marginBottom: 18 }}>Lessons</h2>

        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 14 }}>
          <li>
            <Link href="/dashboard/courses/digital-products/offer-creation/problem-selection">
              1. Problem Selection
            </Link>
          </li>
          <li>
            <Link href="/dashboard/courses/digital-products/offer-creation/offer-foundation">
              2. Offer Foundation
            </Link>
          </li>
          <li>
            <Link href="/dashboard/courses/digital-products/offer-creation/pricing-positioning">
              3. Pricing & Positioning
            </Link>
          </li>
          <li>
            <Link href="/dashboard/courses/digital-products/offer-creation/launch-readiness">
              4. Launch Readiness
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}