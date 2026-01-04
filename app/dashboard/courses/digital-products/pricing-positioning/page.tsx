import Link from "next/link";

export default function PricingPositioningModulePage() {
  const startPath =
    "/dashboard/courses/digital-products/pricing-positioning/value-framing";

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
          <Link
            href={startPath}
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              textDecoration: "none",
              color: "inherit",
              border: "1px solid rgba(255,255,255,0.14)",
              fontWeight: 600,
            }}
          >
            Start Module
          </Link>

          <Link
            href="/dashboard/courses/digital-products"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              textDecoration: "none",
              color: "inherit",
              border: "1px solid rgba(255,255,255,0.08)",
              opacity: 0.85,
            }}
          >
            Back to Course
          </Link>
        </div>
      </header>

      <section>
        <h2 style={{ fontSize: 20, marginBottom: 14 }}>Lessons</h2>

        <div style={{ display: "grid", gap: 14 }}>
          <Link
            href="/dashboard/courses/digital-products/pricing-positioning/value-framing"
            style={{
              display: "block",
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.10)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ opacity: 0.65, fontSize: 12, letterSpacing: "0.16em" }}>
              LESSON 01
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
            style={{
              display: "block",
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.10)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ opacity: 0.65, fontSize: 12, letterSpacing: "0.16em" }}>
              LESSON 02
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
    </div>
  );
}
